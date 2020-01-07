window.onload = function () {

    var application = new Vue({

        el: '#app',
        data: {
            errors: [],
            name: '',
            surname: '',
            phone: '',
            email: '',
            bday: '',
            qCoding: '',
            qExperience: '',
            qLogic1: '',
            qLogic2: '',
            quizzQ1: '',
            quizzQ2: '',
            quizzQ3: []

        },
        methods: {
            checkForm: function (e) {

                if (this.name &&
                    this.surname &&
                    this.phone &&
                    this.email &&
                    this.bday &&
                    this.qCoding &&
                    this.qExperience &&
                    this.qLogic1 &&
                    this.qLogic2 &&
                    this.quizzQ1 &&
                    this.quizzQ2 &&
                    this.quizzQ3.length > 0) {
                    this.successMessage();
                }

                this.errors = [];

                if (!this.name) {
                    this.errors.push("Name required.");
                }

                if (!this.surname) {
                    this.errors.push("Surname required.");
                }

                if (!this.phone) {
                    this.errors.push("Phone number is required.");
                }

                if (!this.email) {
                    this.errors.push('Email required.');
                } else if (!this.validEmail(this.email)) {
                    this.errors.push('Valid email required.');
                }

                if (!this.bday) {
                    this.errors.push("Birthday required.");
                }

                if (!this.qCoding) {
                    this.errors.push("Please answer 1 question.");
                }

                if (!this.qExperience) {
                    this.errors.push("Please answer 2 question.");
                }

                if (!this.qLogic1) {
                    this.errors.push("Please answer 3 question.");
                }

                if (!this.qLogic2) {
                    this.errors.push("Please answer 4 question.");
                }

                if (!this.quizzQ1) {
                    this.errors.push("Please answer 5 question.");
                }

                if (!this.quizzQ2) {
                    this.errors.push("Please answer 6 question.");
                }

                if (this.quizzQ3.length < 1) {
                    this.errors.push("Please answer 7 question.");
                }

                if (!this.errors.length) {
                    return true;
                }

                e.preventDefault();
            },
            validEmail: function (email) {
                var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            },
            successMessage: function () {
                alert("Thank you! Your application is under consideration! We will contact you via email in few days!");
            }
        }
    });
}