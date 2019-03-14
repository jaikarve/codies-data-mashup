const sdk = require('kinvey-flex-sdk');

sdk.service((err, flex) => {
    // code goes here

    const flexFunctions = flex.functions;

    function dataMashup(context, complete, modules) {
        flex.logger.info("Context: " + JSON.stringify(context));

        complete().ok().next();
        /*
        email.send("jai.karve@progress.com",
         "jai.karve@progress.com",
         "New Task Added",
         "You have added a new task with the following details " + "\n" +
         "Action: " + context.body.action + "\n" +
         "Due Date: " + context.body.duedate + "\n" +
         "Completed: " + context.body.completed + "\n" +
         "Title: Personal Task" + "\n" +
         "Class: Personal", 
         function(err, result) {
             if (err) {
                 complete().setBody("Could not complete request").runtimeError().done();
             }
            complete().ok().next();
        });*/
    }

    flexFunctions.register("dataMashup", dataMashup);
});