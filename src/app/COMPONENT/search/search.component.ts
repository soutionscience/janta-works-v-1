import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/SERVICES/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  result = []

  constructor(private api: ApiService) { }

  ngOnInit() {}

  onKey(term){
   this.api.getSpecificResource('skills/search', term)
   .subscribe(resp => console.log(resp))
  }

}
