import React from "react";
import './Bonas.css'

const Bonas = () => {
  return (
    <div className="mm">
      <div className="bonas-div">
        <h4 className="h4">1. How does react work</h4>
        <p className="p">
          React uses a declarative paradigm that makes it easier to reason about
          your application and aims to be both efficient and flexible. It
          designs simple views for each state in your application, and React
          will efficiently update and render just the right component when your
          data changes.
        </p>
      </div>
      <div className="bonas-div">
        <h4 className="h4">2. Difference between props and state</h4>
        <p className="p">
          Simply put, State is the local state of the component which cannot be
          accessed and modified outside of the component. It's equivalent to
          local variables in a function. Props, on the other hand, make
          components reusable by giving components the ability to receive data
          from their parent component in the form of props.
        </p>
      </div>
      <div className="bonas-div">
        <h4 className="h4">3.The useeffect api is used for other purposes than data lode</h4>
        <p className="p">
          useEffect runs on every render. That means that when the count
          changes, a render happens, which then triggers another effect. This is
          not what we want. There are several ways to control when side effects
          run. We should always include the second parameter which accepts an
          array. We can optionally pass dependencies to useEffect in this array.
        </p>
      </div>
    </div>
  );
};

export default Bonas;
