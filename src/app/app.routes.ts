import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: 'home',
    title: 'App | Home',
    loadComponent: () => import('./home/pages/home/home.component'),
}];
