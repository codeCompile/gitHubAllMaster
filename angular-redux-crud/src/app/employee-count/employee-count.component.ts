import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCount implements OnInit {
    @Input() all: number;
    @Input() male: number;
    @Input() female: number;
  constructor() { }

  ngOnInit() {
console.log( this.all + ' ' + this.male + ' ' + this.female + ' ' + this.selectedRadioButtonValue);
  }

  selectedRadioButtonValue: string = "All";
  @Output()
  countRadioButtonSelectionChanged : EventEmitter<string> = new EventEmitter<string>();
  onRadioButtonSelectionChange() {
        this.countRadioButtonSelectionChanged
            .emit(this.selectedRadioButtonValue);
    }

}