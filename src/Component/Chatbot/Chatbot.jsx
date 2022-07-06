import React, { useState } from 'react'
import './Chatbot.css'


function Chatbot() { 
    const [toggle ,setToggle]=useState(false);

    function handleToggle(){
        setToggle(toggle=>!toggle)
    console.log(toggle)
    }

  return (
    <div>
        <div class="container">
    <div className="chatbox" >
        <div className={`chatbox__support  ${toggle ? "chatbox--active" : ""}`}> 

            <div class="chatbox__header">
                <div class="chatbox__image--header">
                    <img src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png" alt="image"/>
                </div>
                <div class="chatbox__content--header">
                    <h4 class="chatbox__heading--header">lorem ipsum</h4>
                    <p class="chatbox__description--header">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, veniam.</p>
                </div>
            </div>
            <div class="chatbox__messages">
                <div></div>
            </div>
            <div class="chatbox__footer">
                <input type="text" placeholder="Write a message..."/>
                <button class="chatbox__send--footer send__button">Send</button>
            </div>
        </div>
        <div class="chatbox__button">
            <button onClick={handleToggle}><img src="./images/chatbox-icon.svg" ></img></button>
        </div>
    </div>
</div>
    </div>
  )
}

export default Chatbot