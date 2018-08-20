import { Component, OnInit, DoCheck } from '@angular/core';
import {excelService} from "./service/excel.service";
import {Sheets} from "../entity/Sheets";

@Component({
  selector: 'app-upload-excel',
  templateUrl: './upload-excel.component.html',
  styleUrls: ['./upload-excel.component.css'],
  providers: [excelService]
})
export class UploadExcelComponent implements OnInit, DoCheck {

  isNotFileSelected: boolean = true;

  sheetsCom: Sheets[] = [];


  constructor(private excelServise: excelService) { }

  ngOnInit() {
  }

  onFileSelected(event) {
    this.excelServise.setExcel(<File> event.target.files[0]);
  }

  uploadExcel(){
    if (this.excelServise.getExcel() == null) {
      alert("Select file")
    }
    else {
    this.excelServise.uploadExcel();
    this.sheetsCom = this.excelServise.getSheets();
    console.log(this.sheetsCom);
    // this.isNotFileSelected = false;
    }
  }

  onSelectSheet(sheet: Sheets){
    this.excelServise.uploadSheetName(sheet.name);
  }

  TTT(){
    this.sheetsCom = this.excelServise.getSheets();
    this.isNotFileSelected = false;
  }

  ngDoCheck() {
    this.sheetsCom = this.excelServise.getSheets();
  }
}
