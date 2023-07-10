import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  @ViewChild('checkboxRef') checkboxRef: any;
  loggedInUser: any;
     
  signupUsers: any[]=[];
  signupObj:any = {
    userName: '',
    email: '',
    password:''
  }

  loginObj:any = {
    userName: '',
    password:''
  }

  constructor() { }

  ngOnInit(): void {
    const localData = localStorage.getItem('signupUsers');
    if(localData !== null){
      this.signupUsers = JSON.parse(localData)
    }

  }

  onSignUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
    this.checkboxRef.nativeElement.checked = true;
  }

  onLogin(){
    const isUserExist = this.signupUsers.find(m => m.userName == this.loginObj.userName 
      && m.password == this.loginObj.password);
    if(isUserExist !== undefined){
      // alert('User logged in successfully');
      this.loggedInUser = isUserExist;
    } else {
      alert('Wrong credentials')
    }
  }
}
