// creo una variabile che contiene la funzione createApp dell'oggetto Vue
const { createApp } = Vue;

// La funzione createApp contiene un oggetto composto dalla funzione data e dalla proprietà methods
// La funzione createApp viene copiata in id="app"
createApp ( {
    data() {
        return {
            message: 'Hello Vue',
            margin: 'margin',
            text: 'text',
            color: 'red',
            image: 'https://unsplash.it/300/300?image=171',

        }
    },
    methods: {
 
        }
}).mount('#app');


