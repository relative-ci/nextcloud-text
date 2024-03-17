import { VueRenderer } from '@tiptap/vue-2'
import tippy from 'tippy.js'
import debounce from 'debounce'
import { domHref } from '../helpers/links.js'
import LinkBubbleView from '../components/Link/LinkBubbleView.vue'

import { getViewerVue } from '../ViewerVue.js'

class LinkBubblePluginView {

	#component = null

	constructor({ view, options, plugin }) {
		this.options = options
		this.view = view
		this.plugin = plugin

		// When editor is used in Viewer component, it should render comopnent using Viewer's Vue constructor,
		// Otherwise there are VNodes with different Vue constructors in a single Virtual DOM which is not fully supported by Vue
		const ViewerVue = getViewerVue()
		const LinkBubbleViewConstructor = ViewerVue ? ViewerVue.extend(LinkBubbleView) : LinkBubbleView
		this.#component = new VueRenderer(LinkBubbleViewConstructor, {
			parent: this.options.parent,
			propsData: {
				editor: this.options.editor,
				href: null,
			},
		})

		this.view.dom.addEventListener('dragstart', this.dragOrScrollHandler)
		document.addEventListener('scroll', this.dragOrScrollHandler, { capture: true })
	}

	dragOrScrollHandler = (event) => {
		// Cypress fires unexpected scroll events, which breaks testing the link bubble
		if (window.Cypress) {
			return
		}
		this.hide()
	}

	keydownHandler = (event) => {
		if (event.key === 'Escape') {
			event.preventDefault()
			this.hide()
		}
	}

	createTooltip() {
		const editorElement = this.options.editor.options.element
		const editorIsAttached = !!editorElement.parentElement

		if (this.tippy || !editorIsAttached) {
			return
		}

		this.tippy = tippy(editorElement, {
			duration: 100,
			getReferenceClientRect: null,
			content: this.#component.element,
			interactive: true,
			trigger: 'manual',
			placement: 'bottom',
			hideOnClick: 'toggle',
			popperOptions: {
				strategy: 'fixed',
			},
		})
	}

	update(view, oldState) {
		const clicked = this.linkClicked(view, oldState)
		if (clicked) {
			this.updateFromClick(view, clicked)
		} else if (this.selectionUpdated(view, oldState)) {
			this.updateFromSelection(view)
		}
	}

	linkClicked(view, oldState) {
		const { clicked } = this.plugin.getState(view.state)
		const { clicked: oldClicked } = this.plugin.getState(oldState)
		if (clicked !== oldClicked) {
			return clicked
		}
	}

	selectionUpdated(view, oldState) {
		if (view.composing) {
			return false
		}
		const selectionChanged = !oldState?.selection.eq(view.state.selection)
		const docChanged = !oldState?.doc.eq(view.state.doc)
		return selectionChanged || docChanged

	}

	updateFromSelection = debounce((view) => {
		// Don't update directly after updateFromClick. Prevents race condition in read-only documents in Chrome.

		const { state } = view
		const { selection } = state

		// support for CellSelections
		const { ranges } = selection
		const from = Math.min(...ranges.map(range => range.$from.pos))

		const resolved = view.state.doc.resolve(from)
		const nodeStart = resolved.pos - resolved.textOffset
		const linkNode = this.linkNodeFromSelection(view)

		const hasBubbleFocus = this.#component.element.contains(document.activeElement)
		const hasEditorFocus = view.hasFocus() || hasBubbleFocus

		const shouldShow = !!linkNode && hasEditorFocus

		this.updateTooltip(view, shouldShow, linkNode?.marks, nodeStart)
	}, 250)

	updateFromClick(view, clicked) {
		const marks = clicked?.resolved.marks()
		this.updateTooltip(this.view, !!marks, marks, clicked.nodeStart)
	}

	updateTooltip(view, shouldShow, marks, nodeStart) {
		this.createTooltip()

		if (!shouldShow) {
			this.hide()
			return
		}

		let referenceEl = view.nodeDOM(nodeStart)
		if (Object.prototype.toString.call(referenceEl) === '[object Text]') {
			referenceEl = referenceEl.parentElement
		}
		const clientRect = referenceEl?.getBoundingClientRect()

		this.#component.updateProps({
			href: domHref(marks.find(m => m.type.name === 'link')),
		})

		this.tippy?.setProps({
			getReferenceClientRect: () => clientRect,
		})

		this.show()
	}

	show() {
		this.tippy?.show()
		this.view.dom.addEventListener('keydown', this.keydownHandler)
	}

	hide() {
		this.view.dom.removeEventListener('keydown', this.keydownHandler)
		setTimeout(() => {
			this.tippy?.hide()
		}, 100)
	}

	destroy() {
		this.tippy?.destroy()
		this.view.dom.removeEventListener('dragstart', this.dragOrScrollHandler)
		document.removeEventListener('scroll', this.dragOrScrollHandler, { capture: true })
	}

	linkNodeFromSelection(view) {
		const { state } = view
		const { selection } = state

		// support for CellSelections
		const { ranges } = selection
		const from = Math.min(...ranges.map(range => range.$from.pos))
		const to = Math.max(...ranges.map(range => range.$to.pos))

		const resolved = view.state.doc.resolve(from)

		// ignore links in previews
		if (resolved.parent.type.name === 'preview') {
			return false
		}

		const node = resolved.parent.maybeChild(resolved.index())
		const nodeStart = resolved.pos - resolved.textOffset
		const nodeEnd = nodeStart + node?.nodeSize

		if (to > nodeEnd) {
			// Selection spans further than one text node
			return
		}

		return this.isLinkNode(node) ? node : null
	}

	isLinkNode(node) {
		const linkMark = node?.marks.find(m => m.type.name === 'link')
		if (!linkMark) {
			return false
		}

		// Don't open link bubble for anchor links
		if (linkMark.attrs.href.startsWith('#')) {
			return false
		}

		return true
	}

}

export default LinkBubblePluginView
