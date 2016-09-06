import { Component } from '@angular/core';
import { NavController, AlertController, ModalController } from 'ionic-angular';
import { CategoryService } from './../../providers/category-service/category-service';
import { CategoryModalPage } from './../category-modal/category-modal';

/*
  Generated class for the CategoryPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/category/category.html',
})
export class CategoryPage {

  categories: Array<any>;

  constructor(private navCtrl: NavController, private categoryService: CategoryService, private alertCtrl: AlertController, private modalCtrl: ModalController) {
    this.findAll();
  }

  findAll(){
    this.categoryService.findAll()
    .then((categories: Array<any>) => {
      this.categories = categories;
    }, (error) => {
      console.log('Erro ao listar categorias:', error);
    })
  }


  removeCategory(category){
    let alert = this.alertCtrl.create({
      title: 'Delete',
      subTitle: 'Deseja realmente deletar a categoria ' + category.nome + '?',
      buttons: [
        {
          text: 'Cancelar'
        },
        {
        text: 'Deletar',
        handler: (data) => {
          this.categoryService.delete(category.id)
          .then((data) => {
            if(data){
              this.findAll();
            }
          }, (error) => {
            console.log('Erro ao deletar categoria: ', error);
          })
        }
      }]
    });
    alert.present();
  }

  addCategory(){
    let modal = this.modalCtrl.create(CategoryModalPage);
    modal.onDidDismiss(() => {
      this.findAll();
    });
    modal.present();
  }

}
