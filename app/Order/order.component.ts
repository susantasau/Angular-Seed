import { Component } from '@angular/core';

@Component({
  selector: 'order-comp',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderDetails {
  order: any[] = [
    {
      OrderId: 1,OrderName: 'Susanta Sau',City: 'Kolkata', Status: 'Pending'},
    { OrderId: 2, OrderName: 'Rohit', City: 'Patna', Status: 'Delivered' },
    { OrderId: 3, OrderName: 'Ankit', City: 'Kanpur', Status: 'Processing' },
    { OrderId: 4, OrderName: 'Pratham', City: 'Pune', Status: 'Delivered' },
    { OrderId: 5, OrderName: 'Ajay', City: 'Bangalore', Status: 'Pending' },
    { OrderId: 6, OrderName: 'Gayatri', City: 'Nashik', Status: 'Delivered' },
    { OrderId: 7, OrderName: 'Puja', City: 'Bhopal', Status: 'Pending' },
    { OrderId: 8, OrderName: 'Ankita', City: 'Indore', Status: 'Processing' },
  ];
}
