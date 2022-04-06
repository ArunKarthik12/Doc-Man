import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentDataService {
  // public name:any;
  // public type:any;
  // public description:any;
  public payload:any;
  public documents:any=[];

  constructor() { }
  // setName(event:any){
  //   this.name=event.target.value;
  // }
  // setDescription(event:any){
  //   this.description=event.target.value;
  // }
  // setType(event:any){
  //   this.type=event.target.value;
  // }
  addDocuments(name:any, description:any){
      let data=[name,"",description,""];
      this.documents.push(data);
      // alert(name);
      // alert(type);
      // alert(description);
      console.log(this.documents);
  };

  updateDocument(payload:any){
      let length=this.documents.length();
      this.documents[length-1][3]=payload;
  };

  getType(){
    let data =this.documents[this.documents.length-1];
    return data[1];
  };
  getName(){
    let data =this.documents[this.documents.length-1];
    return data[0];
    
  };
  getDescription(){
    let data =this.documents[this.documents.length-1];
    return data[2];
    
  };
}
