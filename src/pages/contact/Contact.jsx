import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div class="container glass" id="contact-me">
        <form id="my-form" action="https://formspree.io/f/xqkokazz"
        method="POST">
            <h2>Contact Me</h2>
        <div class="row100">
            <div class="col">
                <div class="inputBox">
                    <input type="text" id="firstName" name="firstName" required="required"></input>
                    <span class="text">First Name</span>
                    <span class="line"></span>
                </div>
            </div>
            <div class="col">
                <div class="inputBox">
                    <input type="text" id="lastName" name="lastName" required="required"></input>
                    <span class="text">Last Name</span>
                    <span class="line"></span>
                </div>
            </div>
            <div class="col">
                <div class="inputBox">
                    <input type="text" id="email" name="email" required="required"></input>
                    <span class="text">Email</span>
                    <span class="line"></span>
                </div>
            </div>
            <div class="col">
                <div class="inputBox">
                    <input type="text" id="mobile" name="mobile" required="required"></input>
                    <span class="text">Mobile</span>
                    <span class="line"></span>
                </div>
            </div>
            <div class="col">
                <div class="inputBox">
                    <textarea class="textarea" id="message" name="message" required="required"></textarea>
                    <span class="text">Type your message here...</span>
                    <span class="line"></span>
                </div>
            </div>
            <div class="row100">
                <div class="col">
                    <input id="my-form-button" type="submit" value="send"></input>
                </div>
            </div>
            <p id="my-form-status"></p>
        </div>
        </form>
    </div>
  )
}

export default Contact
