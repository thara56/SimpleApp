import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular 2 app works great!';

  constructor(private router: Router) { }

  gotoGallery() {
    this.router.navigate(['gallery']);
    console.log('goto gallery');
  }

  gotoHome() {
    this.router.navigate(['./home']);
    console.log('gotohome');
  }
}
