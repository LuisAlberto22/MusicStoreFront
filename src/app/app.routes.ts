import { Routes } from '@angular/router';

export const routes: Routes = [

    //lazy load
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then((component) => component.HomeComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('./login/login.component').then((component) => component.LoginComponent)
    },
    {
        path: 'register',
        loadComponent: () => import('./register/register.component').then((component) => component.RegisterComponent)
    },
    /*
    {
        path: 'register',
        component: RegisterComponent
    },
    */
    //redirects
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
];
