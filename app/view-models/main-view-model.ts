import { Observable } from '@nativescript/core';

export class MainViewModel extends Observable {
    private _webViewUrl: string = 'https://www.ieu.edu.tr/kds/index.php?app-token=APPSFLDASHBOARD';
    private _isLoading: boolean = false;

    constructor() {
        super();
    }

    get webViewUrl(): string {
        return this._webViewUrl;
    }

    get isLoading(): boolean {
        return this._isLoading;
    }

    set isLoading(value: boolean) {
        if (this._isLoading !== value) {
            this._isLoading = value;
            this.notifyPropertyChange('isLoading', value);
        }
    }

    handleError(message: string) {
        // Implement error handling logic
        console.error(message);
        alert({
            title: 'Error',
            message: message,
            okButtonText: 'OK'
        });
    }
}