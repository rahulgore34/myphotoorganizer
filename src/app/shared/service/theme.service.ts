import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { ɵDomRendererFactory2 } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private readonly darkThemeClass = 'dark-theme';
  private readonly lightThemeClass = 'light-theme';

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
   }

   setDarkTheme() {
    this.renderer.addClass(document.body, this.darkThemeClass);
    this.renderer.removeClass(document.body, this.lightThemeClass);
   }

   setLightTheme() {
    this.renderer.addClass(document.body, this.lightThemeClass);
    this.renderer.removeClass(document.body, this.darkThemeClass);
   }
}
