const STORY_FORM_ID = "storyCreator";
const STORY_FORM_CLASS = "storyCreatorClass";

const STORY_FORM_NAME_CONTAINER_CLASS = "nameContainer";
const STORY_FORM_NAME_INPUT_NAME = "Name";
const STORY_FORM_NAME_INPUT_ID = "storyNameID";
const STORY_FORM_NAME_INPUT_CLASS = "storyNameInputClass";
const STORY_FORM_NAME_LABEL_CLASS = "storyNameLabelClass";
const STORY_FORM_NAME_LABEL_TEXT = "Name";

const STORY_FORM_PLOT_CONTAINER_CLASS = "plotContainer";
const STORY_FORM_PLOT_INPUT_NAME = "Plot";
const STORY_FORM_PLOT_INPUT_ID = "storyPlotId";
const STORY_FORM_PLOT_INPUT_CLASS = "storyPlotInputClass";
const STORY_FORM_PLOT_LABEL_CLASS = "storyPlotLabelClass";
const STORY_FORM_PLOT_LABEL_TEXT = "Plot";

const STORY_FORM_CREATE_BUTTON_ID = "btnCreate";
const STORY_FORM_CREATE_BUTTON_CLASS = "btnCreate";
const STORY_FORM_CREATE_BUTTON_TEXT = "Create";


function StoryCreator(createStory) {
    var storyForm = createForm(STORY_FORM_ID, STORY_FORM_CLASS);
    appendNameInput(storyForm);
    appendPlotInput(storyForm);
    appendCreateButton(storyForm, createStory);
    return storyForm;
}

function appendNameInput(storyForm) {
    var nameInputParent = createLabelTextInputPair(
        STORY_FORM_NAME_CONTAINER_CLASS,
        STORY_FORM_NAME_INPUT_NAME,
        STORY_FORM_NAME_INPUT_ID,
        STORY_FORM_NAME_INPUT_CLASS,
        STORY_FORM_NAME_LABEL_CLASS,
        STORY_FORM_NAME_LABEL_TEXT
    );
    storyForm.appendChild(nameInputParent);
}

function appendPlotInput(storyForm) {
    var plotInputParent = createLabelTextInputPair(
        STORY_FORM_PLOT_CONTAINER_CLASS,
        STORY_FORM_PLOT_INPUT_NAME,
        STORY_FORM_PLOT_INPUT_ID,
        STORY_FORM_PLOT_INPUT_CLASS,
        STORY_FORM_PLOT_LABEL_CLASS,
        STORY_FORM_PLOT_LABEL_TEXT
    );
    storyForm.appendChild(plotInputParent);
}

function appendCreateButton(storyForm, createStory) {
    var button = createButton(
        STORY_FORM_CREATE_BUTTON_ID,
        STORY_FORM_CREATE_BUTTON_CLASS,
        STORY_FORM_CREATE_BUTTON_TEXT,
        onclick
    );
    function onclick() {
        createStory(convertFormDataToJson(storyForm));
    };
    storyForm.appendChild(button);
}


function convertFormDataToJson(form) {
    return JSON.stringify(Object.fromEntries(new FormData(form)));
}


function createForm(id, className) {
    var form = document.createElement('form');
    form.id = id;
    form.classList.add(className);
    return form;
}

function createLabelTextInputPair(containerClass, inputName, inputId, inputClass, labelClass, labelText) {
    var containerDiv = document.createElement('div');
    containerDiv.classList.add(containerClass);
    var label = createLabel(inputName, labelText, labelClass);
    var textInput = createTextInput(inputName, inputId, inputClass);
    containerDiv.appendChild(label);
    containerDiv.appendChild(textInput);
    return containerDiv;
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