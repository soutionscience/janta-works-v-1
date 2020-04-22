import { Injectable } from '@angular/core';
import{ Storage} from '@ionic/storage'



@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private number: {extension: string, number: number}

  constructor(private storage: Storage) { }

  addNumber(number:{extension: string, number: number}){
    this.number = number;
    this.storage.set('phoneNumber', this.number)
  }
  getNumber(){
    return this.storage.get('phoneNumber')
    .then((resp)=>{
       // console.log('numner ', resp)
      this.number = resp != null? resp: '';
      return this.number
    })
  }
}
