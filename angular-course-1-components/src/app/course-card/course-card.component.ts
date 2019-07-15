import { Component, OnInit, Input, Output } from '@angular/core';
import {Course} from '../model/course'
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  Course:Course

  @Input()
  cardIndex:Number

  @Output("courseSelected")
  courseEmitter = new EventEmitter<Course>()

  constructor() { }

  ngOnInit() {
  }

  viewCourse(){
    this.courseEmitter.emit(this.Course)
  }

  imageAvailable(){
    return this.Course && this.Course.iconUrl
  }

  cardClasses(){

    if(this.Course.category == 'BEGINNER'){
      return 'beginner'
    }
    // return{
    //       'beginner':this.Course.category == 'BEGINNER'
    // }

    // return ['beginner','course-card']
  }

  cardStyle(){
    return{
      'text-decoration': 'underline'
    }
  }
  

}
