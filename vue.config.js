
module.exports = {
  chainWebpack: config => { 
    // To find out the plugin names to delete: vue inspect --plugins.
    config.plugins.delete('preload')
    // config.plugins.delete('prefetch')
  }
}

