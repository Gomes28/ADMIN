// import React, { useState } from 'react'
// import styles from './styles.module.scss';

// export default function Rastreio(){
//   const [latitude, setLatitude] = useState(0)
//   const [longitute, setLongitude] = useState(0)
//   const [map, setMap] = useState('')

//   React.useEffect(() => {
//     navigator.geolocation.getCurrentPosition(position => {
//       console.log(position.coords)

//       setInterval(async () => {
//         setLatitude(position.coords.latitude)
//         setLongitude(position.coords.longitude);
//       }, 5000);
//     })
//   }, []);

//   return (
//     <>
//       <p style={{fontSize: 24, color: '#ffffff', fontWeight: 600}}>Latitude: {latitude}</p>
//       <p style={{fontSize: 24, color: '#ffffff', fontWeight: 600}}>Longitude: {longitute}</p>
//       <div className={styles.mapOuter}><div className={styles.gmapCanvas}><iframe width="600" height="500" id="gmap_canvas" src={`https://maps.google.com/maps?q=${latitude}%20${longitute}&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a><a href="https://www.embedgooglemap.net"></a></div></div>
//       <div className={styles.mapOuter}><div className={styles.gmapCanvas}><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=-18.1604819%20-47.9675738&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a><a href="https://www.embedgooglemap.net"></a></div></div>
//     </>
//   )
// }

import React, { useState, useEffect } from 'react'

const Rastreio = () => {
  const [location, setLocation] = useState({ lat: 51.5074, lng: 0.1278 })

  useEffect(() => {
    const map = new window.L.Map('map').setView(location, 13)

    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map)

    const marker = new window.L.marker(location).addTo(map)
  }, [location])

  return (
    <div>
      <h1>Map</h1>
      <div id="map" style={{ height: '500px', width: '100%' }} />
    </div>
  )
}

export default Rastreio