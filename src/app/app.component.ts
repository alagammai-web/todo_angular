import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = 'Todo Application in Angular';
  tasklist: String[] = [];
  searchtask: string;
  

  ngOnInit(): void {
    this.tasklist = JSON.parse(localStorage.getItem('taskvalue'));
  }

  addtodo(d: string){
    this.tasklist.push(d);
    localStorage.setItem('taskvalue', JSON.stringify(this.tasklist));
  }

  deletetodo(i: number){
    this.tasklist.splice(i, 1);
    localStorage.setItem('taskvalue', JSON.stringify(this.tasklist));
  }
}
