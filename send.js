// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
AWS.config.update({region: 'REGION'});

var sqs = new AWS.SQS({apiVersion: '2012-11-05'});
let sendUserDetails = function(){
var params = {
  DelaySeconds: 10,
  MessageAttributes: {
    "Title": {
      DataType: "String",
      StringValue: "First Message"
    },
    "Author": {
      DataType: "String",
      StringValue: "Vijender"
    },
    "Mobile": {
      DataType: "Number",
      StringValue: "8700228181"
    },
    "syncId":{
      DataType:"String",
      StringValue:"ec6397d0-cb4b-457d-a397-d0cb4bc57d3c"
    },
    "status":{
      DataType:"String",
      StringValue:"SYNC_COMPLETED"
    },
    "userId":{
      DataType:"Number",
      StringValue:"1234"
    }
  },
    MessageBody: "Hi, I'm testing the application",
    QueueUrl: "https://sqs.us-east-1.amazonaws.com/989690157514/testingSQS"
};

sqs.sendMessage(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.MessageId);
  }
});
};

sendUserDetails();