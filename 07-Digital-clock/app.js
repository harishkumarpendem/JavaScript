//indian watch
let indianWatch = () => {
  let option = { timeZone: 'Asia/Kolkata' };
  let currentDate = new Date().toLocaleDateString('en-US', option);
  let currentTime = new Date().toLocaleTimeString('en-US', option);
  document.querySelector('#india-date').innerText = currentDate;
  document.querySelector('#india-time').innerText = currentTime;
};
setInterval(indianWatch, 1000); 

//American watch
let americanWatch = () => {
  let option = { timeZone: 'America/new_york' };
  let currentDate = new Date().toLocaleDateString('en-US', option);
  let currentTime = new Date().toLocaleTimeString('en-US', option);
  document.querySelector('#usa-date').innerText = currentDate;
  document.querySelector('#usa-time').innerText = currentTime;
};
setInterval(americanWatch, 1000); 

//Chinese watch
let chinaWatch = () => {
    let option = { timeZone: 'Asia/shanghai' };
    let currentDate = new Date().toLocaleDateString('en-US',option);
    let currentTime = new Date().toLocaleTimeString('en-US',option);
    document.querySelector('#china-date').innerText = currentDate;
    document.querySelector('#china-time').innerText = currentTime;
};
setInterval(chinaWatch, 1000);   