import { useEffect, useRef } from "react";
import L from "leaflet";

export const Map = () => {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<L.Map | null>(null);

    useEffect(() => {
        if (!mapRef.current || mapInstance.current) return;

        mapInstance.current = L.map(mapRef.current).setView([20.571934, -101.196033], 13);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '© OpenStreetMap',
        }).addTo(mapInstance.current);

        return () => {
            mapInstance.current?.remove();
            mapInstance.current = null;
        };
    }, []);

    return <div ref={mapRef} className="w-full h-full" />;
};