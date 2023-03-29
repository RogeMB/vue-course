const vm = Vue.createApp({
        data() {
        return {
            firstName: 'Roge',
            lastName: 'Mohi',
        }
    },
    methods: {
        fullName() {
            return  `${this.firstName.toUpperCase()} ${this.lastName}`
        }
    }
}).mount('#app');

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


