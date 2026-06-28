import { useState, useEffect } from "react";

interface Location {
  display_name: string;
  lat: string;
  lon: string;
}

interface Props {
  onClose: () => void;
  onSelect: (address: string) => void;
}

const LocationModal = ({ onClose, onSelect }: Props) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Location[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔥 Debounce search
  useEffect(() => {
    const delay = setTimeout(() => {
      if (query.length >= 3) searchLocation(query);
    }, 500);

    return () => clearTimeout(delay);
  }, [query]);

  // 🔍 Search API
  const searchLocation = async (q: string) => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        `⁠ https://nominatim.openstreetmap.org/search?format=json&q=${q} `,
      );

      const data = await res.json();
      setResults(data);
    } catch (err) {
      setError("Failed to fetch locations");
    } finally {
      setLoading(false);
    }
  };

  // 📍 Current location
  const handleCurrentLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const latitude = pos.coords.latitude;
          const longitude = pos.coords.longitude;

          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
          );

          const data = await res.json();

          onSelect(data.display_name);
        } catch {
          setError("Failed to get address");
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError("Permission denied for location");
        setLoading(false);
      },
    );
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div
        className="bg-bgw w-[420px] p-5 rounded"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="flex justify-between mb-3">
          <h2 className="font-bold text-lg text-sb">Select Location</h2>
          <button onClick={() => onClose()}>X</button>
        </div>

        {/* INPUT */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search deliver location"
          className="w-full border border-primary p-2 rounded mb-3 focus:outline focus:outline-3 focus:outline-primary text-sb "
        />

        {/* BUTTON */}
        <button
          onClick={handleCurrentLocation}
          className="w-full bg-primary text-sb py-2 rounded mb-3"
        >
          {loading ? "Loading..." : "Use Current Location"}
        </button>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <div className="max-h-48 overflow-y-auto">
          {loading && <p className="text-center">Searching...</p>}

          {results.map((loc, index) => (
            <div
              key={index}
              onClick={() => onSelect(loc.display_name)}
              className="p-2 hover:bg-gray-100 cursor-pointer border-b"
            >
              {loc.display_name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
