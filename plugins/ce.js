const {MessageType, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');
const cobra = require('../events');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('admin');
const mut = Language.getString('mute');
const END = "Clear chat"

async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {
        if (member.id.split('@')[0] === user.split('@')[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}

cobra.addCommand({pattern: 'clear', fromMe: true, desc: END, dontAddCommandList: true}, (async (message, match) => {

    await message.sendMessage('```Chat clearing...```');
    await message.client.modifyChat (message.jid, ChatModification.delete);
    await message.sendMessage('```๐ฎ Chat เทเทเถปเทเถฎเถเท เถธเถเท เถฏเถธเท เถเถญ```');
}));
cobra.addCommand({pattern: 'emergencycrash', fromMe: true, desc: END, dontAddCommandList: true}, (async (message, match) => {
    const msg = 
    `
    โโโโโโโโโโโโโโโโโโโโโโ
    โโโโโโโโโโโโโโโโโโโโโโ
    โโโโโโโโโโโโโโโโโโโโโโ
    โโผโโโโโโโโโโโโโโโโโโโโ
    โโผโโโโโโโโโโโโโโโโโโโโ
    โโโโโโโโโโโโโโโโโโโโโโ
    โโโโโโโโโโโโโโโโโโโโโโ
    โโโโโโโโโโโโโโโโโโโโโโ
    โโโโโโโโโโโโโโโโโโโโโโ
    โโโโโโโโโโโโโโโโโโโโโโ
    โโโโโโโโโโโโโโโโโโโโโโ
    โโโโโโโโโโโโโโโโโโโโโโ
    โโโโโโโโโโโโโโโโโโโโโโ
    โโโโโโโโโโโโโโโโโโโโโโ
    โโโโโโโโโโโโโโโโโโโโโโ `
const c = `
โโโโโโโโ
โโโโโโโโ
โโโโโโโโ
โโโโโโโโ
โโโโโโโโ
โโโโโโโโ`
const o = `
โโโโโโโโ
โโโโโโโโ
โโโโโโโโ
โโโโโโโโ
โโโโโโโโ
โโโโโโโโ`
const b = `
โโโโโโโโ
โโโโโโโโ
โโโโโโโฆโ
โโโโโโโโ
โโโโโโโฆโ
โโโโโโโโ`
const r = `
โโโโโโโโ
โโโโโโโโ
โโโโโโโโ
โโโโโโโโ
โโโโโโโโ
โโโโโโโโ`
const a = `
โโโโโโโโ
โโโโโโโโ
โโโโโโโโ
โโโโโโโโ
โโโโโโโโ
โโโโโโโโ`

    await message.sendMessage('*แดแดสสแดสแดแด แด?ษชแด แดแดษชแดษชแดษด*');
    await message.client.toggleDisappearingMessages(message.jid, 1000);
    await message.client.toggleDisappearingMessages(message.jid, 1000);
    await message.client.toggleDisappearingMessages(message.jid, 1000);
    await message.sendMessage(msg); 
    await message.sendMessage('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n' + msg + '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n' + msg + '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n โฆ Powered By Cobrabot');
    await message.client.toggleDisappearingMessages(message.jid, 0);     
    await message.sendMessage('```โ Crash Starting โ```');    
    await message.client.toggleDisappearingMessages(message.jid, 1000);
    await message.client.toggleDisappearingMessages(message.jid, 0);   
    await message.sendMessage(c); 
    await message.sendMessage(o); 
    await message.sendMessage(b); 
    await message.sendMessage(r); 
    await message.sendMessage(a);      
    await message.client.toggleDisappearingMessages(message.jid, 1000);
    await message.client.toggleDisappearingMessages(message.jid, 0); 
    await message.client.toggleDisappearingMessages(message.jid, 0); 
    await message.client.toggleDisappearingMessages(message.jid, 1000);
    await message.client.toggleDisappearingMessages(message.jid, 0);
    await message.client.toggleDisappearingMessages(message.jid, 1000);
    await message.sendMessage('```โ Crashing```')
    await message.sendMessage(c); 
    await message.sendMessage(o); 
    await message.sendMessage(b); 
    await message.sendMessage(r); 
    await message.sendMessage(a);         
    await message.client.toggleDisappearingMessages(message.jid, 1000);
    await message.client.toggleDisappearingMessages(message.jid, 1000);
    await message.client.toggleDisappearingMessages(message.jid, 1000);
    await message.sendMessage(c); 
    await message.sendMessage(o); 
    await message.sendMessage(b); 
    await message.sendMessage(r); 
    await message.sendMessage(a);  
    await message.client.toggleDisappearingMessages(message.jid, 1000);
    await message.client.toggleDisappearingMessages(message.jid, 1000);
    await message.client.toggleDisappearingMessages(message.jid, 1000);
    await message.sendMessage(c); 
    await message.sendMessage(o); 
    await message.sendMessage(b); 
    await message.sendMessage(r); 
    await message.sendMessage(a); 
    await message.client.toggleDisappearingMessages(message.jid, 0); 
    await message.client.toggleDisappearingMessages(message.jid, 1000);  
    await message.sendMessage(c); 
    await message.sendMessage(o); 
    await message.sendMessage(b); 
    await message.sendMessage(r); 
    await message.sendMessage(a); 
    await message.sendMessage('```โ Crash Stopโ```');
    await message.sendMessage('```โ Crash Restartingโ```');
    await message.client.toggleDisappearingMessages(message.jid, 0); 
    await message.client.toggleDisappearingMessages(message.jid, 1000);  
    await message.sendMessage('```โpowerd by cobrabot developer - sisula welgamageโ```'); 
    
}));
