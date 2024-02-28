const { createApp } = Vue;

createApp({
  data() {
    return {
      newTask: "",
      todos: [
        {
          text: 'Go for a walk',
          done: false
        },
        {
          text: 'Work on your projects',
          done: true
        },
        {
          text: 'Learn more again',
          done: false
        },
        {
          text: 'Spent time with your love',
          done: false
        },
        {
          text: 'Do your laundries',
          done: true
        },
        {
          text: 'Learn more',
          done: false
        }
      ]
    };
  },
  methods: {
    addTask() {
      this.todos.unshift({
        text: this.newTask,
        done: false
      });
      this.newTask = "";
    },
    removeTask(index) {
      this.todos.splice(index, 1);
    },
    addDoneClass(index) {
      this.todos[index].done = true;
    },
  },
  mounted() {
    console.log('MOUNTED');
  }
}).mount('#app');