import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from "./features/login/login/login.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HeaderComponent } from "./core/layout/header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, FormsModule, MatButtonModule, MatSidenavModule, MatMenuModule, MatToolbarModule, MatIconModule, MatListModule, RouterModule, MatExpansionModule, MatTooltipModule, LoginComponent, HeaderComponent]
})
export class AppComponent {
  IsAuthenticated: boolean = false;
  constructor() {
    let value = localStorage.getItem("isAuthenticated")
    if(value != null){
      this.IsAuthenticated =  JSON.parse(value);    
    }
  }

  title = 'front-client';
}
