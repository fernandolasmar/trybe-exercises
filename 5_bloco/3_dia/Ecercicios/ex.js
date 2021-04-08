function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');
  
  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
  
    weekDaysList.appendChild(dayListItem);
  };
};
  
createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
    
function calendarNumbers() {
  let dayListNumbers = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
      let day = dezDaysList[index];
      let dayLi = document.createElement('li');

    if (day === 24 || day === 31) {
      dayLi.className = 'day holiday';
      dayLi.innerHTML = day;
      dayListNumbers.appendChild(dayLi);
    } else if (day === 4 || day === 11 | day === 18) {
        dayLi.className = 'day friday';
        dayLi.innerHTML = day;
        dayListNumbers.appendChild(dayLi);
      } else if (day === 25) {
          dayLi.className = 'day holiday friday';
          dayLi.innerHTML = day;
          dayListNumbers.appendChild(dayLi);
      } else {
          dayLi.className = 'day';
          dayLi.innerHTML = day;
          dayListNumbers.appendChild(dayLi);
      }
  }
}
  calendarNumbers();
  
  //ex-2
function holidayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonId = 'btn-holiday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonId;
  buttonContainer.appendChild(newButton);
}
holidayButton('Feriados');

 //ex-3
function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';
  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].getElementsByClassName.backgroundColor === setNewColor) {
        getHolidays[index].getElementsByClassName.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].getElementsByClassName.backgroundColor = setNewColor;
      }
    }
  })
}
displayHolidays();

//ex-4
