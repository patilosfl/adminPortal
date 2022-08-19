import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizeRegistrationComponent } from '../app/authorize-registration/authorize-registration.component'

const routes: Routes = [
  { path: 'register', component: AuthorizeRegistrationComponent },
  { path: '*', component: AuthorizeRegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
