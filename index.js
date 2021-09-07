import express from 'express';
import twilio from 'twilio';
const port = process.env.PORT | 8081;
const app = express();

const client = new twilio('AC9d526abc761d54f05b10e465d50bd5d3', 'c3eca8ad17a1100e2a22475ac082dd74')

setInterval(() => {
    let date = new Date()
    let str = date.toString().slice(0, 21);
    if(str === 'Tue Sep 07 2021 01:02') {
        client.messages.create({
            to: '6047618865',
            from: '12672811398',
            body: `Life is but a dream, and we, we are the makers of that dream! Today and every day we want to wake up with the brightest smile on our face. For every new moment in reality is a moment that we can take a stand and think differently, Do differently, and create differently.`
        })
    }
    if(str === 'Tue Sep 07 2021 07:00') {
        client.messages.create({
            to: '6047618865',
            from: '12672811398',
            body: `Life is but a dream, and we, we are the makers of that dream! Today and every day we want to wake up with the brightest smile on our face. For every new moment in reality is a moment that we can take a stand and think differently, Do differently, and create differently.`
        })
        client.messages.create({
            to: '6048075210',
            from: '12672811398',
            body: `Life is but a dream, and we, we are the makers of that dream! Today and every day we want to wake up with the brightest smile on our face. For every new moment in reality is a moment that we can take a stand and think differently, Do differently, and create differently.`
        })
        client.messages.create({
            to: '7786970977',
            from: '12672811398',
            body: `Life is but a dream, and we, we are the makers of that dream! Today and every day we want to wake up with the brightest smile on our face. For every new moment in reality is a moment that we can take a stand and think differently, Do differently, and create differently.`
        })
        client.messages.create({
            to: '6044454301',
            from: '12672811398',
            body: `Life is but a dream, and we, we are the makers of that dream! Today and every day we want to wake up with the brightest smile on our face. For every new moment in reality is a moment that we can take a stand and think differently, Do differently, and create differently.`
        })
    }
    if(str === 'Tue Sep 07 2021 07:15') {
        client.messages.create({
            to: '6047618865',
            from: '12672811398',
            body: `Wake UP! And Text in ferda boys! Out here setting up express servers and signing up for twilio at 1 am so I can send sms via js 🤣🥞`
        })
        client.messages.create({
            to: '6048075210',
            from: '12672811398',
            body: `Wake UP! And Text in ferda boys! Out here setting up express servers and signing up for twilio at 1 am so I can send sms via js 🤣🥞`
        })
        client.messages.create({
            to: '7786970977',
            from: '12672811398',
            body: `Wake UP! And Text in ferda boys! Out here setting up express servers and signing up for twilio at 1 am so I can send sms via js 🤣🥞`
        })
        client.messages.create({
            to: '6044454301',
            from: '12672811398',
            body: `Wake UP! And Text in ferda boys! Out here setting up express servers and signing up for twilio at 1 am so I can send sms via js 🤣🥞`
        })
    }
    console.log(str);
}, 60000)
app.listen(port)