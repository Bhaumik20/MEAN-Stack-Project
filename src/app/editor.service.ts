import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable(//{
  //providedIn: 'root'
//}
)
export class EditorService {
  private src = new BehaviorSubject("");
  data = this.src.asObservable();
  constructor() { }

  changeData(newData:string){
    this.src.next(newData);
  }
}
