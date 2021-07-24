const moduloSistema = (() => {
    const latd_label = document.getElementById("d_lat");
    const long_label = document.getElementById("d_long");

    const getCoordenadas = () => {
        console.log("Entre")
        if(navigator.geolocation){
            console.log(navigator.geolocation.getCurrentPosition(setCoordenadas));
        }
        else{
            alert("La plataforma no soporta la función.")
        }
    }

    const setCoordenadas = (pos) => {
        let cord = pos.coords;
        latd_label.innerHTML = cord.latitude;
        long_label.innerHTML = cord.longitude;
    }

    return{
        iniciarSistema: getCoordenadas
    }
})();