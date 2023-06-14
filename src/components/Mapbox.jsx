import React from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import Map from 'react-map-gl';

export const Mapbox = () => {
    return (
        <>
            <Map
                initialViewState={{
                    longitude: -72.923011,
                    latitude:  -38.706584,
                    zoom: 14
                }}
                style={{ width: '100%', height: 300}}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxAccessToken="pk.eyJ1Ijoic2hlYmFyb2xhcyIsImEiOiJjbDRrYmxhdGQweWp1M2VrN3Z2ZnZvaDNtIn0.7s-91uaVg0XB7-zGYdcOvw"
            />
        </>
    )
}
