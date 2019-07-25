import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './component/NavBar/categories.component';
import { CentralSectionComponent } from './component/food-list/food-layout/SideBar/central-section.component';
import { CategoriesItemComponent } from './component/food-list/food-layout/SideBar/SideBarElement/categories-item.component';
import { FoodLayoutComponent } from './component/food-list/food-layout/food-layout.component';
import { FoodListComponent } from './component/food-list/food-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CentralSectionComponent,
    CategoriesItemComponent,
    FoodLayoutComponent,
    FoodListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
