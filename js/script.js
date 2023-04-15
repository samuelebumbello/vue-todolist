const {createApp} = Vue;

createApp({
    data(){
        return{
            tasks: [
                {
                    text: 'Andare in palestra',
                    done: false
                },
                {
                    text: 'Andare a fare la spesa',
                    done: true
                },
                {
                    text: 'Prenotare visita radiologa',
                    done: false
                },
            ],
        }
    },
}).mount("#app")
