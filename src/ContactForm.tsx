import React from "react";

const ContactForm = () => {
    const handleSubmit = (event: React.MouseEvent): void => {
        event.preventDefault();
    };

    return (
        <form className="row g-3 mt-3">
            <div className="col-md-6">
                <label htmlFor="nameInput" className="form-label">
                    Your Name
                </label>
                <input type="text" className="form-control" id="nameInput" placeholder="John Doe" />
            </div>
            <div className="col-md-6">
                <label htmlFor="nameInput" className="form-label">
                    Email
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="emailInput"
                    placeholder="john.doe@gmail.com"
                />
            </div>
            <div className="col-12">
                <label htmlFor="messageInput" className="form-label">
                    Example textarea
                </label>
                <textarea className="form-control" id="messageInput" rows={5}></textarea>
            </div>
            <div className="col-12">
                <button
                    className="btn btn-primary float-end"
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
