const mix = require('laravel-mix')

mix.extend('disabledEsModule', (config) => {
  config.module.rules.forEach((rule) => {
    let regex = new RegExp(rule.test)

    // why .jpg? because it's one of those file extensions that is someone never left him behind.
    if (regex.test('.jpg')) {
      rule.use.forEach((use) => {
        if (use.loader.includes('file-loader')) {
          Object.assign(use.options, { esModule: false })
        }
      })
    }
  })
})
