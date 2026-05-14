document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log("Anmeldeversuch:", email);

    // Beispiel für eine kleine Animation bei Erfolg
    if(email && password) {
        alert("Login erfolgreich! Willkommen bei Strayfe.");
    }
});