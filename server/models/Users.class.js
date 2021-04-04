module.exports = class User{
    constructor({email, birthDay, name, phone, password}){
        this.email = email;
        this.birthDay = birthDay;
        this.name = name;
        this.verifiedEmail = true;
        this.phone = phone;
        this.password = password
    }
}