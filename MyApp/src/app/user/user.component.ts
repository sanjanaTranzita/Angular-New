import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    title1 ='Important Events in Angular!'
    getData(val:string){
    console.warn(val)
  }
  getName(name:string, secondName:string){
    alert(name);
    alert(secondName);
  }
  displayVal='';
  getValue(val:string)
  {
    this.displayVal=val;
    console.log(val)
  }
  title2 = 'Counters in Angular-'
  count=0
  counter(type:string){
    type==='add'? this.count++:this.count--;
  }
  name='Sanjana Agrawal'
  title3='If-else Condition-'
  show="yes"
  title4='Mltiple condition or Else-if-'
  color='violet';

}
