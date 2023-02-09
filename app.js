const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Truffle Health Medical Bill Upload Service');
});
const port = 3000;

// Parse incoming JSON data
app.use(express.json());

// Array to store the medical bills
let medicalBillsArray = [];

// Endpoint to return the list of medical bills
app.get('/items', (req, res) => {
    res.json(medicalBillsArray);
});

// Endpoint to create a new medical bill
app.post('/items', (req, res) => {
    // Object to store the details of the medical bill
    const newMedicalBill = {
        patientName: req.body.patientName,
        address: req.body.address,
        hospitalName: req.body.hospitalName,
        dateOfService: req.body.dateOfService,
        billAmount: req.body.billAmount
    };

    // Add the new medical bill to the array
    medicalBillsArray.push(newMedicalBill);
    res.json(newMedicalBill);
});

// Start the service and listen on the specified port
app.listen(port, () => {
    console.log(`Medical bill upload service listening at http://localhost:${port}`);
});
