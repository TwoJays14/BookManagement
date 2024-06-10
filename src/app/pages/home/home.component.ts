import { Component } from '@angular/core';
import { HomeLayoutComponent } from "../../layouts/home-layout/home-layout.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HomeLayoutComponent]
})
export class HomeComponent {

}
