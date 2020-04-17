import { LightningElement, track} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import createIncApproachRecord from '@salesforce/apex/CreateIncomeApproachRec.createIncApproachRecord';

export default class IncomeApproachLWCVersionTwo extends LightningElement {

    
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

    nameHandler(event)
    {
        this.rec.Name = event.target.value; 
        this.vName = event.target.value;
    }
    addressHandler(event)
    {
        this.rec.Address__c = event.target.value; 
        this.vAAdress = event.target.value;
    }
    accntNumberHandler(event)
    {
        this.rec.Account_Number__c = event.target.value; 
        this.vAccountNuber = event.target.value;
    }
    PGIHandler(event)
    {
        this.rec.PGI__c = event.target.value; 
        this.vPGI = event.target.value;
    }
    OCCHandler(event)
    {
        this.rec.Occupancy__c = event.target.value; 
        this.vOCC = event.target.value;
    }
    NOIHandler(event)
    {
        this.rec.NOI__c = event.target.value; 
        this.vNOI = event.target.value;
    }
    fixedExpHandler(event)
    {
        this.rec.Fixed_Expenses__c = event.target.value; 
        this.vFixedExp = event.target.value;
    }
    variableExpHandler(event)
    {
        this.rec.Variable_Expenses__c = event.target.value; 
        this.vVariable = event.target.value;
    }
    EGIHandler(event)
    {
        this.rec.EGI__c = event.target.value; 
        this.vEGI = event.target.value;
    }
    capRateHandler(event)
    {
        this.rec.Cap_Rate__c = event.target.value; 
        this.vCAPRate = event.target.value;
    }
    ttlValHandler(event)
    {
        this.rec.Value__c = event.target.value; 
        this.vValue = event.target.value; 
    }
    notesHandler(event)
    {
        this.rec.Notes__c = event.target.value; 
        this.vNotes = event.target.value;
    }
    

    /*
    MARATHON OIL COMPANY
    0441120001005
    PO BOX 3128
    HOUSTON TX 77253-3128
    PGI: 1750000
    OCC: .89

    */
     
   handleClick() {
    createIncApproachRecord({ incRec : this.rec })
        .then(result => {
            this.message = result;
            this.error = undefined;
            if(this.message !== undefined) {
              
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Income Approach Record created',
                        variant: 'success',
                    }),
                );
            }
            
            console.log(JSON.stringify(result));
            console.log("result", this.message);
        })
        .catch(error => {
            this.message = undefined;
            this.error = error;
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error creating record',
                    message: error.body.message,
                    variant: 'error',
                }),
            );
            console.log("error", JSON.stringify(this.error));
        });
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

       this.rec.EGI__c = parseFloat(this.vNOI) - this.totalExpenses;
       this.rec.NOI__c  = (this.vPGI * this.vOCC);
       this.rec.Value__c = (this.vEGI / parseFloat(this.vCAPRate)).toFixed(2); 
       console.log(this.rec);
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
    
}