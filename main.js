// Task 2: Fetch Tickets Using Async/Await and Handle Errors
const ticketList = document.getElementById('tickets');
async function fetchTickets() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const tickets = await response.json();
        if (!response.ok) {
            throw new Error('Data not found.');
        }
        if (tickets.length == 0) {
            throw new Error('No tickets available.');
        }
        console.log(`Tickets: ${tickets}`);
        return tickets;
    } catch (error) {
        console.error('Error:', error.message);
    }
};

fetchTickets()
    .then((tickets) => {
        tickets.forEach((ticket) => {
            const ticketDetails = document.createElement('li');
            ticketDetails.innerHTML = `Ticket ID: ${ticket.id}<br />Customer Name: ${ticket.userId}<br />Issue Description: ${ticket.title}<br />Details: ${ticket.body}`;
            ticketList.appendChild(ticketDetails);
        })
    }
    );