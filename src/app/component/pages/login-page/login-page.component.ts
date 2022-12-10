import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm:any=FormBuilder;
  isSubmitted = false;
  returnUrl = '';
  constructor(private formBuilder: FormBuilder,
     private userService:UserService,
     private activatedRoute:ActivatedRoute,
     private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['', [Validators.required,Validators.email]],
      password:['', Validators.required]
    });
  }

  get fc(){
    return this.loginForm.controls;
  }

  submit(){
    this.isSubmitted = true;
    if(this.loginForm.invalid) {
      console.log("Invalid Form");
      return;
    };
    var data:any = {
      email:this.loginForm.value.email,
      password:this.loginForm.value.password
    }
    this.userService.login(data).subscribe((response:any)=>{
      localStorage.setItem('token',response.token);
      this.router.navigateByUrl('/');
    });
  }
}
