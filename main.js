// Task 2: Fetch Tickets Using Async/Await and Handle Errors
const tickets = document.getElementById('tickets');
async function fetchTickets() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const ticketDetails = await response.json();
        if (!response.ok) {
            throw new Error('Data not found.');
        }
        if (ticketDetails.length == 0) {
            throw new Error('No tickets available.')
        }
        console.log(`Tickets: ${ticketDetails}`);
    } catch (error) {
        console.error('Error:', error.message);
    }
};

fetchTickets();