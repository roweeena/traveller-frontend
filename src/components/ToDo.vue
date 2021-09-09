<template>
  <div class="checklist">
    <h3>Your checklist</h3>
    <div>
      <section>
         <div >
           <input v-model="inputField" v-on:keyup.enter="addTodo" placeholder="Pack a toothbrush" />
           <button @click="addTodo">Add</button>
        </div>
      </section>

       <section class="container">
          <div class="row">
             <div class="offset-md-3 col-md-6 mt-3">
                <ul class="list-group justify-content-center">
                   <li class="row list-group-item border mt-2 col-xs-1" v-for="todo in todoList" :key="todo">
                      <div class="row align-items-center">
                        <input type="checkbox" v-on:change="toggle(todo)" v-bind:checked="todo.complete" class="col-sm-1 border border-danger">
                        <del v-if="todo.complete" class="col-sm-8">
                           <p>{{ todo.name }}</p>
                        </del>
                        <span v-else class="col-sm-8">
                           <p>{{ todo.name }}</p>
                        </span>
                        <span @click="deleteTodo(todo)" class="offset-sm-1 col-sm-2 delete text-right">X</span>
                      </div>
                   </li>
                </ul>
             </div>

          </div>
       </section>

    </div>
    <button type="button" name="button" class="save-button" @click="saveChecklist">Save</button>
  </div>
</template>


<script>
// import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
export default {
  name: 'ToDo',
  props: {
    items: []
  },
  methods: {
    addTodo: function(todo) {
      todo = this.inputField;
      this.todoList.push({name: todo, complete: false});
      this.inputField = '';
      console.log(this.todoList);
   },
   deleteTodo: function(todo) {
      var index = this.todoList.indexOf(todo);
      this.todoList.splice(index, 1);
      console.log(this.todoList);
   },
   toggle: function(todo) {
      todo.complete = !todo.complete;
   },
   saveChecklist: function(){
     axios.post(`${process.env.VUE_APP_ROOT_API}/checklists`, {
       todoList: this.todoList,
       uid: localStorage.getItem('uid')
     })
     .then(response => {
       console.log(response.data.checklist)
       this.$router.push(`/trip/`+response.data.id)
     })
   .catch(error=> console.log(error));
  }
},
  data () {
    return {
      inputField: '',
      todoList: []
    }
  }
}
</script>

<style scoped>
.checklist {
  color:white;
  margin-top: 7rem;
}

h3{
  text-shadow: 2px 2px #000;
}
  input{
    height: 2rem;
  }

    button{
      background-color: rgba(115, 194,251 ,0.7);
      width: 5rem;
      height: 2.5rem;
      border-radius: 0.25em;
      color: white;
      border: 1px solid white;
      margin: 10px;
    }
    button:hover{
      background-color: rgba(115, 194,251 ,1);
    }

    button:active {
      background-color: rgb(115, 194,251);
      box-shadow: 0 2px #fff;
      transform: translateY(4px);
    }


.delete{
  color:red;
}

p{
  padding-top: 1em;
  font-size: 120%;
}

.save-button{
  background-color: rgba(255,0,0 ,0.6)
}

.save-button:hover{
  background-color: rgba(255,0,0 ,1);
}

.save-button:active {
  background-color: rgb(255,0,0);
  box-shadow: 0 2px #fff;
  transform: translateY(4px);
}

</style>
