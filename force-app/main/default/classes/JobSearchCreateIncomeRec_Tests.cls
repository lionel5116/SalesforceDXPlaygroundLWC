
@isTest
private class JobSearchCreateIncomeRec_Tests {
  @isTest static void tstCreateIncomeApproachRecrd()
  {
      List<Income_Approach_JobS__c> jobIncs = new List<Income_Approach_JobS__c>();
      Income_Approach_JobS__c  j = new Income_Approach_JobS__c( 
        Address__c = '17615 MAGNOLIA CR',
        Account_Number__c = '0441120001005',
        PGI__c = 2500000,
        Occupancy__c = .50,
        NOI__c = 1250000,
        Fixed_Expenses__c = 45000,
        Variable_Expenses__c = 75000,
        EGI__c = 1151000,
        Cap_Rate__c= .10,
        Value__c = 11500000,
        Notes__c = 'Test Unit Test');
    
    Test.startTest();
    CreateIncomeApproachRec.createIncApproachRecord(j);
    jobIncs = [SELECT Id from Income_Approach_JobS__c];
    Test.stopTest();
    System.assert(jobIncs.size() > 0, 'Was expecting to find at least one Income Approach Record');
    
  }
}
