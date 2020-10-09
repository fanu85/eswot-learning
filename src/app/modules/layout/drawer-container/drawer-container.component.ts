import { Component, OnInit } from '@angular/core';
import {SchoolSubject} from 'src/app/models/school-subject';

@Component({
  selector: 'app-drawer-container',
  templateUrl: './drawer-container.component.html',
  styleUrls: ['./drawer-container.component.css']
})
export class DrawerContainerComponent implements OnInit {

  subjects: SchoolSubject[];

  constructor() { }

  ngOnInit(): void {
      this.subjects = [
      {
        id: 1,
        name: "Chemistry",
      },

      {
        id: 1,
        name: "Mathematics",
      },

      {
        id: 1,
        name: "Physics",
      },

      {
        id: 1,
        name: "Biology",
      },

      {
        id: 1,
        name: "Computer Studies",
      }

      ];
  }

}
