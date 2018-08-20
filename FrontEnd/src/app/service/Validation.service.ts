import {Injectable} from "@angular/core";
import {Validation} from "../entity/Validation";
import {ValidationList} from "../entity/ValidationList";
import {ValidationType} from "../entity/ValidationType";
import {ValidationParams} from "../entity/ValidationParams";
import {ValidationParamsList} from "../entity/ValidationParamsList";
import {ValidationSqlTemplate} from "../entity/ValidationSqlTemplate";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {TableList} from "../entity/TableList";
import {XlsxList} from "../entity/XlsxList";
import {XlsxService} from "./XlsxService.service";
import {Observable} from "rxjs/Observable";



@Injectable()
export class ValidationService{


  //private tableList: TableList;
  private validation: Array<Validation> = new Array<Validation>();
  private validationList: Array<ValidationList> = new Array<ValidationList>();
  private validationType: Array<ValidationType> = new Array<ValidationType>();
  private validationParamsList: Array<ValidationParamsList> =  new Array<ValidationParamsList>();
  private validationParams: Array<ValidationParams> = new Array<ValidationParams>();
  private validationSqlTemplate: Array<ValidationSqlTemplate> = new Array<ValidationSqlTemplate>();


  public validationForUpdate: Validation;

  constructor(private http:HttpClient,
              private router: Router){

  }

  equals(firstObj, secondObj, bool: boolean = true) :boolean{
    var keys = Object.keys(firstObj)

    keys.forEach(key=>{
      if (firstObj[key] instanceof Object){
        this.equals(firstObj[key],secondObj[key])
      }
      else if(firstObj[key] != secondObj[key]){
        bool = false;
      }
    })
    return bool;

  }

  removeValidation(val: Validation){
    this.http.delete('http://localhost:8080/removeValidation/'+val.id).subscribe();
  }

  getValidationForUpdate():Validation{
    return this.validationForUpdate;
  }

  setValidationForUpdate(val: Validation){
    this.validationForUpdate = val;
  }


  getValidation(): Array<Validation> {
    return this.validation;
  }

  setValidation(validation: Array<Validation>) {
    this.validation = validation;
  }

  getValidationList():  Array<ValidationList> {
    return this.validationList;
  }

  setValidationList(value: Array<ValidationList>) {
    this.validationList = value;
  }

  getValidationType(): Array<ValidationType> {
    return this.validationType;
  }

  setValidationType(value: Array<ValidationType>) {
    this.validationType = value;
  }

  getValidationParamsList(): Array<ValidationParamsList> {
    return this.validationParamsList;
  }

  setValidationParamsList(value: Array<ValidationParamsList>) {
    this.validationParamsList = value;
  }

  getValidationParams(): Array<ValidationParams> {
    return this.validationParams;
  }

  setValidationParams(value: Array<ValidationParams>) {
    this.validationParams = value;
  }

  getValidationSqlTemplate(): Array<ValidationSqlTemplate> {
    return this.validationSqlTemplate;
  }

  setValidationSqlTemplate(value: Array<ValidationSqlTemplate>) {
    this.validationSqlTemplate = value;
  }

  getValFromServer(){
     this.http.get<Array<ValidationList>>('http://localhost:8080/getValidationList').subscribe(response=>{
      this.validationList = response;
      this.http.get<Array<ValidationType>>('http://localhost:8080/getValidationType')
        .subscribe(res=> this.validationType = res);
      this.http.get<Array<ValidationParamsList>>('http://localhost:8080/getValidationParamList')
        .subscribe(res => this.validationParamsList = res);
      this.http.get<Array<ValidationSqlTemplate>>('http://localhost:8080/getValidationSqlTemplate')
        .subscribe(res => this.validationSqlTemplate = res);
      this.http.get<Array<ValidationParams>>('http://localhost:8080/getValidationParams')
        .subscribe(res => this.validationParams = res);
      this.http.get<Array<Validation>>('http://localhost:8080/getValidations')
        .subscribe(res => this.validation = res);
    });
  }


  updateValidationList(val ){
    this.router.navigate(['/updateValidationList']);
  }

  getValidationSqlTemplateByValidationList(valList: ValidationList): ValidationSqlTemplate{
    for (let i in this.validationList){
      for (let x in this.validationSqlTemplate){
        if(this.equals(this.validationList[i], this.validationSqlTemplate[x].validationList)){
          return this.validationSqlTemplate[x];
        }
      }
    }
    return new ValidationSqlTemplate(null,valList,"Enter the select");
  }

   putValidation(validation: Validation) :Observable<Validation> {
     return  this.http.put<Validation>('http://localhost:8080/putValidation', validation);
  }

  putValidationList(validationParamList: ValidationParamsList): Observable<ValidationParamsList>{
    return this.http.put<ValidationParamsList>('http://localhost:8080/putValidationParamsList', validationParamList);
  }

  putValidationParamsListArray(valParArray: Array<ValidationParamsList>) :Observable<Array<ValidationParamsList>> {
    return  this.http.put<Array<ValidationParamsList>>('http://localhost:8080/putValidationParamsListArray', valParArray);
  }

  putValidationListArray(valParArray: Array<ValidationList>) :Observable<Array<ValidationList>> {
    return  this.http.put<Array<ValidationList>>('http://localhost:8080/putValidationListArray', valParArray);
  }

  putValidationSQLArray(valParArray: Array<ValidationSqlTemplate>) :Observable<Array<ValidationSqlTemplate>> {
    return  this.http.put<Array<ValidationSqlTemplate>>('http://localhost:8080/putValidationSQLArray', valParArray);
  }

  putValidationParamsArray(valParArray: Array<ValidationParams>) :Observable<Array<ValidationParams>> {
    return  this.http.put<Array<ValidationParams>>('http://localhost:8080/putValidationParamsArray', valParArray);
  }

  putValidationSQL(valSql: ValidationSqlTemplate) :Observable<Array<ValidationSqlTemplate>> {
    return  this.http.put<Array<ValidationSqlTemplate>>('http://localhost:8080/putValidationSQL', valSql);
  }

  executeValidation() : Observable<string>{
    return this.http.post<string>('http://localhost:8080/executeValidation', this.validation);
  }

}
