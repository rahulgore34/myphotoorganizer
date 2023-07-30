import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HttpdataService {
 baseUrl = 'https://myphotoserver-txbr.onrender.com/';
 baseSignupURL = 'https://myphotoserver-txbr.onrender.com/photoownerusers/signup';
 baseSigninURL = 'https://myphotoserver-txbr.onrender.com/photoownerusers/signin';
  constructor(private http: HttpClient) { }

  getMethod(suburl: string) { //photoownerusers
    return this.http.get(`${this.baseUrl}${suburl}`);
  }

  postData(req: any, url: string) {
    return this.http.post(`${this.baseUrl}${url}`, req);
  }
  postSignupData(req:any,url:string){
 return this.http.post(`${this.baseSignupURL}${url}`, req);
  }
  postSigninData(req:any,url:string){
    return this.http.post(`${this.baseSigninURL}${url}`, req);
     }
}
