import { Event } from '../Interfaces'

export const event: Event = {
    name: 'ready' ,
    run: (client) => {
        client.user.setPresence({
            activity: {
                name: 'TS Bot',
                type: 'WATCHING'
            },
             status: 'dnd'
             
        })
    }
}