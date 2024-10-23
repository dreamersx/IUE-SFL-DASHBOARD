import { Http } from '@nativescript/core';

export async function sendFeedback(data: any) {
    try {
        const response = await Http.request({
            url: 'https://homes.izmirekonomi.edu.tr/sflweb/api/api.php',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            content: JSON.stringify(data)
        });

        return response.content.toJSON();
    } catch (error) {
        throw new Error('Failed to send feedback: ' + error.message);
    }
}