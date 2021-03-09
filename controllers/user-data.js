const Data = require('../models/resume-data');
const formidable = require('formidable');


exports.create = (req, res) => { 

    let form = new formidable.IncomingForm();

    form.keepExtensions = true
    form.parse(req, (err, fields, files, next) => {
        if (err) {    
            return res.json({
                err: "Something went wrong"
            });
        }

        let data = new Data(fields)

        data.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: `An error occur while processing the data, ${err}`
                })
            }
            res.json({result});
        })
    })

}

exports.resumeId = (req, res, next, id) => {
    Data.findById(id)
        .exec((err, data) => {
            if(err){
                return res.status(400).json({
                    error: err
                })
            }

            req.data = data;
            next();
        })
}

exports.read = (req, res) => {
    return res.json(req.data);
}

exports.update = (req, res) => { 

    let form = new formidable.IncomingForm();

    form.keepExtensions = true
    form.parse(req, (err, fields, files, next) => {
        if (err) {    
            return res.json({
                err: "Something went wrong"
            });
        }

        let data = req.data;
        data = Object.assign(data, fields)

        data.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: `An error occur while processing the data, ${err}`
                })
            }
            res.json({result});
        })
    })

}

exports.remove = (req, res) => {
    let data = req.data;

    data.remove((err, result) => {
        if(err){
            return res.status(400).json({
                error: "There was an error trying to delete your profile"
            })
        }

        res.json({
            result
        })
    })
}