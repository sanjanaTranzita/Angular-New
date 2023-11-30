import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  data5=10;
  updateChild(){
    this.data5 =Math.floor( Math.random()*10)
  }
  updateData(item:string){
    alert(item)
  }
  name18:any;
}
