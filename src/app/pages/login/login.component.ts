import { Component } from '@angular/core';
import { PoPageLoginLiterals, PoPageLoginModule } from '@po-ui/ng-templates';
import { PoLanguage } from '@po-ui/ng-components';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [PoPageLoginModule,
    RouterOutlet,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  readonly languages: Array<PoLanguage> = [
    { language: 'pt', description: "Português" }
  ];

  readonly customLiterals: PoPageLoginLiterals = {
    highlightInfo: 'O controle do seu lar a um clique!',
    registerUrl: 'Cadastre-se',
    loginHint: ""
  };
}
