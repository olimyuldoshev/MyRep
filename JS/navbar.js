const mainDiv = document.querySelector("#block__for__main__button");
const button = document.querySelector("#button");

const divForList = document.createElement("div");
const list = document.createElement("ul");

divForList.classList.add("none");

list.classList.add("hide");

list.innerHTML = `
<li><a href="">Контрактная логистика</a></li>
<li><a href="">ВЭД - аутсорсинг</a></li>
<li><a href="">Таможенное оформление</a></li>
<li><a href="">Логистика для дата-центров</a></li>
<li><a href="">Страхование</a></li>
<li><a href="">Сертификация</a></li>
`;

button.addEventListener("click", hideAndShow);

function hideAndShow() {
  if (
    button === `<button class="navbar__buttons" id="button">Услуги</button>`
  ) {
    divForList.classList.toggle("none");
    divForList.classList.toggle("class__for__list");
    list.classList.toggle("hide");
    list.classList.toggle("show");
  } else {
    divForList.classList.toggle("class__for__list");
    divForList.classList.toggle("none");
    list.classList.toggle("show");
    list.classList.toggle("hide");
  }
}

divForList.appendChild(list);

mainDiv.appendChild(button);
mainDiv.appendChild(divForList);
