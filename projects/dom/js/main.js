const topicVariables = document.querySelector('#topic-variables');

const topicDataTypes = document.querySelector('#topic-data-types');

const infoDataTypes = document.querySelector('#info-data-types');
const infoVariables = document.querySelector('#info-variables');

const topicsUl = document.querySelector('#topics');


let selected = null;
topicVariables.addEventListener('click', function() {
    if (selected) {
        selected.classList.remove('selected');
    }
    topicVariables.classList.add('selected');
    selected = topicVariables;

    if (document.querySelector('.override')) {
        document.querySelector('.override').classList.remove('override');
    }

    infoVariables.classList.add('override');


});
topicDataTypes.addEventListener('click', function() {
    if (selected) {
        selected.classList.remove('selected');
    }
    topicDataTypes.classList.add('selected');
    selected = topicDataTypes;
    if (document.querySelector('.override')) {
        document.querySelector('.override').classList.remove('override');
    }
    infoDataTypes.classList.add('override')
});


['Functions', 'Event Listeners'].forEach( (letter) => {

    const li = document.createElement('li');
    li.innerHTML = letter;
    topicsUl.append(li)
});