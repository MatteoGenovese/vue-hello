var app = new Vue({
    el: '#root',
    data: {
        message: "Hello World",
        img: "https://www.mitindo.it/wp-content/uploads/2013/10/48.jpg"
    },
    methods: {
        scriviHelloWorld() {
            return this.message;
        },
    }
});