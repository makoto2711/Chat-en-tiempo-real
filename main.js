 


// AQUI OBTENGO LA INFO DE MI SALA CREADA EN WEBEX TEAM
 /*
function getAllClients() 
{
    const myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer MzI5MmM5ZDktOGJkNC00Y2Y5LWEwOTYtMWE2YmQ0MGNkYWM2NTM4ZGU2MjMtYTlk_PF84_consumer');

    fetch('https://webexapis.com/v1/rooms/Y2lzY29zcGFyazovL3VzL1JPT00vOGQ5Mzk4NjAtMjFmMC0xMWViLWI4MmUtZTkzYmJmMGMxMTk2', 
    {
        headers: myHeaders,
    })
        .then(response => response.json())
        
        .then((user) => 
        { 
            console.log(user.title);
        })

        .catch((error) => 
        {
            console.log(error);
        });
}

getAllClients();   

 */
 


// AQUI LE ENVIO UN MENSAJE A MI SALA DE WEBEX POR EL METODO POST

/*
function mensajes() {

    try {
        fetch('https://webexapis.com/v1/messages', {
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer MzI5MmM5ZDktOGJkNC00Y2Y5LWEwOTYtMWE2YmQ0MGNkYWM2NTM4ZGU2MjMtYTlk_PF84_consumer',
            },
            method: 'POST',
            body: JSON.stringify({
                roomId: 'Y2lzY29zcGFyazovL3VzL1JPT00vOGQ5Mzk4NjAtMjFmMC0xMWViLWI4MmUtZTkzYmJmMGMxMTk2',
                text: 'cuarta prueba',
            }),
        })

            .then(data => data.json())
            .then(response => {
                console.log(response);
            })

    }
    catch (error) {
        console.log(error);
    }
}


mensajes()
*/

let entrada = document.getElementById("mensaje"),
enviar = document.getElementById("enviar"),
contenedor = document.getElementById("contenedor"),
crear_p = document.createElement("p");

//borrar = document.getElementById("borrar")
 
enviar.addEventListener("click", () => 
{
    enviarMensaje(entrada.value)
    /*
    const myHeaders = new Headers();

    myHeaders.append('Authorization', 'Bearer NWIxNmI2NTUtODM1Ni00YmM3LWFmZDItYmNkZjVkY2I2M2Y3NDJmZTRiNmMtYjAx_PF84_consumer');

    fetch("https://webexapis.com/v1/messages?roomId=Y2lzY29zcGFyazovL3VzL1JPT00vMjRjZmFmZjAtMjFkYS0xMWViLWE2MzgtODlmMjI0ZGM0MWZk",
        {
            headers: myHeaders,
        })
        .then(data => data.json())
        .then(respo => {
            // let largo = respo.items.length
            
            setTimeout(() => {
                console.log(respo.items)
                contenedor.innerHTML += `<p>${respo.items[0].text}</p>`
            }, 1000)
        }) */

}) 



async function mensajes()
{
    //const JASON = await fetch("https://webexapis.com/v1/messages?roomId=Y2lzY29zcGFyazovL3VzL1JPT00vMjRjZmFmZjAtMjFkYS0xMWViLWE2MzgtODlmMjI0ZGM0MWZk",
    const JASON = await fetch("https://webexapis.com/v1/messages?roomId=Y2lzY29zcGFyazovL3VzL1JPT00vNGM2NzkxYTAtMjUxYy0xMWViLTllZDktOWIzNWJiZTM4Yzc2",
     {
        headers: 
            {
                    /*'Content-type': 'application/json',
                    'Authorization': 'Bearer NWIxNmI2NTUtODM1Ni00YmM3LWFmZDItYmNkZjVkY2I2M2Y3NDJmZTRiNmMtYjAx_PF84_consumer',
                    */
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer YzMyOGQ4MGYtYTdmOS00ODlhLWEzYjMtM2RiMTgyZTlkYjc1Mjc4ZjNiMTAtZTBh_PF84_consumer',
            }
     })
     
    const data = await JASON.json()

    const nueva_respuesta = data.items[0].id
    
    setInterval(()=> { nueva_respuesta }, 1000)
     
    return nueva_respuesta;   
  
}


setInterval(()=> {  mensajes()  }, 1000)
 
 
async function respuestaMensaje()
{
    
    const response = await mensajes() 
    
    const json2 = await fetch(`https://webexapis.com/v1/messages/${response}`,
    {
        headers: 
            {
                  /*  'Content-type': 'application/json',
                    'Authorization': 'Bearer NWIxNmI2NTUtODM1Ni00YmM3LWFmZDItYmNkZjVkY2I2M2Y3NDJmZTRiNmMtYjAx_PF84_consumer',
                  */
                
                         'Content-type': 'application/json',
                    'Authorization': 'Bearer YzMyOGQ4MGYtYTdmOS00ODlhLWEzYjMtM2RiMTgyZTlkYjc1Mjc4ZjNiMTAtZTBh_PF84_consumer',
            }
    })
    
  
     
    const data = await json2.json()
    
      crear_p.textContent = data.text
    contenedor.appendChild(crear_p) 

}


 

setInterval(()=> { respuestaMensaje() }, 1000)





 

/*borrar.addEventListener("click", () => 
{
    console.log(elemento_borrado);
    borrarMensaje(elemento_borrado)
    listaMensajes()
})
*/
  
 
 /*
function listaMensajes() 
{
    const myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer MzI5MmM5ZDktOGJkNC00Y2Y5LWEwOTYtMWE2YmQ0MGNkYWM2NTM4ZGU2MjMtYTlk_PF84_consumer');
   
    fetch("https://webexapis.com/v1/messages?roomId=Y2lzY29zcGFyazovL3VzL1JPT00vOGQ5Mzk4NjAtMjFmMC0xMWViLWI4MmUtZTkzYmJmMGMxMTk2",
        {
            headers: myHeaders,
        })    
    .then(data => data.json())
    .then(respo => 
    {
      // let largo = respo.items.length
        console.log(respo.items)
        

        console.log(obtenerMensaje(respo.items[0].id));
        setTimeout( ()=> {
            contenedor.innerHTML += `<p>${respo.items[0].text}</p>`
        } , 400)
    }) 
}   
 */
 
 



// ENVIAR MENSAJES PERSONALIZADOS
 
function enviarMensaje(mensajito) 
{
    try 
    {
        fetch('https://webexapis.com/v1/messages', 
            {
                headers: 
                {
                    /*'Content-type': 'application/json',
                    'Authorization': 'Bearer NWIxNmI2NTUtODM1Ni00YmM3LWFmZDItYmNkZjVkY2I2M2Y3NDJmZTRiNmMtYjAx_PF84_consumer',*/
                      'Content-type': 'application/json',
                    'Authorization': 'Bearer YzMyOGQ4MGYtYTdmOS00ODlhLWEzYjMtM2RiMTgyZTlkYjc1Mjc4ZjNiMTAtZTBh_PF84_consumer',
                },
                method: 'POST',
                body: JSON.stringify({
                    roomId: 'Y2lzY29zcGFyazovL3VzL1JPT00vNGM2NzkxYTAtMjUxYy0xMWViLTllZDktOWIzNWJiZTM4Yzc2',
                    text: `${mensajito}`,
                }),
            })

            .then(data => data.json())
            .then(response => 
            {
               console.log("Mensaje enviado");
            })

    }
    catch (error) 
    {
        console.log(error);
    }
}

 
/*

function obtenerMensaje(ultimoMensaje) 
{
    try 
    {
        fetch(`https://webexapis.com/v1/messages/${ultimoMensaje}`,
            {
                headers:
                {
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer MzI5MmM5ZDktOGJkNC00Y2Y5LWEwOTYtMWE2YmQ0MGNkYWM2NTM4ZGU2MjMtYTlk_PF84_consumer',
                },
            })

            .then(data => data.json())
            .then(response => {
                console.log(response);
            })

    }
    catch (error) {
        console.log(error);
    }    
}

 */



/*EMPIEZA LA FUNCION PARA BORRAR
function borrarMensaje(id) 
{

    try {
        fetch(`https://webexapis.com/v1/messages/${id}`,
            {
                headers:
                {
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer MzI5MmM5ZDktOGJkNC00Y2Y5LWEwOTYtMWE2YmQ0MGNkYWM2NTM4ZGU2MjMtYTlk_PF84_consumer',
                },
                method: 'DELETE', 
            })

            .then(data => data.text)
            .then(response => {
                console.log(response);
                console.log("Mensaje borrado");
            })

    }
    catch (error) {
        console.log(error);
    }

}
 FINALIZA LA FUNCION PARA BORRAR   */











/* const myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer MzI5MmM5ZDktOGJkNC00Y2Y5LWEwOTYtMWE2YmQ0MGNkYWM2NTM4ZGU2MjMtYTlk_PF84_consumer');
    myHeaders.append("Method", "DELETE")
    myHeaders.append("mode", 'no-cors')
    fetch(`https://webexapis.com/v1/messages/${id}`,
        {
            headers: myHeaders,
        })
        .then(data => data.json())
        .then(respo =>
        {
            // let largo = respo.items.length
            console.log(respo);
        }) */



