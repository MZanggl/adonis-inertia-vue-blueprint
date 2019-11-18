'use strict'

class AboutController {
    index({ inertia }) {
        return inertia.render('About', { test: 1 })
    }
}

module.exports = AboutController
