import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteServiceService } from '../../guards/route-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn!: boolean;
  constructor(
    private router: Router,
    private routeService: RouteServiceService
  ) {}

  ngOnInit(): void {
    this.routeService.messageObservable$.subscribe((data) => {
      console.log('Data: ', data);
      this.isLoggedIn = data;
    });
  }

  logOut() {
    this.isLoggedIn = false;
    this.routeService.setData(this.isLoggedIn);
    this.router.navigate(['/home']);
  }
}
