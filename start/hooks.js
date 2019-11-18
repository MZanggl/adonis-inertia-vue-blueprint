const { hooks } = require('@adonisjs/ignitor')
const { version } = require('../package.json')
const Helpers = use('Helpers')

const mixManifest = require(Helpers.publicPath('mix-manifest.json'))

hooks.after.providersBooted(async () => {
    const View = use('View')
    View.global('versionjs', (filename) => {
        filename = `/js/${filename}.js`
        if (!mixManifest.hasOwnProperty(filename)) {
            throw new Error('Could not find asset for versioning' + filename)
        }

        return mixManifest[filename]
    })

    View.global('versioncss', (filename) => {
        filename = `/css/${filename}.css`
        if (!mixManifest.hasOwnProperty(filename)) {
            throw new Error('Could not find asset for versioning' + filename)
        }

        return mixManifest[filename]
    })

    const Inertia = use('Adonis/Addons/Inertia')

    Inertia.setVersion(version)

    Inertia.share('app.name', 'TEST')
    Inertia.share('user', ({ request }) => {
        return 'TADA'
    })
})