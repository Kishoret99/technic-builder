import {
    Routes,
    RouterModule
} from '@angular/router';
import { NgModule } from '@angular/core';

import { HomePage } from './pages/home/home.page';
import { RegisterPage } from './pages/register/register.page';

export const allComponents = [
    HomePage,
    RegisterPage
];

export const mainRouting: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomePage},
    {path: 'register', component: RegisterPage}
];

@NgModule({
    imports: [RouterModule.forRoot(mainRouting)],
    exports: [ RouterModule ]
})
export class MainRoutingModule {

}

