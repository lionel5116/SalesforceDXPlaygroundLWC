import { LightningElement,track } from 'lwc';

export default class SimpleInterestCalculator extends LightningElement {
  @track currentOutput;
  principle;
  rateOfInterest;
  noOfYears;

  principleChangeHandler(event)
  {
     this.principle = parseFloat(event.target.value);
  }

  timeChangeHandler(event)
  {
    this.noOfYears = parseInt(event.target.value);
  }

  rateChangeHandler(event)
  {
    this.rateOfInterest = parseFloat(event.target.value);
  }

  calculateSimpleInterestHandler() {
      this.currentOutput = ' Simple Interest is: ' + (this.principle * this.rateOfInterest*this.noOfYears) / 100;
  }

}