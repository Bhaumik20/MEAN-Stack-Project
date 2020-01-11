import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

declare var particlesJS: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  constructor() {
    
  }

  

  ngOnInit() {
    console.log("Init");
    particlesJS('particles-js','/assets/data/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }

}
