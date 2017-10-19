import {
    Routes,
    RouterModule
} from '@angular/router';
import { NgModule } from '@angular/core';

import { HomePage } from './pages/home/home.page';

export const allComponents = [
    HomePage
];

export const mainRouting: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomePage}
];

@NgModule({
    imports: [RouterModule.forRoot(mainRouting)],
    exports: [ RouterModule ]
})
export class MainRoutingModule {

}

