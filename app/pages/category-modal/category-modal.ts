import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { CategoryService } from '../../providers/category-service/category-service';

@Component({
  templateUrl: 'build/pages/category-modal/category-modal.html',
})
export class CategoryModalPage {
  category: any;

  constructor(private navCtrl: NavController, public viewCtrl: ViewController, private categoryService: CategoryService) {
    this.category = {};
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

  save(){
    this.categoryService.insert(this.category)
    .then((res) => {
      if(res){
        this.viewCtrl.dismiss();
      }
    }, (error) => {
      console.log('Erro ao inserir', error);
    })
  }

}
