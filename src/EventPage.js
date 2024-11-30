import React, { useState, useEffect } from "react";
import "./events.css";

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [visibleEvents, setVisibleEvents] = useState(3); // Number of events initially visible
  const [showMore, setShowMore] = useState(false); // Track whether to show more events

  // Load mock event data
  useEffect(() => {
    const mockEvents = [
      {
        id: 1,
        title: "Startup Weekend Tunis",
        date: "2024-11-20",
        location: "Tunis",
        description: "An event to boost your startup.",
      },
      {
        id: 2,
        title: "Hackathon Carthage",
        date: "2024-12-10",
        location: "Carthage",
        description: "Develop innovative solutions.",
      },
      {
        id: 3,
        title: "AI Conference",
        date: "2024-11-25",
        location: "Sfax",
        description: "Discover the latest advancements in artificial intelligence.",
      },
      {
        id: 4,
        title: "Startup Forum",
        date: "2024-12-05",
        location: "Tunis",
        description: "A forum dedicated to entrepreneurs and investors.",
      },
      {
        id: 5,
        title: "Beginner Coding Workshop",
        date: "2024-12-01",
        location: "Sousse",
        description: "Learn to code in just a few hours.",
      },
      {
        id: 6,
        title: "Innovation Awards Ceremony",
        date: "2024-12-15",
        location: "Monastir",
        description: "Celebrating the best technological innovations of the year.",
      },
      {
        id: 7,
        title: "Sustainable Development Seminar",
        date: "2024-12-03",
        location: "Tunis",
        description: "A seminar exploring ecological solutions.",
      },
      {
        id: 8,
        title: "Women Entrepreneurship Fair",
        date: "2024-12-12",
        location: "Carthage",
        description: "An event dedicated to female entrepreneurs.",
      },
    ];

    setEvents(mockEvents);
  }, []);

  // Toggle visibility of events
  const toggleEvents = () => {
    setShowMore(!showMore);
    setVisibleEvents(showMore ? 3 : events.length); // Toggle between initial and full list
  };

  return (
    <div className="event-page-container">
      {/* Page Title */}
      <header>
        <h1 className="event-page-title">Upcoming Events</h1>
        <p className="event-intro">
          Discover a curated selection of events designed to foster innovation, learning, and networking. 
          Whether you're an entrepreneur, student, or professional, you'll find an event tailored to your needs.
        </p>
      </header>

      {/* Event Cards */}
      <div className="event-grid">
        {events.slice(0, visibleEvents).map((event) => (
          <div key={event.id} className="event-card">
            <h2 className="event-title">{event.title}</h2>
            <p className="event-date">
              <strong>Date:</strong> {event.date}
            </p>
            <p className="event-location">
              <strong>Location:</strong> {event.location}
            </p>
            <p className="event-description">{event.description}</p>
            <button
              onClick={() => alert(`You are signed up for the event: ${event.title}`)}
              className="participate-button"
            >
              Participate
            </button>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      {events.length > 3 && (
        <button onClick={toggleEvents} className="toggle-button">
          {showMore ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default EventPage;
