
// Creates log message 
export function createLog({ timestamp, action, message }) {
  const messageBox = document.getElementById('message-box');
  const div = document.createElement('div');
  div.classList.add('new-message');
  
  const p1 = document.createElement('p');
  const ts = document.createElement('span');
  ts.classList.add('timestamp');
  ts.textContent = timestamp;
  
  const sep = document.createTextNode(' | ');
  
  const title = document.createElement('span');
  title.classList.add('message-title');
  title.textContent = action;
  
  const status = document.createElement('span');
  status.classList.add('status', 'open');
  status.textContent = 'OPEN';
  
  p1.append(ts, sep, title, document.createTextNode(' '), status);
  const p2 = document.createElement('p');
  p2.textContent = message;
  
  div.append(p1, p2);
  messageBox.prepend(div);
}

// loader
export function showSpinner(action) {
  const spinner = document.getElementById(`${action}_spinner`);
  const tick = document.getElementById(`${action}_tick`);
  if (spinner) spinner.style.display = "inline-block";
  if (tick) tick.style.display = "none";
}

export function showTick(action) {
  const spinner = document.getElementById(`${action}_spinner`);
  const tick = document.getElementById(`${action}_tick`);
  console.log("action", action);
  console.log("spinner", spinner);
  console.log("tick", tick);
  console.log(`${action}-tick`)
  if (spinner) spinner.style.display = "none";
  if (tick) tick.style.display = "inline-block";
}

export function showErrorIcon(action) {
  const spinner = document.getElementById(`${action}-spinner`);
  const tick = document.getElementById(`${action}-tick`);
  if (spinner) spinner.style.display = "none";
  if (tick) {
    tick.textContent = "✖"; // Red X
    tick.style.color = "red";
    tick.style.display = "inline-block";
  }
}

export function hideSpinner(spinnerId) {
  const spinner = document.getElementById(spinnerId);
  if (spinner) spinner.style.display = 'none';
}

export function hideTick(tickId) {
  const tick = document.getElementById(tickId);
  if (tick) {
    tick.style.display = 'none';
    tick.classList.remove('error');
  }
}

