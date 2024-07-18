import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { WORKOUTS } from "../utils/swoldier";
import { SCHEMES } from "../utils/swoldier";

function Header(props) {
  const { index, title, description } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        {/* index 01 */}
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
          {index}
        </p>
        {/* Pick your poison */}
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      {/* Select the workout you wish to enjoy */}
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
}

const Generator = () => {
  const [showModal, setShowModal] = useState(false);
  const [poison, setPoison] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState("strength_power");

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <SectionWrapper
      header={"generate your workout"}
      title={["It's", "Huge", "o'clock"]}
    >
      <Header
        // 01 - Pick your poison
        index={"01"}
        title={"Pick your poison"}
        description={"Select the workout you wish to endure"}
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              onClick={() => {
                setPoison(type);
              }}
              className={
                "bg-slate-950 border duration-200 hover:border-blue-600 py-3 rounded-lg" +
                (type === poison ? " border-blue-600" : " border-blue-400")
              }
              key={typeIndex}
            >
              <p className="capitalize">{type.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>

      {/* 02 - Lock on targets */}
      <Header
        index={"02"}
        title={"Lock on targets"}
        description={"Select the muscles judged for annihilation."}
      />

      <div className="bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col">
        {/* Select muscle groups button */}
        <button
          onClick={toggleModal}
          className="relative p-3 flex items-center justify-center"
        >
          <p>Select muscle groups</p>
          <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
        </button>
        {/* JS condition */}
        {showModal && <div>modal</div>}
      </div>

      {/* 03 - Become Juggernaut */}
      <Header
        index={"03"}
        title={"Become Juggernaut"}
        description={"Select your ultimate objective."}
      />

      <div className="grid grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((scheme, SchemeIndex) => {
          return (
            <button
              onClick={() => {
                setGoal(scheme);
              }}
              className={
                "bg-slate-950 border duration-200 hover:border-blue-600 py-3 rounded-lg" +
                (scheme === goal ? " border-blue-600" : " border-blue-400")
              }
              key={SchemeIndex}
            >
              <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Generator;
