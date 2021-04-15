var app = new Vue({
    el: '#app',
    data: {
      username: 'alexei',
      birthday: new Date(),
    },
    computed: {
        age() {
            let dateNow = new Date();
            let dateBirth = new Date(this.birthday);
            let today = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
            let dateBirthInThisYear = new Date(today.getFullYear(), dateBirth.getMonth(), dateBirth.getDate());
            let age = today.getFullYear() - dateBirth.getFullYear();

            if (today < dateBirthInThisYear) {
                return age - 1;
            }
            return age;
        }
    }
  })