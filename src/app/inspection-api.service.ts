import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InspectionApiService {

  readonly inspectionAPIUrl = "https://localhost:7193/api";

  constructor(private http:HttpClient) { }

  getInspectionList():Observable<any[]> {

    return this.http.get<any>(this.inspectionAPIUrl + '/Inspections');
  }

  addInspection(data:any){
    return this.http.post(this.inspectionAPIUrl + '/Inspections', data);
  }

  updateInspection(id:number|string, data:any){

    return this.http.put(this.inspectionAPIUrl + `/Inspections/${id}`, data);
  }

  deleteInspection(id:number|string){

    return this.http.delete(this.inspectionAPIUrl + `/Inspections/${id}`);
  }

  getInspectionTypesList():Observable<any[]>{

    return this.http.get<any>(this.inspectionAPIUrl + '/InspectionTypes');
  }

  addInspectionTypes(data:any){
    return this.http.post(this.inspectionAPIUrl + 'InspectionTypes', data);
  }

  updateInspectionTypes(id:number|string, data:any){
    return this.http.put(this.inspectionAPIUrl + `/InspectionTypes/${id}`, data);

  }

  deleteInspectionTypes(id:number|string){
    return this.http.delete(this.inspectionAPIUrl + `/InspectionTypes/${id}`);
  }
  
  getStatusList():Observable<any[]>{
    return this.http.get<any>(this.inspectionAPIUrl + '/status');
  }

  addStatus(data:any){
    return this.http.post(this.inspectionAPIUrl + '/status', data);
  }

  updateStatus(id:number|string, data:any){
    return this.http.put(this.inspectionAPIUrl + `/status/${id}`, data);
  }

  deleteStatus(id:number|string){
    return this.http.delete(this.inspectionAPIUrl + `/status/${id}`);
  }



}
