import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EditorComponent } from './editor/editor.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import {AceEditorModule} from 'ng2-ace-editor';
import {UserService} from './user.service';
import { from } from 'rxjs';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserProfileComponent } from './userprofile/userprofile.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.inerceptor';
import { VideoCenterComponent } from './video-center/video-center.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { VideoService } from './video.service';
import { SafePipe } from './safe.pipe';
import { AdminComponent } from './admin/admin.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HtmlcourseComponent } from './htmlcourse/htmlcourse.component';
import { EditorService } from './editor.service';
import { JscourseComponent } from './jscourse/jscourse.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EditorComponent,
    HomeComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent,
    UserProfileComponent,
    VideoCenterComponent,
    VideoListComponent,
    VideoDetailComponent,
    SafePipe,
    AdminComponent,
    SidenavComponent,
    HtmlcourseComponent,
    JscourseComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AceEditorModule,
    FormsModule,
    HttpClientModule,
    
  
  ],
 
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },UserService,AuthGuard,AuthInterceptor,VideoService,EditorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
