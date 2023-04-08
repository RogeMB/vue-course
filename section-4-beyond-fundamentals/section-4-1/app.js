let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!",
    }
  },
  // beforeCreate() {
  //   console.log("beforeCreate() function callled", this.message);
  // },
  // created() {
  //   console.log("created() function callled", this.message);
  // },
  // beforeMount() {
  //   console.log("beforeMount() function callled", this.$el);
  // },
  // mounted() {
  //   console.log("mounted() function callled", this.$el);
  // },
  // beforeUpdate() {
  //   console.log("beforeUpdate() function callled");
  // },
  // updated() {
  //   console.log("updated() function callled");
  // },
  // beforeUnmount() {
  //   console.log("beforeUnmount() function callled");
  // },
  // unmounted() {
  //   console.log("unmounted() function callled");
  // },
  template: ` {{ message }}`
});

vm.mount('#app')

/*
* Así podemos retardar el inicio de la aplicación en el caso de que queramos hacerlo. Normalmente no se utiliza.

setTimeout(() => {
  vm.mount('#app')
}, 3000)

*/

let vm2 = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },
  render() {
    return Vue.h('h1', this.message)
  }
}).mount("#app2")