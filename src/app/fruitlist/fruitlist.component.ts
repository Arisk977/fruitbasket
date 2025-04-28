import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SinglefruitComponent } from './singlefruit/singlefruit.component';
import { FruitlistdataService } from '../fruitlistdata.service';

@Component({
  selector: 'app-fruitlist',
  imports: [CommonModule, SinglefruitComponent],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss'
})
export class FruitlistComponent {
  fruitlistData= inject(FruitlistdataService)

 

  nameLog(name:string){
    console.log(name);
  }

  addComment(comment:string, index:number){
   this.fruitlistData.addCommentToFruit(comment, index);
  }
}
