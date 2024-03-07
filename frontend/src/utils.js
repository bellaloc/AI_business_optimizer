// Utility functions

// Function to capitalize the first letter of a string
export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

// Function to format a date string (YYYY-MM-DD) to a readable format (e.g., January 1, 2022)
export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

// Add more utility functions here as needed
