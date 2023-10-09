import { Component } from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';
import {CommonModule} from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {TableVirtualScrollDataSource, TableVirtualScrollModule} from 'ng-om-table-virtual-scroll';

const DATA = Array.from({length: 1000}, (v, i) => ({
  id: i + 1,
  name: `Element #${i + 1}`
}));

@Component({
  selector: 'app-sticky-column-example',
  templateUrl: './sticky-column-example.component.html',
  styleUrls: ['./sticky-column-example.component.css'],
  standalone: true,
  imports: [
    CdkTableModule,
    CommonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    ScrollingModule,
    TableVirtualScrollModule
  ]
})
export class StickyColumnExampleComponent {
  displayedColumns = ['id', 'name', 'name', 'name', 'name', 'name', 'name', 'name', 'name', 'name'];

  dataSource = new TableVirtualScrollDataSource(DATA);
}
