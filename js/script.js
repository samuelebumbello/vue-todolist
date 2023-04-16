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
                    done: false
                },
                {
                    text: 'Prenotare visita radiologa',
                    done: false
                },
            ],
            errorMsg: ''
        }
    },

    methods:{
        taskRemove(index, task){
            if(task.done){
                this.tasks.splice(index,1);
            }
        }
    }


}).mount("#app")
