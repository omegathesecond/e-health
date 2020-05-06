exports.patient = class Patient{
    constructor(id, name, gender, age, blood_type, emergency_contact, last_check,identification_number){
        this.id = id;
        this.identification_number = identification_number;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.blood_type = blood_type;
        this.emergency_contact = emergency_contact;
        this.last_check = last_check;
    }


    getPatientDetails(){
        console.log(JSON.stringify(this));
    }
}

