import React, { useState, useEffect } from "react";
import axios from "axios";
import "./events.css";

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [visibleEvents, setVisibleEvents] = useState(3);
  const [showMore, setShowMore] = useState(false);
  const [showForm, setShowForm] = useState(false); // Gérer l'affichage de la modale de participation
  const [showCreateEvent, setShowCreateEvent] = useState(false); // Gérer la modale de création d'événement
  const [selectedEvent, setSelectedEvent] = useState(null); // Stocker l'événement sélectionné
  const [formData, setFormData] = useState({ name: "", email: "", acceptTerms: false });

  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/events");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const toggleEvents = () => {
    setShowMore(!showMore);
    setVisibleEvents(showMore ? 3 : events.length);
  };

  const handleParticipate = (event) => {
    setSelectedEvent(event);
    setShowForm(true);
  };

  const closeModal = () => {
    setShowForm(false);
    setFormData({ name: "", email: "", acceptTerms: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted with:", formData);
    setShowForm(false);
    alert("Thank you for signing up!");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Gérer les changements dans le formulaire de création
  const handleNewEventChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  // Soumission du formulaire de création
  const handleCreateEvent = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/events", newEvent);
      setEvents((prevEvents) => [...prevEvents, response.data]); // Mettre à jour la liste des événements
      setShowCreateEvent(false); // Fermer la modale de création
      alert("Event created successfully!");
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <div className="event-page-container">
      <header>
        <h1 className="event-page-title">EVENTS NEAR ME</h1>
        <p className="event-intro">
          Discover a curated selection of events designed to foster innovation,
          learning, and networking. Whether you're an entrepreneur, student, or
          professional, you'll find an event tailored to your needs.
        </p>
        <button
          onClick={() => setShowCreateEvent(true)} // Afficher la modale de création
          className="create-event-button"
        >
          Create Event
        </button>
      </header>

      <div className="event-grid">
        {events.slice(0, visibleEvents).map((event) => (
          <div key={event._id} className="event-card">
            <img
              src={event.image}
              alt={`${event.title} image`}
              className="event-image"
            />
            <h2 className="event-title">{event.title}</h2>
            <p className="event-date">
              <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
            </p>
            <p className="event-location">
              <strong>Location:</strong> {event.location}
            </p>
            <p className="event-description">{event.description}</p>
            <button
              onClick={() => handleParticipate(event)}
              className="participate-button"
            >
              Participate
            </button>
          </div>
        ))}
      </div>

      {events.length > 3 && (
        <button onClick={toggleEvents} className="toggle-button">
          {showMore ? "Show Less" : "Show More"}
        </button>
      )}

      {/* Modale de participation */}
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-container">
            <h2>Register for {selectedEvent.title}</h2>
            <form onSubmit={handleSubmit} className="participation-form">
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    required
                  />
                  I accept the terms and conditions
                </label>
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
            <button onClick={closeModal} className="close-button">Close</button>
          </div>
        </div>
      )}

      {/* Modale de création d'événement */}
      {showCreateEvent && (
        <div className="modal-overlay">
          <div className="modal-container">
            <h2>Create New Event</h2>
            <form onSubmit={handleCreateEvent} className="create-event-form">
              <div>
                <label>Title:</label>
                <input
                  type="text"
                  name="title"
                  value={newEvent.title}
                  onChange={handleNewEventChange}
                  required
                />
              </div>
              <div>
                <label>Date:</label>
                <input
                  type="date"
                  name="date"
                  value={newEvent.date}
                  onChange={handleNewEventChange}
                  required
                />
              </div>
              <div>
                <label>Location:</label>
                <input
                  type="text"
                  name="location"
                  value={newEvent.location}
                  onChange={handleNewEventChange}
                  required
                />
              </div>
              <div>
                <label>Description:</label>
                <textarea
                  name="description"
                  value={newEvent.description}
                  onChange={handleNewEventChange}
                  required
                />
              </div>
              <div>
                <label>Image URL:</label>
                <input
                  type="url"
                  name="image"
                  value={newEvent.image}
                  onChange={handleNewEventChange}
                />
              </div>
              <button type="submit" className="submit-button">
                Create Event
              </button>
            </form>
            <button onClick={() => setShowCreateEvent(false)} className="close-button">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventPage;
