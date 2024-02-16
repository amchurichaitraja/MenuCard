import { Component,EventEmitter,Input,Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
@Input() All:number=0;
@Input() Veg:number=0;
@Input() NonVeg:number=0;

selectedRadioButtonValue:string='All'; 
@Output()
filterRadioButtonSelectionChanged:EventEmitter<string> = new EventEmitter<string>();

onRadioButtonSelectionChanged(){
  this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
}

}
