import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpdataService {
//  baseUrl = 'https://myphotoserver-txbr.onrender.com/';
 baseUrl = 'http://localhost:3000/';
 constructor(private http: HttpClient) { }

 private getHeaders(): HttpHeaders {
  return new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`
  });
}

  getMethod(suburl: string) { //photoownerusers
    return this.http.get(`${this.baseUrl}${suburl}`);
  }

  postData(req: any, url: string) {
    return this.http.post(`${this.baseUrl}${url}`, req);
  }

  getMethod1(suburl: string) {
    const headers = this.getHeaders();
    return this.http.get(`${this.baseUrl}${suburl}` );
  }
}
