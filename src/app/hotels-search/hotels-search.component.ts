import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-hotels-search',
    imports: [MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule,
        MatCardModule],
    templateUrl: './hotels-search.component.html',
    styleUrl: './hotels-search.component.scss'
})
export class HotelsSearchComponent {

}
