import TodoList from "./TodoList.js";
import TodoInput from "./TodoInput.js";
import TodoCount from "./TodoCount.js";
import {
  fetchData,
  addData,
  deleteData,
  toggleData,
  userData,
  deleteEveryData,
} from "./Api.js";
import TodoUsers from "./TodoUsers.js";
import SetUser from "./SetUser.js";
import DeleteAll from "./DeleteAll.js";
import Loading from "./Loading.js";

const USER_NAME = "boeun";

export default function App({ $app }) {
  this.$app = $app;
  this.state = [];
  this.user = [];
  this.currentUser = USER_NAME;
  this.isLoading = false;

  this.init = async () => {
    this.user = await this.getUser(this.currentUser);
    this.loading = new Loading({ isLoading: this.isLoading });
    this.state = await this.getTodo(this.currentUser);

    if (!this.user) {
      return;
    }

    if (!this.state) {
      return;
    }

    this.todoList = new TodoList({
      initialState: this.state,
      deleteTodo: this.deleteTodo,
      toggleTodo: this.toggleTodo,
    });

    this.todoInput = new TodoInput({
      addTodo: this.addTodo,
    });

    this.todoCount = new TodoCount({
      initialState: this.state,
    });

    this.todoUsers = new TodoUsers({
      user: this.user,
      changeUser: this.changeUser,
    });

    this.deleteAll = new DeleteAll({
      $app: this.$app,
      deleteAll: this.deleteAllTodos,
    });

    this.setUser = new SetUser({
      currentUser: this.currentUser,
    });
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
      this.isLoading = true;
      this.loading.setState(this.isLoading);
      const nextState = await fetchData(this.currentUser);
      this.isLoading = false;
      this.loading.setState(this.isLoading);
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

  this.deleteAllTodos = async () => {
    try {
      await deleteEveryData(this.currentUser);
      this.setState();
    } catch (error) {
      console.log(error.message);
    }
  };

  this.changeUser = async (clickedUser) => {
    this.currentUser = clickedUser;
    this.setUser.setState(this.currentUser);
    this.setState();
  };

  this.setState = async () => {
    this.user = await this.getUser();
    this.state = await this.getTodo(this.currentUser);
    this.todoList.setState(this.state);
    this.todoCount.setState(this.state);
  };

  this.init();
}
