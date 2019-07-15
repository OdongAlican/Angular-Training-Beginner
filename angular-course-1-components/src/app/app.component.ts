import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses:[]= COURSES
  // startDate = new Date(2000,0,1)
  // title = COURSES[1].description
  // price = 9.9935462
  // percentage = 0.67

  newCourse = COURSES[5]

  /*
  courseOne = COURSES[0]
  courseTwo = COURSES[1]
  courseThree = COURSES[2]
  courseFour = COURSES[3]
  courseFive = COURSES[4]
  courseSix = COURSES[5]
  courseSeven = COURSES[6]
  courseEight = COURSES[7]
  courseNine = COURSES[8]
  courseTen = COURSES[9]
  */

  onCourseSelected(Course:Course){
    console.log(`Course emitted at App component ${Course}`)
  }

}
