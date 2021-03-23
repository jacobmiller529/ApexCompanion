import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingletonServiceService {
  get legend(): string {
    return this.legend;
  }

  set legend(value: string) {
    this.legend = value;
  }



  constructor() {
    let legend = '';
    let weapon1 = '';
    let weapon2 = '';
    let challenge = '';
  }
}
