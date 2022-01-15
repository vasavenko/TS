export function dateRange () {

  const dayIn = 1;
  const dayOut = 4;
  const maxDay = 2;

  const elInDate = (<HTMLInputElement>document.getElementById('check-in-date'));
  const elOutDate = (<HTMLInputElement>document.getElementById('check-out-date'));

  const dateNow = new Date();
  const checkInDate = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate()+dayIn);
  const checkOutDate = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate()+dayOut);
  const maxCheckDate = new Date(dateNow.getFullYear(), dateNow.getMonth()+maxDay, 0);
    
  elInDate.value=valueForInput(checkInDate);
  elInDate.min=valueForInput(checkInDate);
  elInDate.max = valueForInput(maxCheckDate);
  elOutDate.value=valueForInput(checkOutDate);
  elOutDate.min=valueForInput(checkOutDate);
  elOutDate.max = valueForInput(maxCheckDate);

  elInDate.addEventListener('input', (e) =>{
    const inDate = e.target.value.split('-');
    const outDate = new Date(+inDate[0],+inDate[1]-1,+inDate[2]+2);
    // const maxCheckDate = new Date(inDate.getFullYear(), inDate.getMonth()+2, 0);
    elOutDate.value=valueForInput(outDate);
    elOutDate.min=valueForInput(outDate);
    elOutDate.max = valueForInput(maxCheckDate);
  })

  function valueForInput (date) {
    const Day = date.getDate()<10 ? '0'+String(date.getDate()) : String(date.getDate());
    const Month = date.getMonth()+1<10 ? '0'+String(date.getMonth()+1) : String(date.getMonth()+1);
    const Year = String(date.getFullYear());
    const CheckDate = `${Year}-${Month}-${Day}`
    return CheckDate
  }

}
