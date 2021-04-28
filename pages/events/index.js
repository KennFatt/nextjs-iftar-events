import Container from "@/components/Container";
import EventCard from "@/components/EventCard";
import { useData } from "@/lib/data-source";
import { useEffect, useState } from "react";

export default function EventsPage() {
  const dummy = useData();
  const [selectedLocation, setSelectedLocation] = useState("*");
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    /** Filtering location and remove duplication */
    let tmpLocations = [];
    dummy.forEach(({ city }) => {
      if (!tmpLocations.includes(city)) {
        tmpLocations.push(city);
      }
    });

    setLocations(tmpLocations);
  }, []);

  function onItemSelected(e) {
    setSelectedLocation(e.target.value);
  }

  return (
    <Container>
      <div className="py-4 space-y-4">
        <div className="flex items-center py-4 space-x-2 text-gray-900">
          <label htmlFor="locations">Filter location: </label>
          <select
            name="locations"
            className="flex-grow bg-transparent border-b-2 border-green-200 focus:outline-none"
            onChange={onItemSelected}
            value={selectedLocation}>
            {/* Default option */}
            <option value="*">All location</option>

            {/* Dynamic locations */}
            {locations.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {dummy.map(({ id, city, ...rest }) =>
          selectedLocation === "*" ? (
            <EventCard key={id} {...rest} />
          ) : (
            city === selectedLocation && <EventCard key={id} {...rest} />
          )
        )}
      </div>
    </Container>
  );
}
