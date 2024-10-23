import { EventData, Page, WebView } from '@nativescript/core';
import { MainViewModel } from '../view-models/main-view-model';

let page: Page;
let viewModel: MainViewModel;

export function onNavigatingTo(args: EventData) {
    page = <Page>args.object;
    viewModel = new MainViewModel();
    page.bindingContext = viewModel;
}

export function onDrawerButtonTap() {
    const drawerComponent = page.getViewById('drawer');
    drawerComponent.toggleDrawerState();
}

export function onLoadStarted(args) {
    viewModel.isLoading = true;
}

export function onLoadFinished(args) {
    viewModel.isLoading = false;
}

export function onLoadError(args) {
    viewModel.handleError('Failed to load webpage');
}