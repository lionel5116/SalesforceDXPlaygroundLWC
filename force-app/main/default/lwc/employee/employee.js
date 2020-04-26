import { LightningElement, api } from 'lwc';

//this is child component
export default class Employee extends LightningElement {
  @api empDetail={empName:'',empAddress:''}
}