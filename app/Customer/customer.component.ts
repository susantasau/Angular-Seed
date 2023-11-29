import { Component } from '@angular/core';
@Component({
  selector: 'cust-comp',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class customer {
  people: any[] = [
    { Id: 101, Name: 'Susanta', City: 'Kolkata' },
    { Id: 102, Name: 'Rohit', City: 'Patna' },
    { Id: 103, Name: 'Ankit', City: 'Pune' },
    { Id: 104, Name: 'Gayatri', City: 'Nashik' },
    { Id: 105, Name: 'Anuradha', City: 'Nagpur' },
  ];
}
