import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnInit {

  @Input('product') product: Product = {
    key: '',
    title: '',
    price: null,
    category: '',
    imageUrl: ''
  }

  @Input('shopping-cart') cart: ShoppingCart;
  
  constructor(private cartService: ShoppingCartService) { }

  ngOnInit() {
  }

  addToCart(product) {
    this.cartService.addToCart(product);
  }

  removeFromCart(product) {
    this.cartService.removeFromCart(product);
  }

}
