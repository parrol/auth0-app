import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  loggedIn: boolean = false;
  constructor(public auth: AuthService, @Inject(DOCUMENT) public document: Document) { }

  ngOnInit(): void { }
}
