var sendText= function(){
    alert('button pressed!');
    var phoneInput = document.getElementById('phone-number');
    var phoneNumber = phoneInput.value;
    var messageInput = document.getElementById('message');
    var message = messageInput.value;
    maestro.Twilio.sendSms(phoneNumber,message);
    maestro.Twilio.callAndSay(phoneNumber,message);
    document.getElementById('message').value = '';
};
setTimeout(function() {
   console.log("hello");
   maestro.Twilio.recieveSms("+12106694352",function(reply){
    console.log(reply.from); 
   });
}, 1000);