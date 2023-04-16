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
            errorMsg: '',
            newTaskText: '',
            
        }
    },

    methods:{
        newTasks(){
            if(this.newTaskText.length < 4){
                this.errorMsg = `La task deve avere almeno 5 caratteri`
            }else{
                const addTask = {
                    text: this.newTaskText,
                    done: false
                }
                this.tasks.unshift(addTask)
                this.newTaskText = ''
            }


        },

        taskRemove(index, task){
            if(task.done){
                this.tasks.splice(index,1);
            }
        }
    }


}).mount("#app")
