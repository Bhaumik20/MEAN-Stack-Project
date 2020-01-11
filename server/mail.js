var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport(
    {
        service:'gmail',
        auth:{
            user:'studygurucommunity@gmail.com',
            pass:'1234@abcd'
        }
    }
);

var mailOptions={
    from:'studygurucommunity@gmail.com',
    to:'joshibhaumik20@gmail.com',
    subject:'User registration',
    text:'Wellcome to Studyguru community!!!'
};

transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error)
    }
    else{
        console.log('Email sent '+ info.response);
    }
    
});