function createForm(id) {
    var form = document.createElement('form');
    form.id = id;
    return form;
}

function createLabelTextInputPair(inputName, inputId, inputClass, labelClass, labelText) {
    var parentDiv = document.createElement('div');
    var label = createLabel(inputName, labelText, labelClass);
    var textInput = createTextInput(inputName, inputId, inputClass);
    parentDiv.appendChild(label);
    parentDiv.appendChild(textInput);
    return parentDiv;
}

function createLabel(nameFor, text, className) {
    var label = document.createElement('label');
    label.htmlFor = nameFor;
    label.classList.add(className);
    label.innerText = text;
    return label;
}

function createTextInput(name, id, className) {
    var input = document.createElement('input');
    input.type = 'text';
    input.name = name;
    input.id = id;
    input.classList.add(className);
    return input;
}

function createButton(id, className, text, onclick) {
    var button = document.createElement('button');
    button.id = id;
    button.classList.add(className);
    button.innerText = text;
    button.onclick = onclick;
    return button;
}