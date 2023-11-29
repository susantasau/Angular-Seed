import { Component, OnInit } from '@angular/core';
import { HGSVV } from './hgsvv';
import { HgsvvServices } from './hgsvv.service';

@Component({
  selector: 'HGSVV-Comp',
  templateUrl: './hgsvv.component.html',
  styleUrls: ['./hgsvv.component..css'],
  providers: [HgsvvServices],
})
export class HGSVVComponent implements OnInit {
  stud: HGSVV[] = [];
  s1:HGSVV[] = [];
  MinValue: number = 0;
  roll !: number;
  mark !: number;
  name !: string;
  

  constructor(private MyServe: HgsvvServices) {}

  ShowData() 
  {
    this.MyServe.ReadData().subscribe(AllData=> this.stud = AllData);    
  }

  AddData()
  {
    this.MyServe.PostData(this.roll,this.name,this.mark).subscribe((d)=> {console.log("Data inserted")},(error)=>{console.log("Some error")});
    console.log(`${this.roll},${this.name},${this.mark}`);
  }

  UpdateData()
  {
    
    this.MyServe.GetData(this.roll).subscribe(data=> this.s1 = data);
    this.name = this.s1[0].name;
    this.mark = this.s1[0].marks;
    console.log("Update clicked " + this.name);
  }
  ngOnInit(): void {
    
  }
}
