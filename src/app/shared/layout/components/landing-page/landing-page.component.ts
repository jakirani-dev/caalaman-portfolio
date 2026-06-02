import { Component } from '@angular/core';
import { ItemListComponent } from '../item-list/item-list.component';
import { HeaderBannerComponent } from "../header-banner/header-banner.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [ItemListComponent, HeaderBannerComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.less'
})
export class LandingPageComponent {

}
