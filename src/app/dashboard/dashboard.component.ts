import { Component, OnChanges, OnInit } from '@angular/core';
import { ShoppingService } from '../shared/services/shopping.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  shopBag: any = [];
  shopItem: any;
  total: any;


  constructor(private shopServ: ShoppingService, private router: Router) { }
  ngOnInit() {
    this.shopItem = this.shopServ.sendData()
  }
  qty(action: any, shop: any) {
    if (action == 'add') {
      shop.qty++
    } else if (action == 'remove') {
      if (shop.qty <= 0) {
        return
      } else {
        shop.qty--
      }
    }
  }
  addToBag(shop: any) {
    let flag = false;
    for (let i of this.shopBag) {
      if (i.id == shop.id) {
        i.totalPrice = shop.qty * shop.price
        i.qty = shop.qty
        flag = true;
      }
    }
    if (!flag) {
      this.sendToBag(shop)
    }
    this.addTotal()
  }
  sendToBag(data: any) {
    let newData = Object.assign({}, data)
    newData.totalPrice = data.price * data.qty
    this.shopBag.push(newData);
  }
  addTotal() {
    this.total = 0
    for (let i of this.shopBag) {
      this.total += i.totalPrice
    }
  }
  navForm() {
    this.router.navigate(['/form'])
  }
}


