
import {createRouter, createWebHashHistory} from 'vue-router';
import isAuthenticatedGuard  from './auth-guard'
// import AboutPage from '../modules/pokemon/pages/AboutPage'

import ListPage from  '../modules/pokemon/pages/ListPage'
import PokemonPage from '../modules/pokemon/pages/PokemonPage'

// import NoPageFound from '../modules/shared/pages/NoPageFound'


const routes = [
    {
        path: '/',
        redirect: '/pokemon'
        // redirect: '/home'
    },
    {
        path:'/pokemon',
        name: 'pokemon',
        component: () => import(/* webpackChunkName: "PokemonPage"*/'@/modules/pokemon/layouts/PokemonLayout'),
        children:[

                {
                    path: 'home',
                    name: 'pokemon-home',
                    component: ListPage
                },

                {
                    path: 'about',
                    name: 'pokemon-about', 
                    component: () => import(/* webpackChunkName: "AboutPage"*/'../modules/pokemon/pages/AboutPage')
                },

                {
                    path: 'pokemonid/:id',
                    name: 'pokemon-id',
                    component: PokemonPage,
                    props:(route) =>{
                    //  const{id} = route.params
                    //  console.log(route)
                    const id = Number(route.params.id)

                    return isNaN(Number(id)) ? {id:1} : {id}
                    //  id:Number(id)
                    //  id: 50,
                    //  nombre: 'Leonel',
                    //  apellido: 'Yedi'


                }
            },
            {
                path: '',
                redirect: {name: 'pokemon-about'}
            }
        ]

    },




     //DBZ LAYOUT
     {
        path: '/dbz',
        name: 'dbz',
        // beforeEnter: [isAuthenticatedGuard],
        component: () => import(/* webpackChunkName: "DragonBallLayout"*/'@/modules/dbz/layouts/DragonBallLayout.vue'),
        children: [

            {
                path: 'characters',
                name: 'dbz-characters',
                // beforeEnter: [isAuthenticatedGuard],
                component: () => import( /* webpackChunkName: "Characters"*/'@/modules/dbz/pages/Characters')
            },
            {
                path: 'about',
                name: 'dbz-about',
                beforeEnter: [isAuthenticatedGuard],
                component: () => import( /* webpackChunkName: "About"*/'@/modules/dbz/pages/About')
            },
            {
                path: 'characters',
                redirect: {name:  'dbz-characters'}
            
            }
        ]

     },

     /*
     
     
     */






    // {path: '/home',
    //   name: 'home',
    //  component: ListPage
    // },

    // {path: '/about',
    // name: 'about', 
    // component: () => import(/* webpackChunkName: "AboutPage"*/'../modules/pokemon/pages/AboutPage')
    // },

    // {path: '/pokemonid/:id',
    //  name: 'pokemon-id',
    //  component: PokemonPage,
    //  props:(route) =>{
    //     //  const{id} = route.params
    //     //  console.log(route)
    //     const id = Number(route.params.id)

    //      return isNaN(Number(id)) ? {id:1} : {id}
    //         //  id:Number(id)
    //         //  id: 50,
    //         //  nombre: 'Leonel',
    //         //  apellido: 'Yedi'


    //  }
    // },

    {path: '/:pathMatch(.*)*',
    component: () => import(/* webpackChunkName: " NoPageFound"*/'../modules/shared/pages/NoPageFound')
    //  redirect: '/home'
    },


]

const router = createRouter({

    history: createWebHashHistory(),

    routes,
})
//Guard global sincrono

// router.beforeEach( (to, from, next) =>{
//     console.log({to, from, next});
//     const random = Math.random() *100
//     if(random > 50){
//         console.log('autentico')
//         next()
//     }
//     else{
//         console.log(random, 'bloqueado por el beforeEach uard')
//         next({name: 'pokemon-home'})
//     }
//     //next()
// })



//-----Guard Asincrono


// const canAccess= () =>{
//     return new Promise( resolve => {

//         const random = Math.random() * 100
//         if(random > 50){
//             console.log('autentico-CanAccess')
//             resolve(true)
//         }
//         else{
//             console.log(random, 'bloqueado por el beforeEach Guard - canAccess')
//             resolve(false)
//         }
//     })
// }

// router.beforeEach( async(to, from, next) =>{
//     const authorized = await canAccess()

//     authorized
//     ? next()
//     : next({name: 'pokemon-home'})
// })

export default router