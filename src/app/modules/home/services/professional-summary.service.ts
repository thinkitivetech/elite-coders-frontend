import { Injectable } from "@angular/core";
import { ApiService } from "src/app/services/api/api.service";
import { ApiBaseUrl } from "src/app/utils/constants";
import { map } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class professionalSummaryService{

  constructor(private api:ApiService){

  }
    updateProfessionalSummary(professionalSummary: any) {
    
    }
  
    createProfessinoalSumery(values:any){
      return this.api.post(`${ApiBaseUrl}/professional/summary`,values).pipe(map(res=>{
        this.api.openSnackbar("Professinoal Summary Created.")
        return res
      }))
    }
  
    deleteProfessionalSummary(id: string) {
      
    }
  
    populateForm(professionalSummary: any) {
    }

}