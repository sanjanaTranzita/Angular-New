import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  info1:string[]=["Sanjana Agrawal", "E123","jbl@abc.net"]
  info2:string[]=["Ankita Jaiswal", "E345","ank@abc.net"]
  info3:string[]=["Abhi saxena", "E987","abhi@abc.net"]
  
  getInfo1():string[]{
    return this.info1
  }
  getInfo2():string[]{
    return this.info2
  }
  getInfo3():string[]{
    return this.info3
  }
  addInfo(info:any){
    this.info1.push(info)
    this.info2.push(info)
    this.info3.push(info)
    return this.info1
  }

  constructor() { }
}
