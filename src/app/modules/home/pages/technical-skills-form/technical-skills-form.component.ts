import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TechnicalSkillsService } from '../../services/technical-skills.service';

@Component({
  selector: 'app-technical-skills-form',
  templateUrl: './technical-skills-form.component.html',
  styleUrls: ['./technical-skills-form.component.scss']
})
export class TechnicalSkillsFormComponent {

  constructor(private dialogRef: MatDialogRef<TechnicalSkillsFormComponent>, private technicalSkillsService: TechnicalSkillsService){}

  form: FormGroup = new FormGroup({
    language: new FormControl('',Validators.required),
    frameworks: new FormControl('', Validators.required),
    technologies: new FormControl('', Validators.required),
    developmentTools: new FormControl('', Validators.required),
    orm: new FormControl('', Validators.required),
    webService: new FormControl('', Validators.required),
    database: new FormControl('', Validators.required),
    scriptLanguages: new FormControl('', Validators.required)
  });

  initializeFormGroup() {
    this.form.setValue({
    language: '',
    frameworks: '',
    technologies: '',
    developmentTools: '',
    orm: '',
    webService: '',
    database: '',
    scriptLanguages: ''
    });
  }


onSubmit() {
  console.log("Object: ",this.form.value);
  
  if (this.form.valid) {
    if (!this.form.get('id')?.value)
      this.technicalSkillsService.insertProfessionalSummary(this.form.value);
    else
      this.technicalSkillsService.updateProfessionalSummary(this.form.value);
    this.onClose(this.form.value);
  }
}

onClear() {
  this.form.reset();
  this.initializeFormGroup();
}

onClose(values?:any) {
  this.dialogRef.close(values);
  this.form.reset();
  this.initializeFormGroup();
  
}

}
