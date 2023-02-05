import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  selectedDate: string;

  constructor(
    private dialogRef: MatDialogRef<UserFormComponent>, public service: UserService) { }

    addEvent(event: MatDatepickerInputEvent<Date>) {
      this.selectedDate = event.value.toISOString().substring(0, 10);
    }

    form: FormGroup = new FormGroup({
      id: new FormControl(''),
      firstName: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      dateOfBirth: new FormControl('',this.validateDate.bind(this)),
      email: new FormControl('',[Validators.required, Validators.email]),
      gender: new FormControl(''),
      mobileNumber: new FormControl('',  Validators.minLength(8)),
    });
    
  
    initializeFormGroup() {
      this.form.setValue({
        id: null,  
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        email: '',
        gender: '',
        mobileNumber: '',
      });
    }

    validateDate(control: FormControl) {
      const today = new Date();
      const selectedDate = new Date(control.value);
      if (selectedDate > today) {
        return { futureDate: true };
      }
      return null;
    }


  onSubmit() {
    console.log("Object: ",this.form.value);
    if (this.form.valid) {
      if (!this.form.get('id')?.value)
        this.service.createUser(this.form.value).subscribe(res=>{
          console.log("User Created ==>",res)
        });
      else
      this.service.updateUser(this.form.value);
      this.onClose(this.form.value);
      this.initializeFormGroup();
    }
  }

  onClear() {
    this.form.reset();
    this.initializeFormGroup();
  }

  onClose(values?:any) {
    this.dialogRef.close(values);
    this.form.reset();
    // this.initializeFormGroup();
  }

}
