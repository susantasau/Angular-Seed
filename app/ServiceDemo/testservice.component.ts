import { Component } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
  selector: 'test-comp',
  templateUrl: './testservice.component.html',
  providers: [HelloService],
})
export class TestService {
  prodlist!: string[];
  cat!: string;
  output!: string;

  constructor(private hs: HelloService) {}

  method1(): void {
    this.output = this.hs.sayHello();
  }

  method2():void
  {
    this.prodlist = this.hs.getProducts(this.cat);
  }
}
