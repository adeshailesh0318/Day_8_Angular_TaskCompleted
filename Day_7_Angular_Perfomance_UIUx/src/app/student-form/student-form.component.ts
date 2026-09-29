import { ChangeDetectionStrategy, Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],

  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentFormComponent {

  studentForm: FormGroup;

  courses: string[] = [
    'Angular',
    '.NET',
    'Java',
    'Python'
  ];

  constructor(private fb: FormBuilder) {

    this.studentForm = this.fb.group({

      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      lastName: [
        '',
        [
          Validators.required
        ]
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      mobile: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]{10}$')
        ]
      ],

      age: [
        '',
        [
          Validators.required,
          Validators.min(18),
          Validators.max(60)
        ]
      ],

      gender: [
        '',
        Validators.required
      ],

      course: [
        '',
        Validators.required
      ],

      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ]
    });
  }

  get f() {
    return this.studentForm.controls;
  }

  submitForm(): void {

    if (this.studentForm.valid) {

      console.log('Student Data:');
      console.log(this.studentForm.value);

      alert('Student registered successfully!');

      this.studentForm.reset();

    } else {

      this.studentForm.markAllAsTouched();

    }
  }

  resetForm(): void {
    this.studentForm.reset();
  }
}