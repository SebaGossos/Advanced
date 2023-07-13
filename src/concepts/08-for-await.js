import { heroes } from '../data/hero';
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const forAwaitComponent = async( element ) => {

    const heroId = '5d86371fd55e2e2a30fe1ccb'


    const heroIds = heroes.map( hero => hero.id )

    const heroesPromises = getHeroesAsync( heroIds )

    for await( const hero of heroesPromises ){
        element.innerHTML += `<li>${ hero.name }</li>`
    }

}

/**
 * 
 * @param {Array<String>} heroIds 
 * @returns {Array<Promise>}
 */
const getHeroesAsync = ( heroIds ) => {
    
    const heroPromises = [];

    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync(id)  );
    });

    return heroPromises;
}

const getHeroAsync = async(id) => {

    await new Promise(( resolve ) => {
        setTimeout(() => resolve(), 1000)
    });

    return heroes.find( hero => hero.id === id );
}