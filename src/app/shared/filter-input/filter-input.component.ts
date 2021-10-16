import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-filter-input',
  templateUrl: './filter-input.component.html'
})
export class FilterInputComponent implements OnInit {

  filterValue : any;
  @Input() class = '';
  @Output() onFilterChange = new EventEmitter<any>();
  constructor() { }

  ngOnInit() { }

  onChange(value) {
    this.onFilterChange.emit(value);
  }
}
