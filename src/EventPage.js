import React, { useState, useEffect } from "react";
import "./events.css";

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [visibleEvents, setVisibleEvents] = useState(3); // Nombre d'événements affichés initialement
  const [showMore, setShowMore] = useState(false); // État pour basculer entre "Voir plus" et "Voir moins"
  const [searchTerm, setSearchTerm] = useState(""); // Terme de recherche

  // Chargement des données des événements
  useEffect(() => {
    const mockEvents = [
      {
        id: 1,
        title: "Startup Weekend Tunis",
        date: "2024-11-20",
        location: "Tunis",
        description: "An event to boost your startup.",
        image: "/images/startupweekend.png",
      },
      {
        id: 2,
        title: "Hackathon Carthage",
        date: "2024-12-10",
        location: "Carthage",
        description: "Develop innovative solutions.",
        image: "/images/hackathoncarthage.jpg",
      },
      {
        id: 3,
        title: "AI Conference",
        date: "2024-11-25",
        location: "Sfax",
        description: "Discover the latest advancements in artificial intelligence.",
        image: "/images/aiconference.jpg",
      },
      {
        id: 4,
        title: "Startup Forum",
        date: "2024-12-05",
        location: "Tunis",
        description: "A forum dedicated to entrepreneurs and investors.",
        image: "/images/startupforum.png",
      },
      {
        id: 5,
        title: "Beginner Coding Workshop",
        date: "2024-12-01",
        location: "Sousse",
        description: "Learn to code in just a few hours.",
        image: "/images/codingworkshop.webp",
      },
      {
        id: 6,
        title: "Innovation Awards Ceremony",
        date: "2024-12-15",
        location: "Monastir",
        description: "Celebrating the best technological innovations of the year.",
        image: "/images/awardceremony.jpg",
      },
      {
        id: 7,
        title: "Sustainable Development Seminar",
        date: "2024-12-03",
        location: "Tunis",
        description: "A seminar exploring ecological solutions.",
        image: "/images/susdev.jpg",
      },
      {
        id: 8,
        title: "Women Entrepreneurship Fair",
        date: "2024-12-12",
        location: "Carthage",
        description: "An event dedicated to female entrepreneurs.",
        image: "/images/women.jpg",
      },
    ];

    setEvents(mockEvents);
  }, []);

  // Fonction pour filtrer les événements en fonction du terme de recherche
  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.date.includes(searchTerm) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Fonction pour basculer entre les événements visibles
  const toggleEvents = () => {
    setShowMore(!showMore);
    setVisibleEvents(showMore ? 3 : filteredEvents.length);
  };

  return (
    <div className="event-page-container">
      {/* Titre de la page */}
      <header>
        <h1 className="event-page-title">EVENTS NEAR ME</h1>
        <p className="event-intro">
          Discover a curated selection of events designed to foster innovation,
          learning, and networking. Whether you're an entrepreneur, student, or
          professional, you'll find an event tailored to your needs.
        </p>
      </header>

      {/* Barre de recherche */}
      <input
        type="text"
        className="search-bar"
        placeholder="Search by title, date, or location..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Cartes des événements */}
      <div className="event-grid">
        {filteredEvents.slice(0, visibleEvents).map((event) => (
          <div key={event.id} className="event-card">
            <img
              src={event.image}
              alt={`${event.title} image`}
              className="event-image"
            />
            <h2 className="event-title">{event.title}</h2>
            <p className="event-date">
              <strong>Date:</strong> {event.date}
            </p>
            <p className="event-location">
              <strong>Location:</strong> {event.location}
            </p>
            <p className="event-description">{event.description}</p>
            <button
              onClick={() =>
                alert(`You are signed up for the event: ${event.title}`)
              }
              className="participate-button"
            >
              Participate
            </button>
          </div>
        ))}
      </div>

      {/* Bouton pour basculer */}
      {filteredEvents.length > 3 && (
        <button onClick={toggleEvents} className="toggle-button">
          {showMore ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default EventPage;
