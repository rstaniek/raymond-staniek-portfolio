import {Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit, OnInit} from '@angular/core';
import { NavItem } from '@models/nav-item';
import { NavService } from '@services/nav/nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    
  }

}