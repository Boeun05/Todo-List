import TodoList from "./TodoList.js";
import TodoInput from "./TodoInput.js";
import TodoCount from "./TodoCount.js";
import { fetchData, addData, deleteData, toggleData, userData } from "./Api.js";
import TodoUsers from "./TodoUsers.js";
import SetUser from "./SetUser.js";

const USER_NAME = "boeun";

export default function App({ $app }) {
  this.$app = $app;
  this.state = [];
  this.user = [];
  this.currentUser = USER_NAME;

  this.init = async () => {
    const userResponse = await this.getUser();
    const todoResponse = await this.getTodo(this.currentUser);

    if (!userResponse) {
      return;
    }

    if (!todoResponse) {
      return;
    }

    this.user = userResponse;
    this.state = todoResponse;

    this.todoList = new TodoList({
      $app,
      initialState: this.state,
      deleteTodo: this.deleteTodo,
      toggleTodo: this.toggleTodo,
    });

    this.todoInput = new TodoInput({
      $app,
      addTodo: this.addTodo,
    });

    this.todoCount = new TodoCount({
      $app,
      initialState: this.state,
    });

    this.todoUsers = new TodoUsers({
      user: this.user,
      changeUser: this.changeUser,
    });

    this.setUser = new SetUser({
      currentUser: this.currentUser,
    });

    this.setState(this.state);
    console.log(this.state);
    console.log(this.currentUser);
    console.log(todoResponse);
  };

  this.getUser = async () => {
    try {
      const nextUser = await userData();
      return nextUser;
    } catch (error) {
      console.log(error.message);
    }
  };

  this.getTodo = async () => {
    try {
      const nextState = await fetchData(this.currentUser);
      return nextState;
    } catch (error) {
      console.log(error.message);
    }
  };

  this.addTodo = async (text) => {
    try {
      await addData(this.currentUser, text);
      this.setState();
    } catch (error) {
      console.log(error.message);
    }
  };

  this.deleteTodo = async (id) => {
    try {
      await deleteData(this.currentUser, id);
      this.setState();
    } catch (error) {
      console.log(error.message);
    }
  };

  this.toggleTodo = async (id) => {
    try {
      await toggleData(this.currentUser, id);
      this.setState();
    } catch (error) {
      console.log(error.message);
    }
  };

  this.changeUser = async (clickedUser) => {
    this.currentUser = clickedUser;
    this.init();
  };

  this.setState = async () => {
    this.state = await this.getTodo(this.currentUser);
    this.todoList.setState(this.state);
    this.todoCount.setState(this.state);
    this.setUser.setState(this.currentUser);
    this.todoUsers.setState(this.user);
  };

  this.init();
}
