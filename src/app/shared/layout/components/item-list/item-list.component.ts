import { Component } from '@angular/core';
import { philIDTypes } from './id-mock-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.less'
})
export class ItemListComponent {
 arrIDItems = philIDTypes;
}
