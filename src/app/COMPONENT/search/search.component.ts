import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/SERVICES/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  result: any []
  showList: boolean = false;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.showList = false;
  }

  onKey(term){
   this.api.getSpecificResource('skills/search', term)
   .subscribe(resp => {this.result = resp, this.showList = true})
  }
  select(skill){
    console.log('selected ', skill)
  }
}
