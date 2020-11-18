import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioServicesService {

  Skills: any[] = [];
  Education: any[] = [];
  Experience: any[] = [];
  //activamos el http client importandolo
  constructor(private http: HttpClient) { 
    console.log("Json Firabase");
    this.LoadSkills();
    this.LoadEducation();
    this.LoadExperience();
  }

  private LoadSkills(){
    this.http.get('https://portfolio-3867f.firebaseio.com/Skills.json')
    .subscribe((resp: any[]) =>{
      this.Skills = resp;
      console.log(resp);
    });
  }
  private LoadEducation(){
    this.http.get('https://portfolio-3867f.firebaseio.com/Education.json')
    .subscribe((resp: any[]) =>{
      this.Education= resp;
      console.log(resp);
    });
  }
  private LoadExperience(){
    this.http.get('https://portfolio-3867f.firebaseio.com/Experience.json')
    .subscribe((resp: any[]) =>{
      this.Experience= resp;
      console.log(resp);
    });
  }
}

//1To import a Json file from bd, we have to create a library in app.module.ts in array imports next browserModule
//2  next browserModdule we insert HttpClientModule