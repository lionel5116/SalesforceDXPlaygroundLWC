// Use .apex files to store anonymous Apex.
// You can execute anonymous Apex in VS Code by selecting the
//     apex text and running the command:
//     SFDX: Execute Anonymous Apex with Currently Selected Text
// You can also execute the entire file by running the command:
//     SFDX: Execute Anonymous Apex with Editor Contents

//string tempvar = 'Enter_your_name_here';
//System.debug('Hello World!');
//System.debug('My name is ' + tempvar);

/*
List<Contact> myContact = new List<Contact>();
myContact = ContactController.getContactList('003f400000gtwDuAAI');
System.debug(myContact.size());
System.debug(myContact);
*/
delete [SELECT id FROM Contact WHERE Email = 'ljones@gmail.com'];


