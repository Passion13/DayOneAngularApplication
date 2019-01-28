import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { EmployeeService } from "./employee.service";
import { EmployeeComponent } from "./employee.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'employee', component: EmployeeComponent }
    ])
  ],
  declarations: [
    EmployeeComponent
  ],
  providers: [EmployeeService]
})
export class EmployeeModule {

}
