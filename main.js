let body = document.getElementById("body");
body.style.backgroundColor = "#FEE4C3";
body.style.width = "1200px";
body.style.margin = "0 auto";

let heading = document.getElementsByClassName("heading");
heading[0].style.backgroundColor = "#A62A2A";
heading[0].style.textAlign = "center";
heading[0].style.color = "#fff";
heading[0].style.fontSize = "40px";
heading[0].style.padding = "16px";
heading[0].style.margin = "50px 0";

let boxContainer = document.getElementById("box-container");
boxContainer.style.display = "grid";
boxContainer.style.gridTemplateColumns = "repeat(3,1fr)";
boxContainer.style.gap = "30px";

let box = document.getElementsByClassName("box");
let subHeading = document.getElementsByClassName("sub-heading");
let item = document.getElementsByClassName("item");

let box1 = box[0];
box1.style.fontSize = "24px";
box1.style.width = "330px";
box1.style.backgroundColor = "#F5F5F5";
box1.style.borderRadius = "15px";
box1.style.border = "4px solid black";
box1.style.padding = "16px";
subHeading[0].style.color = "#04FFA3";
item[0].style.color = "#38A990";
item[2].style.color = "#85b1eb";

let box2 = box[1];
box2.style.fontSize = "24px";
box2.style.width = "330px";
box2.style.backgroundColor = "#F5F5F5";
box2.style.borderRadius = "15px";
box2.style.border = "4px solid black";
box2.style.padding = "16px";
subHeading[1].style.color = "#97FF00";
item[8].style.color = "#85b1eb";
item[11].style.color = "#FE2751";

let box3 = box[2];
box3.style.fontSize = "24px";
box3.style.width = "330px";
box3.style.backgroundColor = "#F5F5F5";
box3.style.borderRadius = "15px";
box3.style.border = "4px solid black";
box3.style.padding = "16px";
subHeading[2].style.color = "#05A7F4";
item[13].style.color = "#85b1eb";

let box4 = box[3];
box4.style.fontSize = "24px";
box4.style.width = "330px";
box4.style.backgroundColor = "#F5F5F5";
box4.style.borderRadius = "15px";
box4.style.border = "4px solid black";
box4.style.padding = "16px";
subHeading[3].style.color = "#F201FA";
item[18].style.color = "#B3B684";

let box5 = box[4];
box5.style.fontSize = "24px";
box5.style.width = "330px";
box5.style.backgroundColor = "#F5F5F5";
box5.style.borderRadius = "15px";
box5.style.border = "4px solid black";
box5.style.padding = "16px";
subHeading[4].style.color = "#FE2751";
item[20].style.color = "#85b1eb";
item[22].style.color = "#85b1eb";