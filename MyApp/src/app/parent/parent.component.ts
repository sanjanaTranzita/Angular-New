import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit {
  constructor(){}
 @Output() updateDataEvent = new EventEmitter<string>();
  ngOnInit(): void {
   
  }

}
