import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditEmplComponent } from './edit-empl/edit-empl.component';
import { EmployeeService } from './services/employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Crud_app';
  displayedColumns: string[] = ['id', 
  "firstName",
  "LastName",
  "Email",
  "Birth",
  "Gender" ,
  "Education",
  "Company",
  "Experience",
  "Package",
  "Action"];
  dataSource : Array <any> =[];

  constructor (private _dialog : MatDialog, private _empService : EmployeeService) {
    //The same rule of the ng
    /*this._empService.GetEmployee().subscribe(
      (Response) => (
        console.log(Response)
      )
    )*/
  };
 
  ngOnInit():void {
    this.GetEmployee();
  }

  openEditEmpForm(){
    const dialogRef = this._dialog.open(EditEmplComponent);
    dialogRef.afterClosed().subscribe({
      next : (val) => {
        if(val){
          this.GetEmployee();
        }
      }
    });
  }

  GetEmployee(){
    this._empService.GetEmployee().subscribe((database: any[]) => {
      this.dataSource = database;
    });
  }

  DeleteEmp(id : number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._empService.DeleteEmployee(id).subscribe({
          next :(res) => {
            this.GetEmployee();
          }
          ,
          error: console.log,
          
        });
        Swal.fire(
          'Deleted!',
          'Your employee has been deleted.',
          'success'
        )
      }
    })
  }

  UpdateEmp(data: any){
    const dialogRef = this._dialog.open(EditEmplComponent,{data});
    dialogRef.afterClosed().subscribe({
      next : (val) => {
        if(val){
          this.GetEmployee();
        }
      }
    });
  }
  
  
}
