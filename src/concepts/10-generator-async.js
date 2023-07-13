import { heroes } from "../data/hero"
/**
 * 
 * @param {HTMLDivElement} element 
 */

//! COMPONENT ---------------------------------------
export const generatorsAsyncComponent = async( element ) => {

    const heroGenerator = getHeroGenerator()
    let isFinish = false 

    do{
        const {value, done} = await heroGenerator.next()
        isFinish = done
        if(done) break
        element.innerHTML = value

    } while( !isFinish )

}

//! FUNCTIONS ---------------------------------------
async function* getHeroGenerator(){

    for ( const hero of heroes ){
        await sleep()
        yield hero.name
    }
 
}

const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 500)
    })
}


