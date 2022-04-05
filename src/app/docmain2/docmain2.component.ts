import { Component, OnInit } from '@angular/core';
import { DocumentDataService } from '../document-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docmain2',
  templateUrl: './docmain2.component.html',
  styleUrls: ['./docmain2.component.css']
})
export class Docmain2Component implements OnInit {
  public conditionPdf:any=false;
  public conditionWord:any=false;
  public conditionExcel:any=false;
  router:any;

  constructor(private documentDataService : DocumentDataService, private route:Router) { }

  ngOnInit(): void {
    alert("called");
    if(this.documentDataService.getType()=="excel"){
      this.conditionExcel= true;
    }
    if(this.documentDataService.getType()=="word"){
      this.conditionWord= true;
    }
    if(this.documentDataService.getType()=="pdf"){
      this.conditionPdf=true;
    }
    
  }


}
