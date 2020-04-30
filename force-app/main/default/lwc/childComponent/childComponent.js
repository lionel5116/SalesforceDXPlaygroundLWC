import { LightningElement, track,api } from 'lwc';

export default class ChildComponent extends LightningElement {
  @track message;

  @api
  changeMessage(str)
  {
      this.message =str.toUpperCase();
  }
}