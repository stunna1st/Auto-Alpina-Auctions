// script.js for Car Listing Website

// Sample Car Data
const cars = [
    { id: 1, make: 'Toyota', model: 'Camry', year: 2021, price: 24000 },
    { id: 2, make: 'Honda', model: 'Accord', year: 2020, price: 22000 },
    { id: 3, make: 'Ford', model: 'Mustang', year: 2023, price: 35000 },
    // Add more car listings as needed
];

// Function to display cars
function displayCars(carList) {
    const carContainer = document.getElementById('car-list');
    carContainer.innerHTML = ''; // Clear existing content
    carList.forEach(car => {
        const carElement = document.createElement('div');
        carElement.className = 'car-item';
        carElement.innerHTML = `
            <h3>${car.make} ${car.model} (${car.year})</h3>
            <p>Price: $${car.price}</p>
        `;
        carContainer.appendChild(carElement);
    });
}

// Function to filter cars based on search input
function filterCars() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredCars = cars.filter(car => 
        car.make.toLowerCase().includes(searchInput) || car.model.toLowerCase().includes(searchInput)
    );
    displayCars(filteredCars);
}

// Event listener for search input
document.getElementById('search-input').addEventListener('input', filterCars);

// Initial display of cars
displayCars(cars);