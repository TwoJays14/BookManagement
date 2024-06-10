import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { AddBookComponent } from "../../components/add-book/add-book.component";
import { FiltersComponent } from "../../components/filters/filters.component";
import { SearchComponent } from "../../components/search/search.component";
import { TableComponent } from "../../components/table/table.component";

@Component({
    selector: 'app-home-layout',
    standalone: true,
    templateUrl: './home-layout.component.html',
    styleUrl: './home-layout.component.css',
    imports: [HeaderComponent, AddBookComponent, FiltersComponent, SearchComponent, TableComponent]
})
export class HomeLayoutComponent {

}
