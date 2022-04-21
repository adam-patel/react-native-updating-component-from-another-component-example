##How To Update a React Native Component From Another Independent React Native Component

This was an exercise in creating a component that can update data in another component. It demonstrates how to use the State hook in order to do this.

In this project, we have three components:

ButtonComponent, SecondButton and Text Component. The objective is to get the text in TextComponent to be changed by tapping either of the buttons. The text starts out as the string 'default text' and then changes when the user taps either of the buttons.

This is achieved by having an independent function fire when either button is tapped. Because the function is independent, and the actual text string that the text changes to comes from the button that is tapped, rather than the function that is fired, we can just as easily have 100 different buttons and the same code will apply.

I thought I'd create this page for my own reference and also because figuring out how to do this took days. Perhaps I can save others some time.

#Using State

We need to use the State hook in order to essentially save some data into the app's memory. We declare state at the top of the App component as follows:

const [text, setText] = useState('')

Declaring state involves stating the variable whose state we want to change, the function that can be fired to change it, and the initial state.

const [variable, functionToChangeVariable] = useState('initial state')

Because we've declared it at the top of the App component, it can be made accessible to every other component.

#Updating State

To update state, we simply fire the changeText function. This function simply sets state. It is declared as an arrow function loaded inside a constant, because otherwise, react native will raise errors when you try and pass it to other components.

const changeText = ({ newtext }) => {
  setText(newtext)
}

The important thing here is that the text we're changing to, is not present inside the function. It is a string passed from the button to the function. This is why it can be used for any number of buttons. And, as you can see, it simply sets a new state of text, to whatever newtext is.

#How To Code The String Into The Button

To code the string into the button itself, we need to use onPress.

onPress={() => {changeText({ newtext: "the new string" })}}

This line fires the changeText function - which fires the setText function - which updates the state of the text variable.

So why not just fire setText directly from the onPress command?

You can't. You'll get an error that says "can't find setText", and if you try and pass setText into the component, react-native won't let you.

#To avoid any time wasting, view the full code in conjunction with this write-up. The code works. I have not proof read this write-up so there may be errors.
