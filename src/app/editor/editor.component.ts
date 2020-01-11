import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { isFormattedError } from '@angular/compiler';
import { EditorService } from '../editor.service';
import { ActivatedRoute } from '@angular/router';
import $ from 'jquery';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  
  id="";
  text:any;
  options;
  constructor(private editorserv:EditorService,route:ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id');
    console.log(this.id);
   }

  ngOnInit() {
  
  if(this.id=="1"){
    this.text= "<h1>This is Heading</h1>\n"+"<p>This is paragraph</p>";
  }

  else if(this.id=="2" || this.id=="3"){
    this.text= "<h1>My First Heading</h1>\n"+"<p>My first paragraph</p>";
  }

  else if(this.id=="4"){
    this.text="<h1>This is heading 1</h1>\n<h2>This is heading 2</h2>\n<h3>This is heading 3</h3>";
  }

  else if (this.id=="5"){
    this.text="<p>This is pargarph</p>\n<p>This is another paragraph</p>";
  }

  else if(this.id=="6"){
    this.text="<a href='https://www.w3schools.com'>This is a link</a>";
  }

  else if(this.id=="7"){
    this.text="<img src='https://img.icons8.com/nolan/110/000000/reading.png' alt='StudyGuru.com' width='104' height='142'>";
  }

  else if(this.id=="8"){
    this.text="<button>Click me</button>";
  }
  else if(this.id=="9"){
    this.text="<ul>\n\t<li>Coffee</li>\n\t<li>Tea</li>\n\t<li>Milk</li>\n</ul>\n"+
    "<ol>\n\t<li>Coffee</li>\n\t<li>Tea</li>\n\t<li>Milk</li>\n</ol>";
  }
  else if(this.id=="10"){
    this.text="<h2>My First JavaScript</h2>\n"+"<button onclick='document.getElementById('demo').innerHTML=Date()>\n"+
    "Click me to display Date and Time</button>\n"+"<p id='demo'></p>";
    
    
  }
  else{
    this.text="<div></div>";
  }
  
  
  this.options= {fontSize: "16pt",
  maxLines : 1000,
  showLineNumbers: true,
  showGutter: false,
  vScrollBarAlwaysVisible: true,
  enableBasicAutocompletion: true, 
  enableLiveAutocompletion: true};
    document.getElementById('editor').focus();
  }
  
  
    
       
    onChange(code) {
     document.getElementById('out').innerHTML = code;  
    }

}
