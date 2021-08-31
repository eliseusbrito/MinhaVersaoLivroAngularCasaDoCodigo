import { Component } from '@angular/core';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LivroAngular';
  foto: string = 'favicon.ico';

  constructor(private service: AlertService) { }

  enviarMsg(): void {
    this.service.msgAlerta();
  }

}

