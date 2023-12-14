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
      <YMaps >
        <Map defaultState={defaultState} style={containerStyle }>
          <Placemark geometry={[55.706532556835974, 37.596959071758185]} />
        </Map>
      </YMaps>
    </div>
  );
}
