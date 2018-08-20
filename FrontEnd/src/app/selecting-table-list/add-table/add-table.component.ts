import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.css']
})
export class AddTableComponent implements OnInit {

  private transitTable:string;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(content) {

    this.modalService.open(content).result.then((result) => {
      content._parentView.parent.component.saveNewTable(this.transitTable);
    });
  }

}
