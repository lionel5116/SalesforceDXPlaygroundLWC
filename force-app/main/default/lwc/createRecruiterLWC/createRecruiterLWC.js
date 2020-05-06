import { LightningElement,track, wire} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import  {createRecord,getRecord} from 'lightning/uiRecordApi'
import getRecruitersList from '@salesforce/apex/RecruitersController.getRecruitersList';
import createIncRecruiterRecord from '@salesforce/apex/RecruitersController.createIncRecruiterRecord';

const fieldArray = ['Recruiters__c.Name',
                   'Recruiters__c.Phone_Number__c',
                   'Recruiters__c.Cell_Phone__c',
                   'Recruiters__c.Email_Address__c',
                   'Recruiters__c.Firm_Name__c'
                   ];

export default class CreateRecruiterLWC extends LightningElement {
   @track recruiterName= '';
   @track recruiterPhoneNumber= '';
   @track recruiterCellPhone= '';
   @track recruiterEmailAddress= '';
   @track recruiterFirmName= '';


   rec = {
    Name : this.recruiterName,
    Phone_Number__c : this.recruiterPhoneNumber,
    Cell_Phone__c : this.recruiterCellPhone,
    Email_Address__c : this.recruiterEmailAddress,
    Firm_Name__c : this.recruiterFirmName,
  }

   @track recordId;
   @wire(getRecord, {recordId:'$recordId',fields:fieldArray}) RecruiterRecord;

   recruiterNameChangeHandler(event) {
     //this.recruiterName = event.target.value;
     this.rec.Name = event.target.value; 
     this.recruiterName = event.target.value; 
   } 

   recruiterPhoneNumberChangeHandler(event) {
    //this.recruiterPhoneNumber = event.target.value;
    this.rec.Phone_Number__c = event.target.value;
    this.recruiterPhoneNumber = event.target.value;
  } 
  
   recruiterCellPhoneChangeHandler(event) {
    //this.recruiterCellPhone = event.target.value;
    this.rec.Cell_Phone__c = event.target.value;
    this.recruiterCellPhone = event.target.value; 
   } 

   recruiterEmailAddressChangeHandler(event) {
       //this.recruiterEmailAddress = event.target.value;
       this.rec.Email_Address__c = event.target.value;
       this.recruiterEmailAddress = event.target.value; 
   } 

   recruiterFirmNameChangeHandler(event) {
    //this.recruiterFirmName = event.target.value;
    this.rec.Firm_Name__c = event.target.value;
    this.recruiterFirmName = event.target.value;
   } 

 

  createRecruiter() {
    createIncRecruiterRecord({ recruiterRec : this.rec })
        .then(result => {
            this.message = result;
            this.error = undefined;
            if(this.message !== undefined) {
              
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Recruiter Record created',
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
  
   
    /*
    createRecruiter()
   {
       
       const fields={'Recruiters__c.Name':this.recruiterName,
                     'Recruiters__c.Cell_Phone__c':this.recruiterCellPhone,
                     'Recruiters__c.Email_Address__c':this.recruiterEmailAddress,
                     'Recruiters__c.Firm_Name__c':this.recruiterFirmName,
                     'Recruiters__c.Phone_Number__c':this.recruiterPhoneNumber}
        const recordInput={apiName:'Recruiters__c',fields};
        createRecord(recordInput).then(response=>{
            console.log('Contact has been created successfully',response.id);
   
            this.recordId = response.id;  //when you create a record, it returns the record id
            //@wire(getrecord,{recordId:'$recordId,fields:fieldArray'})contactRecord; -- and works with the reactive property  @track recordId;
            console.log("Record ID is: " + this.recordId);
            console.log("Recruiter object= " + this.RecruiterRecord);
            
   
         }).catch(error=> {
           console.log('Error creating contact:',error.body.message);
         });
         

   }
   */
   
   get retRecruiterName(){
    /*
    if(this.RecruiterRecord.data){
       
        return this.RecruiterRecord.data.fields.Name.value;
     }
     else
     {
       return undefined;
     }
     */
   }

   get retRecruiterCellPhone(){
      /*
    if(this.RecruiterRecord.data){
      
       return this.RecruiterRecord.data.fields.Cell_Phone__c.value;
    }
    else
    {
      return undefined;
    }
     */
  }

  get retRecruiterEmailAddress(){
     /*
    if(this.RecruiterRecord.data){
      
       return this.RecruiterRecord.data.fields.Email_Address__c.value;
    }
    else
    {
      return undefined;
    }
     */
  }

  
  get retRecruiterFirmName(){
     /*
    if(this.RecruiterRecord.data){
      
       return this.RecruiterRecord.data.fields.Firm_Name__c.value;
    }
    else
    {
      return undefined;
    }
    */
  }

  get retRecruiterPhoneNumber(){
     /*
    if(this.RecruiterRecord.data){
      
       return this.RecruiterRecord.data.fields.Phone_Number__c.value;
    }
    else
    {
      return undefined;
    }
     */
  }


}