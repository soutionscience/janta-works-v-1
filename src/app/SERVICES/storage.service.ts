import { Injectable } from '@angular/core';
import{ Storage} from '@ionic/storage'
import { User } from '../SHARED/user.model';
import { Category } from '../SHARED/categories.interface';



@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private user: User []=[]
  private category: Category [] =[];

  constructor(private storage: Storage) { }

  addUser(id, number, extension){
  let obj = {
    id: id,
    number: number,
    ext: extension
  }
   this.user.push(obj)
    //console.log('what is iser ', this.user)
    this.storage.set('user', this.user)
  }
  getUser(){
    return this.storage.get('user')
    .then((resp)=>{
       // console.log('numner ', resp)
      this.user = resp != null? resp: '';
      return this.user
    })
  }

  //category storrage on device
  addCategories(item: Category){
    //this.storage.remove('categories')
    let obj ={
      title: item.title,
      image:item.image,
      subCategory:item.subCategory,
      skills: item.skills,
      active: item.active,
      _id:item._id


    }
   this.category.push(obj)
  // console.log('in service ', this.category)
  // //this.storage.set('categories', this.category)


  }
  setCategory(){
    //console.log('ninin', this.category)
    this.storage.set('categories', this.category)
  }
  getCategories(){
    return this.storage.get('categories',)
    .then((resp)=>{
      //console.log('resp ', resp)
      this.category = resp !=null? resp: '';
      return this.category;
    })
  }
}
