import React, { useState, useEffect } from "react";
import './App.css';

const EventPage = () => {
  // État pour stocker les événements
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  // Charger les données d'événements
  useEffect(() => {
    const mockEvents = [
      {
        id: 1,
        title: "Startup Weekend Tunis",
        date: "2024-11-20",
        location: "Tunis",
        description: "Un événement pour booster votre startup.",
      },
      {
        id: 2,
        title: "Hackathon Carthage",
        date: "2024-12-10",
        location: "Carthage",
        description: "Développez des solutions innovantes.",
      },
      {
        id: 3,
        title: "Conférence sur l'IA",
        date: "2024-11-25",
        location: "Sfax",
        description: "Découvrez les dernières avancées en intelligence artificielle.",
      },
      {
        id: 4,
        title: "Forum des Startups",
        date: "2024-12-05",
        location: "Tunis",
        description: "Forum dédié aux entrepreneurs et aux investisseurs.",
      },
      {
        id: 5,
        title: "Atelier de Code pour Débutants",
        date: "2024-12-01",
        location: "Sousse",
        description: "Apprenez à coder en quelques heures.",
      },
      {
        id: 6,
        title: "Cérémonie des Prix de l'Innovation",
        date: "2024-12-15",
        location: "Monastir",
        description: "Célébration des meilleures innovations technologiques de l'année.",
      },
      {
        id: 7,
        title: "Séminaire sur le Développement Durable",
        date: "2024-12-03",
        location: "Tunis",
        description: "Un séminaire pour explorer des solutions écologiques.",
      },
      {
        id: 8,
        title: "Salon de l'Entrepreneuriat Féminin",
        date: "2024-12-12",
        location: "Carthage",
        description: "Un événement dédié aux femmes entrepreneures.",
      },
    ];

    setEvents(mockEvents);
    setFilteredEvents(mockEvents);
  }, []);

  // Fonction de filtrage
  const handleFilter = (keyword) => {
    const filtered = events.filter((event) =>
      event.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  // Fonction pour gérer la participation
  const handleParticipate = (eventId) => {
    const event = events.find((e) => e.id === eventId);
    alert(`Vous êtes inscrit à l'événement : ${event.title}`);
  };

  return (
    <div className="event-page-container">
      <h1 className="event-page-title">Événements</h1>

      {/* Barre de recherche */}
      <input
        type="text"
        className="search-input"
        placeholder="Rechercher un événement..."
        onChange={(e) => handleFilter(e.target.value)}
      />

      {/* Liste des événements */}
      <div className="event-grid">
        {filteredEvents.map((event) => (
          <div key={event.id} className="event-card">
            <h2 className="event-title">{event.title}</h2>
            <p className="event-date"><strong>Date :</strong> {event.date}</p>
            <p className="event-location"><strong>Lieu :</strong> {event.location}</p>
            <p className="event-description">{event.description}</p>
            <button
              onClick={() => handleParticipate(event.id)}
              className="participate-button"
            >
              Participer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPage;
