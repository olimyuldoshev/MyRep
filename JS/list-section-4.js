const mainDiv = document.querySelector("#main__div__section-4");
const submit = document.querySelector("#button__for__list");

const divForList = document.createElement("div");
const list = document.createElement("ul");

list.classList.add("hide");

list.innerHTML = `
<li>Hello</li>
<li>My</li>
<li>Best</li>
<li>Friend</li>
`;

submit.addEventListener("click", showAndHide);

function showAndHide() {
  if (
    submit ===
    ` <button class="button__section-4" id="button__for__list">Таможенное оформление:</button>`
  ) {
    list.classList.toggle("hide");
    list.classList.toggle("show");
  } else {
    list.classList.toggle("show");
    list.classList.toggle("hide");
  }
}

divForList.appendChild(list);

mainDiv.appendChild(submit);
mainDiv.appendChild(divForList);
