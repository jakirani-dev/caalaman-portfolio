import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './shared/layout/components/landing-page/landing-page.component';
import { ItemListComponent } from './shared/layout/components/item-list/item-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LandingPageComponent,ItemListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'public-services-ph';
}
