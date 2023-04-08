const vm = Vue.createApp({
  data() {
    return {
      firstName: "Roge",
      middleName: "",
      lastName: "Mohi",
      url: "https://triana.salesianos.edu/",
      raw_url: '<a href="https://google.com" target= "_blank">Google</a>',
      age: 20,
      userName: "Triana",
    };
  },
  methods: {

    increment() {
      this.age++;
    },

    updateLastName(event) {
      this.lastName = event.target.value;
    },

    updateUserName(str, event) {
      // * event.preventDefault() --> Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.
      console.log(str);
      this.userName = event.target.value;
    },

    updateMiddleName(event) {
      this.middleName = event.target.value;
    },
  },
  computed: {
        fullName() {
      console.log("FullName computed properties was called") // ! Evitamos que Vue llame constantemente a este método con las computed properties
      return `${this.firstName.toUpperCase()} ${this.middleName} ${this.lastName}`;
    },
  },
  watch: {
    age(newVal, oldVal) {
      setTimeout(() => {
        this.age = 20
      }, 5000)
    }
  }
}).mount("#app");

// Igual que escribir app.mount('#app');

setTimeout( () => {
    vm.firstName = 'Javier'; // * that is with proxy. Without proxy -> vm.$data.firstName
}, 2000);


// Vue.createApp({
//     data() {
//         return {
//             firstName: 'Roge',
//             lastName: 'Mohi',
//         }
//     }
// }).mount('#app2');

// * podemos crear tantas apps como queramos.


