import { FoodLayout } from './../../model/food.layout';
import { Component, OnInit, Input, Renderer2, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-food-layout',
  templateUrl: './food-layout.component.html',
  styleUrls: ['./food-layout.component.css']
})
export class FoodLayoutComponent implements OnInit {

  @Input()
  FoodLayout:FoodLayout

  @Output()
  emittFood = new EventEmitter<FoodLayout>()
  
  constructor(public renderer: Renderer2) { 
    this.renderer.listen('window', 'click',(e:Event)=>{
      this.emittFood.emit(this.FoodLayout)
      console.log('we are home')

   })
  }

  ngOnInit() {
  }

  imageAvailable(){
    return this.FoodLayout && this.FoodLayout.image
  }

}
