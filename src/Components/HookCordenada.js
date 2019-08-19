import React, {useState, useEffect} from 'react';

function useCoordenadas(){
    const [coordenadas, setCoordenadas] = useState({
        latitud: null,
        longitude: null
    })
    let geoId;

    useEffect(() => {
        geoId = window.navigator.geolocation.watchPosition( position => {
            setCoordenadas({
                latitud: position.coords.latitude,
                longitude: position.coords.longitude
            });
        });

        return () => {
            navigator.geolocation.clearWatch(geoId)
        };
    });
    
    return coordenadas;
}

export default function CoordenadasHooks(){
    const coordenadas = useCoordenadas();

    return coordenadas.latitud == null && coordenadas.longitude == null ? (
        <div>Loading...</div>
    ):
    (
        <div>
            <h2>Latitud: {coordenadas.latitud}</h2>
            <h2>Longitude: {coordenadas.longitude}</h2>
        </div>
    )
}