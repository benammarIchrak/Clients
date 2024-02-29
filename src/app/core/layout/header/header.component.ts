import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatSidenavModule, MatMenuModule, MatToolbarModule, MatIconModule, MatListModule, RouterModule, MatExpansionModule, MatTooltipModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @ViewChild('sidenav')
  sidenav!: MatSidenav;
  IsAuthenticated: any;

  ngOnInit(): void {
    let value = localStorage.getItem("isAuthenticated")
    if (value != null) {
      this.IsAuthenticated = JSON.parse(value);
    }
  }
}
