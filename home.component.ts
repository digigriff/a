import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public hlinks = [
	{
		'name':'HOME', 
		'url':'/'
	},
	{
		'name':'LOGIN', 
		'url':'/login'
	}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
