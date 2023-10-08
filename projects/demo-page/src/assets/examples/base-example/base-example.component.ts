import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
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
    TableVirtualScrollModule,
    MatTableModule
  ],
  styleUrls: ['./base-example.component.css']
})
export class BaseExampleComponent {

  displayedColumns = ['id', 'name'];

  dataSource = new TableVirtualScrollDataSource(DATA);

}
