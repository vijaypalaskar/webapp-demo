import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotel-add-order',
  templateUrl: './hotel-add-order.component.html',
  styleUrls: ['./hotel-add-order.component.css']
})
export class HotelAddOrderComponent implements OnInit {

  constructor(private fb: FormBuilder, private hotel: HotelService) { }

  addOrderForm!: FormGroup;
  quantities: any = [];
  products = [];

  ngOnInit(): void {
    this.addOrderForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mobileNo: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      address: ['', [Validators.required, Validators.minLength(3)]],
      orderDetails: this.fb.array([this.addProducts()])
    });
    this.quantities = new Array(100).fill(null).map((value, index) => index + 1);
    this.getProducts();
  }

  get orderDetails() {
    return this.addOrderForm.get('orderDetails') as FormArray;
  }

  getProducts() {
    this.hotel.getProducts().subscribe(result => {
      this.products = result.data;
    });
  }

  addProducts(): FormGroup {
    return this.fb.group({
      productName: ['', Validators.required],
      quantity: ['', Validators.required]
    })
  }

  createProduct() {
    this.orderDetails.push(this.addProducts());
  }

  removeProduct(index: number) {
    this.orderDetails.removeAt(index);
  }

  submitAddOrder() {
    const data = this.addOrderForm.value;
    this.hotel.submiAddOrder(data).subscribe(result => {
      if(result.status === 1) {
        alert("success")
      }
    })
  }

}
