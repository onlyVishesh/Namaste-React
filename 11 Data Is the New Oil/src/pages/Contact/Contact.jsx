import contactImage from "../../assets/images/contact.svg";
import BasicForm from "./BasicForm";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-left">
        <h2>Lets talk about everything!</h2>
        <p>
          Hate forms? Send us an {""}
          <a href="mailto:visheshmaurya14@gmail.com">Email</a> instead.
        </p>
        <img src={contactImage} alt="contact us" />
      </div>
      <div className="contact-right">
        <BasicForm />
      </div>
    </div>
  );
};

export default Contact;
