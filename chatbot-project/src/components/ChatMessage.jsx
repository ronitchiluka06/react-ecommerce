import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/profile-1.jpg';
import './ChatMessage.css';
import dayjs from 'dayjs';

export function ChatMessage({message,sender}){ // shortcut for below lines
    //const message =props.message;
    //const sender = props.sender;

    //const { message , sender } = props;    shortcut

    /* if(sender === 'robot'){
        return(
            <div>
                <img src="user.png" width="50" />
                {message}
            </div>
        );
    }
    
    shortcut below */
  

    //here AND works as an if statement if sender = to robot then it will put on the robot image next to it 
    const time = dayjs().valueOf();
    const chatTime = dayjs(time).format('h:mma');
    console.log(chatTime);

    return (
        <div className ={
                sender === 'user' 
                    ? 'chat-message-user' 
                    : 'chat-message-robot'
            }>
            {sender === 'robot' && <img src={RobotProfileImage} className="chat-message-profile" />} 
            <div className= "chat-message-text"> 
                {message}
                <div className="chat-message-time">{chatTime}</div>
            </div>
            {sender ==='user' && <img src={UserProfileImage} className="chat-message-profile" />}
        </div>
    );
}