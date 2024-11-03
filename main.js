// Task 2: Fetch Tickets Using Async/Await and Handle Errors
const ticketList = document.getElementById('tickets');
const loadingMessage = document.getElementById('loadingIndicators')
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
        return tickets;
    } catch (error) {
        console.error('Error:', error.message);
    } finally {
        loadingMessage.hidden = true;
        console.log('Closing connection.')
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