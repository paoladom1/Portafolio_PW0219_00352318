let carnet_field = document.querySelector("#carnet_field");
let schedule_dropdown = document.querySelector("#schedule_field");
let late_switch = document.querySelector("#late_switch");
let submit_btn = document.querySelector("#submit_btn");

let table_body = document.querySelector("#table_body");
let carnet_regex = new RegExp("[0-9]{8}");

let addStudent = (carnet, schedule, late) => {
  let new_row = document.createElement("tr");
  let datetime = new Date();

  new_row.className = "table_active";
  new_row.innerHTML = `<th scope='row'>${carnet}</th>
        <td>${schedule}</td>
        <td>${datetime.toLocaleString()}</td>
        <td>${late}</td>
        <td><button type="button" class="btn btn-danger delete" disabled>Drop</button></td>
        <td><input class="form-control confirm" type="text" name="carnet"></td>
        `;
  table_body.appendChild(new_row);

  let confirm_field = document.querySelectorAll(".confirm");

  confirm_field.forEach(element => {
    element.addEventListener("keyup", event => {
      let btn_drop = element.parentElement.previousElementSibling.firstChild;

      if (
        element.value ==
        element.parentElement.parentElement.firstChild.firstChild.textContent
      ) {
        btn_drop.disabled = false;
        btn_drop.addEventListener("click", event => {
          row = element.parentElement.parentElement;
          table_body.removeChild(row);
        });
      } else {
        btn_drop.disabled = true;
      }
    });
  });

  let btn_delete = document.querySelectorAll(".delete");

  btn_delete.forEach(element => {
    element.addEventListener("click", event => {
      row = element.parentElement.parentElement;
      table_body.removeChild(row);
    });
  });
};

let parseLateSwitch = value => {
  if (value) {
    return "Tarde";
  }

  return "A tiempo";
};

submit_btn.addEventListener("click", () => {
  let carnet = carnet_field.value;
  let schedule =
    schedule_dropdown.options[schedule_dropdown.selectedIndex].text;
  let late = parseLateSwitch(late_switch.checked);

  if (carnet_regex.test(carnet)) {
    addStudent(carnet, schedule, late);
  } else {
    alert("Formato de carnet no valido");
  }
});

carnet_field.addEventListener("keyup", event => {
  let keyCode = event.keyCode;
  let carnet = carnet_field.value;

  if (keyCode == 13) {
    submit_btn.click();
  }

  if (carnet_regex.test(carnet)) {
    submit_btn.disabled = false;
  } else {
    submit_btn.disabled = true;
  }
});
