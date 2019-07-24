import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './component/NavBar/categories.component';
import { CentralSectionComponent } from './component/SideBar/central-section.component';
import { CategoriesItemComponent } from './component/SideBarElement/categories-item.component';
import { FoodLayoutComponent } from './component/food-layout/food-layout.component';
import { FoodComponent } from './component/food/food.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CentralSectionComponent,
    CategoriesItemComponent,
    FoodLayoutComponent,
    FoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
