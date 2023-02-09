const request = require('supertest');
const app = require('./app');

// Test the GET /items endpoint
describe('GET /items', () => {
    it('returns a list of medical bills', async () => {
        // Send a GET request to the endpoint
        const response = await request(app).get('/items');

        // Check the response status code
        expect(response.statusCode).toEqual(200);

        // Check if the response is an array of medical bills
        expect(Array.isArray(response.body)).toBeTruthy();
    });
});

// Test the POST /items endpoint
describe('POST /items', () => {
    it('creates a new medical bill', async () => {
        // Object to store the details of the medical bill
        const newMedicalBill = {
            patientName: 'Ahmed Aly',
            address: 'Lex, KY',
            hospitalName: 'Chandler',
            dateOfService: '2/9/2023',
            billAmount: 1000
        };

        // Send a POST request to the endpoint with the new medical bill
        const response = await request(app).post('/items').send(newMedicalBill);

        // Check the response status code
        expect(response.statusCode).toEqual(200);

        // Check if the response is the new medical bill
        expect(response.body).toEqual(newMedicalBill);
    });
});
