'use strict'

let postCounter = 0

class IndexController {
    index({ inertia }) {
        return inertia.render('Index', { postCounter }, { edgeVar: 'server-variable' })
    }

    store({ response }) {
        postCounter++
        console.log('hit store')

        response.route('home')
    }

    destroy({ response }) {
        console.log('hit destroy')

        response.redirect('/')
    }
}

module.exports = IndexController
