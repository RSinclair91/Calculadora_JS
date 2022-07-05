$(document).ready(function(){    
    $('#savebtn').click(function(){         
        var email = document.getElementById("emailtxt").value;
        var nom = document.getElementById("nombretxt").value;
        var edad = document.getElementById("edadtxt").value;
        
        localStorage.setItem("Email", email);
        localStorage.setItem("Nombre", nom);
        localStorage.setItem("Edad", edad);
        
        document.getElementById("emailtxt").value = "";
        document.getElementById("nombretxt").value = "";
        document.getElementById("edadtxt").value = "";
    });   
});

$(document).ready(function(){    
    $('#loadbtn').click(function(){                       
        
        var nombre = localStorage.getItem("Email");
        var nombre = localStorage.getItem("Nombre");
        var apellido = localStorage.getItem("Edad");
        
        document.getElementById("email").innerHTML = email;   
        document.getElementById("nombre").innerHTML = nombre;
        document.getElementById("apellido").innerHTML = apellido; 
    });   
});