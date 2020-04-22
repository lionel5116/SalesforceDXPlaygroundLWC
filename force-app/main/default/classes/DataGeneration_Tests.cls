/*
This is effectively brute-forcing the solution. Before you call the underlying code that you’re testing, 
you’re creating the necessary data by creating and inserting objects. Brute force can work well,
 but it can lead to lengthy tests that are hard to follow. 
 That is especially true when you start generating records that are related to other records and contain lots of field details. 
*/

@isTest
  private class DataGeneration_Tests {

    @TestSetup
    static void dataCreation(){
    Account a = TestFactory.getAccount('Muddy Waters Inc.', true);
    Contact c = TestFactory.getContact(a.id, 'Muddy', 'Waters', true);
    Opportunity opp = New Opportunity();
    opp.name = 'Long lost record';
    opp.accountId = a.id;
    opp.closeDate = Date.today().addDays(14);
    opp.stageName = 'prospecting';
    insert opp;
    }
    
    @isTest static void testBruteForceAccountCreation() {
      List<Account> accts = new List<Account>();
      Account a = new Account(name='McTesterson LLC');
      insert a;
      Test.startTest();
      accts = [SELECT Id FROM Account];
      Test.stopTest();
      System.assert(accts.size() > 0, 'Was expecting to find at least one account');
    }

    //this is a FACTORY TEST METHOD OF UNIT TESTING -0 SEE THE CLASS TestFactory
    @isTest static void testUseTestFactoryToCreateAccountsWithContacts() {
        List<Account> accts;
        List<Contact> contacts;
        TestFactory.generateAccountWithContacts(5);
        Test.startTest();
        accts = [SELECT Id FROM Account];
        contacts = [SELECT Id FROM Contact];
        Test.stopTest();
        System.assert(accts.size() > 0, 'Was expecting to find at least one account');
        System.assertEquals(5, contacts.size(), 'Was expecting to find 5 contacts');  //I want to make this test fail
      }

      @isTest static void testAtTestSetupMethodsRule(){
        List<Opportunity> opps = [SELECT Id, AccountId FROM Opportunity];
        System.assertEquals(1, opps.size(), 'Expected test to find a single Opp');
      }
  }

  