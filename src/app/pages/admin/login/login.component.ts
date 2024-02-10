import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports:[ReactiveFormsModule , CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username:string =''

  password:string = ''
 

  loginForm = new FormGroup({
    username:new FormControl(this.username,[Validators.required,Validators.minLength(4),Validators.maxLength(10)]),
    password:new FormControl(this.password , [Validators.required,Validators.minLength(4),Validators.maxLength(10)])

  })

  constructor( private router:Router){
  
  }

  onLogin(){

    if(this.loginForm.value.username === 'admin' && this.loginForm.value.password === 'admin'){
      alert('Login successful');
      this.router.navigateByUrl('/products')



  }else{
    alert('Invalid credentials')
  }
}
}
