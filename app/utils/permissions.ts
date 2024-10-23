import { Application, AndroidApplication, Utils } from '@nativescript/core';
import { requestPermissions as requestPushPermissions } from '@nativescript/push-notifications';

export async function requestPermissions() {
    if (Application.android) {
        const permissions = [
            android.Manifest.permission.INTERNET,
            android.Manifest.permission.POST_NOTIFICATIONS
        ];

        await Utils.android.requestPermissions(permissions);
    }

    // Request push notification permissions
    try {
        await requestPushPermissions();
    } catch (error) {
        console.error('Failed to request push notification permissions:', error);
    }
}