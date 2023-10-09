import { Type } from '@angular/core';
import { BaseExampleComponent } from './base-example/base-example.component';
// import { CdkExampleComponent } from './cdk-example/cdk-example.component';
// import { FilterSortSelectExampleComponent } from './filter-sort-select-example/filter-sort-select-example.component';
// import { FooterExampleComponent } from './footer-example/footer-example.component';
// import { StickyColumnExampleComponent } from './sticky-column-example/sticky-column-example.component';
// import { StickyExampleComponent } from './sticky-example/sticky-example.component';

export interface Example {
  component: Type<any>;
  ts: string;
  html: string;
  css: string;
  name: string;
  title: string;
}

// https://github.com/webpack-contrib/raw-loader
function getExample(title: string, component: Type<any>, name: string): Example {
  return {
    title,
    name,
    component,
    ts: require(`!!raw-loader?esModule=false!../examples/${name}/${name}.component.ts`),
    html: require(`raw-loader?esModule=false!../examples/${name}/${name}.component.html`),
    css: require(`raw-loader?esModule=false!../examples/${name}/${name}.component.css`),
  };
}

export const examples: Example[] = [
  getExample('Base Example', BaseExampleComponent, 'base-example'),
  // getExample('Cdk Example', CdkExampleComponent, 'cdk-example'),
  // getExample('Table with footer', FooterExampleComponent, 'footer-example'),
  // getExample('Table with filter, sort and selection', FilterSortSelectExampleComponent, 'filter-sort-select-example'),
  // getExample('Table with sticky header', StickyExampleComponent, 'sticky-example'),
  // getExample('Table with sticky column', StickyColumnExampleComponent, 'sticky-column-example'),
];
