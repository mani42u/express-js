import express from 'express';

import Person from '../models/person.js';

const router = express.Router();

router.post('/person', async (req,res) => {
    
    try {
        const data = req.body; //assuming request body contain data

        //create a new person document using the mongoose model
        const newPerson = Person(data);

        const response = await newPerson.save();
        console.log("Data saved");
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal server error'});
    }
})

router.get('/person', async (req,res) => {
    try {
        const personData = await Person.find();
        console.log("Data fetched");
        res.status(200).json(personData);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'internal server error'});
    }
})

router.get('/person/:worktype', async (req,res) => {
    try {
        const worktype = req.params.worktype;
        const persons = await Person.find({work:worktype});
        console.log("Filtered data fetched");
        res.status(200).json(persons);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal server error'});
    }       
})

router.put('/person/:id', async (req,res) => {
    try {
        const personId = req.params.id;
        const updateData = req.body;
        const response = await Person.findByIdAndUpdate(personId, updateData, {new:true,runValidators:true});
        if(!response){
            return res.status(404).json({error:'Person not found'});
        }   
        console.log("Person data updated");
        res.status(200).json(response);
    }catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal server error'});
    }
})

router.delete('/person/:id', async (req,res) => {
    try {
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error:'Person not found'});
        }
        console.log("Person data deleted");
        res.status(200).json({message:'Person deleted successfully'});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal server error'});
    }    
})


export default router;
