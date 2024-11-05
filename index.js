window.tito = window.tito || function() { (tito.q = tito.q || []).push(arguments); };

tito('button.mount', {
  el: "#tito-button-1",
  event: "vickyc/widget-test",
  releases: "wnze5cabeji",
  buttonLabel: "Buy 10 Tickets"
});

tito('on:registration:started', function(data) {
  // Set the default quantity for your specific ticket release
  data.line_items = data.line_items.map(item => {
    if (item.release_slug === "wnze5cabeji") {
      item.quantity = 10;
    }
    return item;
  });
});
