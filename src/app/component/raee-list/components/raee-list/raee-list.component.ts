import { Component, Input, OnInit } from '@angular/core';
import { Donde, Raee, TableRows } from '../../interfaces/raee.interface';
import { RaeeService } from '../../services/raee-list.service';

@Component({
  selector: 'raee-list',
  templateUrl: './raee-list.component.html',
  styles: [
  ]
})
export class RaeeListComponent implements OnInit {


  public raee:Raee[] = [];

  public donde:Donde[] = [];

  constructor(private raeeService:RaeeService ) {}

  ngOnInit(): void {
    this.raeeService.getRaee()
    .subscribe(raee => {
      this.raee = raee;
      console.log(this.raee.values)
    });

}






}

