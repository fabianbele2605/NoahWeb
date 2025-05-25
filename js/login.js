document.getElementById("logibForm").addEventListener("submit", function(n) {
    n.preventDefault();

    const user = "Noahbeleno13gmail.com"
    const pass = "Noah123"

    const useremail = document.getElementById("Useremail").value;
    const password = document.getElementById("Password").value;

    if(useremail === user && password === pass)  {
        window.location.href = "../index.html";
    } else {
        document.getElementById("errormensaje").textContent = "Usuario o contraseña incorrecta";
    }
})