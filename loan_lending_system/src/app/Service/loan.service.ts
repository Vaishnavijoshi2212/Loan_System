import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  DOB = new Date();
  id = "";
  name:any;
  mobile = "";
  dob = "";
  amount: any;
  rate: any;
  time: any;
  loan = "";
  cmt = "";
  
  constructor() { }
  //Object for userlist
  public user_loan = [
    { id: '1', Name: 'Ram', DOB: '21/06/2005', Mobile: '9684753433', Loan: 'Gold Loan', p: '1000', r: '10', t: '36', si: '300', ai: '1300' },
    { id: '2', Name: 'Raj', DOB: '12/10/2010', Mobile: '7834567811', Loan: 'Health Loan', p: '2000', r: '10', t: '12', si: '200', ai: '2200' }

  ]

  //Object for loantype list
  public loans = [
    { Type: 'Personal Loan', Description: 'A personal loan is a loan that does not require collateral or security and is offered with minimal documentation.', Image: 'assets/Img/pl.jpg' },
    { Type: 'Home Loan', Description: 'It provides you the financial support and helps you buy the house for yourself and your loved ones.', Image: 'assets/Img/home.jpg' },
    { Type: 'Education Loan', Description: 'Any Resident Indian can apply for the loan. The loan applicant minimum age should be 18 years and the maximum should be 35 years.', Image: 'assets/Img/education.jpg' },
    { Type: 'Credit Card Loan', Description: 'Cash advances allow cardholders to borrow money against their existing credit line. ', Image: 'assets/Img/credit.jpg' },
    { Type: 'Car Loan', Description: 'Customers are urged to limit their car loans to not more than 20% of their monthly income ', Image: 'assets/Img/car.jpg' },
    { Type: 'Health Loan', Description: ' These loans will cover surgery, hospitalisation, chemotherapy and other treatments. .', Image: 'assets/Img/health.jpg' },
    { Type: 'Gold Loan', Description: 'To be eligible for a Gold Loan, you should be in the age group of 18 to 65 years. ', Image: 'assets/Img/gold.jpg' }
  ]
  
  formValidation(input:any,pattern:any,tag:any){
    if(input.length < 1){
      return `${tag} should not be empty`;

    }
    else if(!pattern.test(input)){
      if(tag == "Name"){
        return "Name should only contain character";

      }else if(tag =="Mobile"){
        return "mobile number should be 10 digit only";
      }
      else if(tag =="DOB"){
        return "Date should be dd(1-31)/mm(1-12)/yyyy !!";
      }
    }
    // else if(input.value < 1){
    //   return `${tag} should not be zero`;

    // }
  //   else if(tag == this.mobile){
  //   if((this.mobile.charAt(0)!="9") && (this.mobile.charAt(0)!="8") && (this.mobile.charAt(0)!="7")){
	// 	  return  "Mobile number should start with 7,8,9 only !!";
		  
	// 	}
  // }
    
  
  else {
      return "";
    
    }
       
    
  
}
  



}
