import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../../models/user';
import { LoginuserService } from '../../services/loginuser.service';
import { NgIf } from '@angular/common';
import { FuseAlertComponent } from '@fuse/components/alert';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  encapsulation: ViewEncapsulation.None,
  standalone   : true,
  imports      : [NgIf, FuseAlertComponent, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatProgressSpinnerModule, RouterLink],

})
export class LoginComponent implements OnInit{
  user:User = new User();

  constructor(private loginuserservice:LoginuserService) { }
  ngOnInit(): void {
  }
  userLogin(){
  console.log(this.user)
  this.loginuserservice.loginUser(this.user).subscribe(data=>{
    alert("Login Successfully")
  },error=>alert("Sorry Please enter correct Username and Password"));
  
}

}
