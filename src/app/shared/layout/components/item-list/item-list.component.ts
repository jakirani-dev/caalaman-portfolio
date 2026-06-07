import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IdDataService } from '../../../../core/services/id-data.service';
import { IDTypeWithSchedule } from './id-mock-data';


@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.less']
})
export class ItemListComponent implements OnInit {
  services: IDTypeWithSchedule[] = [];
  filtered: IDTypeWithSchedule[] = [];
  activeFilter = 'All Services';
  searchQuery = '';

  filters = ['All Services', 'Identification', 'Permits', 'Clearances', 'Benefits'];

  constructor(private idData: IdDataService, private router: Router) {}

  ngOnInit() {
    this.services = this.idData.getAllIDTypes();
    this.filtered = this.services.slice(0, 6); 
  }
  
  onSearch() {
    this.applyFilters();
    console.log("tangina mo");
  }


  applyFilters() {
    let results = this.services;

    // apply search
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      results = results.filter(s =>
        s.id.toLowerCase().includes(q) ||
        s.issuingAgency.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q)
      );
    }

    // apply category filter (extend this logic as you categorize your data)
    if (this.activeFilter !== 'All Services') {
      // placeholder — map categories to ID types as needed
    }

    this.filtered = results.slice(0, 6);

    return this.filtered
  }

  viewDetails(service: IDTypeWithSchedule) {
    this.router.navigate(['/service', service.id]);
  }

 
}