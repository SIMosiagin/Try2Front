import { Component, OnInit } from '@angular/core';
import {ColumnList} from "../entity/ColumnList";
import {ValidationType} from "../entity/ValidationType";
import {ValidationSqlTemplate} from "../entity/ValidationSqlTemplate";
import {MappingService} from "../service/Mapping.service";
import {ValidationParamsList} from "../entity/ValidationParamsList";
import {ValidationParams} from "../entity/ValidationParams";
import {Validation} from "../entity/Validation";
import {ValidationList} from "../entity/ValidationList";
import {ValidationService} from "../service/Validation.service";
import {TableList} from "../entity/TableList";
import {XlsxService} from "../service/XlsxService.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-validation-list',
  templateUrl: './validation-list.component.html',
  styleUrls: ['./validation-list.component.css']
})
export class ValidationListComponent implements OnInit {


  public tableList: TableList;
  public validation: Array<Validation> = new Array<Validation>();
  public validationList: Array<ValidationList>;
  public validationType: Array<ValidationType>;
  public validationParamsList: Array<ValidationParamsList>;
  public validationParams: Array<ValidationParams>;
  public validationSqlTemplate: Array<ValidationSqlTemplate>;
  public mappingColumns: Array<ColumnList>

  constructor(public validationService: ValidationService,
              public mappingService: MappingService,
              public xlsxService: XlsxService,
              public router: Router) { }

  ngOnInit() {
    console.log("OnInit valComp")
    this.validationType = this.validationService.getValidationType();
    this.validationList = this.validationService.getValidationList();
    this.mappingColumns = this.mappingService.getMappingColumns();
    this.validation = this.validationService.getValidation();
    this.tableList = this.xlsxService.getTableList();
    console.log(this.validationType);
  }

  removeVal(val){
    this.validation = this.validation.filter(tVal => tVal != val);
    this.validationService.removeValidation(val);
  }

  addValidationList(){
    let tmpVal :Validation =  new Validation(null, this.tableList, null, new ValidationList(null,"",null,false));
    this.validationService.putValidation(tmpVal).subscribe(res => {
      this.validationService.setValidationForUpdate(res);
      this.validation.push(this.validationService.getValidationForUpdate());
    });
    console.log("addValidationList ");
    console.log(this.validation);
    console.log(this.validationType);
  }

  setType(event, valList:Validation){
    for (let i in this.validationType){
      if (this.validationType[i].name == event.target.value){
        valList.validationList.validationType = this.validationType[i];
        break;
      }
    }
  }

  updateVal(valList: Validation){

    this.validationService.putValidation(valList).subscribe(res => {
      this.validationService.setValidationForUpdate(res);
      this.validation.push(this.validationService.getValidationForUpdate());
      this.router.navigate(['/updateValidationList']);
    });

    //this.validationService.setValidationForUpdate(valList);
    // console.log("set valListUp");
    // console.log(valList);
    // console.log(this.validationService.getValidationForUpdate());

  }

  executeValidation(){
    this.validationService.executeValidation().subscribe(res => {
      console.log(res);
    })
  }
}
