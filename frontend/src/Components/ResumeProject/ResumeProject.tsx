import "./resumeProject.scss";
import logo from "../../assets/Logo.png";
import React from "react";

interface ResumeProjectProps {
  title: string;
  description: string;
}

const ResumeProject: React.FC<ResumeProjectProps> = ({
  title,
  description,
}) => {
  return (
    <div className="resumeProject">
      <img
        src={logo}
        alt="logoResumeProject"
        className="logoResumeProject"
      ></img>
      <div className="textResume1">
        <h1 className="titleResume">{title}</h1>
        Rent Bike
        <h2 className="descriptionResume">{description}</h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
        tristique, mauris eget iaculis scelerisque, diam libero bibendum sem,
        quis blandit felis mauris nec nisi. Vivamus a lorem sit amet turpis
        sollicitudin sagittis ut sit amet diam. Sed lectus magna, ultricies et
        semper at, hendrerit non massa. Vestibulum non maximus lectus, at
        blandit justo. Vestibulum nulla leo, lobortis a sem ultrices, auctor
        mollis nulla. Nam interdum quam ac tempor porta. Sed sit amet ornare
        purus, id mattis lectus. Mauris sed suscipit nisl. Nullam eu mi
        molestie, tincidunt lectus sed, placerat eros. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Etiam tristique, mauris eget iaculis
        scelerisque, diam libero bibendum sem, quis blandit felis mauris nec
        nisi. Vivamus a lorem sit amet turpis sollicitudin sagittis ut sit amet
        diam. Sed lectus magna, ultricies et semper at, hendrerit non massa.
        Vestibulum non maximus lectus, at blandit justo. Vestibulum nulla leo,
        lobortis a sem ultrices, auctor mollis nulla. Nam interdum quam ac
        tempor porta. Sed sit amet ornare purus, id mattis lectus. Mauris sed
        suscipit nisl. Nullam eu mi molestie, tincidunt lectus sed, placerat
        molestie, tincidunt lectus sed, placerat eros. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Etiam tristique, mauris eget iaculis
        scelerisque, diam libero bibendum sem, quis blandit felis mauris nec
        nisi. Vivamus a lorem sit amet turpis sollicitudin sagittis ut sit amet
        diam. Sed lectus magna, ultricies et semper at, hendrerit non massa.
        Vestibulum non maximus lectus, at blandit justo. Vestibulum nulla leo,
        lobortis a sem ultrices, auctor mollis nulla. Nam interdum quam ac
        tempor porta. Sed sit amet ornare purus, id mattis lectus. Mauris sed
        suscipit nisl. Nullam eu mi molestie, tincidunt lectus sed, placerat
        eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit..Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique,
        mauris eget iaculis scelerisque, diam libero bibendum sem, quis blandit
        felis mauris nec nisi. Vivamus a lorem sit amet turpis sollicitudin
        sagittis ut sit amet diam. Sed lectus magna, ultricies et semper at,
        hendrerit non massa. Vestibulum non maximus lectus, at blandit justo.
      </div>
    </div>
  );
};

export default ResumeProject;
