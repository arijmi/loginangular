import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const router: Routes = [
    {
        path:'', redirectTo:'login',pathMatch:'full'
    },
    {
        path:"Login",
        component:LoginComponent

    },
    { path:"Layout",
      component:LayoutComponent,

      
    },
    {
    path:"Dashboard",
    component:DashboardComponent
    },

    

];

