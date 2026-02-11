import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadowUrl from "leaflet/dist/images/marker-shadow.png";

const ContactMap = () => {
  const defaultIcon = L.icon({
    iconUrl,
    shadowUrl: iconShadowUrl,
  });
  L.Marker.prototype.options.icon = defaultIcon;

  return (
    <div className="mt-20 relative w-full h-72">
      <MapContainer
        center={[22.0906161, 88.7637649]}
        zoom={12}
        scrollWheelZoom={false}
        className=" h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[22.0906161, 88.7637649]}>
          <Popup>Hetalbon Eco Resort</Popup>
        </Marker>
      </MapContainer>
      <div className="absolute inset-0 h-full w-full bg-black/50"></div>
      <div className="relative pt-28 text-center"></div>
    </div>
  );
};

export default ContactMap;
