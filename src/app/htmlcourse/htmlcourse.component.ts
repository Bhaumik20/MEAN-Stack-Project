import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import * as jspdf from 'jspdf/dist/jspdf.debug.js';
import html2canvas from 'html2canvas';
import { EditorService } from '../editor.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-htmlcourse',
  templateUrl: './htmlcourse.component.html',
  styleUrls: ['./htmlcourse.component.css', '../sidenav/sidenav.component.css']
})
export class HtmlcourseComponent implements OnInit {
  id = "home";

  course = true;
  str: string;
  constructor(private route: ActivatedRoute, private router: Router, private editorserv: EditorService, private userserv: UserService) {
    router.events.subscribe(
      (ev) => {
        if (ev instanceof NavigationEnd) {
          this.id = this.route.snapshot.paramMap.get('id');
          console.log(this.id);
          window.scroll(0, 0);
          var link = document.getElementById('path');
          link.hidden = true;
        }
      }
    )


  }

  ngOnInit() {

  }

  edit(id) {

  }

  download() {
    if (!this.userserv.isLoggedIn()) {
      alert("Login to download");
    }
    /*var doc = new jspdf();
        var elementHTML = document.getElementById(this.id);
        var specialElementHandlers = {
            '#elementH': function (element, renderer) {
                return true;
            }
        };
        doc.fromHTML(elementHTML, 15, 15, {
            'width': 170,
            'elementHandlers': specialElementHandlers
        });
        doc.save('sample-document.pdf');*/
    else {


      var file = this.id + ".pdf";
      console.log(file);
      var link = document.getElementById('path');

      link.setAttribute("href", "../../assets/pdf/html/" + file);
      link.setAttribute("download", file);
      console.log(link)
      link.hidden = false;
    }
  }



}
