// grab the model


// exports
module.exports = {
  new: newFlight,
}

/* =======================
/* functions
/* =====================*/

// enter a new flight
function newFlight(req, res, next) {
  res.render('flights/new', {
    // 🌭
    hotdogTitle: "Add a flight…"
  })
}

