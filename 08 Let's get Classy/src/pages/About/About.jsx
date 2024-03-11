import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <h2>Welcome To TasteBit Express</h2>
      <p>This is functional component</p>
      <User name="Vishesh" />
      <br />
      <br />
      <p>This is Class Based component </p>
      <UserClass name="Vishesh" />
    </div>
  );
};

export default About;
