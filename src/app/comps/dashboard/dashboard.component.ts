import { Component } from '@angular/core';
import { HttpdataService } from 'src/app/shared/service/httpdata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private httpDataService: HttpdataService) { }
  testGetApi() {
    console.log('GET API');
    this.httpDataService.getMethod('photoownerusers/testget').subscribe(res1 => {
      console.log('RES1 ', res1);
    }, err => {
      console.log('ERROR ', err);
    })
  }

  testPostApi() {
    console.log('POST API');
    this.httpDataService.postData({data: 'anything'}, 'photoownerusers/testpost').subscribe(res2 => {
      console.log('RES2 ', res2);
    }, err => {
      console.log('ERROR ', err);
    })
  }
}
