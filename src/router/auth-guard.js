

const isAuthenticatedGuard = async(to, from, next) =>{
    // console.log(to, from, next)

    return new Promise(() => {
        const random = Match.random() * 100

        if (random > 50){
            console.log('estas auntenticado')
            next()
        }
        else{
            console.log('bloqueado por el is isAuthenticatedGuard', random)
            next({ name: 'pokemon-home'})
        }
    })
}

export default isAuthenticatedGuard