import { Component, OnInit } from '@angular/core';
import { LoanService } from '../Service/loan.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
 DOB = new Date();
  constructor(public data: LoanService, public router: Router ) { }

  ngOnInit(): void {
  }



}

