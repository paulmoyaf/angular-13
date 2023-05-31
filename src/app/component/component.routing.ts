import { Routes } from '@angular/router';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';

import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdnavBasicComponent } from './nav/nav.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { RaeeListComponent } from './raee-list/components/raee-list/raee-list.component';
import { RaeePageComponent } from './raee-list/pages/raee-page/raee-page.component';


export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'raee-list',
				component: RaeeListComponent
			},
			{
				path: 'raee-page',
				component: RaeePageComponent
			},
			{
				path: 'table',
				component: TableComponent
			},
			{
				path: 'card-raee',
				component: CardsComponent
			},
			{
				path: 'pagination',
				component: NgbdpaginationBasicComponent
			},
			{
				path: 'badges',
				component: BadgeComponent
			},
			{
				path: 'alert',
				component: NgbdAlertBasicComponent
			},
			{
				path: 'dropdown',
				component: NgbdDropdownBasicComponent
			},
			{
				path: 'nav',
				component: NgbdnavBasicComponent
			},
			{
				path: 'buttons',
				component: ButtonsComponent
			}
		]
	}
];
