import { IEmployee } from "./employee";
import { Injectable } from "@angular/core";

@Injectable()
export class EmployeeService{

  getEmployee(): IEmployee[]{
    return [{
      "EmployeeId": 1,
      "Name": "Anant",
      "Surname": "Pithadiya",
      "Qualification": "B.E",
      "Experience": 3.5,
      "Languages": [ "English",  "Hindi", "Gujarati"]


    }
    ];
}

}
