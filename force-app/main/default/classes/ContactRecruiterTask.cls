global class ContactRecruiterTask {
    @InvocableMethod
    public static void createTaskToContactRecruiter()
    {
        String userId = UserInfo.getUserId();
        Task t = new Task();
        t.OwnerId = userId;
        t.ActivityDate = System.today() + 5;
        t.Subject = 'You have created a new recruiter record on ' + System.today() ;
        t.Status = 'Open';
        t.Priority = 'Normal';
        insert t;
    }
}
