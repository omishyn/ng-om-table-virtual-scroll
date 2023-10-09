import {CdkTableModule} from '@angular/cdk/table';
import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
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
  standalone: true,
  selector: 'app-base-example',
  templateUrl: './base-example.component.html',
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
  ],
  styleUrls: ['./base-example.component.css']
})
export class BaseExampleComponent {

  displayedColumns = ['id', 'name'];

  dataSource = new TableVirtualScrollDataSource(DATA);

}
