const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

//GET: List
router.get('/', async (req, res) => {
    try{
    const customers = await Customer.find();
    res.status(200).json(customers)
    }
    catch (err) {
        res.status(500).json({message: "An error occurred", error: err})
    }
});

//GET: get by id
router.get('/:id', async (req, res) => {
    try{
        const id = req.params.id;
    const customer = await Customer.findOne({_id: id});
    res.status(200).json(customer)
    }
    catch (err) {
        res.status(500).json({message: "An error occurred", error: err})
    }
});

//POST: create

router.post('/', async (req, res) => {
    try{
    const customer = new Customer(req.body);
        const savedCustomer = customer.save();
        res.status(200).json(savedCustomer)
    }
    catch (err) {
        res.status(500).json({message: "An error occurred", error: err})
    }
});