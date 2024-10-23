import { ApplicationSettings } from '@nativescript/core';

export function initializeTheme() {
    const isDarkTheme = ApplicationSettings.getBoolean('isDarkTheme', false);
    applyTheme(isDarkTheme);
}

export function applyTheme(isDark: boolean) {
    ApplicationSettings.setBoolean('isDarkTheme', isDark);
    const rootView = getRootView();
    if (rootView) {
        rootView.className = isDark ? 'theme-dark' : 'theme-light';
    }
}

function getRootView() {
    return Application.getRootView();
}