import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  testGetApi() {
    console.log('GET API');
  }

  testPostApi() {
    console.log('POST API');

  }
}
