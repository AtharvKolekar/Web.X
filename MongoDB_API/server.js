const express = require('express');
const mongoose = require('mongoose');
const Student = require('./models/student.model.js');

const app = express();

const PORT = 4000;

const MONGODB_URI = 'mongodb+srv://atharvkolekar2:R6csOJ4k1kpnlAy9@clusternew.1ivkomc.mongodb.net/?retryWrites=true&w=majority&appName=ClusterNew'

mongoose.connect(MONGODB_URI).then(() => console.log("MongoDB connected successfully..."))
                             .catch((err) => console.log(err))



app.get('/create', async (req, res) => {
    try {

        const users = [
            { name: 'A', age : 21, marks : 90 },
            { name: 'B', age : 20, marks : 80 },
            { name: 'C', age : 22, marks : 70 },
        ];

        await Student.insertMany(users);

        res.status(200).json({
            message : "Data iserted successfully",
            users
        });

    } catch (error) {
        return res.status(400).json(error); 
    }
});

app.get('/read', async (req, res) => {
    try {
        const student = await Student.find();
        res.status(200).json({
            message : "fetched sucessfully",
            student
        })
    } catch (error) {
        return res.status(400).json(error); 
    }
});

app.get('/update', async (req, res) => {
    try {
        const updateData = await Student.updateMany(
            {},
            { $set : { age : 21 }}
        );
    
        const updatedStudent = await Student.find();
    
        res.status(200).json(updatedStudent);
    } catch (error) {
        return res.status(400).json(error); 
    }
});

app.get("/delete", async (req, res) => {
    try {
        const deleteStudent = await Student.deleteMany();

        res.status(200).json({
            message : "All students deleted successfully",
            deleteStudent
        });
    } catch (error) {
        return res.status(400).json(error); 
    }
});


app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
})

// R6csOJ4k1kpnlAy9        atharvkolekar2

