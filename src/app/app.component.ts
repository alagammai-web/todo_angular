import { Component, OnInit, Inject } from '@angular/core';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'Todo Application in Angular';
  tasklist: string[] = [];
  searchtask: string;
 constructor(@Inject(LOCAL_STORAGE) private localStorage: any) {}

  

  ngOnInit(): void {
    this.tasklist = JSON.parse(this.localStorage.getItem('taskvalue'));
  }

  addtodo(d: string){
    this.tasklist.unshift(d);
    this.localStorage.setItem('taskvalue', JSON.stringify(this.tasklist));
  }

  deletetodo(i: number){
    this.tasklist.splice(i, 1);
    this.localStorage.setItem('taskvalue', JSON.stringify(this.tasklist));
  }
}
