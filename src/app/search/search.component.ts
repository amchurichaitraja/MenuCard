import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
   enterSearchvalue: string = '';
  @Output()
  searchTextChanges:EventEmitter<string> = new EventEmitter<string>();
  onsearchtextchange(){
    this.searchTextChanges.emit(this.enterSearchvalue);
  }
}
