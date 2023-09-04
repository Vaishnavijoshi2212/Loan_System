import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailviewComponent } from './detailview/detailview.component';
import { EdituserComponent } from './edituser/edituser.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { LoantypesComponent } from './loantypes/loantypes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'loantypes', component: LoantypesComponent },
  { path: 'form', component: FormComponent },
  { path: 'userlist', component: UserlistComponent },
  { path: 'detailview/:id', component: DetailviewComponent },
  { path: 'edituser/:id', component: EdituserComponent },
  { path: 'footer', component: FooterComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
