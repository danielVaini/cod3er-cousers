const Todo = require('./todo')


Todo.methods(['get', 'post', 'put', 'delete']) // API rest stand
Todo.updateOptions({ new: true, runValidators: true })

module.exports = Todo