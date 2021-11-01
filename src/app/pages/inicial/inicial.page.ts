import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.page.html',
  styleUrls: ['./inicial.page.scss'],
})
export class InicialPage implements OnInit {

  constructor(private router: Router) { }

  login(){
    this.router.navigate(['login']);
  }

  teste(){
    this.router.navigate(['features']);
  }


  ngOnInit() {
  }

  

}
