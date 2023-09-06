import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

export default function Maps(){
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCbOItkQ7N9wn2Bmo3iyOGEnS8gwbdZICI"
    })

    return (
        <div className='map'>
        {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{width: '100%', height: '100%'}}
              center={{
                  lat: -5.086509858522025,
                  lng: -42.80310527611403
              }}
              zoom={15}
            >
              <></>
            </GoogleMap>
        ) : <></>}
        </div>
    )
}