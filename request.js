var express=require('express');
var router=express.Router();
const dotenv= require('dotenv');
dotenv.config();
const{OAuth2Client, OAuth2Client}= require('google-auth-library');

router.post('/',async function(req,res,next) {
    res.header('Access-Control-Allow-Origin','https://park-ur-way.vercel.app/');
    res.header('Referrer-Policy','no-referrer-when-downgrad');

    const redirectUrl="https://park-ur-way.vercel.app";
    const OAuth2Client=new OAuth2Client(
        process.env.CLIENT_ID,
        process.env.CLIENT_SECRET,
        redirectUrl
    );
    const authorizeUrl =OAuth2Client.generateAuthUrl({
        access_type:'offline',
        scope:'https://www.googleapis.com/auth/userinfo.profile openid',
        prompt:'consent'
    });
    res.json({url:authorizeUrl})

    
}); 