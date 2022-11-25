import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/shared/employees.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  department = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'React' },
    { id: 3, name: 'Node' },
    { id: 4, name: 'BootStrap' },
    { id: 5, name: 'Firebase' }
  ]
  form: any
  constructor(public empService: EmployeesService) { }


  ngOnInit() {
    this.form = new FormGroup({

      $key: new FormControl(null),
      fullName: new FormControl("", Validators.required),
      email: new FormControl('', Validators.email),
      mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
      city: new FormControl(''),
      gender: new FormControl('1'),
      department: new FormControl('2'),
      hireDate: new FormControl(''),
      isPermanent: new FormControl(true),
    })
  }
  onClick() {
    this.form.reset();
    this.initializeFormGroup();
    this.form.updateValueAndValidity();



  }
  initializeFormGroup() {
    this.form.setValue(
      {
        isPermanent: false,
        $key: '',
        fullName: 'kumar',
        email: '',
        mobile: '',
        gender: '2',
        city: '',
        department: '2',
        hireDate: '',
      }
    )
  }
}
