const express = require('express')
const { courseDelete,
    courseUpdate,
    courseCreate,
    getSingleCourse,
    getAllCourse
} = require('../../controller/coursePrograms/coursePrograms')
const router = express.Router()





//get all course
router.get('/all-course', getAllCourse)
//get single course
router.get('/single-course/:id', getSingleCourse)
//get create course
router.post('/create-course', courseCreate)
//get all course data
router.put('/update-course/:id', courseUpdate)
//get all course data
router.delete('/delete-course/:id', courseDelete)








module.exports = router