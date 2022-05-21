import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { SigninPageComponent } from './signin-page/signin-page.component';

const routes: Routes = [
  { path: '/register', component: RegisterPageComponent },
  { path: '/login', component: SigninPageComponent },
  { path: '/home', component: HomepageComponent },
  { path: '/', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
