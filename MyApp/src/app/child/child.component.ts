import { Component,OnInit,Input} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit {
  constructor(){}
  
  @ Input() item =2;
  ngOnInit(): void {
    
  }
  updateChild(){
    
  }


}
