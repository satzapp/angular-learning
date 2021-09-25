import { Component, OnInit, VERSION } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  additionForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initilizeForm();
  }

  initilizeForm(): void {
    this.additionForm = this.fb.group({
      jobRole: '',
      jobExperience: 0,
      prefferedLocation: this.fb.group({
        india: true,
        usa: false,
        uk: false,
      }),
      experiences: this.fb.array([
        this.fb.group({
          company: '',
          experience: 0,
        }),
      ]),
    });
  }

  onSubmit(): void {
    console.log(this.additionForm);
  }

  addExp(): void {
    this.experiences.push(this.fb.control(''));
  }

  removeExp(index: number): void {
    this.experiences.removeAt(index);
  }

  get experiences(): FormArray {
    return this.additionForm.get('experiences') as FormArray;
  }
}
