<template>
    <h1>Pokemon: <span>#{{id}}</span> </h1>

    <div v-if="pokemon">
       <img :src="pokemon.sprites.front_default" alt="pokemon.name">
    </div>
</template>

<script>
export default {
    
    props:{
        id:{
            type: Number,
            required: true
        }
        // },
        // nombre:{
        //     type:String
        // }

    },


   data(){
       return{
           pokemon : null
           
    //    id: null
    // id:  this.$route.params.id
        }
   },

    created() {
        // const {id} = this.$route.params
        // console.log(id)
        // this.id =id
        // console.log(this.$attrs)
        this.getPokemon()
    },
    methods: {

        async getPokemon(){
            try {
                const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then( leo => leo.json());
            this.pokemon = pokemon
            console.log(pokemon)
            } catch (error) {
                this.$router.push('/')
                console.log('Nada hay bueno en ese mudo cruel')
            }
     

            
        }
    },
    watch:{
        id(){
            // console.log(this.id)
            this.getPokemon()
        }
    }

    
}
</script>