import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feature-reserva',
  templateUrl: './feature-reserva.page.html',
  styleUrls: ['./feature-reserva.page.scss'],
})
export class FeatureReservaPage implements OnInit {

  constructor(private router: Router) { }

  churrasqueira(){
    this.router.navigate(['feature-reserva-churrasqueira']);
  }

  ngOnInit() {
  }


}
