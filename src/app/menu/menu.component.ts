import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  selectedPage: string = "dashboard";

  constructor() { }

  optionClicked(name: string){
  	this.selectedPage = name;
  }

  ngOnInit() {
  }

}
