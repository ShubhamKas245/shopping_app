import React from "react";
import { CounterContext } from "../../context/CounterContext";

const Home = () => {
  return (
    <div className="px-3">
      <h1>Home Page</h1>
      <CounterContext.Consumer>
        {(data) => (
          <div>
            <p>{data.counter}</p>
            <button
              type="button"
              onClick={() => {
                data.setCounter((val) => val + 1);
              }}
            >
              Increment
            </button>
          </div>
        )}
      </CounterContext.Consumer>
    </div>
  );
};

export default Home;
