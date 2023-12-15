import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function YandexMap(): JSX.Element {
  const defaultState = {
    center: [55.706532556835974, 37.596959071758185],
    zoom: 20,
  };
  const containerStyle = {
    width: '100%',
    height: '200px',
  };

  return (
    <div>
      <YMaps query={{
    ns: "use-load-option",
    load: "Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon",
  }}>
        
        <Map defaultState={defaultState} style={containerStyle }>
        <Placemark
      defaultGeometry={[55.706532556835974, 37.596959071758185]}
      properties={{
        balloonContentBody:
          "Кампус в Москве - ул.Орджоникидзе, д. 11 стр. 10 (м. Ленинский проспект)",
      }}
    />
        </Map>
      </YMaps>
    </div>
  );
}
