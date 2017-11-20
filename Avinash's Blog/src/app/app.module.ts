import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyBlogsComponent } from './home/my-blogs.component';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BlogserviceService } from './blogservice.service';
import { NewBlogPostComponent } from './newblog/new-blog-post.component';
import { FilterBlogsComponent } from './filter/filter-blogs.component';
import { FavouriteBlogsComponent } from './starred/favourite-blogs.component';
import { EditBlogComponent } from './edit/edit-blog.component';
import { UserSectionComponent } from './user/user-section.component';

const appRoutes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path: "home",component:MyBlogsComponent},
  {path: "new",component:NewBlogPostComponent},
  {path: "filter", component:FilterBlogsComponent},
  {path: "fav", component:FavouriteBlogsComponent},
  {path: "user", component:UserSectionComponent},
  {path: "edit", component:EditBlogComponent, data:{id:'0'}},
  {path: "**", redirectTo: "/home"}
]

@NgModule({
  declarations: [
    AppComponent,
    MyBlogsComponent,
    NewBlogPostComponent,
    FilterBlogsComponent,
    FavouriteBlogsComponent,
    EditBlogComponent,
    UserSectionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BlogserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
