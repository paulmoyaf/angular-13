import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsRoutes } from './component.routing';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';
import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdnavBasicComponent } from './nav/nav.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { TableComponent } from "./table/table.component";
import { RaeeListComponent } from './raee-list/components/raee-list/raee-list.component';
import { RaeeFilterComponent } from './raee-list/components/raee-filter/raee-filter.component';
import { RaeePageComponent } from './raee-list/pages/raee-page/raee-page.component';
import { SearchBoxComponent } from './raee-list/components/search-box/search-box.component';
import { SearchListComponent } from './raee-list/components/search-list/search-list.component';
import { WindowRaeeComponent } from './raee-list/components/window-raee/window-raee.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  declarations: [
    NgbdpaginationBasicComponent,
    NgbdAlertBasicComponent,
    NgbdDropdownBasicComponent,
    NgbdnavBasicComponent,
    ButtonsComponent,
    CardsComponent,
    TableComponent,
    RaeeListComponent,
    RaeeFilterComponent,
    WindowRaeeComponent,
    RaeePageComponent,
    SearchBoxComponent,
    SearchListComponent
  ]
})
export class ComponentsModule { }
