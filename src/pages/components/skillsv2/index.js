import SectionWrapper from "../sectionWrapper";
import Heading from "../heading/heading";

import Gauage from "../gauge/gauge";
import Subheading from "../subheading/subheading";
import Divider from "../divider/divider";

import { useState } from "react";

const GauageBar = ({ title, meter }) => {
  return (
    <div className="w-full h-auto mt-2">
      <div className="h-4 text-sm text-white">{title}</div>
      <div className="mt-2.5 w-full h-2 text-white">
        <Gauage percent={meter} />
      </div>
    </div>
  );
};

const Skills = ({ hoverAction, animationFlag }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <SectionWrapper hoverAction={hoverAction}>
      <Heading>Technical Skills</Heading>
      <div className="w-full flex flex-col sm:flex-row md:flex-col lg:flex-col xl:flex-row">
        <div className="w-full">
          <div className="w-full">
            <Subheading>Basic (Languages, Styling and Databases):</Subheading>
            <div className="text-sm sm:text-base">
              Python, Javascript, Typescript, NodeJS, Go lang, HTML, CSS, SCSS,
              Java, C, C++, MySQL, NoSQL
            </div>
          </div>
          <Divider />
          <div className="w-full">
            <Subheading>
              Advance (Frameworks, Platforms, Cloud, and Other Technologies):
            </Subheading>
            <div className="text-sm sm:text-base">
              ReactJS, AngularJS, MeteorJS, VueJS, DynamoDB, AWS, Serverless,
              Terraform, Postgres, Redis, OpenCV, Linux, MongoDB, NativeScript,
              DialogFlow, Postman, Cypress
            </div>
          </div>
          <Divider />
        </div>
        <div className="w-full px-0 sm:px-2 sm:mt-2">
          <div className="py-4 px-10" style={{ backgroundColor: "#222" }}>
            <div className="text-white my-2">
              <div className="text-base">Language Mastery Chart</div>
              <div className="text-xs">
                Rating myself in each programming languages
              </div>
            </div>
            <div className="w-full text-white my-4">
              <GauageBar title="Python (5yrs Exp)" meter="85%" />
              <GauageBar title="Javascript (4yrs Exp)" meter="75%" />
              <GauageBar title="NodeJS (4yrs Exp)" meter="75%" />
              <GauageBar title="Go lang (2yrs Exp)" meter="60%" />
              <GauageBar title="HTML (5yrs Exp)" meter="70%" />
              <GauageBar title="CSS (5yrs Exp)" meter="60%" />
              <GauageBar title="Java (2yrs Exp)" meter="40%" />
              <GauageBar title="C (1yr Exp)" meter="30%" />
              <GauageBar title="C++ (1yr Exp)" meter="20%" />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
