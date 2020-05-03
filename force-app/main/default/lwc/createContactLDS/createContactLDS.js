import { LightningElement,track, wire} from 'lwc';
import  {createRecord,getRecord} from 'lightning/uiRecordApi'
import getContactList from '@salesforce/apex/ContactController.getContactList';

const fieldArray=['Contact.LastName','Contact.Phone','Contact.Email'];

export default class CreateContactLDS extends LightningElement {
  
  @track contactName;
  @track contactEmail;
  @track contactPhone;

  //wire service to retrieve the record from salesforce (biind your fieldarray to a variable: contactRecord)
  @track recordId;
  @wire(getRecord, {recordId:'$recordId',fields:fieldArray}) contactRecord;
  

  contactNameChangeHandler(event)
  {
     this.contactName = event.target.value;
  }
  contactEmailChangeHandler(event)
  {
    this.contactEmail = event.target.value;
  }
  contactPhoneChangeHandler(event)
  {
    this.contactPhone = event.target.value;
  }
  createContact()
  {
      const fields={'LastName':this.contactName,
                    'Phone':this.contactPhone,
                    'Email':this.contactEmail
                    }
      const recordInput={apiName:'Contact',fields};
      createRecord(recordInput).then(response=>{
         console.log('Contact has been created successfully',response.id);

         this.recordId = response.id;  //when you create a record, it returns the record id
         //@wire(getrecord,{recordId:'$recordId,fields:fieldArray'})contactRecord; -- and works with the reactive property  @track recordId;
         console.log("Record ID is: " + this.recordId);
         console.log("Contact object= " + this.contactRecord);
         

      }).catch(error=> {
        console.log('Error creating contact:',err.body.message);
      });
  }

  get retContactName()
  {
    if(this.contactRecord.data){
      
       return this.contactRecord.data.fields.LastName.value;
    }
    else
    {
      return undefined;
    }
    
  }

  get retContactPhone()
  {
    if(this.contactRecord.data){
     
      return this.contactRecord.data.fields.Phone.value;
    }
    else
    {
      return undefined;
    }
  }

  get retContactEmail()
  {
    if(this.contactRecord.data){
      return this.contactRecord.data.fields.Email.value;
    }
    else
    {
      return undefined;
    }
  }


}