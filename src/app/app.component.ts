import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PasseiosComponent } from "./pages/passeios/passeios.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PasseiosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-angular';
}
