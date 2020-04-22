import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StorageService } from 'src/app/SERVICES/storage.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  countries: {flag: string, Number: number}[]=[];
  numberForm: FormGroup
  

  constructor(private fb: FormBuilder, private storageService: StorageService) {
    this.setUpCounty()
    this.createForm()
   }

  ngOnInit() {
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
    this.storageService.addNumber(this.numberForm.value);
    this.getNumberBack()
  }
  getNumberBack(){
    this.storageService.getNumber()
    .then((resp)=>console.log('resp ', resp))
  }

}
