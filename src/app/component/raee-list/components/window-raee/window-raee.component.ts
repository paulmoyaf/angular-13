import { Component, Input, OnInit } from '@angular/core';
import { Raee } from '../../interfaces/raee.interface';
import { RaeeService } from '../../services/raee-list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'raee-window-raee',
  templateUrl: './window-raee.component.html',
  styles: [
  ]
})
export class WindowRaeeComponent implements OnInit {

  @Input()
  public raee!: Raee;

  constructor(private raeeServices:RaeeService){}

  ngOnInit(): void {
    if(!this.raee) throw Error('Raee property is required');

  }

}
