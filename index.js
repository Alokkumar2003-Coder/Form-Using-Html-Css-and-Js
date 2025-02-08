document.getElementById("registerForm").addEventListener("submit", function(event)
{
    event.preventDefault();
    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmpassword").value;

    if(firstName && lastName && username && email && password && confirmPassword)
    {
        localStorage.setItem(firstName,lastName,username,email,password,confirmPassword);
        alert("Registration successful! You can now login.");
        document.getElementById("registerForm").reset();
        window.location.href = "signIn.html";
    }
    else{
        alert("Please fill all the fields.")
    }
});


document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const storedusername = localStorage.getItem(username);
    const storedemail = localStorage.getItem(email);
    const storedPassword = localStorage.getItem(password);


    if(storedusername === username && storedemail === email && storedPassword === password)
    {
        alert("Login successful!");
        localStorage.setItem("loggedInUser",username)
        window.location.href = "welcome.html";
    }
    else 
    {
        alert("Invalid credentials. Please try again.");
    }
});

if(window.location.href.includes("welcome.html"))
    {
        const loggedInUser = localStorage.getItem("loggedInUser");

        if(!loggedInUser)
        {
            alert("You need to log in first");
            window.location.href = "signIn.html";
        }

        document.getElementById("logout").addEventListener("click", function(){
            localStorage.removeItem("loggedInUser");
            alert("You have been logged out!");
            window.location.href = "signIn.html";
        });
    }