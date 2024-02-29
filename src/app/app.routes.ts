import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { authGuard } from './core/guards/auth.guard';
import { LoginComponent } from './features/login/login/login.component';
import { RegisterComponent } from './features/login/register/register.component';
import { ClientsComponent } from './features/clients/clients.component';

export const routes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "", component: HomeComponent, canActivate: [authGuard],
        children: [
            {path:"clients", component:ClientsComponent, canActivate:[authGuard]}
        ]
},
    {path:"", redirectTo:"login", pathMatch:"full"}
];
