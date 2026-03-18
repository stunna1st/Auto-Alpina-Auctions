// script.js updated with advanced filtering logic

// Function to filter inventory
function filterInventory(inventory, filters) {
    return inventory.filter(item => {
        return (!filters.year || item.year === filters.year) &&
               (!filters.make || item.make === filters.make) &&
               (!filters.model || item.model === filters.model) &&
               (!filters.price || (item.price >= filters.price.min && item.price <= filters.price.max)) &&
               (!filters.mileage || item.mileage <= filters.mileage) &&
               (!filters.bodyType || item.bodyType === filters.bodyType) &&
               (!filters.transmission || item.transmission === filters.transmission) &&
               (!filters.fuelType || item.fuelType === filters.fuelType) &&
               (!filters.condition || item.condition === filters.condition) &&
               (!filters.color || item.color === filters.color) &&
               (!filters.doors || item.doors === filters.doors);
    });
}

// Market price comparison tool
function compareMarketPrice(inventoryItem) {
    // Placeholder for market price comparison logic
    return `Market price for ${inventoryItem.make} ${inventoryItem.model}: TBD`;
}

// Function to format currency in South African Rand
function formatZAR(amount) {
    return `R${amount.toFixed(2)}`;
}

// Inventory management class
class InventoryManager {
    constructor() {
        this.inventory = [];
    }

    addItem(item) {
        this.inventory.push(item);
    }

    removeItem(itemId) {
        this.inventory = this.inventory.filter(item => item.id !== itemId);
    }

    getInventory() {
        return this.inventory;
    }
}