import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  form!: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dataService: DataService
  ) {}  

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this.isLoggedIn = true;
    this.dataService.setData(this.isLoggedIn);
    this.router.navigate(['/home']);
  }
}
