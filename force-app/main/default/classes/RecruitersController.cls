public with sharing class RecruitersController {
    @AuraEnabled(cacheable=true)
    public static List<Recruiters__c> getRecruitersList(String recId) {
        return [SELECT Id, 
                        Recruiters__c.Name, 
                        Recruiters__c.Cell_Phone__c, 
                        Recruiters__c.Email_Address__c,
                        Recruiters__c.Firm_Name__c,
                        Recruiters__c.Phone_Number__c
                        FROM Recruiters__c WHERE id =:recId ];
    }

    @AuraEnabled
    public static Recruiters__c createIncRecruiterRecord(Recruiters__c recruiterRec){
        system.debug('Recruiter Record: '+ recruiterRec);
        insert recruiterRec;
        return recruiterRec;
    }
}
