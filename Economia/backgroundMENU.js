const { MessageActionRow, MessageSelectMenu, MessageEmbed} = require('discord.js')
const Discord = require('discord.js')
const db = require("quick.db")
module.exports = {
    name: "background",
    run: async (client, message, args) => {

    let args0 = args.join(" ")
    let dindin = db.fetch(`gizmo.${message.author.id}`)
    let cidade = 'https://images.designtrends.com/wp-content/uploads/2016/03/30062511/Tokyo-City-Wallpaper.jpg'
    let cave =  'https://media.discordapp.net/attachments/923403920993288213/940239455581798461/wp4698347.jpg?width=759&height=427'
    let cave2 =  'https://th.bing.com/th/id/R.b34053e65b5e7f7014444dc304ec3917?rik=DbYV7DKlSo1djg&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fHncYmkr.jpg&ehk=ek7RTSg%2f%2fpAZFc%2bISd9zYSqx%2f3UjBW9I5LEecW02mH4%3d&risl=&pid=ImgRaw&r=0'
    let gamer =  'https://th.bing.com/th/id/OIP.Q1WAZO05swfi1elmAwKIxAHaEK?pid=ImgDet&rs=1'
    let programador =  'https://wallpaperaccess.com/full/796843.png'
    let kenned = 'https://cdn.discordapp.com/banners/493282797222494230/a_1fda807334db30b9b343608f1b0c2bc7.gif?size=1024'
    let trovão = 'https://cdn.discordapp.com/attachments/942587338343710770/942886735199744060/images_3.jpeg'
    let minecraft = 'https://media.discordapp.net/attachments/789286535996506132/943332096888418324/1237F599-4619-4687-BC83-8CF2C7995CD1.gif?width=400&height=225'
    let loh = 'https://media.discordapp.net/attachments/923375840534868039/944633259671822346/88FF1836-CAE0-45D3-AEA1-DBA69F709059.gif'
    let equipegizmo = 'https://media2.giphy.com/media/5hZIq5Prpj2jTBZTfn/giphy.gif?cid=790b7611ebd517c616ebe09ad5bcf4cf6e1daa5f96a925e8&rid=giphy.gif&ct=g'
    let hzz = 'https://media3.giphy.com/media/FmyxvABenL83A0G3CQ/giphy.gif?cid=790b7611e94ecd77caaaf8eb5437cbdf1dc75c9ea933011c&rid=giphy.gif&ct=g'
    let céu = 'https://i.imgur.com/LMe6gzn.gif'
    let error = 'https://i.imgur.com/yCnifQd.gif'
    let tristeamor = 'https://i.imgur.com/yO0wpU6.gif'
    let nuvem = 'https://i.imgur.com/iBawLCi.gif'
    let pentagrama = 'https://i.imgur.com/jVmhYLl.gif'
    let universo = 'https://i.imgur.com/77pSOCm.gif'
    let vidatriste = 'https://i.imgur.com/9WrAJSV.jpeg'
    

    if(args0==='Cidade'){
      if(dindin<15000) return message.reply(`Ops ${message.author} você não possui Gizmo coins suficiente!`)
    
      message.reply('<:dcl_ypSino:914350019182723122> | Background setado com sucesso!')
      db.subtract(`gizmo.${message.author.id}`, 15000)
    
      db.set(`bg.${message.author.id}`, cidade)
    }
    
    if(args0==='Minecraft'){
      if(dindin<15000) return message.reply(`Ops ${message.author} você não possui Gizmo coins suficiente!`)
    
      message.reply('<:dcl_ypSino:914350019182723122> | Background setado com sucesso!')
      db.subtract(`gizmo.${message.author.id}`, 15000)
    
      db.set(`bg.${message.author.id}`, minecraft)
    }
    
    if(args0==='Cave'){
      if(dindin<50000) return message.reply(`Ops ${message.author} você não possui Gizmo coins suficiente!`)
    
      message.reply('<:dcl_ypSino:914350019182723122> | Background setado com sucesso!')
      db.subtract(`gizmo.${message.author.id}`, 50000)
    
      db.set(`bg.${message.author.id}`, cave)
    }
    if(args0==='Cave2'){
      if(dindin<1000000) return message.reply(`Ops ${message.author} voce não possui Gizmo coins suficiente!`)
    
      message.reply('<:dcl_ypSino:914350019182723122> | Background setado com sucesso!')
      db.subtract(`gizmo.${message.author.id}`,1000000)
    
      db.set(`bg.${message.autjor.id}`, cave2)
    }
    if(args0==='Gamer'){
        if(dindin<1500000) return message.reply(`Ops ${message.author} você não possui Gizmo coins suficiente!`)
      
        message.reply('<:dcl_ypSino:914350019182723122> | Background setado com sucesso!')
        db.subtract(`gizmo.${message.author.id}`, 1500000)
      
        db.set(`bg.${message.author.id}`, gamer)
      }
      if(args0==='Programador'){
        if(dindin<1500000) return message.reply(`Ops ${message.author} você não possui Gizmo coins suficiente!`)
      
        message.reply('<:dcl_ypSino:914350019182723122> | Background setado com sucesso!')
        db.subtract(`gizmo.${message.author.id}`, 1500000)
      
        db.set(`bg.${message.author.id}`, programador)
      }
      if(args0==='Kenned'){
        if(dindin< 1) return message.reply(`Ops ${message.author} você não possui Gizmo coins suficiente!`)
      
        message.reply('<:dcl_ypSino:914350019182723122> | Background setado com sucesso!')
        db.subtract(`gizmo.${message.author.id}`, 1)
      
        db.set(`bg.${message.author.id}`, kenned)
      }
    
      if(args0==='Trovão'){
        if(dindin<200000) return message.reply(`Ops ${message.author} você não possui Gizmo coins suficiente!`)
      
        message.reply('<:dcl_ypSino:914350019182723122> | Background setado com sucesso!')
        db.subtract(`gizmo.${message.author.id}`, 200000)
      
        db.set(`bg.${message.author.id}`, trovão)
      }
    
      if(args0==='Lohsecret'){
        if(dindin<1) return message.reply(`Ops ${message.author} você não possui Gizmo coins suficiente!`)
      
        message.reply('<:dcl_ypSino:914350019182723122> | Background setado com sucesso!')
        db.subtract(`gizmo.${message.author.id}`, 1)
      
        db.set(`bg.${message.author.id}`, loh)
      }
    
      if(args0==='EquipeGizmo'){
        if(dindin<1) return message.reply(`Ops ${message.author} você não possui Gizmo coins suficiente!`)
      
        message.reply('<:dcl_ypSino:914350019182723122> | Background setado com sucesso!')
        db.subtract(`gizmo.${message.author.id}`, 1)
      
        db.set(`bg.${message.author.id}`, equipegizmo)
      }
    
      if(args0==='Hzz'){
        if(dindin<0) return message.reply(`Ops ${message.author} você não possui Gizmo coins suficiente!`)
      
        message.reply('<:dcl_ypSino:914350019182723122> | Background setado com sucesso!')
        db.subtract(`gizmo.${message.author.id}`, 0)
      
        db.set(`bg.${message.author.id}`, hzz)
      }

      if(args0==='Céu'){
        if(dindin<20000) return message.reply(`Ops ${message.author} você não possui Gizmo coins suficiente!`)
      
        message.reply('<:dcl_ypSino:914350019182723122> | Background setado com sucesso!')
        db.subtract(`gizmo.${message.author.id}`, 20000)
      
        db.set(`bg.${message.author.id}`, céu)
      }    

      if(args0==='Error'){
        if(dindin<20000) return message.reply(`Ops ${message.author} você não possui Gizmo coins suficiente!`)
      
        message.reply('<:dcl_ypSino:914350019182723122> | Background setado com sucesso!')
        db.subtract(`gizmo.${message.author.id}`, 20000)
      
        db.set(`bg.${message.author.id}`, error)
      }    

      if(args0==='Triste amor'){
        if(dindin<25000) return message.reply(`Ops ${message.author} você não possui Gizmo coins suficiente!`)
      
        message.reply('<:dcl_ypSino:914350019182723122> | Background setado com sucesso!')
        db.subtract(`gizmo.${message.author.id}`, 25000)
      
        db.set(`bg.${message.author.id}`, tristeamor)
      }   
      
      if(args0==='Nuvem'){
        if(dindin<30000) return message.reply(`Ops ${message.author} você não possui Gizmo coins suficiente!`)
      
        message.reply('<:dcl_ypSino:914350019182723122> | Background setado com sucesso!')
        db.subtract(`gizmo.${message.author.id}`, 30000)
      
        db.set(`bg.${message.author.id}`, nuvem)
      }    

      if(args0==='Pentagrama'){
        if(dindin<35000) return message.reply(`Ops ${message.author} você não possui Gizmo coins suficiente!`)
      
        message.reply('<:dcl_ypSino:914350019182723122> | Background setado com sucesso!')
        db.subtract(`gizmo.${message.author.id}`, 35000)
      
        db.set(`bg.${message.author.id}`, pentagrama)
      }    

      if(args0==='Universo'){
        if(dindin<35000) return message.reply(`Ops ${message.author} você não possui Gizmo coins suficiente!`)
      
        message.reply('<:dcl_ypSino:914350019182723122> | Background setado com sucesso!')
        db.subtract(`gizmo.${message.author.id}`, 35000)
      
        db.set(`bg.${message.author.id}`, universo)
      }    

      if(args0==='Que vida triste'){
        if(dindin<40000) return message.reply(`Ops ${message.author} você não possui Gizmo coins suficiente!`)
      
        message.reply('<:dcl_ypSino:914350019182723122> | Background setado com sucesso!')
        db.subtract(`gizmo.${message.author.id}`, 40000)
      
        db.set(`bg.${message.author.id}`, vidatriste)
      }    
    



    const embed = new Discord.MessageEmbed()
    .setTitle('<a:Nc_catHacker_wire:951249277714333756>|Sistema de Background')
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setDescription(`
    <:V_CorretoTKF:910509220015788073>| Olá ${message.author}, você está usando o sistema de _Background_/Fundo de perfil.
    Para ficar admirando o seu perfil use _G!perfil_!
    Para usar o comando use: **EXEMPLO** _G!background Cidade_ sempre como está escrito no menu!  

    <:void:829507703856562216> | Vote em mim usando **G!votar** ou [Clicando aqui](https://voidbots.net/bot/814726444377833532) 
    não conte para ninguém, tem um segredo usando o **G!votar**.
    **_Bom jogo**_
    `)
    .setColor('#0060EE')
    .setFooter('Gizmo')

    const row = new Discord.MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
      .setCustomId('menu')
      .setPlaceholder('Backgrounds')
      .addOptions([
        {
          label: 'Backgrounds',
          emoji: '<:firewall:942415761857728532>',
          value: '1',
          description: 'Página 1'
        },
        {
            label: 'Backgrounds 2 página',
            emoji: '<:info:916909634403573801>',
            value: '2',
            description: 'Página 2'
          },

      ])
    )
    message.channel.send({ embeds: [embed], components: [row]})
.then(msg=>{
			const filtro = (interaction) => 
            interaction.isSelectMenu()
      
          const coletor = msg.createMessageComponentCollector({
            filtro
          });
      coletor.on('collect', async(collected)=>{
				 let ticket = collected.values[0]
            collected.deferUpdate()

						if(ticket === '1'/*id que vc colocou*/){
                        const embed1 = new MessageEmbed()

                        .setColor(`#0060EE`)
                        .setThumbnail(message.guild.iconURL({ dynamic: true }))
                        .setTitle(`📣 | Loja de Backgrounds!`)
                        .setDescription(`
                        > **Background #1**\n**Nome: \`Cidade\`**\n**Preço: \`15 mil Gizmo coins\`**\n**Preview: [Clique Aqui](https://media.discordapp.net/attachments/923403920993288213/940238846153592852/lawn_forest_mountains_144578_3840x2400.jpg?width=759&height=427)**

                        > **Background #2**\n**Nome: \`Minecraft\`**\n**Preço: \`15 mil Gizmo coins\`**\n**Preview: [Clique Aqui](https://cdn.discordapp.com/attachments/916822325712797716/943280222831251556/33daa915df05373e1cd4cf5c2339c297.gif)**
                        
                        > **Background #3**\n**Nome: \`Cave\`**\n**Preço: \`50 mil Gizmo coins\`**\n**Preview: [Clique Aqui](https://media.discordapp.net/attachments/923403920993288213/940239455581798461/wp4698347.jpg?width=759&height=427)**
                        
                        > **Background #4**\n**Nome: \`Cave2\`**\n**Preço: \`100 mil Gizmo coins\`**\n**Preview: [Clique Aqui](https://cdn.discordapp.com/attachments/916822325712797716/940762062513131560/wp9371401.png)
                        
                        > **Background #5**\n**Nome: \`Gamer\`**\n**Preço: \`150 mil Gizmo coins\`**\n**Preview: [Clique Aqui](https://th.bing.com/th/id/OIP.Q1WAZO05swfi1elmAwKIxAHaEK?pid=ImgDet&rs=1)
                        
                        > **Background #6**\n**Nome: \`Programador\`**\n**Preço: \`150 mil Gizmo coins\`**\n**Preview: [Clique Aqui](https://wallpaperaccess.com/full/796843.png)**
                        
                        > **Background #7**\n**Nome: \`Trovão\`**\n**Preço: \`200 mil Gizmo coins\`**\n**Preview: [Clique Aqui](https://cdn.discordapp.com/attachments/942587338343710770/942886735199744060/images_3.jpeg)**
                        
                        `)
                      .setFooter(`Para comprar utilize G!background <nome>`);

					msg.edit({embeds: [embed1]})
                        }

                    if(ticket === '2'/*id quevc colocou*/){

                        const embed2 = new MessageEmbed()

                        .setColor(`#0060EE`)
                        .setThumbnail(message.guild.iconURL({ dynamic: true }))
                        .setTitle(`📣 | Loja de Backgrounds!`)
                        .setDescription(`
                        > **Background #8**\n**Nome: \`Céu\`**\n**Preço: \`20 mil Gizmo coins\`**\n**Preview: [Clique Aqui](https://i.imgur.com/LMe6gzn.gif)**

                        > **Background #9**\n**Nome: \`Error\`**\n**Preço: \`20 mil Gizmo coins\`**\n**Preview: [Clique Aqui](https://i.imgur.com/yCnifQd.gif)**

                        > **Background #10**\n**Nome: \`Triste amor\`**\n**Preço: \`25 mil Gizmo coins\`**\n**Preview: [Clique Aqui](https://i.imgur.com/yO0wpU6.gif)**

                        > **Background #11**\n**Nome: \`Nuvem\`**\n**Preço: \`30 mil Gizmo coins\`**\n**Preview: [Clique Aqui](https://i.imgur.com/iBawLCi.gif)**

                        > **Background #12**\n**Nome: \`Pentagrama\`**\n**Preço: \`35 mil Gizmo coins\`**\n**Preview: [Clique Aqui](https://i.imgur.com/jVmhYLl.gif)**

                        > **Background #13**\n**Nome: \`Universo\`**\n**Preço: \`35 mil Gizmo coins\`**\n**Preview: [Clique Aqui](https://i.imgur.com/77pSOCm.gif)**

                        > **Background #14**\n**Nome: \`Que vida triste\`**\n**Preço: \`40 mil Gizmo coins\`**\n**Preview: [Clique Aqui](https://i.imgur.com/9WrAJSV.jpeg)**

                        `)
                      .setFooter(`Para comprar utilize G!background <nome>`);


                        msg.edit({embeds: [embed2]})
                 }
             })
         })     
     }  
}