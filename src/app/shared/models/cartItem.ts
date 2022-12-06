import { products } from './food';

export class CartItem{
  constructor(public food:products){ }
  quantity:number = 1 ;
  price: number = this.food.price;
}

