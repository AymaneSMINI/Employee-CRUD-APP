import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-empl',
  templateUrl: './edit-empl.component.html',
  styleUrls: ['./edit-empl.component.css']
})
export class EditEmplComponent {
  empForm : FormGroup;
  Education: string[] = [
        "Associate's Degree",
        "Bachelor's Degree", 
        "Master's Degree", 
        "Doctoral Degree"
      ]
  constructor(private _fb: FormBuilder, 
    private _empService : EmployeeService,
    private _dialogRef : MatDialogRef<EditEmplComponent>
    ){
    this.empForm = this._fb.group({
      firstName : '',
      LastName : '',
      Email : '',
      Birth : '',
      Gender : '',
      Education : '',
      Company : '',
      Experience : '',
      Package : ''
    })
  }
  onFormSubmit(){
    if (this.empForm.valid){
      this._empService.addEmployee(this.empForm.value).subscribe({
        next: (val:any) => {
          this._dialogRef.close(true);
        },
        error: (err:any) => {
          console.error(err);
        }
      })
    }
  }
}