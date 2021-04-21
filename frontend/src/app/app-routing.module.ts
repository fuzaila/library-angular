import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { UsersigninComponent } from './usersignin/usersignin.component';
import { SignupComponent } from './signup/signup.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { AddbookComponent } from './addbook/addbook.component';
import { BookupdateComponent } from './bookupdate/bookupdate.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorComponent } from './author/author.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { AuthorupdateComponent } from './authorupdate/authorupdate.component';
import { UserdashComponent } from './userdash/userdash.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:"", component: HomeComponent },
  {path:"admin", component: AdminComponent},
  {path: "user", component: UserComponent, 
    children: [{path: "usersignin", component: UsersigninComponent}, 
              {path: "signup", component: SignupComponent}] },
  {path: "admindash", component: AdmindashComponent, canActivate: [AuthGuard],
    children: [{path: "books", component: BooksComponent, children:[{path: ":_id", component: BookupdateComponent}]},
               {path: "authors", component: AuthorsComponent, children:[{path: ":_id", component: AuthorupdateComponent}]}, 
               {path: "addbook", component: AddbookComponent},
               {path: "addauthor", component: AddauthorComponent}] },
  {path:"userdash/:_id", component: UserdashComponent, canActivate: [AuthGuard],
    children: [{path: "books", component: BooksComponent, children: [{path: ":_id", component: BookComponent}]},
               {path: "authors", component: AuthorsComponent, children: [{path: ":_id", component: AuthorComponent}]}
              ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
