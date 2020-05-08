import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/SERVICES/api.service';
import { StorageService } from 'src/app/SERVICES/storage.service';
import { Category } from 'src/app/SHARED/categories.interface';

@Component({
  selector: 'app-worker-registration',
  templateUrl: './worker-registration.page.html',
  styleUrls: ['./worker-registration.page.scss'],
})
export class WorkerRegistrationPage implements OnInit {
  workerRegisterForm: FormGroup;
  categories: Category [];

  constructor(private fb: FormBuilder, private api: ApiService,
    private storage: StorageService) { }

  ngOnInit() {
    this.createForm()
    this.getCategories()
  }

  createForm(){
    this.workerRegisterForm = this.fb.group({
      number: ['', [Validators.required]],
      first_name: ['', [Validators.required]],
      last_name:['', [Validators.required]],
      skill:['', [Validators.required]],
      category:['', [Validators.required]],
      
    }
    )
  }
  register(){
   this.api.postResource('users', this.workerRegisterForm.value)
   .subscribe(resp=> console.log('posted ', resp))
  }
  getCategories(){
    this.storage.getCategories()
    .then((resp=>{
      this.categories = resp;
      //console.log('fetched ', this.categories)
    }))

  }

}
