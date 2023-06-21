import { Component } from '@angular/core';

type Plant = {
  x: number;
  y: number;
};

@Component({
  selector: 'plants-tracker-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  plants: Plant[] = [];
  plantSize = 20;

  addPlant(e: MouseEvent): void {
    const { clientX, clientY } = e;
    const plant: Plant = {
      x: clientY - this.plantSize,
      y: clientX - this.plantSize,
    };
    this.plants.push(plant);
  }
}
