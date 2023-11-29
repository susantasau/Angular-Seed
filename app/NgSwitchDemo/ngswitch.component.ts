import { Component } from '@angular/core';

@Component({
  selector: 'ngswitch-comp',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css'],
})
export class NgSwitchComponent {
  people: any[] = [
    { Name: 'Neha', Age: 24, Country: 'India' },
    { Name: 'Mike', Age: 31, Country: 'USA' },
    { Name: 'John', Age: 23, Country: 'UK' },
    { Name: 'Malan', Age: 34, Country: 'UK' },
    { Name: 'Virat', Age: 34, Country: 'India' },
    { Name: 'Smith', Age: 30, Country: 'Australia' },
    { Name: 'Sanaka', Age: 28, Country: 'Shrilanka' },
    { Name: 'Rohit', Age: 35, Country: 'India' },
    { Name: 'SKY', Age: 32, Country: 'India' },
  ];
}
