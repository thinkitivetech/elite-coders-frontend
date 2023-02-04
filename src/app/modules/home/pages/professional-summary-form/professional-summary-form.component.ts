import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { professionalSummaryService } from '../../services/professional-summary.service';

@Component({
  selector: 'app-professional-summary-form',
  templateUrl: './professional-summary-form.component.html',
  styleUrls: ['./professional-summary-form.component.scss']
})
export class ProfessionalSummaryFormComponent {

  profileTypes: Array<string> = [
    'Fullstack developer',
    'Senior Fullstack developer',
    'Frontend developer',
    'Senior frontend developer',
    'Backend developer',
    'Senior backend developer'
  ];
  constructor(
    private dialogRef: MatDialogRef<ProfessionalSummaryFormComponent>,private professionalSummaryService: professionalSummaryService){}

  form: FormGroup = new FormGroup({
    profileType: new FormControl('',Validators.required),
    yearsOfExperience: new FormControl('', Validators.required),
    summary: new FormControl('', [Validators.required, Validators.maxLength(75)])
  });

  initializeFormGroup() {
    this.form.setValue({
     profileType: '',
     yearsOfExperience: '',
     summary:''
    });
  }


onSubmit() {
  console.log("Object: ",this.form.value);
  
  if (this.form.valid) {
    if (!this.form.get('id')?.value)
      this.professionalSummaryService.insertProfessionalSummary(this.form.value);
    else
      this.professionalSummaryService.updateProfessionalSummary(this.form.value);
    this.form.reset();
    this.initializeFormGroup();
    this.onClose();
  }
}

onClear() {
  this.form.reset();
  this.initializeFormGroup();
}

onClose() {
  this.form.reset();
  this.initializeFormGroup();
  this.dialogRef.close();
}


}
