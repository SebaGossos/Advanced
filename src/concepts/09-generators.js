
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const generatorsFunctionComponent = (element) => {

/*     const myGenerator = myFirstGeneratorFunction()
    console.log(myGenerator.next()) */

    const genId = idGenerator()

    const button = document.createElement('button')
    button.innerText = 'CLICK HERE'
    element.append ( button )

    const renderButton = () => {
        const { value } = genId.next()
        
        button.innerText = `Click ${ value }`
    }

    button.addEventListener( 'click', renderButton )
    
}


function* idGenerator() {
    let currentId = 1
    let año = 2023
    while (true) {
        if(currentId > 12 ) currentId = 1, año++
        
        yield `${año} - ${currentId++}`

    }
}


function* myFirstGeneratorFunction() {

    yield '0'
    yield '1'
    yield '2'
    yield '3'

    return 'Ya no hay mas valores'
    yield '4'


}



