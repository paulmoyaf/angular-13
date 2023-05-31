import { Component, Input } from '@angular/core';
import { Donde, Raee } from '../../interfaces/raee.interface';
import { RaeeService } from '../../services/raee-list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'raee-list-filter',
  templateUrl: './raee-filter.component.html',
  styles: [
    `.flecha { width: 20px}
    .punto {width: 35px}
    td{border:0px}`
  ],
})
export class RaeeFilterComponent {

  // @Input()
  // public r:Raee;
  exportedValue!: Raee;

  @Input()
  public raee:Raee[] = [];

  constructor(private raeeService:RaeeService
   ) {}


  ngOnInit(): void {
    // console.log(this.exportedValue = this.raee[0]);
    // this.exportedValue = this.raee[0];

    this.raeeService.getRaee()
    .subscribe(raee => {
      this.raee = raee;
    });
  }

  exportValue(value: Raee) {
    console.log ('Export value: ',this.exportedValue = value);
    this.exportedValue = value;
    // this.raeeService.exportedValue = value;

  }

}




