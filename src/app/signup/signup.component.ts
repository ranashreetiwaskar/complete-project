import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  constructor() { }

  signupForm!: FormGroup;

  ngOnInit(): void {
    
  }

  onSubmit(){

  }

}
