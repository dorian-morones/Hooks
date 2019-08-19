import React, {Component} from 'react';

class Coordenadas extends Component{
    state ={
        latitud: null,
        longitud: null
    }

    componentDidMount(){
        this.geoId = window.navigator.geolocation.watchPosition(position => {
            this.setState({
                latitud: position.coords.latitude,
                longitude: position.coords.longitude
            });
        });
    }

    componentWillUnmount(){
        navigator.geolocation.clearWatch(this.geoId)
    }

    render(){
        return this.state.latitud == null && this.state.longitude == null ? (
            <div class="loading">Loading...</div>
        ):
        (
            <div className='coordenadas'>
                <h2>Latitud: {this.state.latitud}</h2>
                <h2>Longitude: {this.state.longitude}</h2>
            </div>
        )
    }
}

export default Coordenadas;