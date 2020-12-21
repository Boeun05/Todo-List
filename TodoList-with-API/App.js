import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'
import {fetchData, addData, deleteData, toggleData, userData} from './Api.js'
import TodoUser from './Todousers.js'
import SetUser from './SetUser.js'

const USER_NAME = 'boeun'

export default function App({$app}){
    this.$app = $app
    this.state = []
    this.user = []
    this.currentUser = USER_NAME

    this.init = async() => {
      const userResponse = await this.getUser()
      const todoResponse = await this.getTodo(this.currentUser)

      if(!userResponse){
        return
      }

      if(!todoResponse){
        return
      }

      this.user = userResponse
      this.state = todoResponse

      this.todoList = new TodoList({
        $app, 
        initialState: this.state,
        deleteTodo: this.deleteTodo,
        toggleTodo: this.toggleTodo
      })

      this.todoInput = new TodoInput({
        $app,
        addTodo: this.addTodo
      })

      this.todoCount = new TodoCount({
        $app,
        initialState: this.state
      })

      this.todoUser= new TodoUser({
        user:this.user
      })

      this.setUser = new SetUser({
        currentUser: this.currentUser
      })

      this.setState(this.state)
    }


    this.getUser = async () => {
      try{
        const nextUser = await userData()
        return nextUser
      } catch(error){
        console.log(error.message)
      }
    }
    
    this.getTodo = async () => {
      try{
        const nextState = await fetchData(USER_NAME)
        return nextState
      } catch(error){
        console.log(error.message)
      }
    }

    this.addTodo = async (text) => {
      try{
        await addData(USER_NAME, text)
        this.setState()
      } catch(error){
        console.log(error.message)
      }
    }

    this.deleteTodo = async(id) => {
      try{
        await deleteData(USER_NAME, id)
        this.setState()
      } catch(error){
        console.log(error.message)
      }
    } 

    this.toggleTodo = async(id) => {
      try{
        await toggleData(USER_NAME,id)
        this.setState()
      } catch(error){
        console.log(error.message)
      }
    }

    this.setState = async () => {
      this.state = await this.getTodo(this.currentUser)
      this.todoList.setState(this.state)
      this.todoCount.setState(this.state)
      this.setUser.setState(this.currentUser)
    }
    
    
    this.init()

  
}

