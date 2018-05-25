import { Component, OnInit } from '@angular/core';
import { Car } from './car.model';
import { CarService } from './car.service';

@Component({
  selector: 'pro-table-prime',
  templateUrl: './table-prime.component.html',
  styleUrls: ['./table-prime.component.css']
})
export class TablePrimeComponent implements OnInit {

  cars: Car[];

  constructor(private carService: CarService) { }

  ngOnInit() {
      this.carService.getCarsSmall().then(cars => this.cars = cars);
  }
}
