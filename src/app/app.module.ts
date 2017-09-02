import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import { DataService } from './services/data.service';
import { PostComponent } from './components/post/post.component';

const appRoutes: Routes = [
  { path: '', component: UserComponent },
  { path: 'about', component: AboutComponent },
  { path: 'posts', component: PostComponent }
];

@NgModule({
  // Components
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    PostComponent
  ],
  // Modules
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  // Services
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
