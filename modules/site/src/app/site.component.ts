import { Component, OnInit, OnDestroy, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Response, Http } from '@angular/http';
import { provideRouter, Router, RouterConfig } from '@angular/router';
import { MdSidenav } from '@angular2-material/sidenav';
import { MdToolbar } from '@angular2-material/toolbar';
import { Media, MdIcon } from 'ng2-material';
import { ComponentsOrderByPipe } from './site.pipe';
import {ButtonBasicUsageComponent} from './examples/button/button-basic-usage.component'
export const routes: RouterConfig = [
  { path: '', component: ButtonBasicUsageComponent },
];

export const AppRouterProviders = [
  provideRouter(routes)
];


@Component({
  moduleId: module.id,
  selector: 'site-app',
  templateUrl: 'site.component.html',
  styleUrls: ['site.component.css'],
  pipes: [ComponentsOrderByPipe]
})
export class SiteAppComponent implements OnInit,
  OnDestroy, AfterViewInit {
  static SIDE_MENU_BREAKPOINT: string = 'gt-md';

  @ViewChild(MdSidenav) private menu: MdSidenav;

  @Input() fullPage: boolean = this.media.hasMedia(SiteAppComponent.SIDE_MENU_BREAKPOINT);

  public site: string = 'Angular2 Material';

  version: string;

  angularVersion: string = null;
  linkTag: string = null;

  private _subscription = null;

  constructor(
    private http: Http,
    private router: Router,
    private media: Media) { }

  ngAfterViewInit(): any {
    let query = Media.getQuery(SiteAppComponent.SIDE_MENU_BREAKPOINT);
    this._subscription = this.media.listen(query).onMatched.subscribe((mql: MediaQueryList) => {
      this.menu.mode = mql.matches ? 'side' : 'over';
      this.menu.toggle(mql.matches).catch(() => undefined);
    });
  }

  get pushed(): boolean { return this.menu && this.menu.mode === 'side'; }

  get over(): boolean { return this.menu && this.menu.mode === 'over' && this.menu.opened; }

  // TODO(jd): these two property hacks are to work around issues with the peekaboo fixed nav
  // overlapping the sidenav and toolbar.  They will not properly "fix" to the top if inside
  // md-sidenav-layout, and they will overlap the sidenav and scrollbar when outside.  So just
  // calculate left and right properties for fixed toolbars based on the media query and browser
  // scrollbar width.  :sob: :rage:
  @Input()
  get sidenavWidth(): number {
    return this.pushed ? 281 : 0;
  }


  private _scrollWidth: number = -1;

  @Input()
  get scrollWidth(): number {
    if (this._scrollWidth === -1) {
      var inner = document.createElement('p');
      inner.style.width = '100%';
      inner.style.height = '200px';

      var outer = document.createElement('div');
      outer.style.position = 'absolute';
      outer.style.top = '0px';
      outer.style.left = '0px';
      outer.style.visibility = 'hidden';
      outer.style.width = '200px';
      outer.style.height = '150px';
      outer.style.overflow = 'hidden';
      outer.appendChild(inner);

      document.body.appendChild(outer);
      var w1 = inner.offsetWidth;
      outer.style.overflow = 'scroll';
      var w2 = inner.offsetWidth;
      if (w1 == w2) w2 = outer.clientWidth;

      document.body.removeChild(outer);

      this._scrollWidth = (w1 - w2);
    }
    return this._scrollWidth;
  };

  ngOnInit() {
    this.http.get('version.json').subscribe((res: Response) => {
      const json = res.json();
      this.version = json.version;
      this.angularVersion = json['@angular/core'];
      this.linkTag = this.angularVersion.replace(/[>=^~]/g, '');
    });
    let title = 'Angular2 Material';
    document.title = title;

  }


  ngOnDestroy(): any { this._subscription.unsubscribe(); }
}
