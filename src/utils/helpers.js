// Utility functions for RealBond

/**
 * Function to calculate the bond price given face value, coupon rate, and years to maturity.
 * @param {number} faceValue - The face value of the bond.
 * @param {number} couponRate - The coupon rate of the bond (as a decimal).
 * @param {number} yearsToMaturity - The number of years until the bond matures.
 * @returns {number} - The price of the bond.
 */
function calculateBondPrice(faceValue, couponRate, yearsToMaturity) {
    const couponPayment = faceValue * couponRate;
    let price = 0;
    for (let year = 1; year <= yearsToMaturity; year++) {
        price += couponPayment / Math.pow(1 + yieldToMaturity, year);
    }
    price += faceValue / Math.pow(1 + yieldToMaturity, yearsToMaturity);
    return price;
}

/**
 * Function to simulate bond pricing with random interest rates.
 * @param {number} numSimulations - The number of simulations to run.
 * @returns {Array} - An array of simulated bond prices.
 */
function simulateBondPrices(numSimulations) {
    const simulatedPrices = [];
    for (let i = 0; i < numSimulations; i++) {
        const randomRate = Math.random() * (0.1 - 0.01) + 0.01; // Random rate between 1% and 10%
        const price = calculateBondPrice(1000, randomRate, 10); // Assuming face value = 1000 and 10 years to maturity
        simulatedPrices.push(price);
    }
    return simulatedPrices;
}

module.exports = { calculateBondPrice, simulateBondPrices };