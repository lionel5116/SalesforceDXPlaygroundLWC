@IsTest
private  class AccountManagerTest {
    @isTest static void testAccountById() {
        Id recordId = createTestRecord();
        // Set up a test request
        RestRequest request = new RestRequest();
        request.requestUri =
            'https://resourceful-hawk-sxe3wx-dev-ed.lightning.force.com/services/apexrest/Accounts/'
            + recordId;
        request.httpMethod = 'GET';
        RestContext.request = request;
        // Call the method to test
        Account thisAccount = AccountManager.getAccount();
        // Verify results
        System.assert(thisAccount != null);
        System.assertEquals('Test record', thisAccount.Name);
    }

     // Helper method
     static Id createTestRecord() {
        // Create test record
        Account AcctTest = new Account(
            Name='Test record',
            BillingCity='San Francisco'
           );
        insert AcctTest;
        return AcctTest.Id;
    }          
}
