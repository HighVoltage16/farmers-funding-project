import { Component } from '@angular/core';
import {LoadingController} from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {Auth}   from '../providers/auth/auth';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any ;
  loader: any;

  constructor(public auth: Auth, public loadingCtrl : LoadingController) {
      
      this.presentLoading(); 

     this.auth.login().then((isLoggedIn) =>{

       if(isLoggedIn){
         this.rootPage = HomePage;
       }else{
         this.rootPage = LoginPage;
       }

         this.loader.dismiss();
     });

  }


  presentLoading(){
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    this.loader.present();
    }
  

}


