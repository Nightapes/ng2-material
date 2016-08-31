import {ButtonBasicUsageComponent} from './examples/button/button-basic-usage.component';

export {environment} from './environment';
export {SiteAppComponent, AppRouterProviders} from './site.component';


/**
 * Collection of Material Design component example directives.
 */
export const DEMO_DIRECTIVES: any[] = [
  ButtonBasicUsageComponent
];


/**
 * Describe an example that can be dynamically loaded.
 */
export interface IExampleData {
  template: string;
  source: string;
  styles: string;
  component: string;
  name: string;
}

