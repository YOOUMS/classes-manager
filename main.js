let currentElement= document.querySelector("#current-element");
//inputs
let addInput= document.querySelector('#add-class');
let removeInput= document.querySelector('#remove-class');

let classesContainer= document.querySelector(".classes");

//create element to show the classes
let classContainer= document.createElement("div");
classContainer.classList.add('class');


addInput.addEventListener("blur",function addElement(e){
    
    let value = e.target.value;
    if(value !==""){
        let valueList = value.toLowerCase().split(' ');
        currentElement.classList.add(...valueList)
        addInput.value="";
        refreshClasses();
    }
});



removeInput.addEventListener("blur",function removeElement(e){
    let value = e.target.value;
    if(value !==""){
        let valueList = value.toLowerCase().split(' ');
        currentElement.classList.remove(...valueList)
        removeInput.value="";

        refreshClasses();
    }
});








function refreshClasses(){
    let classes =currentElement.classList;
    
    classesContainer.innerHTML="";
    if(classes.length==0){
        classesContainer.appendChild(document.createTextNode("No Classes To Show"));
    }
    classes.forEach(
        function (element){

            let classContainerCopy = classContainer.cloneNode(true);
            let textNode = document.createTextNode(element);
    
            classContainerCopy.appendChild(textNode);
            classesContainer.appendChild(classContainerCopy);
        }
    );
}

