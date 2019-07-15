import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data = {
    title: 'Angular course',
    author:''
  }

  imageClicked(){
    alert('Welcome to Angular')
  }

  onKeyUp(newTitle:string){
    this.data.title = newTitle
  }

  onKeyUpAuthor(newAuthor:string){
    this.data.author = newAuthor
  }
}
