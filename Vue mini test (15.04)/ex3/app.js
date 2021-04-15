var app = new Vue({
    el: '#app',
    data: {
      experience: '',
      language: '',
      salary: 0
    },
    watch: {
        experience() {
            this.salary = this.calcSalary(this.language, this.experience);
        },
        language() {
            this.salary = this.calcSalary(this.language, this.experience);
        }
    },
    methods: {
        calcSalary(language, experience) {
            let coefficient = 0;
            switch(language) {
                case 'JS':
                    coefficient = 1;
                    break;
                case 'Python':
                    coefficient = 0.7;
                    break;
                case 'Java':
                    coefficient = 1.3;
                    break;
            }

            let basicRate = 0;
            switch(experience) {
                case '1':
                    basicRate = 10000;
                    break;
                case '2':
                    basicRate = 12000;
                    break;
                case '3':
                    basicRate = 13500;
                    break;
                case '4':
                    basicRate = 14000;
                    break;
                case '5':
                    basicRate = 15000;
                    break;
            }

            return basicRate * coefficient;
        }
    }
  })