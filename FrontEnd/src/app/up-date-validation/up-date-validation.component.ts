import {Component, Input, OnInit} from '@angular/core';
import {ValidationService} from "../service/Validation.service";
import {ValidationList} from "../entity/ValidationList";
import {ColumnList} from "../entity/ColumnList";
import {ValidationType} from "../entity/ValidationType";
import {ValidationSqlTemplate} from "../entity/ValidationSqlTemplate";
import {ValidationParamsList} from "../entity/ValidationParamsList";
import {ValidationParams} from "../entity/ValidationParams";
import {Validation} from "../entity/Validation";
import {MappingService} from "../service/Mapping.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-up-date-validation',
  templateUrl: './up-date-validation.component.html',
  styleUrls: ['./up-date-validation.component.css']
})
export class UpDateValidationComponent implements OnInit {


  private validation: Validation;
  private validationParamsList : Array<ValidationParamsList>;

  private validationType: Array<ValidationType>;
  private allValidationParamsList: Array<ValidationParamsList> = new Array<ValidationParamsList>();
  private validationParams: Array<ValidationParams> = new Array<ValidationParams>();
  private validationSqlTemplate: ValidationSqlTemplate;
  private mappingColumns: Array<ColumnList>

  constructor(private validationService: ValidationService,
              public mappingService: MappingService,
              private activateRoute: ActivatedRoute,
              private http: HttpClient,
              private router: Router) {
    // this.validationList.id = activateRoute.snapshot.params['id'];
    // this.validationList.name = activateRoute.snapshot.params['name'];
    // this.validationList.type = activateRoute.snapshot.params['type'];
    // this.validationList.isManual = activateRoute.snapshot.params['isManual'];
  }

  ngOnInit() {

    this.validation = this.validationService.getValidationForUpdate();
    console.log("ngOnInit UpDateValidationComponent");
    this.allValidationParamsList = this.validationService.getValidationParamsList()
      .filter( vpl => vpl.validationList = this.validation.validationList);
    try{
      this.validationParamsList = this.allValidationParamsList.filter(vpl=>vpl.validationList == this.validation.validationList);
      this.validationSqlTemplate = this.validationService.getValidationSqlTemplateByValidationList(this.validation.validationList);
    }
    catch {
    }

    var tmp: Array<ValidationParams> = this.validationService.getValidationParams();
    for (let i in tmp){
      for (let y in this.validationParamsList){
        if (this.validationService.equals(tmp[i].validationParamList, this.validationParamsList[y])){
          tmp[i].tag = 'manual';
          this.validationParams.push(tmp[i]);
        }
      }
    }

    this.mappingColumns = this.mappingService.getMappingColumns();
    //this.validationParams = this.validationService.getValidationParams().filter( vp => vp.validationList = this.validationList);

    if (this.validationSqlTemplate == undefined || this.validationSqlTemplate == null){
      this.validationSqlTemplate = new ValidationSqlTemplate(null,null, "Enter template");
    }
    console.log(this.validationSqlTemplate);
  }

  removeValPL(valPL){
    this.validationParamsList = this.validationParamsList.filter(vpl => vpl !=valPL);
  }

  addValPL(){
    var tmp : ValidationParamsList = new ValidationParamsList(null,"","",false, this.validation.validationList);
    this.validationService.putValidationList(tmp).subscribe(res =>{
      this.validationParamsList.push(res);
      console.log(this.validation.validationList);
    })
  }

  removeValParams(valParams){
    this.validationParams = this.validationParams.filter(vp => vp != valParams);
  }

  addValParams(){
    this.validationParams.push( new ValidationParams(null,null,null,null));
    console.log(this.validationParams);
  }

  setValParamListIntoValParams(event, valParams:ValidationParams){
    for (let i in this.validationParamsList){
      if (this.validationParamsList[i].name==event.target.value){
        valParams.validationParamList = this.validationParamsList[i];
        valParams.validation = this.validation;
        break;
      }
    }
  }

  test(valParams : ValidationParams){
    console.log(valParams);
  }

  setTypeValParams(type: string, valParams: ValidationParams){
    valParams.tag = type;
    if  (valParams.tag == 'table'){
      valParams.value = this.validation.tableList.name;
    }
  }

  setMapColValParams(event, valParams : ValidationParams){
    for (let i in this.mappingColumns){
      if  (this.mappingColumns[i].id == event.target.value){
        valParams.value = this.mappingColumns[i].name;
        break;
      }
    }
  }

  saveValidation(){
    this.validationService.putValidationParamsListArray(this.validationParamsList).subscribe(res => {
      this.validationService.setValidationParamsList(res);
    })
    this.validationService.putValidationParamsArray(this.validationParams).subscribe(res=>{
      this.validationService.setValidationParams(res);
    })
    this.validationService.putValidationSQL(this.validationSqlTemplate).subscribe(res=>{
      this.validationService.setValidationSqlTemplate(res)
    })
    this.router.navigate(['/validationList']);
  }

  setSQLTemplate(event){
    this.validationSqlTemplate.sqlText = event.target.value;
  }
}
