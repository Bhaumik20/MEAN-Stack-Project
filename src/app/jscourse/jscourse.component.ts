import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-jscourse',
  templateUrl: './jscourse.component.html',
  styleUrls: ['../htmlcourse/htmlcourse.component.css','../sidenav/sidenav.component.css']
})
export class JscourseComponent implements OnInit {
  course=false;
  id="home";
  constructor(private route: ActivatedRoute, private router: Router,private userserv:UserService) {
    router.events.subscribe(
      (ev) => {
        if (ev instanceof NavigationEnd) {
          this.id = this.route.snapshot.paramMap.get('id');
          console.log(this.id);
          window.scroll(0,0);
          var link = document.getElementById('path');
          link.hidden =true;
        }
      }
    )
    

  }
  
  ngOnInit() {
  }

  download() {
        if(this.userserv.isLoggedIn()){

        
        var file = this.id + ".pdf";
        console.log(file);
        var link = document.getElementById('path');
        
        link.setAttribute("href","../../assets/pdf/js/"+file);
        link.setAttribute("download",file);
        console.log(link)
        link.hidden =false;
        }
        else{
          alert("Login to download");
        }
  }


}
