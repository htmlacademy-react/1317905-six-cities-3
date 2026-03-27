import { useEffect, useRef, useMemo } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { OfferCard } from '../../types/offer';

const defaultIcon = leaflet.icon({
  iconUrl: '/markup/img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

const activeIcon = leaflet.icon({
  iconUrl: '/markup/img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});


type MapProps = {
  mapName: string;
  offers: OfferCard[];
  activeOfferId?: string | null;
  currentOffer?: OfferCard;
};

function Map({ mapName, offers, currentOffer, activeOfferId = null }: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  const center = useMemo(() => currentOffer
    ? currentOffer.location
    : offers[0]?.location || { latitude: 52.37454, longitude: 4.897976, zoom: 12 }, [currentOffer, offers]);

  useEffect(() => {
    if (mapRef.current !== null && mapInstanceRef.current === null) {
      const map = leaflet.map(mapRef.current, {
        scrollWheelZoom: false,
        zoomControl: true,
        doubleClickZoom: true,
      }).setView([center.latitude, center.longitude], center.zoom);

      leaflet.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        },
      ).addTo(map);

      mapInstanceRef.current = map;
    }
  }, [center]);

  useEffect(() => {
    if (!mapInstanceRef.current) {
      return;
    }

    const map = mapInstanceRef.current;

    const allPoints = currentOffer ? [currentOffer, ...offers] : offers;

    const markers = allPoints.map((point) => {
      let icon = defaultIcon;
      if (currentOffer && point.id === currentOffer.id) {
        icon = activeIcon;
      } else if (point.id === activeOfferId) {
        icon = activeIcon;
      }
      return leaflet
        .marker([point.location.latitude, point.location.longitude], { icon })
        .addTo(map);
    });

    return () => {
      markers.forEach((marker) => marker.remove());
    };
  }, [offers, currentOffer, activeOfferId]);

  return <section ref={mapRef} className={`${mapName}__map map`} />;
}

export default Map;
