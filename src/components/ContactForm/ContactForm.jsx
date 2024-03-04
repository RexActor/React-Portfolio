function ContactForm(props) {
  return (
    <div className="container w-25 mt-4">
      <form>
        <div className="row mb-3">
          <label htmlFor="name" className="form-label col-md-3">
            Your Name:
          </label>
          <div className="col-md-5">
            <input
              value={props.name}
              onChange={props.handleInputChange}
              name="name"
              type="text"
              className="form-control"
              placeholder="Enter your Name"
              id="name"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="email" className="form-label col-md-3">
            Your Email:
          </label>
          <div className="col-md-5">
            <input
              value={props.email}
              onChange={props.handleInputChange}
              name="email"
              type="text"
              className="form-control"
              placeholder="Enter your email"
              id="email"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="message" className="form-label col-md-3">
            Your Message:
          </label>
          <div className="col-md-8">
            <textarea
              onChange={props.handleInputChange}
              value={props.message}
              name="message"
              type="text"
              className="form-control"
              placeholder="Enter your message"
              id="message"
            />
          </div>
        </div>
        <button
          onClick={props.handleFormSubmit}
          type="submit"
          className="btn btn-primary mt-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default ContactForm;
