import { Component, OnInit } from '@angular/core';
import {SocialAuthService, SocialAuthServiceConfig} from 'angularx-social-login'
import {SocialUser,GoogleLoginProvider} from 'angularx-social-login'
import { UsersService } from '../../Services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class HomeComponent implements OnInit {
  user:SocialUser;
  u:any;
  wellcomMSG="";

  constructor(private authservice:SocialAuthService,private userServices:UsersService) { }

  ngOnInit(): void {
    this.authservice.authState.subscribe(user=>{
      this.user=user;
      if(this.user!=null){
        this.u={
          user_id:this.user.id,
          name:this.user.name,
          email:this.user.email,
          idToken:this.user.idToken,
          photoUrl:this.user.photoUrl,
          provider:this.user.provider,
          authToken:this.user.authToken
        };
        console.log(this.u);
        this.userServices.AddUser(this.u).subscribe
        (
          (res)=>{console.log(res);
            this.wellcomMSG=res.toString()},
          (err)=>{console.log(err);}
        );      
      }

    })
}

SignInWithGoogle():any{
  this.authservice.signIn(GoogleLoginProvider.PROVIDER_ID);
}
signOut():any{
  this.authservice.signOut();
}
}