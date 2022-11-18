import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; 


const firebaseConfig = {
  apiKey: "AIzaSyD92pG0EzIPlT7NooBBmu-4CtphAXbJRDA",
  authDomain: "giff-app-33e8c.firebaseapp.com",
  projectId: "giff-app-33e8c",
  storageBucket: "giff-app-33e8c.appspot.com",
  messagingSenderId: "902170147555",
  appId: "1:902170147555:web:46efeda31387498bb8e3d6",
  measurementId: "G-ZLR7N910X8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gifsApp';
}
