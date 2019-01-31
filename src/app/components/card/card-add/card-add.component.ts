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
  number:string='';
  ccv:string;
  type:string;
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

  onFormSubmit(form:NgForm) {

    if( this.cardForm.status === "VALID" ){
      this.isLoadingResults = true;
      this.api.addCard(form)
        .subscribe(res => {
          console.log( "res" , res )
            let id = res['id'];
            this.isLoadingResults = false;
            this.router.navigate(['/card-details', this.customerId]);
          }, (err) => {
            console.log(err);
            this.isLoadingResults = false;
          });
    }
  }

}
