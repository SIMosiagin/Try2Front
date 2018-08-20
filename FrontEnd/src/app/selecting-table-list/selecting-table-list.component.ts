import { Component, OnInit, DoCheck } from '@angular/core';
import {TableList} from "../entity/TableList";
import {XlsxService} from "../service/XlsxService.service";
import {Router} from "@angular/router";
import {MappingService} from "../service/Mapping.service";

@Component({
  selector: 'app-selecting-table-list',
  templateUrl: './selecting-table-list.component.html',
  styleUrls: ['./selecting-table-list.component.css']
})
export class SelectingTableListComponent implements OnInit, DoCheck{

  private tableLists: TableList[];
  private selectedTransitTableComp: string = "";



  constructor(private xlsxService : XlsxService,
              private router: Router,
              private mappingService:MappingService) { }

  saveNewTable(transitTableName:string){
    this.xlsxService.addTableList(transitTableName);
    this.xlsxService.setTTable(transitTableName);
    this.selectedTransitTableComp =transitTableName;
    this.tableLists = this.xlsxService.getTableLists();
  }

  setTransitTable(event){
    this.xlsxService.setTTable(event.target.value);
    this.selectedTransitTableComp = event.target.value;
  }

  goToMapping() {


    this.xlsxService.testSync();
    this.xlsxService.getValidation();
    // this.xlsxService.uploadXlsx();
    // console.log(this.mappingService.getMappingColumns())
    // this.router.navigate(['/mappingSkills']);
  }

  ngOnInit() {
  }

  ngDoCheck() {
    this.tableLists = this.xlsxService.getTableLists();
  }

}
