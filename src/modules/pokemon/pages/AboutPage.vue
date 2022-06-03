<template>
    <h1>About page</h1>
    <hr>
    <h2> {{name}} </h2>
    <button @click="onChangeName">
        Cmabiar Nombre
    </button>
</template>

<script>
export default {
    data() {
        return {
            name: 'Leonel'
        }
    },
    methods: {
        onChangeName(){
            // console.log('se cambiara a yedi')
            this.name = 'Yedi'
        }
    },
    beforeCreate(){
        
        console.log('beforeCreate')
    },
    created() { 
        this.name = 'loco te amo'
        console.log('created')
     },
    beforeMount(){
        console.log('beforeMount')
    },
    mounted() {
        console.log('mounted')
    },
    debeforeUpdate(){
      console.log('debeforeUpdate')
    },
    updated() {
        console.log('updated')
    },
    activated(){
        console.log(' activated')
    },
    deactivated() {
        console.log('deactivated')
    },
    beforeUnmount(){
     console.log('beforeUnmount')
    },
    unmounted() {
       console.log('unmounted') 
    },
    beforeCaptured(){
      console.log(' beforeCaptured')
    },
    errorCaptured(){
        console.log('console.log')
    },
    renderTracked() {
       console.log('renderTracked') 
    },
    renderTriggered(){
console.log('renderTriggered')
    },
}
</script>