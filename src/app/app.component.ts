import { AfterViewInit, Component } from '@angular/core';
import { ThemeService } from './shared/service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'myphotos';

  constructor(private themeService: ThemeService) {}
  ngAfterViewInit(): void {
    this.setTheme('dark');
  }
  setTheme(theme: string) {
   if(theme === 'dark') {
    this.themeService.setDarkTheme();
   } else {
    this.themeService.setLightTheme();
   }
  }
}
