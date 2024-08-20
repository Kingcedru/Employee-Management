import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-Emplyoees',
  templateUrl: './Emplyoees.component.html',
})
export class EmplyoeesComponent implements OnInit {

  data: any

  constructor(private employeesService: EmployeesService) { }

  ngOnInit() {
    this.employeesService.getEmployees().subscribe(response=>{
      this.data = response;
      console.log(this.data)
    },error=>{
      console.log(error)
    }
    )
  }

}
