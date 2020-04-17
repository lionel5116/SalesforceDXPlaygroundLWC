public with sharing class CreateIncomeApproachRec {
    @AuraEnabled
    public static Income_Approach_JobS__c createIncApproachRecord(Income_Approach_JobS__c incRec){
        system.debug('Income Approach Record: '+ incRec);
        insert incRec;
        return incRec;
    }
}
