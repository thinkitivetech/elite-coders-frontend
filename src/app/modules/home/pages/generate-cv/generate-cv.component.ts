import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CreateTemplateTypes } from 'src/app/models/create-template-types.enum';

@Component({
  selector: 'app-generate-cv',
  templateUrl: './generate-cv.component.html',
  styleUrls: ['./generate-cv.component.scss']
})
export class GenerateCvComponent {

  isLinear:boolean = true;
  stepperForm:FormGroup = new FormGroup({
    persInfo:new FormControl(''),
    proInfo:new FormControl(''),
    techSkills:new FormControl(''),
    projectDetails:new FormControl('')
  })
}
