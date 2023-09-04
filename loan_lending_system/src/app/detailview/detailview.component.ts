import { Component, OnInit } from '@angular/core';
import { LoanService } from '../Service/loan.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.scss']
})
export class DetailviewComponent implements OnInit {
  id: any;
  info: any = [];
  name = "";
  mobile = "";
  dob = "";
  r = "";
  t = "";
  loan = "";
  p = "";
  T = "";
  ai = "";
  si = "";
  a: any;
  constructor(public data: LoanService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    })
    this.getData()
    console.log(this.info)
  }

  //Function to check for id 
  getData() {
    for (let i = 0; i < this.data.user_loan.length; i++) {
      if (this.data.user_loan[i].id == this.id) {
        this.info = this.data.user_loan[i]
      }
    }
  }
  //Function to delete data
  deleteData() {
    this.data.user_loan = this.data.user_loan.filter((item) => item.id !== this.id);
    alert("Are you sure, You want to delete data???");
    this.router.navigate(['userlist'])
  }

  backBtn() {
    this.name = "";
    this.mobile = "";
    this.dob = "";
    this.loan = "";
    this.p = "";
    this.T = "";
    this.ai = "";
    this.si = "";
    this.r = "";
    this.t = "";
    this.router.navigate(['userlist'])
  }




}
