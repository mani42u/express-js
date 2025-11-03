import express from 'express'
import Menu from '../models/Menu.js';
const router = express.Router();

router.post('/menu', async (req,res) => {
    try {
        const data = req.body;
        const newMenuItem = Menu(data);
        const response = await newMenuItem.save();
        console.log("Menu item saved");
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal server error'});
    }
})
router.get('/menu', async (req,res) => {
    try {
        const menuData = await Menu.find(); 
        console.log("Menu data fetched");
        res.status(200).json(menuData);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal server error'});
    }
})

router.get('/menu/:taste', async (req,res) => {
    try {
        const taste = req.params.taste;
        const menuItems = await Menu.find({taste:taste});
        console.log("Filtered menu data fetched");
        res.status(200).json(menuItems);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal server error'});
    }
})
export default router;