import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AttorneyComponent } from './attorney/attorney.component';
import { AboutComponent } from './about/about.component';
import { PracticeComponent } from './practice/practice.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'contact', component: ContactComponent},
  {path:'attorney', component: AttorneyComponent},
  {path:'about', component: AboutComponent},
  {path:'practice', component: PracticeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
