// Sample event data (you can replace this with real data from a database or API)
const events = [
    { title: "Free BBQ at the Park", date: "2024-02-15", location: "Central Park" },
    { title: "Live Music Night", date: "2024-02-20", location: "Downtown Square" },
    { title: "Community Potluck", date: "2024-02-25", location: "Community Center" }
];

// Function to display events
function displayEvents() {
    const eventsContainer = document.getElementById('events');
    eventsContainer.innerHTML = ''; // Clear previous content

    events.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.classList.add('event');
        eventElement.innerHTML = `
            <h3>${event.title}</h3>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Location:</strong> ${event.location}</p>
        `;
        eventsContainer.appendChild(eventElement);
    });
}

// Function to filter events by date
function filterEventsByDate(date) {
    const filteredEvents = events.filter(event => event.date === date);
    displayFilteredEvents(filteredEvents);
}

// Function to display filtered events
function displayFilteredEvents(filteredEvents) {
    const eventsContainer = document.getElementById('events');
    eventsContainer.innerHTML = ''; // Clear previous content

    if (filteredEvents.length === 0) {
        eventsContainer.innerHTML = '<p>No events found.</p>';
    } else {
        filteredEvents.forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.classList.add('event');
            eventElement.innerHTML = `
                <h3>${event.title}</h3>
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Location:</strong> ${event.location}</p>
            `;
            eventsContainer.appendChild(eventElement);
        });
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', displayEvents);

// Example: Filtering events by date when a user selects a date from a dropdown
const dateFilterDropdown = document.getElementById('date-filter');
dateFilterDropdown.addEventListener('change', function() {
    const selectedDate = this.value;
    if (selectedDate === 'all') {
        displayEvents();
    } else {
        filterEventsByDate(selectedDate);
    }
});
