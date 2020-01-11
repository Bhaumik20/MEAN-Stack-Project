import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['../user/user.component.css']
})
export class UserProfileComponent implements OnInit {
  userDetails;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        if(this.userDetails.role=='admin'){
          this.userService.change(true);
          console.log(this.userService.isAdmin);
        }
      },
      err => { 
        console.log(err);
        
      }
    );
    console.log(this.userService.isAdmin);
    
  }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/home']);
    this.userService.change(false);
  }

}
