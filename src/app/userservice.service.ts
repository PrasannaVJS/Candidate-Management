import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }

public doEnroll(userModel){
  return this.http.post("http://localhost:8081/addcandidate",userModel,{responseType:'text' as 'json'});
}

public getAllUsers(){
  return this.http.get("http://localhost:8081/getallcandidates");
}

public deleteUser(id){
  return this.http.delete("http://localhost:8081//deletecandidate/"+id);
}

public updateUser(id,grad){
  return this.http.put("http://localhost:8081/updatecandidate/"+id,grad);
}

public getUser(searchcontent){
  return this.http.get("http://localhost:8081/getcandidatebyid/"+searchcontent);
}

public searchByLocation(searchcontent){
  return this.http.get("http://localhost:8081/getcandidatebylocation/"+searchcontent);
}

public searchByJob(searchcontent){
  return this.http.get("http://localhost:8081/getcandidatebyjob/"+searchcontent);
}


}
