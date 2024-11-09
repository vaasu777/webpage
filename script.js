// script.js

// Add a new event
function addEvent() {
    const eventTitle = document.getElementById('eventTitle').value.trim();
    const eventDate = document.getElementById('eventDate').value;

    if (eventTitle === "" || eventDate === "") {
        alert("Please enter both event title and date/time.");
        return;
    }

    const event = {
        id: Date.now(), // unique ID based on timestamp
        title: eventTitle,
        date: eventDate,
        completed: false
    };

    // Display the event
    displayEvent(event);

    // Clear input fields
    document.getElementById('eventTitle').value = "";
    document.getElementById('eventDate').value = "";
}

// Display event in the list
function displayEvent(event) {
    const eventList = document.getElementById('eventList');
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'fadeIn');
    li.setAttribute('data-id', event.id);
    if (event.completed) {
        li.classList.add('completed');
    } else {
        li.classList.add('pending');
    }

    li.innerHTML = `
        <input type="checkbox" ${event.completed ? 'checked' : ''} onclick="toggleCompletion(${event.id})"> 
        <strong>${event.title}</strong> - ${event.date}
        <button class="btn btn-danger btn-sm float-end" onclick="deleteEvent(${event.id})">Delete</button>
    `;
    eventList.appendChild(li);
}

// Toggle event completion (mark as completed or not)
function toggleCompletion(eventId) {
    const eventElement = document.querySelector(`li[data-id='${eventId}']`);
    const checkbox = eventElement.querySelector('input[type="checkbox"]');
    if (checkbox.checked) {
        eventElement.classList.remove('pending');
        eventElement.classList.add('completed');
    } else {
        eventElement.classList.remove('completed');
        eventElement.classList.add('pending');
    }
}

// Delete an event
function deleteEvent(eventId) {
    const eventElement = document.querySelector(`li[data-id='${eventId}']`);
    eventElement.classList.add('deleted');
    setTimeout(() => {
        eventElement.remove();
    }, 300); // 300ms for the delete animation
}
