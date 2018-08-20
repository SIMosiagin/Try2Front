import { Component, OnInit } from '@angular/core';
import {MappingService} from "../service/Mapping.service";
import {ColumnList} from "../entity/ColumnList";

@Component({
  selector: 'app-mapping-fields',
  templateUrl: './mapping-fields.component.html',
  styleUrls: ['./mapping-fields.component.css']
})
export class MappingFieldsComponent implements OnInit {

  public mappingColumnsComp: Array<ColumnList>;

  constructor(private mappingService: MappingService) { }

  ngOnInit() {
    this.mappingColumnsComp = this.mappingService.getMappingColumns();
  }

  setMapFieldLenght(mapF:ColumnList){
    if (mapF.size > 4000){
      mapF.size = 4000;
    }
    else if (mapF.size < 3){
      mapF.size = 3;
    }

  }

  validation(){
    this.mappingService.setMappingColumns(this.mappingColumnsComp);
    this.mappingService.uploadMappingFields();
    this.mappingService.goToValidation();
  }

}
