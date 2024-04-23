const Notes = require("../modules/notes.model")



module.exports = {
        //? =========== READ ALL ==========
        AllNotes: (req,res) => {
            Notes.find()
                .then((allNotes) => {
                    console.log(allNotes)
                    res.status(200).json(allNotes)
            
                }).catch((err) => {
                    console.log(err)
                    res.status(400).json()
            })
    },
        //? =========== READ ONE ==========
    findOneSingleNotes : (req, res) => {
        Notes.findOne({ _id: req.params.id })
            .then(oneSingleNotes => {
                res.status(200).json(oneSingleNotes);
            })
            .catch((err) => {
                res.status(400).json(err);
            });
    },
        //? =========== CREATE ==========
        CreateNotes : (req, res) => {
        Notes.create(req.body)
        .then((CreatedNotes) => {
                    console.log(CreatedNotes)
                    res.status(200).json(CreatedNotes)
                }).catch((err) => {
                res.status(400).json(err)
            })
        },
            //? =========== UPDATE ==========
        updateExistingNotes : (req, res) => {
            Notes.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
                .then(updatedNotes => {
                    res.status(200).json(updatedNotes);
                })
                .catch((err) => {
                    res.status(400).json(err);
                });
        },

        //? =========== DELETE ==========
        deleteAnExistingNotes : (req, res) => {
            Notes.deleteOne({ _id: req.params.id })
                .then(result => {
                    res.status(200).json(result);
                })
                .catch((err) => {
                    res.status(400).json(err);
                });
        }

}
