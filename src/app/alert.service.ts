import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  msgAlerta(): void {
    alert('Livro Angular 2');
  }

}
