const courseDataBase = require('../../database/models/crouseProduct')



module.exports.getAllCourse = async function (req, res) {
    try {
        const responce = await courseDataBase.find()
        res.status(200).json({
            status: responce
        })
    } catch (err) {
        res.status(400).json({
            status: err
        })
    }
}

module.exports.getSingleCourse = async function (req, res) {
    try {
        const { id } = req.params
        if (!id) {
            res.status(400).json({
                status: 'entre the id'
            })
        }
        const responce = await courseDataBase.findOne({ _id: id })
        res.status(200).json({
            status: responce
        })

    } catch (err) {
        res.status(400).json({
            status: 'id is wrong',
            err
        })
    }
}

module.exports.courseCreate = async function (req, res) {
    try {
        const { name, imageUrl, universityName, facultyProfile, learningHoursAndDuration, price, Certificate, EligibilityCriteria } = req.body
        if (!name || !universityName || !facultyProfile || !learningHoursAndDuration || !price || !Certificate || !EligibilityCriteria) {
            res.status(400).json({
                status: 'entre the detail'
            })
        }
        await courseDataBase.create({ name, imageUrl, universityName, facultyProfile, learningHoursAndDuration, price, Certificate, EligibilityCriteria })
        res.status(200).json({
            status: 'course added'
        })
    } catch (err) {
        res.status(400).json({
            status: err
        })
    }
}

module.exports.courseUpdate = async function (req, res) {
    try{
        const {id}=req.params
        await courseDataBase.findByIdAndUpdate({_id:id},req.body)
        res.status(200).json({
            status: 'course Update'
        })
    }catch(err){
        res.status(400).json({
            status: err
        })
    }
}

module.exports.courseDelete = async function (req, res) {
    try{
        const {id}=req.params
        await courseDataBase.findByIdAndDelete({_id:id})
        res.status(200).json({
            status: 'course Delete'
        })
    }catch(err){
        res.status(400).json({
            status: err
        })
    }
}