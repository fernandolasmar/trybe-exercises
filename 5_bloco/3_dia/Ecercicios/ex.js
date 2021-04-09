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
function createFridayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonId = 'btn-friday';
  newButton.innerHTML = buttonName;
  newButton.id = newButtonId;
  buttonContainer.appendChild(newButton);
}
createFridayButton('Sexta-feira');

//ex-5
function displayFridays(fridaysArray) {
  let getFridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday-day');
  let newFridayText = 'Sextouuuuuuuu';
  getFridayButton.addEventListener('click', function() {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== newFridayText) {
        fridays[index].innerHTML = newFridayText;
      } else {
        fridays[index].innerHTML = fridaysArray[index];
      }
    }
  })
}
let dezFridays = [4,11,18,25];
displayFridays(dezFridays);

//ex-6
function dayMouseOver() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600px'
  })
}
function dayMouseOut() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200px';
  })
}
dayMouseOver();
dayMouseOut();

//ex-7
function newTaskSpan(task) {
  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');
  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);
}
newTaskSpan('Projeto:');

//ex-8
function newTaskDiv(color) {
  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');
  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask);
}
newTaskDiv('green');

//ex-9
function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');
  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  })
}
setTaskClass();

//ex-10
function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  days.addEventListener('click', function(event) {
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  })
}
setDayColor();

function addNewTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.nodeValue.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.nodeValue;
      getTaskList.appendChild(newLi);
      getInputField.nodeValue = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })
  getInputField.addEventListener('keyup', function(event) {
    if (event.keyCode === 13 && getInputField.nodeValue.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.nodeValue;
      getTaskList.appendChild(newLi);
      getInputField.nodeValue = '';
    }
  })
}
addNewTask();