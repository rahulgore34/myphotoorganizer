import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpdataService {
 baseUrl = 'https://myphotoserver-txbr.onrender.com/'
//  baseUrl = 'http://localhost:3000/' 
 constructor(private http: HttpClient) { }

  getMethod(suburl: string) { //photoownerusers
    return this.http.get(`${this.baseUrl}${suburl}`);
  }

  postData(req: any, url: string) {
    return this.http.post(`${this.baseUrl}${url}`, req);
  }
}
