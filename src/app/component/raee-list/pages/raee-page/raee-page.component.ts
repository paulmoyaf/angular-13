import { Component, OnInit, Output } from '@angular/core';
import { Provincia, Raee } from '../../interfaces/raee.interface';
import { RaeeService } from '../../services/raee-list.service';

@Component({
  selector: 'app-raee-page',
  templateUrl: './raee-page.component.html',
  styles: [
    `select {padding: 2px; margin-left: 15px}
    `
  ]
})
export class RaeePageComponent implements OnInit {


  public raee:Raee[] = [];
  regiones:string[] = ['---','Cantabria','Castilla y León','País Vasco'];
  etiquetas:string[] = ['---','111-23423-7543','121-55426-1547','126-45901-2247','345-99012-6643','511-55101-0091'];

  constructor(private raeeService:RaeeService ) {}

  ngOnInit(): void {
    this.raeeService.getRaee()
    .subscribe(raee => {
      this.raee = raee;
    });
  }

  searchById(term:string){
    this.raeeService.searchRaeeId(term)
    .subscribe(raee => {
       this.raee = raee;
    });
  }

  searchByRegion(term:string){
    this.raeeService.searchRaeeRegion(term)
    .subscribe(raee => {
       this.raee = raee;
    });
  }



  searchByEtiqueta(term:string){
    this.raeeService.searchRaeeEtiqueta(term)
    .subscribe(raee => {
       this.raee = raee;
    });
  }


  searchByDate(term1:string,term2:string){
    this.raeeService.searchRaeeDate(term1,term2)
    .subscribe(raee => {
       this.raee = raee;
    });
  }




}
