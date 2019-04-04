import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {


 posts: any;
 public tap: number = 0; 
 url: string;  

 constructor(public navCtrl: NavController, public http: Http, private inAppBrowser: InAppBrowser) {
    this.http.get('https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=84d3c5bb9143410c95639094e855ab28').map(res => res.json()).subscribe(data => {
        this.posts = data.articles;
    },
    err => {
        console.log("Oops!");
    }
    );


  }
  tapEvent(e) {
    this.tap++
  }
  

 openWebpage(url: string) {
    const options: InAppBrowserOptions = {
      zoom: 'no'
    }

    // Opening a URL and returning an InAppBrowserObject
    const browser = this.inAppBrowser.create(url, '_self', options);

   // Inject scripts, css and more with browser.X
  }
}
