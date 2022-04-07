import { Component, OnInit } from '@angular/core';
export interface BasketsList {
  business: string;
  net: number;
}

const ELEMENT_DATA: BasketsList[] = [
  {business: 'Fixed Diferred Annuity', net: 2.62},
  {business: 'Variable Diferred Annuity', net: 2.87},
  {business: 'Fixed Diferred Annuity', net: 2.62},

  {business: 'Fixed Diferred Annuity', net: 2.62},

  {business: 'Fixed Diferred Annuity', net: 2.62},



];
@Component({
  selector: 'baskets',
  templateUrl: './baskets.component.html',
  styleUrls: ['./baskets.component.css']
})
export class BasketsComponent implements OnInit {
  displayedColumns: string[] = ['business', 'net'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
