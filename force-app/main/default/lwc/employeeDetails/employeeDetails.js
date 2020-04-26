import { LightningElement } from 'lwc';

//This is the parent component
export default class EmployeeDetails extends LightningElement {
    empDetails=[
      {
        empName:'Steve',empAddress:'NC'
      },
      {
        empName:'Lionel',empAddress:'TX'
      },
      {
        empName:'Charles',empAddress:'MDE'
      },
      {
        empName:'Mark',empAddress:'GA'
      },
    ]
}