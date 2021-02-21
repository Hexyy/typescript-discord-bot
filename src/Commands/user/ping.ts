import { Command } from '../../Interfaces'
import { MessageEmbed } from 'discord.js'
export const command: Command = {
    name: 'ping',
    aliases: ['p'],
    run: async (client , message ,args) => {

message.channel.send(`Pong! ${client.ws.ping}`)
    }
}