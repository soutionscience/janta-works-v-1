import { Injectable } from '@angular/core';
import{ Storage} from '@ionic/storage'
import { User } from '../SHARED/user.model';



@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private user: User []=[]

  constructor(private storage: Storage) { }

  addUser(id, number, extension){
  let obj = {
    id: id,
    number: number,
    ext: extension
  }
   this.user.push(obj)
    console.log('what is iser ', this.user)
    this.storage.set('user', this.user)
  }
  getUser(){
    return this.storage.get('user')
    .then((resp)=>{
        console.log('numner ', resp)
      this.user = resp != null? resp: '';
      return this.user
    })
  }
}
