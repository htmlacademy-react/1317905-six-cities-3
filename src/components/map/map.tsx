import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { OfferCard } from '../../types/offer';

const defaultIcon = L.icon({
  iconUrl: '/markup/img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

const activeIcon = L.icon({
  iconUrl: '/markup/img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

type MapProps = {
  mapName: string;
  offers: OfferCard[];
  activeOfferId?: string | null;
};

function Map({ mapName, offers, activeOfferId = null }: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && mapInstanceRef.current === null) {
      const cityLocation = offers[0]?.city.location || {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 12,
      };

      const map = L.map(mapRef.current).setView(
        [cityLocation.latitude, cityLocation.longitude],
        cityLocation.zoom,
      );

      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        },
      ).addTo(map);

      mapInstanceRef.current = map;
    }
  }, [offers]);

  useEffect(() => {
    if (!mapInstanceRef.current) {
      return;
    }

    const map = mapInstanceRef.current;

    const markers = offers.map((offer) =>
      L.marker([offer.location.latitude, offer.location.longitude], {
        icon: offer.id === activeOfferId ? activeIcon : defaultIcon,
      }).addTo(map),
    );

    return () => {
      markers.forEach((marker) => marker.remove());
    };
  }, [offers, activeOfferId]);

  return <section ref={mapRef} className={`${mapName}__map map`} />;
}

export default Map;
