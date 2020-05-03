public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(String recId) {
        return [SELECT Id, LastName, Phone, Email  FROM Contact WHERE id =:recId ];
    }
}