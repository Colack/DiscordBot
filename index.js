// Code By Colack //



const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '^';

client.once('ready', () => {
    
    console.log('Bot Is Online!');
    
});

client.on('message', message => {
    
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ + /);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        
        message.channel.send('pong!');
        
    } else if (command === 'hello'){
        
        message.channel.send('Hello!);
                            
    } else if (command === ':)'){
            
        message.channel.send('😃');
    
    }
    
});

client.login('TOKEN GOES HERE');
