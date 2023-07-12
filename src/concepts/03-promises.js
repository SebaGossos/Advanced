import { heroes } from "../data/hero"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) => {

    const renderHero = ( hero ) => {
        element.innerHTML = `${ hero.name }`
    }

    const renderError = ( error ) => {
        element.innerHTML = `
            <h1>Error</h1>
            <h3>${ error }</h3>
        `
    }

    const renderTwoHeros = ( hero1, hero2 ) => {
        element.innerHTML = `
            <h1>Two Heros</h1>
            <h3>${ hero1.name }</h3>
            <h3>${ hero2.name }</h3>
        `
    }

    const id1 = '5d86371fd55e2e2a30fe1ccb'
    const id2 = '5d86371fd55e2e2a30fe1ccb1'

    //! Forma3
    Promise.all([
        findHero( id1 ),
        findHero( id2 ),
    ])
    .then( ([hero1, hero2]) => renderTwoHeros(hero1, hero2) )
    .catch( renderError )



    //! Forma2
/*     let hero1; 
       findHero( id1 )
        .then( hero => {
            hero1 = hero
            return findHero( id2 )
        }).then( hero2 => {
            renderTwoHeros(hero1, hero2)
        })
        .catch( renderError ) */
    //! Forma1
  /*   findHero( id1 )
        .then( (hero1) => {
            findHero( id2 )
                .then( ( hero ) => {
                    hero2 = hero
                    renderTwoHeros( hero1, hero2 )
                })
                .catch( renderError )
        } )
        .catch( renderError )
        .finally() */
} 

/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */
const findHero = (id) => {
    return new Promise((resolve, reject) => {

        const hero = heroes.find( hero => hero.id === id)

        if( hero ){
            resolve(hero)
            return
        }

        reject(`Hero with id: ${ id } not found.`)

    })
}