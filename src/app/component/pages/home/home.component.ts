import { isFakeMousedownFromScreenReader } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { products } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  foods: products[] = [];

  dataSource : any;

  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      console.log("lund");
      console.log(params.searchTerm);
      if (params.searchTerm) {
        this.foodService.getbySearchTerm(params.searchTerm).subscribe((serverFoods) => {
          this.dataSource=serverFoods;  
        });
      }
      else {
        this.populate();
      }
  });
}

  ngOnInit(): void {
  }

  populate() {
    this.foodService.getProduct().subscribe((serverFoods) => {
      this.dataSource = serverFoods;
    });


  }
}
