const {Button, TextView, ui} = require('tabris');

let button = new Button({
  centerX: 0, top: 100,
  text: 'Hello Revote '
}).appendTo(ui.contentView);


let buttonCheckPermission = new Button({
  centerX: 0, top: 200,
  text: 'Check Permission '
}).appendTo(ui.contentView);


let buttonRequestPermission = new Button({
  centerX: 0, top: 300,
  text: 'Ask for Permission '
}).appendTo(ui.contentView);


let textView = new TextView({
  centerX: 0, top: [button, 50],
  font: '24px'
}).appendTo(ui.contentView);

button.on('select', () => {
  textView.text = 'Tabris.js rocks!';
   window.plugins.sim.getSimInfo(successCallback, errorCallback);
});

buttonCheckPermission.on('select', () => {
  textView.text = 'Checkingd perm!';
   hasReadPermission();
});

buttonRequestPermission.on('select', () => {
  textView.text = 'Checkingd perm!';
   requestReadPermission();
});


function successCallback(result) {
  console.log(result);
}

function errorCallback(error) {
  console.log(error);
}


// Android only: check permission
function hasReadPermission() {
  window.plugins.sim.hasReadPermission(successCallback, errorCallback);
}

// Android only: request permission
function requestReadPermission() {
  window.plugins.sim.requestReadPermission(successCallback, errorCallback);
}