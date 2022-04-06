import { Component, OnInit } from '@angular/core';
import { DocumentDataService } from '../document-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docmain2',
  templateUrl: './docmain2.component.html',
  styleUrls: ['./docmain2.component.css']
})
export class Docmain2Component implements OnInit {
  public name:any = " ";
  public type:any = " ";
  public description:any = " ";
  public file:any;
  public fileName:any="";

  public conditionPdf:any=false;
  public conditionWord:any=false;
  public conditionExcel:any=false;
  router:any;

  constructor(private documentDataService : DocumentDataService, private route:Router) { }

  ngOnInit(): void {

    this.name = this.documentDataService.getName()
    // this.name = this.documentDataService.getType()
    // alert(this.name);
    this.description = this.documentDataService.getDescription()
    // alert(this.description);
    // if(this.documentDataService.getType()=="excel"){
    //   this.conditionExcel= true;
    // }
    // if(this.documentDataService.getType()=="word"){
    //   this.conditionWord= true;
    // }
    // if(this.documentDataService.getType()=="pdf"){
    //   this.conditionPdf=true;
    // }
    
  }
  checkradio(event:any){
    
      this.type=event.target.value;
      if(event.target.value == "pdf"){
         this.conditionPdf=true;
        this.conditionWord=false;
        this.conditionExcel=false;
      }
      if(event.target.value == "word"){
        this.conditionPdf=false;
        this.conditionWord=true;
        this.conditionExcel=false;
      }
      if(event.target.value == "excel"){
        this.conditionPdf=false;
        this.conditionWord=false;
        this.conditionExcel=true;
      }
   
  }
  showfile(event:any){
    this.file = event.target.value;
    console.log(event.target.value);
    this.fileName= this.file.slice(12, );
  }
  


}
