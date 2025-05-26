document.getElementById("logibForm").addEventListener("click", function(n) {
    n.preventDefault();

    const user = "Noahbeleno13gmail.com"
    const pass = "Noah123"

    const useremail = document.getElementById("email").value;
    const password = document.getElementById("contraseña").value;

    if(useremail === user && password === pass)  {
        window.location.href = "../index.html";
    } else {
        alert("Usuario o contraseña incorrecta");
    }
})