import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})
export class TaskBoardComponent implements OnInit {
  public lstTasks: any[] | any;
  public lstProgress: any[] | any;
  public lstCompleted: any[] | any;
  public lstInprogress: any[] | any;
  public lstHold: any[] | any;
  public lstReview: any[] | any;
  public url: any = "taskboard";
  public droppedItems: any[] = [];
  onItemDrop(e: any) {
    // Get the dropped data here

    this.droppedItems.push(e.dragData);
  }

  constructor() { }

  ngOnInit(): void {
    (this.lstProgress = [
      {
        id: 1,
        taskname: "John deo",
        taskpriority: "Medium",
        duedate: "02-05-2020",
        followers: "John deo",
        status: "Active",
      },
    ]),
      (this.lstCompleted = [
        {
          id: 1,
          taskname: "John smith",
          taskpriority: "Low",
          duedate: "15-08-2020",
          followers: "John deo",
          status: "Active",
        },
      ]),
      (this.lstInprogress = [
        {
          id: 1,
          taskname: "John deo",
          taskpriority: "Medium",
          duedate: "02-05-2020",
          followers: "John deo",
          status: "Active",
        },
      ]);
    (this.lstHold = [
      {
        id: 1,
        taskname: "John deo",
        taskpriority: "Medium",
        duedate: "02-05-2020",
        followers: "John deo",
        status: "Active",
      },
    ]),
      (this.lstReview = [
        {
          id: 1,
          taskname: "John deo",
          taskpriority: "Medium",
          duedate: "02-05-2020",
          followers: "John deo",
          status: "Active",
        },
      ]),
      (this.droppedItems = [
        {
          id: 1,
          taskname: "website redesign",
          taskpriority: "Medium",
          duedate: "02-05-2020",
          followers: "John deo",
          status: "Active",
        },
        {
          id: 2,
          taskname: "Make a wireframe",
          taskpriority: "High",
          duedate: "02-05-2020",
          followers: "Richard deo",
          status: "Active",
        },
      ]);
    
  }

  //  drap and drop 
  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  }
  


