import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { DataService } from './../data.service';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.page.html',
  styleUrls: ['./app-home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AppHomePage implements OnInit {

  data: string[];

  constructor(private dataService: DataService) {
    this.data = this.dataService.getData();
  }

  ngOnInit() {
  }

}
