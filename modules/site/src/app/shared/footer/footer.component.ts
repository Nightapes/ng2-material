import {Component, OnInit} from '@angular/core';
import {MdToolbar} from '@angular2-material/toolbar';


import {NavigationService} from '../navigation.service';

@Component({
  moduleId: module.id,
  selector: 'docs-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
  
})
export class FooterComponent implements OnInit {
  constructor(private navigation: NavigationService) {}

  ngOnInit() {}
}
