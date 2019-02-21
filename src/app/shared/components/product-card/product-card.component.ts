import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'shared/models/product';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input('product') product: Product = {
    key: '',
    title: '',
    price: null,
    category: '',
    imageUrl: ''
  }

  @Input('show-actions') showActions = true;
  @Input('shopping-cart') cart: ShoppingCart;
  constructor(private cartService: ShoppingCartService) { }

  ngOnInit() {
  }

  addToCart(product) {
    this.cartService.addToCart(product);
  }

}