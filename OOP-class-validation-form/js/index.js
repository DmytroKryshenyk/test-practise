/* 
Напиши КЛАС FormValidation, який має поля потерни(регулярки) для провірки і метод, 
який аргументом отримує форму з інпутами на провірку.

Цей метод має за допомогою поля "name" інпута звіряти значення інпута на 
відповідний ругулярний патерн, який ти завдяки "name" інпута находив в свому КЛАСІ.

ВСЯ ЛОГІКА МАЄ БУТИ ІНКАПСУЛЬОВАНА В КЛАСІ. 
Тобто у функції, яку вішаєш на addEventListenerНЕ має бути функція валіадації, 
там максимум, що буде виклик цьої функції з класу. 

На кінці вертає обєкт з результатами провірки у вигляді: 
{
  name: true або false,
  surname: true або false
} 
  
Критерії валідації:
  1)Имя. Допускается не более 2-х слов, разделенных пробелами
  или дефисом. Слова должны состоять только из букв.
  
  2)Фамилия. Допускается не более 2-х слов, разделенных пробелами
  или дефисом. Слова должны состоять только из букв.
  
  
  При сабміті форми повинна проходити провірка на всі інпути у формі.

  Результат провірки, объект, виводиди в консоль.
*/

const firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const form = document.querySelector(".form");

form.addEventListener("submit", validate);

class FormValidation {
  constructor(formInputElement) {
    this.formInputElement = formInputElement;
    
    /* Below the Regular expressions patterns. 
    Give them names like value in input name atribute */
    this.name = /^([A-Za-z]+)$|^([A-Za-z]+[ \-][A-Za-z]+)$/;
    this.surname = /^([A-Za-z]+)$|^([A-Za-z]+[ \-][A-Za-z]+)$/;

    this.valideteForm = function(form) {
      const inputsArray = Array.from(form.querySelectorAll("input"));
      const validationResults = {};
      inputsArray.forEach(element => {
        const isValid = this.validateElement(element);
        validationResults[element.name] = isValid;
      });
      return validationResults;
    };

    this.validateElement = function(element) {
      const checkTypeRegExp = this[element.name];
      const isValid = checkTypeRegExp.test(element.value);
      return isValid;
    };
  }
}

function validate(event) {
  event.preventDefault();

  const validationClass = new FormValidation();
  const form = event.currentTarget;  
  const results = validationClass.valideteForm(form);

  console.log(results); // delete this
  alert(JSON.stringify(results)); // delete this

  return results;
}
