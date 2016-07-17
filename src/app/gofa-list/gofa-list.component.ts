import { Component, OnInit } from '@angular/core';
import { MdList, MdListItem } from '@angular2-material/list';
import { Gofa } from '../gofa';

import { GofaService } from '../gofa.service';

@Component({
  moduleId: module.id,
  selector: 'app-gofa-list',
  templateUrl: 'gofa-list.component.html',
  styleUrls: ['gofa-list.component.css'],
  providers: [GofaService],
  directives: [MdList, MdListItem]
})
export class GofaListComponent implements OnInit {

  gofas: Gofa[]

  constructor(private gofaService: GofaService) {}

  getGofas() {
    this.gofaService.getGofas()
      .then(gofas=> this.gofas = gofas)
  }

  ngOnInit() {
    this.getGofas();
  }

  onSelect(gofa: Gofa) {
    console.log(gofa.name);
  }

}
