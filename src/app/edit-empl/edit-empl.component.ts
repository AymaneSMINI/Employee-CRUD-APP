import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

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
    private _dialogRef : MatDialogRef<EditEmplComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ){
    this.empForm = this._fb.group({
      firstName : [null,Validators.required],
      LastName : [null,Validators.required],
      Email : [null,Validators.required],
      Birth : [null,Validators.required],
      Gender : [null,Validators.required],
      Education : [null,Validators.required],
      Company : [null,Validators.required],
      Experience : [null,Validators.required],
      Package : [null,Validators.required]
    })
  }


  ngOnInit() {
    this.empForm.patchValue(this.data);
  }

  onFormSubmit(){
    console.log(this.empForm.valid);
    if (this.empForm.valid){
      if(this.data){
        this._empService.UpdateEmployee(this.data.id, this.empForm.value).subscribe({
          next: () => {
            this._dialogRef.close(true);
            Swal.fire(
              'Updated!',
              'Your employee has been Updated successfuly.',
              'success'
            )
          },
          error: (err:any) => {
            console.error(err);
          }
        })
      }

      else{
        this._empService.addEmployee(this.empForm.value).subscribe({
          next: (val:any) => {
            this._dialogRef.close(true);
            Swal.fire(
              'Added!',
              'Your employee has been Added successfuly.',
              'success'
            )
          },
          error: (err:any) => {
            console.error(err);
          }
        })
      }
      
    }
  }
}
