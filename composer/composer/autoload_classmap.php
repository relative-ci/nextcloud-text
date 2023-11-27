<?php

// autoload_classmap.php @generated by Composer

$vendorDir = dirname(__DIR__);
$baseDir = $vendorDir;

return array(
    'Composer\\InstalledVersions' => $vendorDir . '/composer/InstalledVersions.php',
    'OCA\\Text\\AppInfo\\Application' => $baseDir . '/../lib/AppInfo/Application.php',
    'OCA\\Text\\Command\\ResetDocument' => $baseDir . '/../lib/Command/ResetDocument.php',
    'OCA\\Text\\Controller\\AttachmentController' => $baseDir . '/../lib/Controller/AttachmentController.php',
    'OCA\\Text\\Controller\\ISessionAwareController' => $baseDir . '/../lib/Controller/ISessionAwareController.php',
    'OCA\\Text\\Controller\\NavigationController' => $baseDir . '/../lib/Controller/NavigationController.php',
    'OCA\\Text\\Controller\\PublicSessionController' => $baseDir . '/../lib/Controller/PublicSessionController.php',
    'OCA\\Text\\Controller\\SessionController' => $baseDir . '/../lib/Controller/SessionController.php',
    'OCA\\Text\\Controller\\SettingsController' => $baseDir . '/../lib/Controller/SettingsController.php',
    'OCA\\Text\\Controller\\TSessionAwareController' => $baseDir . '/../lib/Controller/TSessionAwareController.php',
    'OCA\\Text\\Controller\\UserApiController' => $baseDir . '/../lib/Controller/UserApiController.php',
    'OCA\\Text\\Controller\\WorkspaceController' => $baseDir . '/../lib/Controller/WorkspaceController.php',
    'OCA\\Text\\Cron\\Cleanup' => $baseDir . '/../lib/Cron/Cleanup.php',
    'OCA\\Text\\DAV\\WorkspacePlugin' => $baseDir . '/../lib/DAV/WorkspacePlugin.php',
    'OCA\\Text\\Db\\Document' => $baseDir . '/../lib/Db/Document.php',
    'OCA\\Text\\Db\\DocumentMapper' => $baseDir . '/../lib/Db/DocumentMapper.php',
    'OCA\\Text\\Db\\Session' => $baseDir . '/../lib/Db/Session.php',
    'OCA\\Text\\Db\\SessionMapper' => $baseDir . '/../lib/Db/SessionMapper.php',
    'OCA\\Text\\Db\\Step' => $baseDir . '/../lib/Db/Step.php',
    'OCA\\Text\\Db\\StepMapper' => $baseDir . '/../lib/Db/StepMapper.php',
    'OCA\\Text\\DirectEditing\\TextDirectEditor' => $baseDir . '/../lib/DirectEditing/TextDirectEditor.php',
    'OCA\\Text\\DirectEditing\\TextDocumentCreator' => $baseDir . '/../lib/DirectEditing/TextDocumentCreator.php',
    'OCA\\Text\\Event\\LoadEditor' => $baseDir . '/../lib/Event/LoadEditor.php',
    'OCA\\Text\\Exception\\DocumentHasUnsavedChangesException' => $baseDir . '/../lib/Exception/DocumentHasUnsavedChangesException.php',
    'OCA\\Text\\Exception\\DocumentSaveConflictException' => $baseDir . '/../lib/Exception/DocumentSaveConflictException.php',
    'OCA\\Text\\Exception\\InvalidSessionException' => $baseDir . '/../lib/Exception/InvalidSessionException.php',
    'OCA\\Text\\Exception\\UploadException' => $baseDir . '/../lib/Exception/UploadException.php',
    'OCA\\Text\\Exception\\VersionMismatchException' => $baseDir . '/../lib/Exception/VersionMismatchException.php',
    'OCA\\Text\\Listeners\\AddMissingIndicesListener' => $baseDir . '/../lib/Listeners/AddMissingIndicesListener.php',
    'OCA\\Text\\Listeners\\BeforeAssistantNotificationListener' => $baseDir . '/../lib/Listeners/BeforeAssistantNotificationListener.php',
    'OCA\\Text\\Listeners\\BeforeNodeDeletedListener' => $baseDir . '/../lib/Listeners/BeforeNodeDeletedListener.php',
    'OCA\\Text\\Listeners\\BeforeNodeRenamedListener' => $baseDir . '/../lib/Listeners/BeforeNodeRenamedListener.php',
    'OCA\\Text\\Listeners\\FilesLoadAdditionalScriptsListener' => $baseDir . '/../lib/Listeners/FilesLoadAdditionalScriptsListener.php',
    'OCA\\Text\\Listeners\\FilesSharingLoadAdditionalScriptsListener' => $baseDir . '/../lib/Listeners/FilesSharingLoadAdditionalScriptsListener.php',
    'OCA\\Text\\Listeners\\LoadEditorListener' => $baseDir . '/../lib/Listeners/LoadEditorListener.php',
    'OCA\\Text\\Listeners\\LoadViewerListener' => $baseDir . '/../lib/Listeners/LoadViewerListener.php',
    'OCA\\Text\\Listeners\\NodeCopiedListener' => $baseDir . '/../lib/Listeners/NodeCopiedListener.php',
    'OCA\\Text\\Listeners\\RegisterDirectEditorEventListener' => $baseDir . '/../lib/Listeners/RegisterDirectEditorEventListener.php',
    'OCA\\Text\\Middleware\\Attribute\\RequireDocumentSession' => $baseDir . '/../lib/Middleware/Attribute/RequireDocumentSession.php',
    'OCA\\Text\\Middleware\\Attribute\\RequireDocumentSessionUserOrShareToken' => $baseDir . '/../lib/Middleware/Attribute/RequireDocumentSessionUserOrShareToken.php',
    'OCA\\Text\\Middleware\\SessionMiddleware' => $baseDir . '/../lib/Middleware/SessionMiddleware.php',
    'OCA\\Text\\Migration\\ResetSessionsBeforeYjs' => $baseDir . '/../lib/Migration/ResetSessionsBeforeYjs.php',
    'OCA\\Text\\Migration\\Version010000Date20190617184535' => $baseDir . '/../lib/Migration/Version010000Date20190617184535.php',
    'OCA\\Text\\Migration\\Version030001Date20200402075029' => $baseDir . '/../lib/Migration/Version030001Date20200402075029.php',
    'OCA\\Text\\Migration\\Version030201Date20201116110353' => $baseDir . '/../lib/Migration/Version030201Date20201116110353.php',
    'OCA\\Text\\Migration\\Version030201Date20201116123153' => $baseDir . '/../lib/Migration/Version030201Date20201116123153.php',
    'OCA\\Text\\Migration\\Version030501Date20220202101853' => $baseDir . '/../lib/Migration/Version030501Date20220202101853.php',
    'OCA\\Text\\Migration\\Version030701Date20230207131313' => $baseDir . '/../lib/Migration/Version030701Date20230207131313.php',
    'OCA\\Text\\Migration\\Version030901Date20231114150437' => $baseDir . '/../lib/Migration/Version030901Date20231114150437.php',
    'OCA\\Text\\Notification\\Notifier' => $baseDir . '/../lib/Notification/Notifier.php',
    'OCA\\Text\\Service\\ApiService' => $baseDir . '/../lib/Service/ApiService.php',
    'OCA\\Text\\Service\\AttachmentService' => $baseDir . '/../lib/Service/AttachmentService.php',
    'OCA\\Text\\Service\\ConfigService' => $baseDir . '/../lib/Service/ConfigService.php',
    'OCA\\Text\\Service\\DocumentService' => $baseDir . '/../lib/Service/DocumentService.php',
    'OCA\\Text\\Service\\EncodingService' => $baseDir . '/../lib/Service/EncodingService.php',
    'OCA\\Text\\Service\\InitialStateProvider' => $baseDir . '/../lib/Service/InitialStateProvider.php',
    'OCA\\Text\\Service\\NotificationService' => $baseDir . '/../lib/Service/NotificationService.php',
    'OCA\\Text\\Service\\SessionService' => $baseDir . '/../lib/Service/SessionService.php',
    'OCA\\Text\\Service\\WorkspaceService' => $baseDir . '/../lib/Service/WorkspaceService.php',
    'OCA\\Text\\TextFile' => $baseDir . '/../lib/TextFile.php',
    'OCA\\Text\\YjsMessage' => $baseDir . '/../lib/YjsMessage.php',
);
