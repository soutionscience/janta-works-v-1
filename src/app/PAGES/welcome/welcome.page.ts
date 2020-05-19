import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StorageService } from 'src/app/SERVICES/storage.service';
import { ApiService } from 'src/app/SERVICES/api.service';
import { User } from 'src/app/SHARED/user.model';
import { Category } from 'src/app/SHARED/categories.interface';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  countries: {flag: string, Number: number}[]=[];
  numberForm: FormGroup;
  showError: boolean = false;
  data:any;
  categories: Category [];
  

  constructor(private fb: FormBuilder, private storageService: StorageService, 
    private api: ApiService, private navCtr: NavController) {
    this.setUpCounty()
    this.createForm()
   }

  ngOnInit() {
    this.getCategories()
  }
  setUpCounty(){
    let obj = {flag: "../../../assets/images/Kenya_flag_300.png", Number: +254}
    this.countries.push(obj)
  }

  createForm(){
    this.numberForm = this.fb.group({
      extension:['', [Validators.required]],
      number: ['', Validators.required]
    })
  }

  submit(){
    this.api.postResource('users', this.numberForm.value)
    .subscribe(resp=> {
      this.data = resp
     // console.log(this.data.number)
      this.storageService.addUser(this.data._id, this.data.number, this.data.extension);
    // this.getNumberBack();
    this.navCtr.navigateForward("/categories")

    }, error=>{
      this.showError = true;
    })
  

  }
  getNumberBack(){
    this.storageService.getUser()
    .then((resp)=>console.log('resp storage ', resp))
  }

  getCategories(){
    this.api.getResource('categories')
    .subscribe((resp)=>{
    //  console.log(resp.length)
    resp.forEach(element => {
      this.storageService.addCategories(element)
    });
   this.storageService.setCategory()
    })
  }

}
