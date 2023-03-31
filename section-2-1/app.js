const vm = Vue.createApp({
        data() {
        return {
            firstName: 'Roge',
            middleName: '',
            lastName: 'Mohi',
            url: 'https://triana.salesianos.edu/',
            raw_url: '<a href="https://google.com" target= "_blank">Google</a>' ,
            age: 20,
            userName: 'Triana',
        }
    },
    methods: {
        fullName() {
            return  `${this.firstName.toUpperCase()} ${this.middleName} ${this.lastName}`
        },

        increment() {
            this.age++;
        },

        updateLastName(event) {
            this.lastName = event.target.value
        },

        updateUserName(str, event) {
            console.log(str)
            this.userName = event.target.value
        }


    }
}).mount('#app');

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


