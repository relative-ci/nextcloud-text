import { initUserAndFiles, randUser } from '../../utils/index.js'

const user = randUser()
const fileName = 'empty.md'

describe('test link marks', function() {
	before(function() {
		initUserAndFiles(user)
	})

	beforeEach(function() {
		cy.login(user)
		cy.isolateTest({
			sourceFile: fileName,
			onBeforeLoad(win) {
				cy.stub(win, 'open')
					.as('winOpen')
			},
		})
		cy.openFile(fileName, { force: true })
	})

	describe('link bubble', function() {
		it('shows a link preview in the bubble after clicking link', () => {
			const link = 'https://nextcloud.com/'
			cy.getContent()
				.type(`${link}{enter}`)

			cy.getContent()
				.find(`a[href*="${link}"]`)
				.click()

			cy.get('.link-view-bubble .widget-default', { timeout: 10000 })
				.find('.widget-default--name')
				.contains('Nextcloud')
				.click({ force: true })
		})

		it('shows a link preview in the bubble after browsing to link', () => {
			const link = 'https://nextcloud.com/'
			cy.getContent()
				.type(`${link}{enter}`)
			cy.getContent()
				.type('{upArrow}')

			cy.getContent()
				.find(`a[href*="${link}"]`)

			cy.get('.link-view-bubble .widget-default', { timeout: 10000 })
				.find('.widget-default--name')
				.contains('Nextcloud')
		})

		it('allows to edit a link in the bubble', () => {
			cy.getContent()
				.type('https://example.org{enter}')
			cy.getContent()
				.type('{upArrow}{rightArrow}')

			cy.get('.link-view-bubble button[title="Edit link"]')
				.click()

			cy.get('.link-view-bubble input')
				.type('{selectAll}https://nextcloud.com')

			cy.get('.link-view-bubble button[title="Save changes"]')
				.click()

			cy.getContent()
				.find('a[href*="https://nextcloud.com"]')

		})

		it('allows to remove a link in the bubble', () => {
			const link = 'https://nextcloud.com'
			cy.getContent()
				.type(`${link}{enter}`)
			cy.getContent()
				.type('{upArrow}{rightArrow}')

			cy.get('.link-view-bubble button[title="Remove link"]')
				.click()

			cy.getContent()
				.find(`a[href*="${link}"]`)
				.should('not.exist')

		})

		it('Ctrl-click on a link opens a new tab', () => {
			const link = 'https://nextcloud.com/'
			cy.getContent()
				.type(`${link}{enter}`)

			cy.getContent()
				.find(`a[href*="${link}"]`)
				.click({ ctrlKey: true })

			cy.get('@winOpen')
				.should('have.been.calledOnce')
				.should('have.been.calledWith', link)
		})
	})

	describe('autolink', function() {
		it('with protocol to files app and fileId', () => {
			cy.getFile(fileName)
				.then($el => {
					const id = $el.data('cyFilesListRowFileid')

					const link = `${Cypress.env('baseUrl')}/apps/files/?dir=/&openfile=${id}#relPath=/${fileName}`
					cy.clearContent()
					cy.getContent()
						.type(`${link}{enter}`)

					cy.getContent()
						.find(`a[href*="${Cypress.env('baseUrl')}"]`)
				})
		})

		it('without protocol', () => {
			cy.clearContent()
			cy.getContent()
				.type('google.com{enter}')
			cy.getContent()
				.find('a[href*="google.com"]')
				.should('not.exist')
		})

		it('with protocol but without space', () => {
			cy.getContent()
				.type('https://nextcloud.com')

			cy.getContent()
				.find('a[href*="nextcloud.com"]')
				.should('not.exist')
		})
	})

	describe('link menu', function() {
		beforeEach(() => cy.clearContent())
		const text = 'some text'

		describe('link to website', function() {
			const url = 'https://nextcloud.com/'
			// Helper to reduce duplicated code, checking inserting with and without selected text
			const checkLinkWebsite = (url, text) => {
				cy.getSubmenuEntry('insert-link', 'insert-link-website').click()
				cy.getActionSubEntry('insert-link-input').find('input[type="text"]').type(`${url}{enter}`)
				cy.getContent()
					.get(`a[href*="${url}"]`)
					.should('have.text', text) // ensure correct text used
					.click({ force: true })
			}

			beforeEach(cy.clearContent)
			it('Link website without selection', () => {
				cy.getFile(fileName)
					.then($el => {
						checkLinkWebsite(url, url)
					})
			})

			it('Link website with selection', () => {
				cy.getFile(fileName)
					.then($el => {
						cy.getContent().type(`${text}{selectAll}`)
						checkLinkWebsite(url, text)
					})
			})
		})

		describe('link to local file', function() {
			// Helper to reduce duplicated code, checking inserting with and without selected text
			const checkLinkFile = (filename, text, isFolder = false) => {
				cy.getSubmenuEntry('insert-link', 'insert-link-file').click()
				cy.get('.file-picker').within(() => {
					cy.get(`[data-testid="file-list-row"][data-filename="${filename}"]`).click()
					cy.get(isFolder ? '.empty-content__name' : '.file-picker__files')
					cy.contains('button', isFolder ? 'Choose' : `Choose ${filename}`).click()
				})

				return cy.getContent()
					.find(`a[href*="${encodeURIComponent(filename)}"]`)
					.should('have.text', text === undefined ? filename : text)
			}

			beforeEach(() => cy.clearContent())

			it('without text', () => {
				cy.getFile(fileName)
					.then($el => {
						checkLinkFile(fileName)
						cy.get('.modal-name').should('include.text', fileName)
					})
			})
			it('with selected text', () => {
				cy.getFile(fileName)
					.then($el => {
						cy.getContent().type(`${text}{selectAll}`)
						checkLinkFile(fileName, text)
						cy.get('.modal-name').should('include.text', fileName)
					})
			})
			it('link to directory', () => {
				cy.createFolder(`${window.__currentDirectory}/dummy folder`)
				cy.getFile(fileName).then($el => {
					cy.getContent().type(`${text}{selectAll}`)
					checkLinkFile('dummy folder', text, true)
				})
			})
		})
	})
})
