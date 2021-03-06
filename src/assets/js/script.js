const uri = 'http://localhost:3000/user';

// highlight the clicked item of navigator bar
function activeNavMenu(itemID) {
    // const navMenu = document.getElementById("navMenu");
    // const navMenus = navMenu.getElementsByTagName("a");

    // for (let i = 0; i < navMenus.length; i++) {
    //     navMenus[i].className = navMenus[i].className.replace(" active", "");
    //     if (navMenus[i].id == itemID) {
    //         navMenus[i].classList.add = " active";
    //     }
    // }    
}

//used by newevent.pug to auto-set enddate value same with startdate
function setEndDate() {
    let startDate = document.getElementById('startdate')
    let endDate = document.getElementById('enddate')

    if (endDate.value === '') {
        endDate.value = startDate.value
    }
}

//check the username and password when login
function checkUser() {
    const username = document.getElementById('username').value
    const pw = document.getElementById('password').value

    fetch(uri + "/read/" + username).then(res => {
        return res.json();
    }).then((data) => {
        if (data.length >0) {
            inputedPW = crypt.decrypt(data[0].password)
            if (inputedPW === pw) {
                fetch("/event").then(res => {
                    // window.location.href = "/event"    
                })
                
            }else {
                document.getElementById('loginresult').innerHTML="<font color='red'>invalid password!</font>"; 
            }
        }
        else {
            document.getElementById('loginresult').innerHTML="<font color='red'>invalid username!</font>"; 
        }
    })
}

//check if email exists
function checkEmail() {
    const email = document.getElementById('email')
    if (email.value == '') return

    let nameRegex = '^[^@]+@[^@]+\.[^@]+$';
    let validUserName = email.value.match(nameRegex)
    if(validUserName == null){
        email.focus()
        document.getElementById('emailresult').innerHTML="<font color='red'>invalid email!</font>"; 
        return
    }

    if (email != '') {
        fetch(uri + "/reademail/" + email.value).then(res => {
            return res.json();
        }).then((data) => {
            if (data.length >0) {
                document.getElementById('emailresult').innerHTML="<font color='red'>email exists！</font>"; 
            }
            else {
                document.getElementById('emailresult').innerHTML="<font color='green'>ok</font>"; 
            }
        })
    }
}

//check if username exists
function checkUserName() {

    const username = document.getElementById('username')
    if (username.value == '') return

    let nameRegex = '^[a-zA-Z0-9/*@]*$';
    let validUserName = username.value.match(nameRegex)
    if(validUserName == null){
        document.getElementById('usernameresult').innerHTML="<font color='red'>letter or number or / * @</font>"; 
        return
    }

    if (username != '') {
        fetch(uri + "/read/" + username.value).then(res => {
            return res.json();
        }).then((data) => {
            if (data.length >0) {
                document.getElementById('usernameresult').innerHTML="<font color='red'>user exists！</font>"; 
            }
            else {
                document.getElementById('usernameresult').innerHTML="<font color='green'>ok</font>"; 
            }
        })
    }
}

//used by register pug to encrpt the password and save into the hidden element with id 'pwresult'
function encrpPW() {
    const pw = document.getElementById('password')
    if (pw.value == '') return
    if (pw.value.length < 8) {
        document.getElementById('pwalert').innerHTML="<font color='red'>password must at least eight letters！</font>"
        return
    }

    let nameRegex = '^[a-zA-Z0-9]*$';
    let validUserName = pw.value.match(nameRegex)
    if(validUserName == null){
        document.getElementById('pwalert').innerHTML="<font color='red'>password must include at least one letter and one number！</font>"
        return
    }

    document.getElementById('pwalert').innerHTML="<font color='green'>ok</font>"
    document.getElementById('pwresult').value = crypt.encrypt(document.getElementById('password').value)
}

var crypt = {
    secret : "CIPHERKEY",
    encrypt : function (clear){
    // encrypt() : encrypt the given clear text

      var cipher = CryptoJS.AES.encrypt(clear, crypt.secret);
      cipher = cipher.toString();
      return cipher;
    },

    decrypt : function (cipher) {
    // decrypt() : decrypt the given cipher text

      var decipher = CryptoJS.AES.decrypt(cipher, crypt.secret);
      decipher = decipher.toString(CryptoJS.enc.Utf8);
      return decipher;
    }
  };