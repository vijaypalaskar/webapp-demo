import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HotelService } from 'src/app/services/hotel.service';
import { HotelAddOrderComponent } from '../hotel-add-order/hotel-add-order.component';

@Component({
  selector: 'app-hotel-dashboard',
  templateUrl: './hotel-dashboard.component.html',
  styleUrls: ['./hotel-dashboard.component.css']
})
export class HotelDashboardComponent implements OnInit {

  ordersList: any = [];
  constructor(private hotel: HotelService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.hotel.getOrders().subscribe(result => {
      this.ordersList = result.data;
    }, err => {
      console.error(err);
    });
  }

  openAddOrderDialog() {
    const dialogRef = this.dialog.open(HotelAddOrderComponent, {
      height: '700px',
      width: '700px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
