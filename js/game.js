//This code was heavily influenced by Web Dev Simplified
//Author : Web Dev Simplified
//Date: 09 of June 2019
//available at: https://github.com/WebDevSimplified/JavaScript-Text-Adventure

//Defines variables to be substituted by the "text" and "option-buttons" set in the "index.html"
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

//Variable to keep track of the iteasm the character has or not. 
let state = {}

//Function to start the game
function startGame() {
state = {}

//Shows the very first text with id:1.
showTextNode(1)
}


//Function to display the text depending on the option selected.
function showTextNode(textNodeIndex) {
  //Shows to current text node by id.
const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
textElement.innerText = textNode.text
//While loop to remove options from the screen.
while (optionButtonsElement.firstChild) {
optionButtonsElement.removeChild(optionButtonsElement.firstChild)
}
//For loop that iterates through the optins and display only the ones that should be visible to the player.
textNode.options.forEach(option => {
if (showOption(option))
//Creates a button.
{
  const button = document.createElement('button')
  button.innerText = option.text
  //Sets the text inside the button.
  button.classList.add('btn')
  //Event listener to pass the option playr has currently selected.
  button.addEventListener('click', () => selectOption(option))
  //Adds the button to the displayed options.
  optionButtonsElement.appendChild(button)
}
})
}

function showOption(option)
//Checks if there is a required state object. If false, returns True or current state true, returns the option.
{
return option.requiredState == null || option.requiredState(state)
}


//Function to select the options deisplayed on screen depending on the players choice using the text id.
function selectOption(option) {
const nextTextNodeId = option.nextText
//Checks if the next text id is -1 or less, restarts the game from the beggining showing the first text id.
if (nextTextNodeId <= 0) {
return startGame()
}
state = Object.assign(state, option.setState)
showTextNode(nextTextNodeId)
}

//Set of vriables that contain the objects containing the text and options the player is offered.
const textNodes = [
{
id: 1,
//Text displayed in the main container.
text: 'You wake up in a dark room. All you can see is a windows and a brick laying on the floor next to your bed.',
options: [
  {
    //Text displayed in the option button.
    text: 'Take the brick',

    //Sets the state of the object depending if player chooses to take or not.
    setState: { brick: true },
    //Displayes the next text using id. 
    nextText: 2
    
  },
  {
    text: 'Leave the brick',
    
    
    nextText: 2
  }
]
},
{
id: 2,
text: 'You need to get out. There is a windows across the room and a door to the adjascent wall.',
options: [
  {
    text: 'Throw the brick to brake the glass and escape through the windows',
    //Display the option only if the state has been set to true. If false, does not display the option.
    requiredState: (currentState) => currentState.brick,
    
    nextText: 4
  },
  {
    text: 'Use the brick to smash the door knob.',
    requiredState: (currentState) => currentState.brick,
    nextText: 4
  },
  
  {
    text: 'Try opening the door.',
    nextText: 3
  },
  {
    text: 'Try opening the window.',
    nextText: 3
  },

]
},
{
id: 3,
text: 'It\'s locked. You remember you have a key torch on your key fob.',
options: [
  {
    text: 'Use the torch to light up the room.',
    nextText: 6
  },
  {
    text: 'Smash the door knob with the brick to open it.',
    requiredState:(currentState) => currentState.brick,
    nextText: 5
  },
  
]
},
{
id: 4,
text: 'You jump through the windows but it\'s too high. You fall and die.',
options: [
  {
    text: 'Restart',
    nextText: -1
  }
]
},
{
id: 5,
text: 'The guard hears the noise and captures you and puts you in the basement. No escape from there.',
options: [
  {
    text: 'Restart',

    // -1 Used to indicate that the game is restarted. 
    nextText: -1
  }
]
},
{
id: 6,
text: 'You see an airconditioning shaft hidden behind your bed.',
options: [
  {
    text: 'Kick the cover so you can go through the shaft.',
    nextText: 5
  },
  {
    text: 'Use the brick to smash the cover.',
    requiredState:(currentState) => currentState.brick,
    nextText: 5
  },
  {
    text: 'Use your keys to unscrew the screws.',
    nextText: 7
  }
]
},
{
id: 7,
text: 'The shaft leads you to the hallway. There is a staircase going down that leads to the main entrance of the building, but the guard is blocking it. There is another door to the right of the staircase.',
options: [
  {
    text: 'Try to run pass the guard and escape through the main entrance.',
    nextText: 8
  },
  {
    text: 'Attack the guard with the brick.',
    requiredState: (currentState) => currentState.brick,
    nextText: 9
  },
  {
    text: 'Go to the door on your right.',
    
    nextText: 10
  },
  {
    text: 'Throw the brick to distrackt the guard.',
    requiredState: (currentState) => currentState.brick,
    nextText: 11
  }
]

},
{
id: 8,
text: 'The guards hear you runing, captures you and puts you in the basement. No escape from there.',
options: [
  {
    text: 'Restart',
    nextText: -1
  }
]
},
{
id: 9,
text: 'You throw the brick but the guard is too big and it does not hurt him. He captures you and puts you in the basement. No escape from there.',
options: [
  {
    text: 'Restart',
    nextText: -1
  }
]
},
{
id: 10,
text: 'You open the door but there are 3 guards playing poker. They capture you and put you in the basement. No escape from there.',
options: [
  {
    text: 'Restart',
    nextText: -1
  }
]
},
{
id: 11,
text: 'The guard hears the noise and goes to investigate.',
options: [
  {
    text: 'Go down the stairs.',
    nextText: 13
  }
]
},
{
  id: 12,
  text: 'The guard hears the noise and goes to investigate.',
  options: [
    {
      text: 'Go down the stairs.',
      nextText: 12
    }
  ]
},
{
  id: 13,
  text: 'You reach the main entrance undetected. There is a windows to your left that is open.',
  options: [
    {
      text: 'Open the main entrance and run.',
      nextText: 14
    },
    {
      text: 'Jump out the window on to the garden.',
      nextText: 15
    }
  ]
},
{
  id: 14,
  text: 'You open the door and you see a car driving by. You run towards it to get help but the gards heare you screeming and relese the dogs. They devour you and you die. ',
  options: [
    {
      text: 'Restart',
      nextText: -1
    }
  ]  
},
{
  id: 15,
  text: 'You are in te garden behind the house. You hear a near by car driving and run towards it for help. You reach the car and escape.',
  options: [
    {
      text: 'Congratulations. You escaped!',
      nextText: -1
  
    }
  ]
}
]


//Starts the game as soon as the page is loaded.
startGame()

