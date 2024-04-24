import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MembersComponent } from './pages/members/members.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'members', component: MembersComponent},
    { path: 'home', component: HomeComponent}
];
