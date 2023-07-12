

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseRaceComponent = (element) => {


    (() => {
        const renderLoading = () => {
        element.innerHTML = 'Loading...'
    }   
        renderLoading()
    })()

    const renderValue = (value) => {
        element.innerHTML = value
    }

    Promise.race([
        slowPromise(),
        mediumPromise(), 
        fastPromise(),
        slowPromise(),
        mediumPromise(), 
        fastPromise(),
    ]).then( renderValue )

}


const slowPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('Slow Promise')
    }, 2000) 
})

const mediumPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('Medium Promise')
    }, 1500)
})
    
const fastPromise = () => new Promise( resolve => {
    setTimeout(() => {
        resolve('Fast Promise')
    }, 1000) 
})
