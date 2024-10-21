import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  productsList: any = [];
  offset: number = 0;
  limit: number = 12;
  isLoading: boolean = false;

  ngOnInit(): void {
    this.getProductsList();
  }

  nextPage() {
    this.offset = this.offset + this.limit;
    this.getProductsList();
  }

  previousPage() {
    if (this.offset > 0) {
      this.offset = this.offset - this.limit;
    }
    this.getProductsList();
  }

  getProductsList() {
    this.isLoading = true;
    this.apiService
      .getProducts(this.offset, this.limit)
      .subscribe((res: any) => {
        this.productsList = res.products;
        this.isLoading = false
      });
  }
}
