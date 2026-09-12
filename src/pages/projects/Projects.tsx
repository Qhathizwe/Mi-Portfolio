import React from 'react';
import { projectsData } from '../../data/PortfolioData';
import { ProjectCard } from '../../components/project-card/ProjectCard';

export const Projects: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '60px 24px'
  };

  const headerStyle: React.CSSProperties = {
    marginBottom: '40px'
  };

  const titleStyle: React.CSSProperties = {
    fontFamily: "'Playfair Display', serif",
    fontSize: '2.5rem',
    marginBottom: '8px'
  };

  const textStyle: React.CSSProperties = {
    color: '#666666',
    fontSize: '0.95rem'
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '24px'
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h2 style={titleStyle}>My Applications</h2>
        <p style={textStyle}>A structured showcase of my frontend codebases, logic APIs, and repositories.</p>
      </div>
      <div style={gridStyle}>
        {projectsData.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  );
};
