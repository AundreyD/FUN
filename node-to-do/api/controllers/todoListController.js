const mongoose = require('mongoose'),
      Task = mongoose.model('Tasks');

exports.list_all_tasks = (req, res) => {
    Task.find({}, (err, task) => {
        if(err){
            res.send(err);
            console.log('error dawg', err)
        }else{
            res.json(task)
        }
    })
}

exports.create_a_task = (req,res) => {
    let new_task = new Task(req.body);
    new_task.save((err, task) => {
        if(err){
            res.send(err);
            console.log('error dawg', err)
        }else{
            res.json(task)
        }
    })
}

exports.read_a_task = (req, res) => {
    Task.findById(req.params.taskId, (err, task) => {
        if(err){
            res.send(err);
            console.log('error dawg', err)
        }else{
            res.json(task)
        }
    })
}

exports.update_a_task = (req, res) => {
    Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, (err, task) => {
        if(err){
            res.send(err);
            console.log('error dawg', err)
        }else{
            res.json(task)
        }
    })
}

exports.delete_a_task = () => {
    Task.remove({
        _id: req.params.taskId
    }, (err, task) => {
        if(err){
            res.send(err);
            console.log('error dawg', err)
        }else{
            res.json({messgae: 'Task successfullly deleted'});
        }
    })
}