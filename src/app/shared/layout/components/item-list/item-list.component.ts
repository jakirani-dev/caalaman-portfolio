import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IdDataService } from '../../../../core/services/id-data.service';
import { IDTypeWithSchedule } from './id-mock-data';


@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.less']
})
export class ItemListComponent implements OnInit {
  services: IDTypeWithSchedule[] = [];
  filtered: IDTypeWithSchedule[] = [];
  activeFilter = 'All Services';

  filters = ['All Services', 'Identification', 'Permits', 'Clearances', 'Benefits'];

  constructor(private idData: IdDataService, private router: Router) {}

  ngOnInit() {
    this.services = this.idData.getAllIDTypes();
    this.filtered = this.services.slice(0, 6); // show top 6 like the design
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }

  viewDetails(service: IDTypeWithSchedule) {
    this.router.navigate(['/service', service.id]);
  }
}