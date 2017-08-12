import { Component, OnInit } from '@angular/core';
import { TranslateService } from './translate/translate.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public supportedLangs: any[];
  public translatedText: string;
  public welcome:string;
  title = 'app';
  constructor(private _translate: TranslateService) { }
  ngOnInit() {
    this.supportedLangs = [
      {display: 'English', value: 'en'},
      {display: 'Espanol', value: 'es'},
      {display: 'Hidni', value: 'hi'}
    ];
    this.selectLang('en');
  }
  selectLang(lang: string) {
      console.log(lang);
      this._translate.use(lang);
      this.refreshText();
    }
   refreshText() {
      this.translatedText = this._translate.instant('hello world');
      this.welcome = this._translate.instant('welcome');
    }
}
