import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['../user/user.component.css']
})
export class AdminComponent implements OnInit {
  admin:boolean=false;
  newUser:User={
    fullName:'',
    email:'',
    password:'',
    role:''
  };
  flag=false;
  flag2=false;
  users:User[]=[];
  constructor(private userserv:UserService,private router:Router) { }

  ngOnInit() {
    this.userserv.isAdmin.subscribe(data=>this.admin=data)
    if(!this.admin){
      this.router.navigateByUrl('/login');
    }
    else{
      this.userserv.getUsers().subscribe(data=>this.users=data);
    }
  }

  add(){
    this.users.push(this.newUser);
    this.userserv.postUser(this.newUser).subscribe(data=>data);
    this.flag=false;
    
  }

  delete(user){
    //console.log(user);
    this.userserv.deleteUser(user).subscribe(data=>data);
  }

  update(){
    this.flag2=false;
    this.userserv.updateUser(this.newUser).subscribe(data=>data);
  }

  confirm(user){
    var retVal = confirm("Do you want to delete "+user.fullName+" ?");
    if(retVal){
      this.delete(user)
    }
  }

}
