import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategoryPage } from '../category/category';
import { ProductPage } from '../product/product';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  tabRoot1: any;
  tabRoot2: any;


  constructor(public navCtrl: NavController) {
    this.tabRoot1 = CategoryPage;
    this.tabRoot2 = CategoryPage;


  }
}
