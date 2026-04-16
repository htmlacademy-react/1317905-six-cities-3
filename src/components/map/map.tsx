import { useEffect, useRef, useMemo } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { OfferCard } from '../../types/offer';
import { Location } from '../../types/location';
import { MARKER_CONFIG, DEFAULT_LOCATION} from '../../const';

const defaultIcon = leaflet.icon({
  iconUrl: MARKER_CONFIG.URL_DEFAULT,
  iconSize: [MARKER_CONFIG.ICON_SIZE.width,MARKER_CONFIG.ICON_SIZE.height],
  iconAnchor: [MARKER_CONFIG.ICON_ANCHOR.x,MARKER_CONFIG.ICON_ANCHOR.y],
});

const activeIcon = leaflet.icon({
  iconUrl: MARKER_CONFIG.URL_ACTIVE,
  iconSize:[MARKER_CONFIG.ICON_SIZE.width,MARKER_CONFIG.ICON_SIZE.height],
  iconAnchor: [MARKER_CONFIG.ICON_ANCHOR.x,MARKER_CONFIG.ICON_ANCHOR.y],
});

const defaultLocation: Location = {
  latitude: DEFAULT_LOCATION.latitude,
  longitude: DEFAULT_LOCATION.longitude,
  zoom: DEFAULT_LOCATION.zoom,
};

type MapProps = {
  mapName: string;
  offers: OfferCard[];
  activeOfferId?: string | null;
  currentOffer?: OfferCard;
  cityLocation?: Location;
};

function Map({
  mapName,
  offers,
  currentOffer,
  activeOfferId = null,
  cityLocation,
}: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  const allPoints = useMemo(() => currentOffer ? [currentOffer, ...offers] : offers, [offers, currentOffer]);

  const initialCenter = useMemo(() => {
    if (cityLocation) {
      return cityLocation;
    }
    if (currentOffer) {
      return currentOffer.location;
    }
    return offers[0]?.location || defaultLocation;
  }, [cityLocation, currentOffer, offers]);

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      const map = leaflet
        .map(mapRef.current, {
          scrollWheelZoom: false,
          zoomControl: true,
          doubleClickZoom: true,
        })
        .setView(
          [initialCenter.latitude, initialCenter.longitude],
          initialCenter.zoom || 13,
        );

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          },
        )
        .addTo(map);

      mapInstanceRef.current = map;
    }
  }, [initialCenter]);


  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || allPoints.length === 0) {
      return;
    }

    map.eachLayer((layer) => {
      if (layer instanceof leaflet.Marker) {
        map.removeLayer(layer);
      }
    });

    const markers: leaflet.Marker[] = [];

    allPoints.forEach((point) => {
      let icon = defaultIcon;

      if (currentOffer && point.id === currentOffer.id) {
        icon = activeIcon;
      } else if (point.id === activeOfferId) {
        icon = activeIcon;
      }

      const marker = leaflet
        .marker([point.location.latitude, point.location.longitude], { icon })
        .addTo(map);

      markers.push(marker);
    });

    if (markers.length > 0) {
      const group = leaflet.featureGroup(markers);
      map.fitBounds(group.getBounds(), {
        padding: [50, 50],
        maxZoom: 15,
      });
    }

  }, [allPoints, activeOfferId, currentOffer]);

  return <section ref={mapRef} className={`${mapName}__map map`} />;
}

export default Map;
