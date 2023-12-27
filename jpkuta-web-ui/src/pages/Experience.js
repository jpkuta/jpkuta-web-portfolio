import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2011 - 2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Anoka High School, Anoka, Minnesota
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            St. Cloud State University, St.Cloud, Minnesota
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>
          

          <p> Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2019"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer - VSI LABS
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            St. Louis Park, MN
          </h4>
          <p>Implemented Robot Operating System nodes for sensor fusion in autonomous vehicles.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer - Emerson Automation Solutions
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Eden Prairie, MN
          </h4>
          <p>
            Automated System, Smoke, Performance, and Regression testing of production software using a combination of C# and Python.
            <br/>
            Orchestrated the developed and deployment (Docker) of Asset Vibration Analytics device simulator in .NET with websockets for efficient data transmission.
            
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;