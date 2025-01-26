// Handle Login Form Submission

    // Make array
    const emails = ["test"];
    const passes = [];
    const names = [];
    const providers = [];

    let string = JSON.string(emails)
    localStorage.setItem("key", string)

    // Mock validation for login
    function login(){
        window.alert(emails[0]);
        const curemail = document.getElementById("loginEmail").value;
        const curpassword = document.getElementById("loginPassword").value;

        let position = fruits.indexOf(curemail);

        if (position === -1) {
            window.alert("Email not found :( Please sign up.");
        }
        else if (curpassword === passes[position]) {
            window.alert("Login successful!");
        } else {
            window.alert("Invalid password.");
        }
    }

    function signup(){
        const email = document.getElementById("signupEmail").value;
        const password = document.getElementById("signupPassword").value;
        const username = document.getElementById("signupName").value;
        const provider = document.getElementById("signupProvider").value;

        emails.push(email);
        passes.push(password);
        names.push(username);
        providers.push(provider);

        window.alert("Signup successful!");
    }

// Handle Signup Form Submission
/*
    // Get signup inputs
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const username = document.getElementById("signupName").value;
    const provider = document.getElementById("signupProvider").value;

    // Mock signup success
    window.alert("Signup successful!");
    message.style.color = "green";
    message.textContent = `Signup successful! Welcome, ${username}.`;
*/
