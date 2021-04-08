const app = new Vue({
    el: '#app',
    data: {
        firstNumber: null,
        secondNumber: null,
        operation: ''
    },
    computed: {
        result() {
            switch(this.operation) {
                case '+':
                    return +this.firstNumber + +this.secondNumber;
                case '-':
                    return +this.firstNumber - +this.secondNumber;
                case '*':
                    return +this.firstNumber * +this.secondNumber;
                case '/':
                    return +this.firstNumber / +this.secondNumber;
            }
        }
    }
});