import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-right-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.less']
})
export class RightSidebarComponent {
  nearestOffices = [
    { name: 'PSA Cebu Main Office', address: 'Fonte Osmeña, Cebu City', distance: '1.2 km' },
    { name: 'DFA Cebu Office', address: 'J. Luna Ave, Cebu City', distance: '2.8 km' },
    { name: 'LTO Cebu District Office', address: 'N. Bacalso Ave, Cebu City', distance: '3.5 km' },
  ];
}