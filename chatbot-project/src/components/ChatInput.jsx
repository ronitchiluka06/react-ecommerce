import { useState } from 'react'
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';


export function ChatInput({chatMessages,setChatMessages}){

    const [inputText , setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function saveInputText(event){
        setInputText(event.target.value);  // event.target gives us the html element like <input> and the .value give the value inside that element
    }

    async function sendMessage(){
        if (isLoading || inputText === '') {
            return;
        }

        // Set isLoading to true at the start, and set it to
        // false after everything is done.
        setIsLoading(true);
        const newChatMessages = [
            ...chatMessages,       // (...   <--- this is spread operator, it takes the value in an array and copies them into a new array  )
            {
                message: inputText,
                sender: 'user',
                id: crypto.randomUUID()
            }
        ]

        setChatMessages(newChatMessages);

        const response= await Chatbot.getResponseAsync(inputText);
        setChatMessages([
            ...newChatMessages,       // (...   <--- this is spread operator, it takes the value in an array and copies them into a new array  )
            {
                message: response,
                sender: 'robot',
                id: crypto.randomUUID()
            }
        ]);

        setInputText('');

        setIsLoading(false);
    }

    function enterKey(event){
        if(event.key === 'Enter'){
            sendMessage();
        }
        else if(event.key === 'Escape'){
            setInputText('');
        }
    }



    return (
        <div className="chat-input-container">
            <input 
                placeholder="Send a message to ChatBot" 
                size="30" 
                onChange={saveInputText}                      // onChange runs a function when we change the text inside an <input>   it will also give one parameter 
                value={inputText}                              // value - lets us change the text inside this <input>
                onKeyDown={enterKey}
                className ="chat-Input"
            />
                                                      
            <button
                onClick={sendMessage}
                className="send-button"
            >Send</button>
        </div>
    );
}