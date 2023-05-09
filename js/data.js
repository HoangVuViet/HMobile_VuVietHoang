userInfoGenerator = () => {
    let userName
    let userObj;
    let vitri;
  
    if (sessionStorage.getItem("userObj") != null) {
      userName = sessionStorage.getItem("userObj")
      userName = userName.replaceAll('"', '')
    } else {
      userName = "";
    }
  
    for (let i = 0; i < users.length; i++) {
      if (users[i].accountName == userName) {
        vitri = i;
      }
    }
    document.querySelector("body > .container-fluid > .container > .row > .col-md-6 > table > tbody > tr:nth-child(1) > td:nth-child(2)").innerHTML = users[vitri].name;
    document.querySelector("body > .container-fluid > .container > .row > .col-md-6 > table > tbody > tr:nth-child(2) > td:nth-child(2)").innerHTML = users[vitri].birthday;
    document.querySelector("body > .container-fluid > .container > .row > .col-md-6 > table > tbody > tr:nth-child(3) > td:nth-child(2)").innerHTML = users[vitri].phoneNumber;
    document.querySelector("body > .container-fluid > .container > .row > .col-md-6 > table > tbody > tr:nth-child(4) > td:nth-child(2)").innerHTML = users[vitri].email;
    document.querySelector("body > .container-fluid > .container > .row > .col-md-6 > table > tbody > tr:nth-child(5) > td:nth-child(2)").innerHTML = users[vitri].accountName;
    document.querySelector("body > .container-fluid > .container > .row > .col-md-6 > table > tbody > tr:nth-child(6) > td:nth-child(2)").innerHTML = users[vitri].password;
}
class User {
    constructor(name, birthday, phoneNumber, email, accountName, password) {
        this.name = name;
        this.birthday = birthday;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.accountName = accountName;
        this.password = password;
    }
    compare(loginAccountName, loginPassword) {
        if (
            loginAccountName == this.accountName &&
            loginPassword == this.password
        ) {
            return true;
        }
        return false;
    }
}
transferUserData = (tag) => {
    while (tag.parentElement != null) {
      tag = tag.parentElement
    }
  
    sessionStorage.setItem("userObj", tag.querySelector("#userName").textContent)
    sessionStorage.setItem("userArray", JSON.stringify(users))
    sessionStorage.setItem("phoneArray", JSON.stringify(phones))
  
    window.open("index.html")
}