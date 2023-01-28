import { Injectable } from '@angular/core';
import { Shopping } from '../model/shopping.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private shoppingList = [
    new Shopping(
      1, 'Air Jorden 7 Retro', 1, 18000, 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f00e0c1d-9500-4063-843d-01f3f40ec1c7/air-jordan-7-retro-mens-shoes-098sXt.png'
    ),
    new Shopping(
      2, 'Air Jorden 1 Mid', 2, 12000, 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f707076b-c1be-4280-ab01-d74bdfec8725/air-jordan-1-mid-se-mens-shoes-w1HLvg.png'
    )
  ]

  constructor() { }


  sendData() {
    return this.shoppingList.slice()
  }
  getvalu(product: any) {
    this.shoppingList.push(product)
}

}
