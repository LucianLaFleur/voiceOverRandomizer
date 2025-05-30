const masterDetailObj = {
    'category-type': [
        "telephone / avr",
        "kids / family",
        "events / event promotion",
        "recreation / travel sales",
        "education programs / certifications / universities ",
        "food/beverage ad",
        "automotive ad",
        "retail ad (clothing, everyday goods, store chains)",
        "construction / tool ad",
        "dialogue commercial",
        "movie trailer / video game trailer",
        "corperate training/ informaitonal",
        "technology retail",
        "technology education  ",
        "travel documentary",
        "MC / announcer / public speaking address",
        "Health / wellness (+ medical retail)",
        "Medical (explainer / informational / PSA)",
        "explainers / DIY / manuals / app software guides",
        "audio guides (like audio tour in museum or park)",
        "biography / historical documentary",
        "eLearning (generic)",
        "*religious?",
        "*self-help?",
        "*Guided meditation / ASMR?",
        "*audiobooks?",
        "*animation / video games?",
        "*podcasting?",
        "*real estate / land / apartment sales?"
    ],
    'style1': [
        "attractive / flirty / sultry",
        "velvety / smooth ",
        "exaggerated ",
        "moody",
        "calm/calming/caring/warm ",
        "cool/easygoing",
        "comforting / endearing / nuturing",
        "concerned / ^emotional / sweet / sympathetic",
        "softspoken ",
        "angry / biting / ^stern",
        "annyoing / immature",
        "antagonistic ",
        "sarcasm / snarky / wry*",
        "condescneding / snobby / pompous",
        "conversatinal",
        "cynical ",
        "passive aggressive ",
        "intimidating",
        "spooky",
        "egotistical / proud ",
        "sketchy / sleazy",
        "heroic / brave",
        "inspirational / uplifting",
        "burly / tough",
        "gritty / rugged",
        "cocky ",
        "brooding ",
        "sad",
        "exhausted",
        "(slightly) tired",
        "injured",
        "shy / timid",
        "explosive / over the top",
        "aloof / ditzy / himbo",
        "awkward / dweeb",
        "professional / corperate",
        "authoritative ",
        "informative / engaging",
        "intellectual / sophistocated",
        "luxurious / classy / elegant",
        "royal",
        "charismatic",
        "confident / reassuring",
        "authentic / friendly / natural",
        "deliberate stutter*",
        "deliberate lisp*",
        "country",
        "deadpan / monotone",
        "mysterious"
    ],
    'style2': [
        "attractive / flirty / sultry",
        "velvety / smooth ",
        "exaggerated ",
        "moody",
        "calm/calming/caring/warm ",
        "cool/easygoing",
        "comforting / endearing / nuturing",
        "concerned / ^emotional / sweet / sympathetic",
        "softspoken ",
        "angry / biting / ^stern",
        "annyoing / immature",
        "antagonistic ",
        "sarcasm / snarky / wry*",
        "condescneding / snobby / pompous",
        "conversatinal",
        "cynical ",
        "passive aggressive ",
        "intimidating",
        "spooky",
        "egotistical / proud ",
        "sketchy / sleazy",
        "heroic / brave",
        "inspirational / uplifting",
        "burly / tough",
        "gritty / rugged",
        "cocky ",
        "brooding ",
        "sad",
        "exhausted",
        "(slightly) tired",
        "injured",
        "shy / timid",
        "explosive / over the top",
        "aloof / ditzy / himbo",
        "awkward / dweeb",
        "professional / corperate",
        "authoritative ",
        "informative / engaging",
        "intellectual / sophistocated",
        "luxurious / classy / elegant",
        "royal",
        "charismatic",
        "confident / reassuring",
        "authentic / friendly / natural",
        "deliberate stutter*",
        "deliberate lisp*",
        "country",
        "deadpan / monotone",
        "mysterious"
    ],
    'mood-arr': [
        "Angry",
        "Sarcastic",
        "Annoyed",
        "Excited",
        "Nervous",
        "Confused",
        "Confident/Determined",
        "Flirty",
        "Sad / depressed",
        "Happy",
        "Terrified",
        "Disgusted",
        "Bored",
        "Proud/ inspirational",
        "Hopeful",
        "Jealous",
        "Melancholy / brooding",
        "Suspicious",
        "Playful / teasing",
        "Desperate",
        "Shy / sheepish",
        "Arrogant / Haughty",
        "Calm",
        "Despair",
        "Happy-go-lucky",
        "tired",
        "Inquisitive",
        "Mocking",
        "Insane (elated madness?)",
        "Distraught"
    ],
    'role-persona': [
        "action star",
        "alpha male / macho / tomboy",
        "announcer / presenter",
        "aristocrat / upper class",
        "aspiring artist",
        "athlete",
        "biker / bully / jerk ",
        "devil / villain / monster / misunderstood villain",
        "criminal/henchman/gangster/mobster",
        "boss / Business Man / executive",
        "buddy ",
        "carnival Barker / game show host",
        "clown",
        "coach",
        "cocky / jerk",
        "construction worker / farmer",
        "country music star",
        "cowboy / lone ranger",
        "hillbilly / trucker / *ruralite",
        "criminal / henchman / gangster / mobster",
        "demonstrator (like a protest)",
        "detective",
        "devil / monster / villain",
        "DJ (like a radio station host)",
        "Doctor/professor/mad scientist / scientist",
        "drill sergeant",
        "drunk",
        "dude / surfer dude",
        "hippie (hippy) / slacker / *pothead",
        "hipster?",
        "everyman / guy next door / real person / regular joe",
        "evil queen / evil royal*",
        "family man / husband",
        "flirt",
        "geek (silly)",
        "heckler",
        "hero / superhero",
        "hillbilly / prospector",
        "hip hop / inner-city slang?*",
        "hobbit / leprechaun",
        "Host/Interviewer",
        "instructor / teacher",
        "motivational speaker",
        "narrator / storyteller",
        "nerd / IT Guy",
        "newscaster / reporter ",
        "old",
        "phone operator / *radio operator",
        "pirate",
        "playful",
        "police officer",
        "politician",
        "preacher (voice roll hype) ",
        "priest (softspoken or reverent)",
        "robot ",
        "rock star / singer",
        "salesperson / spokesperson",
        "school boy",
        "snob",
        "soldier / fighter pilot / warrior",
        "southern gentleman / southern belle",
        "sportscaster",
        "student",
        "teacher's pet / suck up?", 
        "*sniveling / wormtongue?",
        "teenager",
        "therapist",
        "tourist",
        "tv host (talk show)",
        "wicked witch / hag  ",
        "wizard"
    ]
};

function randomizeDetail(detail) {
    const titles = masterDetailObj[detail];
    // select a random item from the array related to the title-leyword
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    document.getElementById(`${detail}`).innerText = randomTitle;
    updateAllDetails();
    enableSaveButton();
}

function randomizeAll() {
    for (const detail in masterDetailObj) {
        randomizeDetail(detail);
    }
}

// Function to enable the "Save String" button; needs to be above updateAllDetails
function enableSaveButton() {
    const saveButton = document.getElementById('save-button');
    saveButton.disabled = false;
}

function updateAllDetails() {
// tricky way to get the elment by the id, which is the same as the variable we're using to identify the detail
    const combinedTitles = Object.keys(masterDetailObj).map(detail => {

        const title = document.getElementById(`${detail}`).innerText || masterDetailObj[detail][0];
        console.log(`<span class="${detail}-span">${title}</span>`)
        return `<span class="${detail}-span">${title}</span>`;
    });
    // get the tail, which is the manual input string to add to the end
    const strTail = document.getElementById("string-tail").innerText;
    let outString = combinedTitles.join(', ')
// could also manually put something here to add, but we're doing it via HTML
    outString += (`<span class="string-tail-span">, ${strTail}</span>`)
    document.getElementById('output-string').innerHTML = outString;
    enableSaveButton();
}

function saveToLocalStorage(string) {
    let savedStrings = JSON.parse(localStorage.getItem('savedStrings')) || [];
    savedStrings.push(string);
    localStorage.setItem('savedStrings', JSON.stringify(savedStrings));
}

function saveString() {
    const currentString = document.getElementById('output-string').innerHTML;
    // Create a new list item
    const li = document.createElement('li');
    li.innerHTML = currentString + '<span class="delete-btn" onclick="deleteString(this)">x</span>';
    // Append the list item
    // document.getElementById('saved-strings').appendChild(li);
    var savedStrings = document.getElementById('saved-strings');
    savedStrings.insertBefore(li, savedStrings.firstChild);
    // Save to local storage without the delete button
    saveToLocalStorage(currentString);
    // Disable the save button
    document.getElementById('save-button').disabled = true;
}

function deleteString(deleteButton) {
    const li = deleteButton.parentElement;
    // Extract the full string including spans, before the delete button
    const fullStringToDelete = li.innerHTML.split('<span class="delete-btn"')[0].trim();
    li.remove(); // Remove from DOM, then local storage
    let savedStrings = JSON.parse(localStorage.getItem('savedStrings')) || [];
    savedStrings = savedStrings.filter(string => string.trim() !== fullStringToDelete.trim());
    localStorage.setItem('savedStrings', JSON.stringify(savedStrings));

    // Re-enable the save button
    document.getElementById('save-button').disabled = false;
}

window.onload = function() {
    const savedStrings = JSON.parse(localStorage.getItem('savedStrings')) || [];
    const savedStringsUl = document.getElementById('saved-strings');
    savedStrings.forEach(string => {
        const li = document.createElement('li');
        li.innerHTML = string + '<span class="delete-btn" onclick="deleteString(this)">x</span>';
        savedStringsUl.appendChild(li);
    });
};

function loadNavbar() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'navbarModule.html', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
        document.getElementById('navbarContainer').innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}
  
window.addEventListener('DOMContentLoaded', loadNavbar);