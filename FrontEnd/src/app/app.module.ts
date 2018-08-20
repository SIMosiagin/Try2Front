import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UploadExcelComponent } from './upload-excel/upload-excel.component';
import { MappingSkillsComponent } from './mapping-skills/mapping-skills.component';
import { MappingFieldsComponent } from './mapping-fields/mapping-fields.component';
import { UpdateSkillComponent } from './mapping-skills/update-skill/update-skill.component';
import { UpdateSkillGroupComponent } from './mapping-skills/update-skill-group/update-skill-group.component';
import { AddTransitTableComponent } from './mapping-fields/add-transit-table/add-transit-table.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {XlsxList} from "./entity/XlsxList";
import {ColumnList} from "./entity/ColumnList";
import { SelectingTableListComponent } from './selecting-table-list/selecting-table-list.component';
import { AddTableComponent } from './selecting-table-list/add-table/add-table.component';
import {XlsxService} from "./service/XlsxService.service";
import {MappingService} from "./service/Mapping.service";
import {ValidationService} from "./service/Validation.service";
import { ValidationListComponent } from './validation-list/validation-list.component';
import { ValidationSqlTemplateComponent } from './validation-list/validation-sql-template/validation-sql-template.component';
import { UpDateValidationComponent } from './up-date-validation/up-date-validation.component';

const routes  = [
  {path: '', component: AppComponent},
  {path: 'uploadExcel', component: UploadExcelComponent},
  {path: 'selectingTraisitTable', component: SelectingTableListComponent},
  {path: 'mappingSkills', component: MappingSkillsComponent},
  {path: 'mappingFields', component: MappingFieldsComponent},
  {path: 'validationList', component: ValidationListComponent},
  {path: 'updateValidationList', component: UpDateValidationComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    UploadExcelComponent,
    MappingSkillsComponent,
    MappingFieldsComponent,
    UpdateSkillComponent,
    UpdateSkillGroupComponent,
    AddTransitTableComponent,
    SelectingTableListComponent,
    AddTableComponent,
    ValidationListComponent,
    ValidationSqlTemplateComponent,
    UpDateValidationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule.forRoot()
  ],
  providers: [XlsxList, ColumnList, XlsxService, MappingService, ValidationService],
  bootstrap: [AppComponent ]
})
export class AppModule { }
