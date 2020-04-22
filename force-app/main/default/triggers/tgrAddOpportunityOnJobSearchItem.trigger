trigger tgrAddOpportunityOnJobSearchItem on Job_Search__c (after insert) {
    List<Opportunity> optyList=new List<Opportunity>();
    for(Job_Search__c jobSearchRec: Trigger.new)
    {
        Opportunity opp = new Opportunity();
        opp.Name = jobSearchRec.Name;
        opp.Amount = jobSearchRec.Offer_Amount__c;
        opp.StageName = 'Prospecting';
        opp.Type = 'New Customer';
        opp.LeadSource = 'Phone Inquiry';
        opp.CloseDate= Date.toDay() + 5;
        Integer randomNumber = Integer.valueof((Math.random() * 5));
        opp.OrderNumber__c = String.valueOf(randomNumber);
        opp.Description = jobSearchRec.notes__c;
        optyList.add(opp);
        insert optyList;

    }
}