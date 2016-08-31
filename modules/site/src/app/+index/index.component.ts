import {Component, OnInit} from '@angular/core';

import {ComponentsService, HighlightComponent} from '../shared';


@Component({
  moduleId: module.id,
  selector: 'docs-index',
  templateUrl: 'index.component.html',
  styleUrls: ['index.component.css'],
})
export class IndexComponent implements OnInit {
  constructor(private components: ComponentsService) {}

  ngOnInit() {}
}
