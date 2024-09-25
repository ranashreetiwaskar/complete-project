import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router){ }

loginForm!: FormGroup;

users = {
  email: 'ranashree@gmail.com',
  password: 'rana123' 
};

ngOnInit(): void {

  this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
  
}

onSubmit() {

  if (this.loginForm.valid) {
    // console.log(this.loginForm.value);
    // console.log(this.users.email=== this.loginForm.value.email)
    if ((this.users.email === this.loginForm.value.email) && (this.users.password === this.loginForm.value.password)) {
      alert('You are Logged In');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid Credentials');
      this.router.navigate(['/log-in']);
    }
  } else {
    console.error('Form is Invalid')
  }
  }

}
