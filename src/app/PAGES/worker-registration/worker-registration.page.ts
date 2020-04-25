import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/SERVICES/api.service';

@Component({
  selector: 'app-worker-registration',
  templateUrl: './worker-registration.page.html',
  styleUrls: ['./worker-registration.page.scss'],
})
export class WorkerRegistrationPage implements OnInit {
  workerRegisterForm: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService) { }

  ngOnInit() {
    this.createForm()
  }

  createForm(){
    this.workerRegisterForm = this.fb.group({
      number: ['', [Validators.required]],
      first_name: ['', [Validators.required]],
      last_name:['', [Validators.required]],
      skill:['', [Validators.required]]
    }
    )
  }
  register(){
   this.api.postResource('users', this.workerRegisterForm.value)
   .subscribe(resp=> console.log('posted ', resp))
  }

}
