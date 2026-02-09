import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  standalone: true
})
/**
 * HomeComponent represents the main component for the home page of the Angular application.
 * 
 * @class HomeComponent
 * @description This component displays a welcome message and a brief description of the application.
 * 
 * @property {string} title - The title displayed on the home page.
 * @property {string} description - A brief description of the application.
 * @property {boolean} isActive - Indicates whether the component is active or not.
 * @property {number} userCount - The number of users currently using the application.
 */
export class HomeComponent {
  title: string = 'Welcome to the Angular Exam';
  description: string = 'This is a single-page application built with Angular.';
  isActive: boolean = true;
  userCount: number = 100;
}