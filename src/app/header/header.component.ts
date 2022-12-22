import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn!: boolean;
  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.messageObservable$.subscribe((data) => {
      console.log('Data: ', data);
      this.isLoggedIn = data;
    });
  }

  logOut() {
    this.isLoggedIn = false;
    this.dataService.setData(this.isLoggedIn);
    this.router.navigate(['/home']);
  }
}
