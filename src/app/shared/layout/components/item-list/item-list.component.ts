import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../../core/services/api.service';
import { GovernmentService } from '../../../../models/id-service.model';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.less'],
})
export class ItemListComponent implements OnInit {
  protected isDarkMode = false;
  services: GovernmentService[] = [];
  filtered: GovernmentService[] = [];
  activeFilter = 'All Services';
  searchQuery = '';

  filters = ['All Services', 'Identification', 'Permits', 'Clearances', 'Benefits'];

  private idData = inject(ApiService);
  private router = inject(Router);

  ngOnInit() {
    this.idData.getAllServices().subscribe({
      next: (data) => {
        this.services = data;
        this.filtered = data.slice(0, 6);
      },
      error: (err) => console.error('Failed to load services', err),
    });
  }

  onSearch() {
    this.applyFilters();
  }

  protected toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    console.log('napindot naaaaaa!===', this.isDarkMode);
  }

  applyFilters() {
    let results = this.services;

    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase();
      results = results.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.issuingAgency.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q)
      );
    }

    if (this.activeFilter !== 'All Services') {
      // category filter logic here later
    }

    this.filtered = results.slice(0, 6);
  }
}
