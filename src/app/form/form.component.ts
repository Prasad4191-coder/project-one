import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { ShoppingService } from '../shared/services/shopping.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  prodForm: FormGroup | any;
  img: any;
  imgFile: any;
  constructor(private shopServ: ShoppingService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.prodForm = this.fb.group({
      id: this.fb.control('', Validators.required),
      img: this.fb.control('', [Validators.required]),
      name: this.fb.control('', Validators.required),
      price: this.fb.control('', Validators.required),
      qty: this.fb.control(1, Validators.required)
    })

  }
  
  addVal() {
    this.prodForm.value.id = uuidv4();
    this.prodForm.value.img = this.imgFile
    this.shopServ.getvalu(this.prodForm.value)
    this.prodForm.reset()
  }

  getImg(event: any) {
    this.img = event.target.files[0]
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (ev: any) => {
      this.imgFile = ev.target.result;
    }
  }

}
