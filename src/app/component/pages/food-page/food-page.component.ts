import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent implements OnInit {

  foods: any;
  constructor(activatedRoute: ActivatedRoute, foodService: FoodService, private cartservice: CartService,
    private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params.id)
        foodService.getProductById(params.id).subscribe(serverFood => {
          this.foods = serverFood;
        });
    })
  }

  ngOnInit(): void {
  }

  addToCart(food){
    this.cartservice.addToCart(food);
    this.router.navigateByUrl('/cart-page');
  }
}
