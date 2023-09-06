import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';


function Education() {
  return (
    <div className="education">
      <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            IIEST, Shibpur
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Howrah, West Bengal
          </h4>
          <p>B.Tech. Department of Electronics and Telecommunication Engineering. CGPA: 8.31</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Narayana Junior College
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Hyderabad, Telangana</h4>
          <p>Senior Secondary Education. Percentage: 98%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Narayana High School
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Hyderabad, Telangana</h4>
          <p>Secondary Education. CGPA: 9.80</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Education;