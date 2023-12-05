import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent implements OnInit {
  taskArray =[{taskName:"Brush Teeth",isCompleted:false}];
  
  constructor(){ }

  ngOnInit(): void {
    const storedTasks = localStorage.getItem('tasks');
    this.taskArray = storedTasks ? JSON.parse(storedTasks) : [];
    
  }
   
  onSubmit(form:NgForm){
    console.log(form);
    const newTask = {
      taskName: form.controls['task'].value,
      isCompleted: false
    };

    // Add new task to the array
    this.taskArray.push(newTask);

    // Save the updated tasks array to local storage
    localStorage.setItem('tasks', JSON.stringify(this.taskArray));

    form.reset();
  }

  onDelete(index:number){
    console.log(index);
    this.taskArray.splice(index,1);
    localStorage.setItem('tasks', JSON.stringify(this.taskArray));

  }
  onCheck(index:number){
    console.log(this.taskArray);
    this.taskArray[index].isCompleted =! this.taskArray[index].isCompleted;
    localStorage.setItem('tasks', JSON.stringify(this.taskArray));
  }

}
