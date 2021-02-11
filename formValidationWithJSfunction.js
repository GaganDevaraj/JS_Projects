var fullName;
        var emailId;
        var password;
        var confirmPassword;
        var gendermale;
        var genderFemale;
        var genderOthers;
        var currentAddress;
        var currentCity;
        var state;
        var zipCode;

        function myValidation() {
            fullName = document.getElementById("fullname").value;
            emailId = document.getElementById("emailId").value;
            password = document.getElementById("password").value;
            confirmPassword = document.getElementById("cpassword").value;
            gendermale = document.getElementById("male");
            genderFemale = document.getElementById("female");
            genderOthers = document.getElementById("other");
            currentAddress = document.getElementById("address").value;
            currentCity = document.getElementById("city").value;
            state = document.getElementById("state").value;
            zipCode = document.getElementById("zipcode").value;

            console.log(fullName);
            console.log(emailId);
            console.log(password);
            console.log(confirmPassword);
            console.log(gendermale);
            console.log(genderFemale);
            console.log(genderOthers);
            console.log(currentAddress);
            console.log(currentCity);
            console.log(state);
            console.log(zipCode);

            var evertingIsPerfect = false;

            // Full name validation
            var spaceIncludes = fullName.includes(" ");
            var containsNumber = fullName.match(/\d+/g);
            if (fullName.length == 0) {
                document.getElementById("fullNameError").innerHTML = "Full name field can't be left empty";
                document.getElementById("fullname").style.borderColor = "red";
            } else if (spaceIncludes == false) {
                document.getElementById("fullNameError").innerHTML = "Enter proper full name. Ex: Samba Maharaj";
                document.getElementById("fullname").style.borderColor = "red";
            } else if (containsNumber != null) {
                document.getElementById("fullNameError").innerHTML = "Full name should contain only characters. Ex: Samba Maharaj";
                document.getElementById("fullname").style.borderColor = "red";
            } else {
                document.getElementById("fullname").style.borderColor = "green";
                return true;
            }

            // Email validation
            var atTheRateSymbolIncludes = emailId.includes("@");
            var dotSymbolIncludes = emailId.includes(".");
            if (emailId.length == 0) {
                document.getElementById("emailError").innerHTML = "Email field can't be left empty";
                document.getElementById("emailId").style.borderColor = "red";
            } else if (atTheRateSymbolIncludes == false) {
                document.getElementById("emailError").innerHTML = "Enter proper email id. Ex: samba@example.com";
                document.getElementById("emailId").style.borderColor = "red";
            } else if (dotSymbolIncludes == false) {
                document.getElementById("emailError").innerHTML = "Enter proper email id. Ex: samba@example.com";
                document.getElementById("emailId").style.borderColor = "red";
            } else {
                document.getElementById("emailId").style.borderColor = "green";
                evertingIsPerfect = true;
            }


            // Password validation
            if (password.length == 0) {
                document.getElementById("passwordError").innerHTML = "Password field can't be left empty";
                document.getElementById("password").style.borderColor = "red";
            } else {
                document.getElementById("password").style.borderColor = "green";
                evertingIsPerfect = true;
            }

            // Confirm password validation
            if (confirmPassword.length == 0) {
                document.getElementById("cPasswordError").innerHTML = "Confirm password field can't be left empty";
                document.getElementById("cpassword").style.borderColor = "red";
            } else if (password != confirmPassword) {
                document.getElementById("cPasswordError").innerHTML = "Password not matching";
                document.getElementById("cpassword").style.borderColor = "red";
            } else {
                document.getElementById("cpassword").style.borderColor = "green";
                evertingIsPerfect = true;
            }


            // Gender validation
            if (gendermale.checked == false && genderFemale.checked == false && genderOthers.checked == false) {
                document.getElementById("genderError").innerHTML = "You must reveal your gender";
                document.getElementById("genderArea").style.borderColor = "red";
            } else {
                document.getElementById("genderArea").style.borderColor = "green";
                evertingIsPerfect = true;
            }


            // Address validation
            if (currentAddress.length == 0) {
                document.getElementById("addressError").innerHTML = "Addres field can't be left empty";
                document.getElementById("address").style.borderColor = "red";
            } else {
                document.getElementById("address").style.borderColor = "green";
                evertingIsPerfect = true;
            }


            // City validation
            var containsNumber = currentCity.match(/\d+/g);
            if (currentCity.length == 0) {
                document.getElementById("cityError").innerHTML = "City field can't be lefy empty";
                document.getElementById("city").style.borderColor = "red";
            } else if (containsNumber != null) {
                document.getElementById("cityError").innerHTML = "City name should not contain number. Ex: Bangalore";
                document.getElementById("city").style.borderColor = "red";
            } else {
                document.getElementById("city").style.borderColor = "green";
                evertingIsPerfect = true;
            }


            // State validation
            if (state == "0") {
                document.getElementById("stateError").innerHTML = "Select state you are from"
                document.getElementById("state").style.borderColor = "red";
            } else {
                document.getElementById("state").style.borderColor = "green";
                evertingIsPerfect = true;
            }



            //Zip code validation 
            if (zipCode.length == 0) {
                document.getElementById("zipCodeError").innerHTML = "Zip code can't be left empty";
                document.getElementById("zipcode").style.borderColor = "red";
            } else if (zipCode.length >= 7) {
                document.getElementById("zipCodeError").innerHTML = "Invalid Zip code";
                document.getElementById("zipcode").style.borderColor = "red";
            } else if (isNaN(zipCode)) {
                document.getElementById("zipCodeError").innerHTML = "Invalid Zip code";
                document.getElementById("zipcode").style.borderColor = "red";
            } else {
                document.getElementById("zipcode").style.borderColor = "green";
                evertingIsPerfect = true;
            }

            return false;
        }