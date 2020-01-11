import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  videos=[];
  flag=false;
  admin:boolean;

  selectedVideo:Video={
    _id:"",
    title:'',
    url:'',
    description:''

  };
  constructor(private videoserv:VideoService,private userserv:UserService,private router:Router) {
    userserv.isAdmin.subscribe(data=>this.admin=data);
   }

  ngOnInit() {
    if(!this.userserv.isLoggedIn()){
      alert("Log in to access tutorials");
      this.router.navigateByUrl("/login");
    }
    this.videoserv.getVideos().subscribe(data=>this.videos=data);
    console.log(this.admin);
  }

  onSelectVideo(video:any){
    this.selectedVideo = video;
    console.log(this.selectedVideo);
  }

  add(form){
    this.flag=false;
    console.log(form.values);
    this.videoserv.addVideo(this.selectedVideo).subscribe(data=>this.videos.push(data));
  }
}
