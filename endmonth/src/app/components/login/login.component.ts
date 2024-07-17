import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string='';
  constructor(private userService:UserService,private router:Router){}

  login():void{
      if(this.userService.login(this.email)){
          if(this.userService.isAdmin()){
              this.router.navigate(['']);
          }else {
              this.router.navigate([''])
          }
      }else{
          console.log("invalid !");
          
      }
  }
}
