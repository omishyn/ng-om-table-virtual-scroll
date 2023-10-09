import { Component } from '@angular/core';

const snippets = {
  importModule: `import { TableVirtualScrollModule } from 'ng-om-table-virtual-scroll';

@NgModule({
  imports: [
    // ...
    TableVirtualScrollModule
  ]
})
export class AppModule { }
`,
  importStandalone: `import { TableVirtualScrollModule } from 'ng-om-table-virtual-scroll';

@Component({
  standalone: true,
  // ...
  imports: [
    // ...
    TableVirtualScrollModule
  ]
})
export class MyComponent { ... }
`
};


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  snippets = snippets;

  versionCompatibilityColumns = ['ng', 'lib'];
  versionCompatibility = Object.entries({
    '\>= 16': '^16.0.0',
    '\>= 15': '^15.0.0'
  });
}
