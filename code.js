
onEvent("START", "click", function( ) {
  setScreen("getInformation");
});
onEvent("go", "click", function( ) {
  setScreen("Q1");
});


onEvent("Submit1", "click", function( ) {
if(getChecked("1A")){
setProperty("label7", "text-color","green");
deleteElement("Submit1");
showElement("go1");
}


if(getChecked("2A")){
setProperty("label6", "text-color","red");
setProperty("label7", "text-color","green");
deleteElement("Submit1");
showElement("go1");
}


if(getChecked("3A")){
setProperty("label5", "text-color","red");
setProperty("label7", "text-color","green");
deleteElement("Submit1");
showElement("go1");
}


if(getChecked("4A")){
setProperty("label7", "text-color","green");
setProperty("label8", "text-color","red");
deleteElement("Submit1");
showElement("go1");
}
});
onEvent("go1", "click", function( ) {
  setScreen("Q2");
});
onEvent("Submit2", "click", function( ) {
if(getChecked("1B")){
setProperty("1", "text-color","red");
setProperty("2", "text-color","green");
deleteElement("Submit2");
showElement("go2");
}


if(getChecked("2B")){
setProperty("2", "text-color","green");
deleteElement("Submit2");
showElement("go2");
}


if(getChecked("3B")){
setProperty("3", "text-color","red");
setProperty("2", "text-color","green");
deleteElement("Submit2");
showElement("go2");
}


if(getChecked("4B")){
setProperty("4", "text-color","green");
setProperty("2", "text-color","red");
deleteElement("Submit2");
showElement("go2");
}
});
onEvent("go2", "click", function( ) {
  setScreen("Q3");
});

onEvent("Submit3", "click", function( ) {
if(getChecked("1C")){
setProperty("11", "text-color","green");
deleteElement("Submit3");
showElement("go3+");
}


if(getChecked("2C")){
setProperty("22", "text-color","red");
deleteElement("Submit3");
setProperty("11", "text-color","green");
showElement("go3");
}


if(getChecked("3C")){
setProperty("33", "text-color","red");
setProperty("11", "text-color","green");
deleteElement("Submit3");
showElement("go3");
}


if(getChecked("4CC")){
setProperty("11", "text-color","green");
setProperty("44", "text-color","red");
deleteElement("Submit3");
showElement("go3");
}
});
onEvent("go3", "click", function( ) {
  setScreen("Q4");
});

onEvent("Submit4", "click", function( ) {
if(getChecked("1D")){
setProperty("111", "text-color","green");
deleteElement("Submit4");
showElement("go4");
}


if(getChecked("2D")){
setProperty("222", "text-color","red");
deleteElement("Submit4");
setProperty("111", "text-color","green");
showElement("go4");
}


if(getChecked("3D")){
setProperty("333", "text-color","red");
setProperty("111", "text-color","green");
deleteElement("Submit4");
showElement("go4");
}


if(getChecked("4D")){
setProperty("111", "text-color","green");
setProperty("444", "text-color","red");
deleteElement("Submit4");
showElement("go4");
}
});
onEvent("go4", "click", function( ) {
  setScreen("Q5");
});

