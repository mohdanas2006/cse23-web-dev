const express = require('express');
const app = express();
app.use(express.json());
/// existing students data

let students = [
    { id: 1, name: 'Mohd Affan', branch: 'CSE', age: 20 },
    { id: 2, name: 'Anas julaha', branch: 'IT', age: 21 },
    { id: 3, name: 'krish kumar', branch: 'CSE', age: 20 },
    { id: 4, name: 'Mohd Ahtasham ', branch: 'ECE', age: 20 }
];

app.get('/students', (req, res) =>{
    res.send("server is running");

  });
  // Get operations = display all students
  app.get('/students',(req,res)=>{
    res.json(students);
  })
  app.post('/student',(req,res)=>{
    const newStudent = req.body;
    students.push(newStudent);
    res.status(201).json({message:"Student added succesfully",student:newStudent});
  });
  app.listen(3005,()=>{
    console.log("server running at port 3005");
       
  });


       app.delete("/students/:id", (req, res) => {

    const id = Number(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    students = students.filter(s => s.id !== id);

    res.json({
        message: "Student deleted successfully",
        student: student
    });
});

// Start Server
app.listen(3005, () => {
    console.log("Server running at http://localhost:3005");
});