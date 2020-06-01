import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }

public doEnroll(userModel){
  return this.http.post("http://localhost:8080/addcandidate",userModel);
}

}
