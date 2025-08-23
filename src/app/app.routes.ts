import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: 'home',
    title: 'App | Home',
    loadComponent: () => import('./home/pages/home/home.component'),
},{
    path: 'users',
    title: 'App | users',
    loadComponent: () => import('./user/pages/user/user.component'),
},
{
    path: 'usersQuery/:id/:name/:type',
    title: 'App | users',
    loadComponent: () => import('./user/pages/user/user.component'),
},
{
    path: '*',
    redirectTo: 'home',
}];
