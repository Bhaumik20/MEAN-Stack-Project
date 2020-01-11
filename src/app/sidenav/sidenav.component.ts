import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css','../htmlcourse/htmlcourse.component.css'],
  inputs:['select']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
        $('.sidebar').toggleClass('active2');
        
      });
    });
    $(document).ready(function () {
      $('#sidebarCollapse2').on('click', function () {
        $('.sidebar').toggleClass('active2');
      });
    });
  }

}
