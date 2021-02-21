import Client from '../Client'
import { Message } from 'discord.js'

interface Run {
    (client: Client , message: Message , args: string[])
}

export interface Command {
    name: string
    aliases: string[]
    des?: string
    usage?: string
    run: Run
}