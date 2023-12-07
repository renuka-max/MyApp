import { Component } from '@angular/core';
import { CurdServises, PostData } from './Curd.servises';
import { FormGroup, NgForm, FormBuilder } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-curd-form',
  templateUrl: './curd-form.component.html',
  styleUrls: ['./curd-form.component.css']
})
export class CurdFormComponent {
  constructor(private curdService: CurdServises) { }
  formSubmitted = false
  empData: PostData[] | undefined
  endPoint = 'Employees'
  table = false
  form = true
  getBtn = true
  addBtn = false
  editMode = false
  selectedEmployeeIndex = 0
  post: PostData = {
    fname: '',
    lname: '',
    email: "",
    address: "",
    designation: "",
    gender: ""
  }


  getEmp() {
    this.curdService.get(this.endPoint).subscribe(
      (data: PostData[]) => {
        this.empData = data
      }
    )
  }

  postData(myForm: NgForm): void {
    this.formSubmitted = true;
    if (this.isFormValid()) {
      if (this.editMode) {
        this.curdService.edit(this.endPoint, this.selectedEmployeeIndex, this.post).subscribe(
          (response) => {
            console.log('Data updated successfully:', response);
            alert('Your data updated successfully');
            this.resetForm(myForm);
            this.editMode = false;
          },
          (error) => {
            console.error('Error updating data:', error);
          }

        );
      } else {
        this.curdService.post(this.endPoint, this.post).subscribe(
          (response) => {
            console.log('Data posted successfully:', response);
            alert('Your data posted successfully');
            this.resetForm(myForm);
          },
          (error) => {
            console.error('Error posting data:', error);
          }
        );
      }
    }
  }


  deleteEmp(index: number): void {
    if (this.empData && this.empData[index]) {
      const selectedEmployee = this.empData[index];
      if (selectedEmployee && selectedEmployee.id !== undefined) {
        const userConfirmed = confirm('Are you sure to delete?');
        if (userConfirmed) {
          this.empData.splice(index, 1);
          this.curdService.delete(this.endPoint, selectedEmployee.id).subscribe();
        }
      }
    }
  }

  editEmp(index: number): void {
    if (this.empData && this.empData[index]) {
      if (this.editMode) {
        const selectedEmployee = this.empData[this.selectedEmployeeIndex - 1];
        if (selectedEmployee && selectedEmployee.id !== undefined) {
          this.curdService.delete(this.endPoint, selectedEmployee.id).subscribe(
            () => {
              console.log('Previous data deleted successfully');
            },
            (error) => {
              console.error('Error deleting previous data:', error);
            }
          );
        }
      }

      this.editMode = true;
      this.selectedEmployeeIndex = index + 1;
      this.post = { ...this.empData[index] };
    }
  }


  resetForm(myForm: NgForm): void {
    myForm.resetForm();
    this.post = {
      fname: '',
      lname: '',
      email: '',
      address: '',
      designation: '',
      gender: ''
    };
    this.formSubmitted = false;
  }
  isFormValid(): any {
    if (
      this.post.fname.trim() !== '' &&
      this.post.lname.trim() !== '' &&
      this.post.email.trim() !== "" &&
      this.post.address.trim() !== '' &&
      this.post.designation.trim() !== '' &&
      this.post.gender.trim() !== ''
    ) {
      return true;
    }
  }


}
