import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  img!: string[];
  currentImgIndex = 0
  changePrev(){
    this.currentImgIndex =
      (this.currentImgIndex - 1 + this.img.length) % this.img.length;
  }
  changeNext(){
    this.currentImgIndex = (this.currentImgIndex + 1) % this.img.length;
  }
}