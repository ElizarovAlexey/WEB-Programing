let person = {
	name: 'Person',
	age: 123,
	salary: 1255.23,
	contacts: {
		phone: '112',
		email: 'email@domain.com'
	},
	adress: 'Moldova',
	getName() {
		return this.name;
	},
	getAge() {
		return this.age;
	},
	getSalary() {
		return this.salary;
	},
	getPhone() {
		return this.contacts.phone;
	},
	getEmail() {
		return this.contacts.email;
	},
	getAdress() {
		return this.adress;
	}
};