import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [



    {
        path: '',
        redirectTo:'home',
        pathMatch: 'full'
    },
    {
       path: 'home',
       component:HomeComponent 
    },
    {
       path: 'about',
       loadComponent:()=> import('../app/about/about.component').then(c => c.AboutComponent),
    },
    {
       path: 'service',
       loadComponent:()=> import('../app/service/service.component').then(c => c.ServiceComponent),
    },
    {
       path: 'project',
      //  component:ProjectComponent 
       loadComponent:()=> import('../app/project/project.component').then(c => c.ProjectComponent),
    },
    {
       path: 'contact',
      //  component:ContactComponent 
       loadComponent:()=> import('../app/contact/contact.component').then(c => c.ContactComponent),
    },
];
