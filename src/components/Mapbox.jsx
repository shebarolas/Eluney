import React from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import Map, { Marker} from 'react-map-gl';


export const Mapbox = () => {


    return (
        <>
            <Map

                initialViewState={{
                    longitude: -71.7815210,
                    latitude: -39.3879450,
                    zoom: 14,

                }}

                style={{ width: '100%', height: 300 }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxAccessToken="pk.eyJ1Ijoic2hlYmFyb2xhcyIsImEiOiJjbDRrYmxhdGQweWp1M2VrN3Z2ZnZvaDNtIn0.7s-91uaVg0XB7-zGYdcOvw"

            >
                <Marker
                    latitude={-39.3879450}
                    longitude={-71.7815210}
                ></Marker>

            </Map>
        </>
    )
}
