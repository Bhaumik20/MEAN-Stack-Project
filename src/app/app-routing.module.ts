import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditorComponent } from './editor/editor.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserProfileComponent } from './userprofile/userprofile.component';
import { AuthGuard } from './auth/auth.guard';
import { VideoCenterComponent } from './video-center/video-center.component';
import { AdminComponent } from './admin/admin.component';
import { HtmlcourseComponent } from './htmlcourse/htmlcourse.component';
import { JscourseComponent } from './jscourse/jscourse.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'editor/:id', component: EditorComponent },
  {path:'video',component:VideoCenterComponent},
  {path:'admin',component:AdminComponent},
  {path:'htmlcourse/:id',component:HtmlcourseComponent},
  {path:'jscourse/:id',component:JscourseComponent},
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
  },
  {
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SignInComponent }]
  },
  {path:'userprofile',component:UserProfileComponent,canActivate:[AuthGuard]},
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
