import { useState, useEffect } from 'react'
import { Chatbot } from 'supersimpledev';
import {ChatInput} from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css'


function App(){
    const [chatMessages, setChatMessages] = useState([{
        message: 'hello chatbot',
        sender: 'user',
        id: 'id1',
    },{
        message: 'Hello! How can I help you?',
        sender: 'robot',
        id: 'id2',
    },{
        message: 'tell me todays date',
        sender: 'user',
        id: 'id3',
    },{
        message: 'Today is June 10',
        sender: 'robot',
        id:'id4',
    }]);
    //const [chatMessages, setChatMessages] = array;   shortcut of above line
    //const setChatMessages = array[1];  shortcut called array destructuring

    useEffect(() => {
        Chatbot.addResponses({
        'goodbye': 'Goodbye. Have a great day!',
        'give me a unique id': function() {
            return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
        }
        });

    // [] tells useEffect to only run once. We only want to run
    // this setup code once because we only want to add these
    // extra responses once.
    }, []);
    
    return (      
        <div className="app-container">
            
            <ChatMessages 
                chatMessages = {chatMessages}
            />
            <ChatInput 
                chatMessages = {chatMessages}
                setChatMessages = {setChatMessages}
            />
            
        </div>
    );
}
export default App
