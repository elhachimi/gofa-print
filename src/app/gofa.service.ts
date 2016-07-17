import { Injectable } from '@angular/core';
import { Gofa } from './gofa';
import { GOFAS } from './mock-gofas';


@Injectable()
export class GofaService {
  getGofas() {
    return Promise.resolve(GOFAS);
  };

  getGofa(id: number) {
    return this.getGofas()
    .then(gofas=> gofas.find(gofa=> gofa.id == id))
  };

  saveGofa(gofa: Gofa) {
  };
}
