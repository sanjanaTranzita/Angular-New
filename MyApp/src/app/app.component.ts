import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Hello! Welcome to Angular Tutorial!!!'
  title1 ='Important Events in Angular!'
disable: any;
rating:number=6;
taskForm: any;
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
  color1='1234';
  users=['Sanjana','Ankita','Ananya','Abhi','Vivek','Ranjeet'];
  userDetails =[
    { name: 'Sanjana', email: 'sam@tranzita.com',phone: '9898'},
    { name: 'Ankita', email: 'ank@tranzita.com',phone: '1111'},
    { name: 'Ananya', email: 'san@tranzita.com',phone: '1212'},
    { name: 'Abhi', email: 'ana@tranzita.com',phone: '3443'},
    { name: 'Vivek', email: 'viv@tranzita.com',phone: '8765'},
    { name: 'Ranjeet', email: 'ranj@tranzita.com',phone: '1234'},

  ];
  user12=[
    { name: 'Sanjana Agrawal',phone: '9898', socialAccounts:['facebook','instagram','Gmail']},
    { name: 'Ankita Jaiswal',phone: '1111',socialAccounts:['Youtube','instagram','Hotmail']},
    { name: 'Abhi Saxena',phone: '1212',socialAccounts:['facebook','Hotmail','Gmail']},
    { name: 'Ranjeet Singh',phone: '2121',socialAccounts:['facebook','snapchat','Youtube']},
    { name: 'Ashutosh Nishad',phone: '9898',socialAccounts:['Snapchat','instagram','Gmail']},
  ];
  color2='darkmagenta';
  bgColor='aliceblue';

  updateColor()
  {
    this.color2='rgb(20,153,220)';
    this.bgColor='violet';
  }
  resetDefault(){
    this.color2='darkmagenta'
    this.bgColor='aliceblue'
  }
  userData:any={};
  getData2(data:NgForm){
    console.warn(data)
    this.userData=data
  }
show1 = true;
display:boolean =true;
textColor = '#000'; 

isDisplay() {
    return this.display;
  }

  toggle() {
    this.display = !this.display;
    this.textColor = this.display ? 'rgb(129, 95, 160)' : '#b873e6';
  }

  change(event: any) {
    if (this.display) {
      if (!event.checked && !confirm("Are you sure")) {
        event.source.checked = true;
        console.log("Toggle should not change if I click the cancel button");
      } else {
        console.log("Toggle");
      }
    }
  }
  data5=10;
  updateChild(){
    this.data5 =Math.floor( Math.random()*10)
  }
  updateData(item:string){
    alert(item)
  }
 }




