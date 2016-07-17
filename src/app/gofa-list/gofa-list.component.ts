import { Component, OnInit } from '@angular/core';
import { MdCheckbox } from '@angular2-material/checkbox';
@Component({
  moduleId: module.id,
  selector: 'app-gofa-list',
  templateUrl: 'gofa-list.component.html',
  styleUrls: ['gofa-list.component.css'],
  directives: [MdCheckbox]
})
export class GofaListComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
