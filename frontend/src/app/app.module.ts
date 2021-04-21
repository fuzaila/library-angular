import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { UsersigninComponent } from './usersignin/usersignin.component';
import { SignupComponent } from './signup/signup.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { BooksComponent } from './books/books.component';
import { UserdashComponent } from './userdash/userdash.component';
import { AddbookComponent } from './addbook/addbook.component';
import { RouterModule, Routes } from '@angular/router';
import { BookupdateComponent } from './bookupdate/bookupdate.component';
import { AuthorsComponent } from './authors/authors.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { AuthorupdateComponent } from './authorupdate/authorupdate.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';


export const routes: Routes = [{path: '', component: BooksComponent}]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    UserComponent,
    UsersigninComponent,
    SignupComponent,
    AdmindashComponent,
    BooksComponent,
    UserdashComponent,
    AddbookComponent,
    BookupdateComponent,
    AuthorsComponent,
    AddauthorComponent,
    AuthorupdateComponent,
    BookComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  providers: [AuthService, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
function onSameUrlNavigation(onSameUrlNavigation: any, arg1: string): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

