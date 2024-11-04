// Task 2: Fetch Tickets Using Async/Await and Handle Errors
const ticketList = document.getElementById('tickets');
const loadingMessage = document.getElementById('loadingIndicators')
// Create asynchronous function to get data from the API
async function fetchTickets() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const tickets = await response.json();
        // Throw a custom error if the response was not valid
        if (!response.ok) {
            throw new Error('Data not found.');
        }
        // Throw a custom error if there are no tickets are not available
        if (tickets.length == 0) {
            throw new Error('No tickets available.');
        }
        return tickets;
    // Use catch to log error in the console
    } catch (error) {
        console.error('Error:', error.message);
    // Task 4: Use Finally to Ensure Cleanup
    } finally {
        loadingMessage.hidden = true;
        console.log('Closing connection.')
    }
};

// Task 3: Display Tickets Dynamically on the Page
fetchTickets()
    // Display details for each ticket's ID, customer name, issue desciption, and details
    .then((tickets) => {
        tickets.forEach((ticket) => {
            const ticketDetails = document.createElement('li');
            ticketDetails.innerHTML = `Ticket ID: ${ticket.id}<br />Customer Name: ${ticket.userId}<br />Issue Description: ${ticket.title}<br />Details: ${ticket.body}`;
            ticketList.appendChild(ticketDetails);
        })
    }
    );