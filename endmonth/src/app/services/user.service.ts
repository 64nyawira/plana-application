import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loggedUser:string=''

  constructor() { }

  login(email:string):boolean{
    if(email === 'charity@gmail.com'){
      this.loggedUser='admin'
    }else{
      this.loggedUser='user'
    }
    return this.isAuthenticated();
  }
  logout():void{
    this.loggedUser ='';
  }

  isAuthenticated():boolean{
    return this.loggedUser !=='';
  }

  isAdmin():boolean{
    return this.loggedUser === 'admin';
  }
}
