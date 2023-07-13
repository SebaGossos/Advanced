import { heroes } from "../data/hero"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncAwaitComponent = async( element ) => {

    
    const id1 = '5d86371fd55e2e2a30fe1ccb2'
    const id2 = '5d86371f97c29d020f1e1f6d'

    try{
        const { name: name1  } = await findHero( id1 )
        const { name: name2 } = await findHero( id2 )
    
        element.innerHTML = `${ name1 } / ${ name2 }`
    } catch( error ){
        element.innerHTML = `${error}`
    }


}


const findHero = async( id ) => {

    const hero = heroes.find( hero => hero.id === id )
    if( !hero ) 
        throw `Hero with id ${id} not found`
    return hero
}
