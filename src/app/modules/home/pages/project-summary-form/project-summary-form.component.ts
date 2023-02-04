import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectSummaryService } from '../../services/project-summary.service';

@Component({
  selector: 'app-project-summary-form',
  templateUrl: './project-summary-form.component.html',
  styleUrls: ['./project-summary-form.component.scss']
})
export class ProjectSummaryFormComponent {
  constructor(private projectSummaryService: ProjectSummaryService){}

  form: FormGroup = new FormGroup({
    projectName: new FormControl('', Validators.required),
    domain: new FormControl('', Validators.required),
    clientName: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
    responsibilities: new FormControl('',Validators.required),
    environment: new FormControl('',Validators.required)
  });
  

  initializeFormGroup() {
    this.form.setValue({
      projectName: '',
      domain: '',
      clientName: '',
      description: '',
      responsibilities: '',
      environment: ''
    });
  }

onSubmit() {
  console.log("Object: ",this.form.value);
  
  if (this.form.valid) {
    if (!this.form.get('id')?.value)
      this.projectSummaryService.insertProjectSummary(this.form.value);
    else
      this.projectSummaryService.updateProjectSummare(this.form.value);
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
}


}
