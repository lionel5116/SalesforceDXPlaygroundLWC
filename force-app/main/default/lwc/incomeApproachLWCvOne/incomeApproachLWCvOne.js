import { LightningElement, track} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import createIncApproachRecord from '@salesforce/apex/CreateIncomeApproachRec.createIncApproachRecord';

/*
import NAME_FIELD from '@salesforce/schema/Income_Approach_JobS__c.Name';
import ADDRESS_FIELD from '@salesforce/schema/Income_Approach_JobS__c.Address__c';
import ACCOUNT_FIELD from '@salesforce/schema/Income_Approach_JobS__c.Account_Number__c';
import PGI_FIELD from '@salesforce/schema/Income_Approach_JobS__c.PGI__c';
import OCC_FIELD from '@salesforce/schema/Income_Approach_JobS__c.Occupancy__c';
import NOI_FIELD from '@salesforce/schema/Income_Approach_JobS__c.NOI__c';
import FIXED_EXP_FIELD from '@salesforce/schema/Income_Approach_JobS__c.Fixed_Expenses__c';
import VARIABLE_EXP_FIELD from '@salesforce/schema/Income_Approach_JobS__c.Variable_Expenses__c';
import EGI_FIELD from '@salesforce/schema/Income_Approach_JobS__c.EGI__c';
import CAP_RATE_FIELD from '@salesforce/schema/Income_Approach_JobS__c.Cap_Rate__c';
import VALUE_FIELD from '@salesforce/schema/Income_Approach_JobS__c.Value__c';
import NOTES_FIELD from '@salesforce/schema/Income_Approach_JobS__c.Notes__c';
*/

export default class IncomeApproachLWCvOne extends LightningElement {

    /*
    @track vName = NAME_FIELD;
    @track vAAdress = ADDRESS_FIELD;
    @track vAccountNuber = ACCOUNT_FIELD;
    @track vPGI = PGI_FIELD;
    @track vOCC = OCC_FIELD;
    @track vNOI = NOI_FIELD;
    @track vFixedExp = FIXED_EXP_FIELD;
    @track vVariable = VARIABLE_EXP_FIELD;
    @track vEGI = EGI_FIELD;
    @track vCAPRate = CAP_RATE_FIELD;
    @track vValue = VALUE_FIELD;
    @track vNotes = NOTES_FIELD;
    */

    @track vName = '';
    @track vAAdress = '';
    @track vAccountNuber = '';
    @track vPGI = '';
    @track vOCC = '';
    @track vNOI = '';
    @track vFixedExp = '';
    @track vVariable = '';
    @track vEGI = '';
    @track vCAPRate = '';
    @track vValue = '';
    @track vNotes = '';

    rec = {
        Name : this.vName,
        Address__c : this.vAAdress,
        Account_Number__c : this.vAccountNuber,
        PGI__c : this.vPGI,
        Occupancy__c : this.vOCC,
        NOI__c : this.vNOI,
        Fixed_Expenses__c : this.vFixedExp,
        Variable_Expenses__c : this.vVariable,
        EGI__c : this.vEGI,
        Cap_Rate__c : this.vCAPRate,
        Value__c : this.vValue,
        Notes__c : this.vNotes,
      }
   
    /*
    nameHandler(event)
    {
        this.rec.Name = event.target.value; 
    }
    addressHandler(event)
    {
        this.rec.Address__c = event.target.value; 
    }
    accntNumberHandler(event)
    {
        this.rec.Account_Number__c = event.target.value; 
    }
    PGIHandler(event)
    {
        this.rec.PGI__c = event.target.value; 
    }
    OCCHandler(event)
    {
        this.rec.Occupancy__c = event.target.value; 
    }
    NOIHandler(event)
    {
        this.rec.NOI__c = event.target.value; 
    }
    fixedExpHandler(event)
    {
        this.rec.Fixed_Expenses__c = event.target.value; 
    }
    variableExpHandler(event)
    {
        this.rec.Variable_Expenses__c = event.target.value; 
    }
    EGIHandler(event)
    {
        this.rec.EGI__c = event.target.value; 
    }
    capRateHandler(event)
    {
        this.rec.Cap_Rate__c = event.target.value; 
    }
    ttlValHandler(event)
    {
        this.rec.Value__c = event.target.value;  
    }
    notesHandler(event)
    {
        this.rec.Notes__c = event.target.value; 
    }
    */

    /*
    MARATHON OIL COMPANY
    0441120001005
    PO BOX 3128
    HOUSTON TX 77253-3128
    PGI: 1750000
    OCC: .89

    */

   nameHandler(event)
   {
       this.vName = event.target.value;
   }
   addressHandler(event)
   {
       this.vAAdress = event.target.value;
   }
   accntNumberHandler(event)
   {
       this.vAccountNuber = event.target.value;
   }
   PGIHandler(event)
   {
       this.vPGI = event.target.value;
   }
   OCCHandler(event)
   {
       this.vOCC = event.target.value;
   }
   NOIHandler(event)
   {
       this.vNOI = event.target.value;
   }
   fixedExpHandler(event)
   {
       this.vFixedExp = event.target.value;
   }
   variableExpHandler(event)
   {
       this.vVariable = event.target.value;
   }
   EGIHandler(event)
   {
       this.vEGI = event.target.value;
   }
   capRateHandler(event)
   {
       this.vCAPRate = event.target.value;
   }
   ttlValHandler(event)
   {
       this.vValue = event.target.value;
   }
   notesHandler(event)
   {
       this.vNotes = event.target.value;
   }

   clearForm(event) {
    this.vName = '';
    this.vPGI = '';
    this.vAAdress = '';
    this.vAccountNuber = '';
    this.vPGI = '';
    this.vOCC = '';
    this.vNOI = '';
    this.vFixedExp = '';
    this.vVariable = '';
    this.vEGI = '';
    this.vCAPRate = '';
    this.vValue = '';
    this.vNotes = '';
  }

  calc(event)
  {
      var totalExpenses;
      console.log("Something is happening");
      
      this.vNOI = (this.vPGI * this.vOCC);
      console.log("NOI: " + this.vNOI);
      this.totalExpenses = parseFloat (this.vFixedExp) + parseFloat(this.vVariable);
      console.log("Total Expenses: " + this.totalExpenses);
      this.vEGI = parseFloat(this.vNOI) - this.totalExpenses;
      this.vValue = (this.vEGI / parseFloat(this.vCAPRate)).toFixed(2);
  }

  handleSuccess(event) {
    this.dispatchEvent(
        new ShowToastEvent({
            title: 'Success',
            message: "Something Happened..",
            variant: 'success',
        }),
    );
}

}