import isA from 'typeproof/core/isA'
import World from '..'
import System from './System'

function PlayerSystem (pool, dt) {
    const player = World.Entity.getFirstFromTag('player');
    

    if(isA.string(player.presence.room)){
        System.moveTo(player, player.presence.room)      
    }

    //Update inventory
    let actions = World.IO.getState().events.actions;
    if(actions.take) {
        actions.take.forEach(item => {
            const {id, name} = World.Entity.get(item);
            World.IO.updateWorld(["inventory"], {id, name: name.label}, "push")
        });
    }
}

export default PlayerSystem