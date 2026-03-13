import {ReactElement} from 'react';

type MapProps = {
  activeOfferId: string | null;
  mapName: string;
}
function Map({activeOfferId, mapName}: MapProps): ReactElement {
  return (
    <section className={`${mapName}__map map`} data-active-offer-id={activeOfferId ?? ''} />
  );
}

export default Map;
