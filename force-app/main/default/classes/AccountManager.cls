@RestResource(urlMapping='/Accounts/*')
global with sharing class AccountManager {
    /*
    /services/apexrest/Accounts/
    /services/apexrest/Accounts/001f400001MYg7eAAD
    */
    @HttpGet
    global static Account getAccount() {
        RestRequest request = RestContext.request;
        // grab the caseId from the end of the URL
        String AccountId = request.requestURI.substring(
          request.requestURI.lastIndexOf('/')+1);
          Account result =  [SELECT ID ,Name 
                        FROM Account
                        WHERE Id = :AccountId];
        return result;
    }
}
