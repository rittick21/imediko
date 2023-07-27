const placeValue = () => {
  const l_node_data = ["Neck", "Axilla", "Groin"];
  const l_node_p_data = ["Palpable", "Not Palpable"];

  const l_node = document.querySelector("#l_nodes");
  const selected_l_node = l_node.options[l_node.selectedIndex].value;

  const l_node_p = document.querySelector("#l_node_type");
  const selected_l_node_p = l_node_p.options[l_node_p.selectedIndex].value;

  let text_box = document.querySelector("#text_area");

  let x = "";
  let y = "";
  l_node_data.forEach((element) => {
    if (selected_l_node == element.toLowerCase()) {
      x = element;
    }
  });

  l_node_p_data.forEach((element) => {
    if (selected_l_node_p == element.toLowerCase()) {
      y = element;
    }
  });
  if(x.length === 0 || y.length === 0) {
    //show popup
    text_box.value = "Please enter valid details";
    setTimeout(() => {
      text_box.value = "";
    },1500)
    return;
  }
  if((x.length !== 0 || y.length !== 0)){
    if(text_box.value.toString().length == 0){
      text_box.value = `${x} with ${y}`;
    }else if(text_box.value.toString() != ' '){
      text_box.value = text_box.value.concat(`, ${x} with ${y}`);
    }
    return;
  }
};

let b = document.querySelector("#go");
b.addEventListener("click", placeValue);
