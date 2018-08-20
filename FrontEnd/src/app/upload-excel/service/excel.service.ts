import {Sheets} from "../../entity/Sheets";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {XlsxList} from "../../entity/XlsxList";
import {XlsxService} from "../../service/XlsxService.service";
import {TableList} from "../../entity/TableList";

@Injectable()
export class excelService{

  private sheets: Sheets[];
  private selectedFile: File = null;

  constructor(private http: HttpClient,
              private xlsxService: XlsxService){
  }

  public getSheets() :Sheets[] {
    return this.sheets;
  }

  public addSheets(id: number, name: string){
    this.sheets.push(new Sheets(id, name));
  }

  public setExcel(file:File ){
    this.selectedFile = file;
    console.log(file);

  }

  public uploadExcel(){
      const fd = new FormData();
      fd.append('excel', this.selectedFile, this.selectedFile.name);
      this.http.post<Sheets[]>('http://localhost:8080/uploadExcel', fd)
        .subscribe(res=> {
          this.sheets = res;
        });
  }

  public uploadSheetName(sheetName:string){
    this.http.get<Array<TableList>>('http://localhost:8080/chousedSheet/' + sheetName).subscribe( res =>{
      this.xlsxService.setTableLists(res);
    });
  }

  public getExcel(): File {
    return this.selectedFile;
  }

}
