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
      
      <p>{description}</p>
      
    </div>
  );
};

export default ResumeProject;
