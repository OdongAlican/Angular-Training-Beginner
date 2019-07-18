import { FastFood } from './../../model/fast.food';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fastfood',
  templateUrl: './fastfood.component.html',
  styleUrls: ['./fastfood.component.css']
})
export class FastfoodComponent implements OnInit {

  @Input()
  FastFood:FastFood
  constructor() { }

  ngOnInit() {
  }

}
