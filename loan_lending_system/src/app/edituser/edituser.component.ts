import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoanService } from '../Service/loan.service';
import { Router } from '@angular/router';


@Component({
	selector: 'app-edituser',
	templateUrl: './edituser.component.html',
	styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {
	name = "";
	mobile = "";
	dob = "";
	amount: any;
	rate: any;
	time: any;
	loan = "";
	cmt = "";
	r: any;
	t: any;
	p: any;
	T: any;
	ai: any;
	si: any;
	s: any;
	errname = "";
	errmobile = "";
	errdob = "";
	erramount = "";
	errrate = "";
	errtime = "";
	errloan = "";
	id: any;
	info: any = [];
	constructor(public data: LoanService, private activatedRoute: ActivatedRoute, private router: Router) { }
	//Params to fetch data from userlist
	ngOnInit(): void {
		this.activatedRoute.paramMap.subscribe(params => {
			this.id = params.get('id');
		})
		this.getData()
		console.log(this.info)

	}
	//Function to check for id
	getData() {
		this.router.navigate(['edituser'])
		for (let i = 0; i < this.data.user_loan.length; i++) {
			if (this.data.user_loan[i].id == this.id) {
				this.info = this.data.user_loan[i]
			}
		}
	}
	//function for name validation
	getNameValue(event: any) {
		this.name = event.target.value;
		var pattern = /^[a-zA-Z_ ]*$/;
		if (this.name.length < 1) {
			this.errname = "Name can't be empty !!";
		}
		else if (!pattern.test(this.name)) {
			this.errname = "Name should contain only character !!";
		}
		else {
			this.errname = "";
		}
	}
	//function for DOB validation
	getdobValue(event: any) {
		this.dob = event.target.value;
		var pattern = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
		console.log(pattern);
		if (this.dob.length < 1) {
			this.errdob = "Date of Birth can't be empty !!";
		}
		else if (!pattern.test(this.dob)) {
			this.errdob = "Date of Birth should be in format dd/mm/yyyy !!";
		}
		else {
			this.errdob = "";
		}
	}
	//function for Phone validation
	getPhoneValue(event: any) {
		this.mobile = event.target.value;
		var pattern = /^[0-9]{10}$/;
		if (this.mobile.length < 1) {
			this.errmobile = "Mobile number can't be empty !!";
		}
		else if (!pattern.test(this.mobile)) {
			this.errmobile = "Only 10 digit allowed !!"
		}
		else  if ((this.mobile.charAt(0)!="9") && (this.mobile.charAt(0)!="8") && (this.mobile.charAt(0)!="7"))
		{
		  this.errmobile = "Mobile number should start with 7,8,9 only !!";
		  
		}
		else {
			this.errmobile = "";
		}
	}
	//Validation for loan type
	getLoanValue(event: any) {
		this.loan = event.target.value;
		if (this.loan.length < 1) {
			this.errloan = "Loan can't be empty !!";
		}
		else {
			this.errloan = "";
		}

	}
	getAmountValue(event: any) {
		this.amount = event.target.value;
		if (this.amount.length < 1) {
			this.erramount = "Principal Amount can't be empty !!";
		} else if (this.amount < 0.0) {
			this.erramount = "Principal Amount can't be negative !!";
		}
		else {
			this.erramount = "";
		}
	}
	//Validation for rate
	getRateValue(event: any) {
		this.rate = event.target.value;
		if (this.rate.length < 1) {
			this.errrate = "Rate can't be empty !!";
		} else if (this.rate < 0.0) {
			this.errrate = "Rate can't be negative !!";
		}
		else {
			this.errrate = "";
		}
	}
	//Validation for time in months
	getTimeValue(event: any) {
		this.time = event.target.value;
		if (this.time.length < 1) {
			this.errtime = "Time can't be empty !!";
		} else if (this.time < 0.0) {
			this.errtime = "Time(in months) can't be negative !!";
		}
		else {
			this.errtime = "";
		}
	}
	//Function to update data
	updateBtn(name: any, date: any, mobile: any, loan: any, pamount: any, rate: any, time: any) {
		for (let i = 0; i < this.data.user_loan.length; i++) {
			if (this.data.user_loan[i].id == this.id) {
				this.data.user_loan[i].Name = name;
				this.data.user_loan[i].DOB = date;
				this.data.user_loan[i].Mobile = mobile;
				this.data.user_loan[i].Loan = loan;
				this.data.user_loan[i].p = pamount;
				this.data.user_loan[i].r = rate;
				this.data.user_loan[i].t = time;
				this.calculate(pamount, rate, time);
				this.data.user_loan[i].si = this.si;
				this.data.user_loan[i].ai = this.ai;
				alert("Are you sure, you want to update data ??");
				this.router.navigate(['userlist'])
			}
		}
	}
	calculate(p: any, r: any, t: any) {
		this.T = t / 12; // Time is converted from months to year
		this.si = ((p * r * this.T) / 100); //Calculation for simple interest
		this.ai = Number(this.si) + Number(p);

	}
	//Back button
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
	pushData() {
		this.T = this.t / 12;
		this.si = ([(this.p * this.r * this.T) / 100]);
		this.ai = Number(this.si) + Number(this.p);
		var users = { "id": this.id, "Name": this.name, "DOB": this.dob, "Mobile": this.mobile, "Loan": this.loan, "si": this.si, "p": this.p, "r": this.r, "t": this.t, "ai": this.ai };
		this.data.user_loan.push(users);
	}


}

