import React, { useState } from "react";
import moment from "moment";

// Exemple de données des événements
const eventsData = [
  { id: 1, title: "Conférence Startup", date: "2024-11-15", description: "Une conférence sur l'innovation dans les startups.", location: "Paris" },
  { id: 2, title: "Hackathon Technologie", date: "2024-12-01", description: "Un hackathon pour les développeurs.", location: "Lyon" },
  { id: 3, title: "Atelier Marketing Digital", date: "2024-12-05", description: "Apprenez les dernières tendances en marketing digital.", location: "En ligne" },
];

function EventsPage() {
  const [events] = useState(eventsData);
  const currentDate = moment();

  // Séparation des événements à venir et passés
  const upcomingEvents = events.filter(event => moment(event.date).isAfter(currentDate));
  const pastEvents = events.filter(event => moment(event.date).isBefore(currentDate));

  return (
    <div className="events-page">
      <h1>Événements des Startups</h1>
      <p>Restez à jour avec les événements passionnants de l'univers des startups.</p>

      <section>
        <h2>Événements à venir</h2>
        <ul>
          {upcomingEvents.map(event => (
            <li key={event.id}>
              <h3>{event.title}</h3>
              <p>Date: {moment(event.date).format("DD/MM/YYYY")}</p>
              <p>{event.description}</p>
              <p>Lieu: {event.location}</p>
              <button>Participer</button>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Événements passés</h2>
        <ul>
          {pastEvents.map(event => (
            <li key={event.id}>
              <h3>{event.title}</h3>
              <p>Date: {moment(event.date).format("DD/MM/YYYY")}</p>
              <p>{event.description}</p>
              <p>Lieu: {event.location}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default EventsPage;
