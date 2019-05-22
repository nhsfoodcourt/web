import { Component, OnInit } from '@angular/core';
import {Router, Route, Routes, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
  }

  btnSignUp(){
    this.router.navigate(['/signup']);
  }

}
