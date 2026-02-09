import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation';
import { HomeComponent } from './home/home';
import { ProfileComponent } from './profile/profile';
import { RegisterComponent } from './register/register';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent,
    HomeComponent,
    ProfileComponent,
    RegisterComponent
  ]
})
export class AppComponent {}