
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { NgModel} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,LoginComponent,DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
 
})
export class AppComponent {
  title = 'ProjAngular';
}
