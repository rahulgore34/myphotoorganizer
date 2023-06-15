import { AfterViewInit, Component } from '@angular/core';
import { ThemeService } from './shared/service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'myphotos';
  selectedTheme = 'dark';
  constructor(private themeService: ThemeService) {}
  ngAfterViewInit(): void {
    this.setTheme(this.selectedTheme);
  }
  setTheme(theme: string) {
    this.selectedTheme = theme;
   if(theme === 'dark') {
    this.themeService.setDarkTheme();
   } else {
    this.themeService.setLightTheme();
   }
  }
}
