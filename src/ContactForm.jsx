import React from "react";

const ContactForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form class="row g-3 mt-3">
            <div class="col-md-6">
                <label for="nameInput" class="form-label">
                    Your Name
                </label>
                <input type="text" class="form-control" id="nameInput" placeholder="John Doe" />
            </div>
            <div class="col-md-6">
                <label for="nameInput" class="form-label">
                    Email
                </label>
                <input
                    type="text"
                    class="form-control"
                    id="emailInput"
                    placeholder="john.doe@gmail.com"
                />
            </div>
            <div class="col-12">
                <label for="messageInput" class="form-label">
                    Example textarea
                </label>
                <textarea class="form-control" id="messageInput" rows="5"></textarea>
            </div>
            <div class="col-12">
                <button
                    class="btn btn-primary float-end"
                    type="submit"
                    id="submit"
                    onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
