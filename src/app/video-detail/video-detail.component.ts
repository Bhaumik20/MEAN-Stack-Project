import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
import { UserService } from '../user.service';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  inputs:['video']
})
export class VideoDetailComponent implements OnInit {

  admin:boolean;
  editTitle:boolean = false;
  constructor(private videoserv:VideoService,private userserv:UserService) {
    userserv.isAdmin.subscribe(data=>this.admin=data);
   }

  ngOnInit() {
  }

  ngOnChanges(){
    this.editTitle=false;
  }

  onTitleClick(){
    this.editTitle=true;
  }

  update(video){
    console.log(video._id);
    this.videoserv.update(video).subscribe(data=>data);
  }

  delete(video){
    this.videoserv.delete(video).subscribe(data=>data);

  }

}
