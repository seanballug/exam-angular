import { Component } from '@angular/core';

interface UserProfile {
  name: string;
  email: string;
  age: number;
  location: string;
  bio: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss']
})
export class ProfileComponent {
  user: UserProfile = {
    name: 'Sean Ballug',
    email: 'seanballug@gmail.com',
    age: 25,
    location: 'Baguio City',
    bio: 'Angulord'
  };
}