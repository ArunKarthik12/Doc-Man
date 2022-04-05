import { Component, OnInit } from '@angular/core';
import { DocumentDataService } from '../document-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docmain1',
  templateUrl: './docmain1.component.html',
  styleUrls: ['./docmain1.component.css']
})
export class Docmain1Component implements OnInit {

  public name:any;
  public type:any;
  public description:any;
  
  router:any;

  constructor(private documentDataService : DocumentDataService, private route:Router) { }

  ngOnInit(): void {
  }
  setName(event:any){
    // alert(event.target.value);
    this.name=event.target.value;
    // this.documentDataService.setName(event.target.value);
    
  }
  setType(event:any){
    this.type=""+event.target.value;
    // alert(this.type);
    // this.documentDataService.setType(event.target.value);
  }
  setDescription(event:any){
    this.description=event.target.value;
    // alert(event.target.value);
    // this.documentDataService.setDescription(event.target.value);
  }
  addDocuments(){
    // alert(this.type);
    this.documentDataService.addDocuments(this.name,this.type,this.description);
    this.route.navigate(['/docmain2']);
  }

}
