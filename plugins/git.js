const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.ibb.co/K5bqKHr/20210928-161812.png";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {quoted: message.data , mimetype: Mimetype.png, caption: `*Kalippan_ser*
 

        *Github link        _https://github.com/kalippan-minnuz/Kalippan_ser*
        
        
       *Bot making video   _https://youtube.com/channel/UC0yNrBziB3u2hzvXzJ4NnTA*
 

       *Audio commads-1     _https://github.com/kalippan-minnuz/Kalippan_ser/tree/master/upload_*
 
 
       *Audio commads-2     _https://github.com/kalippan-minnuz/Kalippan_ser/tree/master/uploads_*
  
  
      *Sticker commads      _https://github.com/kalippan-minnuz/Kalippan_ser/tree/master/stickers_*
`}) 

})); 
