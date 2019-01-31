import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customerForm: FormGroup;
  _id:number=0;
  name:string='';
  address:string='';
  city:string='';
  telephone:string='';
  isLoadingResults = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.getCustomer(this.route.snapshot.params['id']);
    this.customerForm = this.formBuilder.group({
      name: ['',[ Validators.required, Validators.minLength(2) , Validators.maxLength(50) ]],
      address : ['',[ Validators.required, Validators.minLength(1) , Validators.maxLength(100) ]],
      city : ['', [ Validators.required, Validators.minLength(1) , Validators.maxLength(30) ]],
      telephone : ['', [ Validators.required, Validators.minLength(1) , Validators.maxLength(20) ]]
    });
  }

  getCustomer(id) {
    this.api.getCustomer(id).subscribe(data => {
      this._id = data.id;
      this.customerForm.setValue({
        name: data.name,
        address: data.address,
        city: data.telephone,
        telephone: data.telephone,
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.updateCustomer(this._id, form)
      .subscribe(res => {
          let id = res['id'];
          this.isLoadingResults = false;
          this.router.navigate(['/customer-details', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
  customerDetails() {
    this.router.navigate(['/customer-details', this._id]);
  }
  

}
