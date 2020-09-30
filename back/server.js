let express= require('express');

let app = express();

app.use(express.json());

app.listen(666, ()=>{
    console.log('ESTAMOS ESCUCHANDO BIEN');
});

let usuarios = [
    {
        nombre: "Julanita",
        apellidos: "Perez",
        email: "wertfeg@gmail.com",
        telefono: "78945613"
    }
]

app.post('/usuarios', (req,res)=>{
    let data=req.body;
    console.log(data);

    let email=req.body.email;
    validarEmail(email);

    usuarios.push(data);
    console.log(usuarios);
    res.status(200).json(data);
})
//let email = document.getElementById('email').value;

//Validar Email
function validarEmail(valor) {
    if (/\w+@\w+\.+[a-z]/.test(valor)){
        console.log("La dirección de email " + valor + " es correcta.");
    } else {
        console.log("La dirección de email es incorrecta.");
    }
}

