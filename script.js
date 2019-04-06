function menuIcon(x) {
  x.classList.toggle("change");
  document.getElementById("nav-links").classList.toggle("hide");
}

function onReady(callback) {
  var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 3500);
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function() {
  setVisible('#top', true);
  setVisible('header', true);
  setVisible('#_loading', true);
  setVisible('#_loading2', true);
  setVisible('#_loading3', true);
  setVisible('#_loading4', true);
  setVisible('#loading', false);
});