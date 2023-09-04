import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanService } from '../Service/loan.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  //Variable declaration
  id = "";
  name:any;
  mobile:any;
  dob ="";
  amount: any;
  rate: any;
  time: any;
  loan:any;
  cmt:any;

  errname:any;
  errmobile:any;
  errdob:any;
  erramount:any;
  errrate:any;
  errtime:any;
  errloan:any;


  T: any;//Time in year
  t: any; //Time in months
  si: any; //Simple Intrest
  p: any; //Principal Amount
  r: any; //Rate
  ai: any; //Total Amount
   constructor(public router: Router, public data: LoanService) { }

  ngOnInit(): void {
  }
  //Validation for Name
  getNameValue(event:any) {
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
  //Validation for DOB
  getdobValue(event: any) {
    this.dob = event.target.value;
    var userdate= new Date(this.dob).getDate();
    var currentdate = new Date().getDate();
    var pattern = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    if (this.dob.length < 1) {
      this.errdob = "Date of Birth can't be empty";
    }
    else if (!pattern.test(this.dob)) {
      this.errdob = "Date should be dd(1-31)/mm(1-12)/yyyy !!";
    }
    else if (this.dob == '00/00/0000') {
      this.errdob = "Date of Birth can't be zero !!";
    }
    else if((currentdate - userdate) < 1){
      this.errdob = "errr"
    }
    else {
      this.errdob = "";
    }

    console.log(currentdate)
    console.log(userdate)
   


    // if(userdate  + currentdate < 1){
    //   this.errdob = "errr"
    // }else{
    //   this.errdob = "";
    // } 
  }
  //Validation for Mobile number
  getPhoneValue(event: any) {
    this.mobile = event.target.value;
    var pattern = /^[0-9]{10}$/;
    if (this.mobile.length < 1) {
      this.errmobile = "Mobile no. can't be empty !!";
    }
    else if (!pattern.test(this.mobile)) {
      this.errmobile = "Only 10 digit are allowed !!"
    }
    else if ((this.mobile.charAt(0) != "9") && (this.mobile.charAt(0) != "8") && (this.mobile.charAt(0) != "7")) {
      this.errmobile = "Phone number should start with 7,8,9 only !!";
    }
    else {
      this.errmobile = "";
    }
  }
  getCommentValue(event: any) {
    this.cmt = event.target.value;

  }
  //Validation for Loan type
  getLoanValue(event: any) {
    this.loan = event.target.value;
    if (this.loan.length < 1) {
      this.errloan = "Loan can't be empty !!";
    }
    else {
      this.errloan = "";
    }
  }
  //Validation for principal value
  getAmountValue(event: any) {
    this.amount = event.target.value;
    if (this.amount.length < 1) {
      this.erramount = "Principal Amount can't be empty !!";
    } else if (this.amount < 0.0) {
      this.erramount = "Principal Amount can't be negative !!";
    } else if (this.amount == 0) {
      this.erramount = "Principal Amount can't be zero !! "
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
    } else if (this.rate == 0) {
      this.errrate = "Rate can't be zero !! "
    } else {
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
    } else if (this.time == 0) {
      this.errtime = "Time(in months) can't be zero !!"
    }
    else {
      this.errtime = "";
    }
  }
  //Calulation function
  calculate() {
    this.T = this.t / 12; // Time is converted from months to year
    this.si = (this.p * this.r * this.T) / 100; //Calculation for simple interest
    this.ai = Number(this.si) + Number(this.p); // Calculation for total amount
  }
  //Save button
  save() {
    this.calculate();
    this.router.navigate(['userlist'])
    //Data pushing to userlist
    var user = { "id": this.id, "Name": this.name, "DOB": this.dob, "Mobile": this.mobile, "Loan": this.loan, "si": this.si, "p": this.p, "r": this.r, "t": this.t, "ai": this.ai };
    this.data.user_loan.push(user);
  }
  //Cancel button
  cancel() {
    this.name = "";
    this.mobile = "";
    this.dob = "";
    this.loan = "";
    this.p = "";
    this.T = "";
    this.ai = " ";
    this.si = "";
    this.r = "";
    this.t = "";
    this.router.navigate(['userlist'])
  }
}
  // // //Validation for Name
  // getNameValue(event:any) {
  //   this.name = event.target.value;
  //   var pattern = /^[a-zA-Z_ ]*$/;
  //   this.errname = this.data.formValidation(this.name, pattern,"Name");
  
  // }
  // // //Validation for DOB
  //  getdobValue(event:any) {
  //   this.dob = event.target.value;
  //   var pattern = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
  //   this.errdob = this.data.formValidation(this.dob, pattern,"Date of Birth");
  // }
  // // //Validation for Mobile number
  //  getPhoneValue(event:any) {
  //   this.mobile = event.target.value;
  //   var pattern = /^[0-9]{10}$/;
  //   this.errmobile = this.data.formValidation(this.mobile, pattern,"Mobile number");
  //   // if ((this.mobile.charAt(0)!="9") && (this.mobile.charAt(0)!="8") && (this.mobile.charAt(0)!="7"))
	// 	// {
	// 	//   this.errmobile = "Mobile number should start with 7,8,9 only !!";
		  
	// 	// }
  //   // else{
  //   //   this.errmobile = "";
  //   // }
    
  // }
  
  // getCommentValue(event: any) {
  //   this.cmt = event.target.value;
    
  // }
 
  // // //Validation for principal value
  //  getAmountValue(event: any) {
  //   this.amount = event.target.value;
  //   var pattern = /^[1-9]+[0-9]*$/;
  //   this.erramount = this.data.formValidation(this.amount, pattern,"Principal amount");
   
  //  }
  // // //Validation for rate
  //  getRateValue(event: any) {
  //   this.rate = event.target.value;
  //   var pattern = "";
  //   this.errrate = this.data.formValidation(this.rate,  pattern,"Rate");
     
  // }
  // // //Validation for time in months
  //  getTimeValue(event: any) {
  //   this.time = event.target.value;
  //   var pattern= "";
  //   this.errtime = this.data.formValidation(this.time ,pattern , "Time");

    
  //  }
  
//}
