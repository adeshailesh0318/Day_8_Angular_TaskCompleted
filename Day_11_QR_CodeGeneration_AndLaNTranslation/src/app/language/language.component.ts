import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent {

  selectedLanguage = 'en';

  constructor(private translate: TranslateService) {}

  changeLanguage(language: string): void {

    this.selectedLanguage = language;

    this.translate.use(language);
  }
}