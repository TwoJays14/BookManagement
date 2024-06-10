import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { AddBookComponent } from "./components/add-book/add-book.component";
import { FiltersComponent } from "./components/filters/filters.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent]
})
export class AppComponent {
  title = 'Book Management System';
}
