import { Application } from '@nativescript/core';
import { initializeTheme } from './utils/theme';
import { requestPermissions } from './utils/permissions';

Application.on(Application.launchEvent, () => {
    initializeTheme();
    requestPermissions();
});

Application.run({ moduleName: 'app-root' });