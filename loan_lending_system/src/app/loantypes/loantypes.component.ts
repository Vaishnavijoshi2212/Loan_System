import { Component, OnInit } from '@angular/core';
import { LoanService } from '../Service/loan.service';

@Component({
  selector: 'app-loantypes',
  templateUrl: './loantypes.component.html',
  styleUrls: ['./loantypes.component.scss']
})
export class LoantypesComponent implements OnInit {

  constructor(public data: LoanService) { }
  
  ngOnInit(): void {
  }

}
