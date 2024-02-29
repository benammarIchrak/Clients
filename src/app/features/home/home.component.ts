import { Component } from '@angular/core';
import { HeaderComponent } from "../../core/layout/header/header.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent, RouterModule]
})
export class HomeComponent {
/**
 *
 */
constructor() {
console.log("home...")        
}
}
