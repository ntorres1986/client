import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../api.service';
import { Card } from '../../../model/card';

@Component({
  selector: 'app-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.css']
})
export class CardAddComponent implements OnInit {

  customerId = null;
  cardForm: FormGroup;
  name:string='';
  address:string='';
  city:string='';
  telephone:String='';
  isLoadingResults = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.customerId = this.route.snapshot.params['customerId'];
    this.cardForm = this.formBuilder.group({
      number : ['',[ Validators.required, Validators.minLength(16) , Validators.maxLength(16) ]],
      ccv: ['',[ Validators.required, Validators.minLength(3) , Validators.maxLength(4) ]],
      type : ['', [ Validators.required, Validators.minLength(1) , Validators.maxLength(50) ]]
    });
  }

}
