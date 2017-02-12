module.exports = {
  new: function(message) {
    return (noty({
      text: message,
      animation: {
        open: {height: 'toggle'},
        close: {height: 'toggle'},
        easing: 'swing',
        speed: 500
      }
    }))
  }
}
