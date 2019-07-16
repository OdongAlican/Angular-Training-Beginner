import { SideCategory } from './../../model/sideCategory';
import { Component, OnInit, Input } from '@angular/core';
import { sideCategoryItems} from 'src/data/category.data';

@Component({
  selector: 'app-central-section',
  templateUrl: './central-section.component.html',
  styleUrls: ['./central-section.component.css']
})
export class CentralSectionComponent implements OnInit {

  sideCategoryItems:[] = sideCategoryItems

  @Input()
  SideCategory:SideCategory

  constructor() { }

  ngOnInit() {
  }

}
