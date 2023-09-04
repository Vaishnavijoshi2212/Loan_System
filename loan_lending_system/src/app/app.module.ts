import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoantypesComponent } from './loantypes/loantypes.component';
import { FormComponent } from './form/form.component';
import { UserlistComponent } from './userlist/userlist.component';
import { DetailviewComponent } from './detailview/detailview.component';
import { EdituserComponent } from './edituser/edituser.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DatepipePipe } from './Pipe/datepipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoantypesComponent,
    FormComponent,
    UserlistComponent,
    DetailviewComponent,
    EdituserComponent,
    FooterComponent,
    HomeComponent,
    DatepipePipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
