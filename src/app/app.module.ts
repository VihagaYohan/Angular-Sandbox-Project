import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// components
import { UserComponent } from './Component/user/user.component';
import { UsersComponent } from './Component/users/users.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { PostsComponent } from './Component/posts/posts.component';

// services
import { UserService } from './Services/user.service';
import { PostService } from './Services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    NavbarComponent,
    PostsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [UserService, PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
