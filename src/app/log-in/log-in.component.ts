import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteServiceService } from '../guards/route-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  isLoggedIn = false;
  form!: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private routeService: RouteServiceService
  ) {}  

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this.isLoggedIn = true;
    this.routeService.setData(this.isLoggedIn);
    this.router.navigate(['/home']);
  }

}
