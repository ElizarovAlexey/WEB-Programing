class Validator {
    
    emailTemplate = /\S+@\S+\.\S+/;
    domainTemplate = /\S+\.\S+/;
    dateTemplate = /^[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{1,4}$/;

    constructor(email, domain, date) {
        this.email = email;
        this.domain = domain;
        this.date = date;
    }

    isEmail() {
        if (this.emailTemplate.test(this.email)) {
            return 'Валидация почты прошла успешно';
        }
        return 'Ошибка валидации почты';
    }

    isDomain() {
        if (this.domainTemplate.test(this.domain)) {
            return 'Валидация домена прошла успешно';
        }
        return 'Ошибка валидации домена';
    }

    isDate() {
        if (this.dateTemplate.test(this.date)) {
            return 'Валидация даты прошла успешно';
        }
        return 'Ошибка валидации даты';
    }
}

let validator = new Validator('test.email@gmail.com', 'sitecom.com', '02.02.2020');
console.log(validator.isEmail());
console.log(validator.isDomain());
console.log(validator.isDate());

