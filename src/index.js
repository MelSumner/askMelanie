"use strict";

// Include the Alexa SDK
var Alexa = require("alexa-sdk");

// The handlers object tells Alexa how to handle various actions
var handlers = {
  "GreetingIntent": function () {
		//Create speech output. This is what Alexa will speak back when the user says hello
      this.response.speak("Hello, and welcome to the computer-aided enrichment center.");
      this.emit(":responseReady");
   },
  //Our skill will receive a LaunchRequest when the user invokes the skill with the invocation name, but does not provide any command mapping to an intent. 
  "LaunchRequest": function () {
    this.response.speak("Welcome to the computer aided enrichment center.").listen("What would you like advice on this evening? You can say things like life, career, programming, parenting or even love"); 
    this.emit(":responseReady");
   },
   "CategoryIntent": function () {
      var getCategory = this.event.request.intent.slots.categoryTypes.value;
      this.emit(':responseReady');
   }

};

// This is the function that AWS Lambda calls every time Alexa uses your skill.
exports.handler = function(event, context, callback) {

  // Set up the Alexa object
	var alexa = Alexa.handler(event, context);
  
  // Register Handlers
  alexa.registerHandlers(handlers);  

  // Start our Alexa code
  alexa.execute();
};