if (!localStorage.getItem('userId')) {
  localStorage.setItem('userId', String(Math.random()));
}

const userId = localStorage.getItem('userId');

const handleClick = async event => 
{console.log (event)
  const pageX = Math.round(event.pageX);
  const pageY = Math.round(event.pageY);
  const eventPath = event.path.find(
    item => item.dataset.trackingid !== undefined
  ).dataset.trackingid;
  const timeOnPage = Math.round(event.timeStamp);
  const textInTarget = event.target.innerText;
  const userId = localStorage.getItem('userId');



const url = '/clicks';
await fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify({
    pageX,
    pageY,
    eventPath,
    timeOnPage,
    textInTarget,
    userId
    }),
   
   });
  };

   window.addEventListener('click', handleClick);

