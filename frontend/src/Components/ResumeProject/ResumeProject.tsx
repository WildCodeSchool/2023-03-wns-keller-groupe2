import "./resumeProject.scss"

import React from 'react';

interface ResumeProjectProps {
  title: string;
  description: string;
}

const ResumeProject: React.FC<ResumeProjectProps> = ({
  title,
  description
}) => {
  return (
    <div>
      <h1>{title}</h1>
      "qui sommes nous"
      <h2>{description}</h2>
      "le projet"
      <h1>{title}</h1>
      "qui sommes nous"
      <h2>{description}</h2>
      "le projet"
      <h1>{title}</h1>
      "qui sommes nous"
      <h2>{description}</h2>
      "le projet"
      <h1>{title}</h1>
      "qui sommes nous"
      <h2>{description}</h2>
      "le projet"
      <h1>{title}</h1>
      "qui sommes nous"
      <h2>{description}</h2>
      "le projet"<h1>{title}</h1>
      "qui sommes nous"
      <h2>{description}</h2>
      "le projet"<h1>{title}</h1>
      "qui sommes nous"
      <h2>{description}</h2>
      "le projet"
    </div>
  );
};

export default ResumeProject;
