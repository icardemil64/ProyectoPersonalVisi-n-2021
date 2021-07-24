const moduloSistema = (() => {

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
        console.log(pos);
    }

    return{
        iniciarSistema: getCoordenadas
    }
})();