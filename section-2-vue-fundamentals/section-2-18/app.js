let vm = Vue.createApp({
    data() {
        return {
            isPurple: false,
            selectedColor: '',
            size: 150,
        }
    }, 
    computed: {
        circle_classes() {
            return {
              purpleBackground: this.isPurple,
            };
        }
    }
}).mount('#app')