import React, { useState } from 'react';
import { BookOpen, Network, Wrench } from 'lucide-react';

const terms = [
  {
    id: '1a',
    label: '1A',
    subtitle: 'Foundation',
    icon: BookOpen,
    courses: [
      'Calculus 1',
      'Physics 1: Statics',
      'Introduction to Biomedical Design',
      'Communications in Biomedical Engineering - Visualization',
      'Digital Computation'
    ]
  },
  {
    id: '1b',
    label: '1B',
    subtitle: 'Systems',
    icon: Network,
    courses: [
      'Data Structures & Algorithms',
      'Calculus 2',
      'Matrices and Linear Systems',
      'Human Factors in the Design of Biomedical and Health Systems',
      'Chemistry Principles'
    ]
  },
  {
    id: '2a',
    label: '2A',
    subtitle: 'Applied Mechanics',
    icon: Wrench,
    courses: [
      'Calculus 3',
      'Physics 2: Dynamics',
      'Mechanics of Deformable Solids',
      'Deformable Solid Mechanics Lab',
      'Materials Science'
    ]
  }
];

function CourseTimeline() {
  const [activeTerm, setActiveTerm] = useState(null);

  return (
    <div className="course-timeline" aria-label="Coursework by academic term">
      <div className="timeline-track" aria-hidden="true" />
      {terms.map((term, index) => (
        <article
          className={`course-term ${activeTerm === term.id ? 'is-open' : ''}`}
          key={term.id}
          onMouseEnter={() => setActiveTerm(term.id)}
          onMouseLeave={() => setActiveTerm(null)}
        >
          {(() => {
            const TermIcon = term.icon;
            return <span className="term-icon" aria-hidden="true"><TermIcon size={18} strokeWidth={2.25} /></span>;
          })()}
          <button
            className="term-toggle"
            type="button"
            aria-expanded={activeTerm === term.id}
            onClick={() => setActiveTerm(activeTerm === term.id ? null : term.id)}
          >
            <span className="term-index">0{index + 1}</span>
            <span className="term-label">{term.label}</span>
            <span className="term-subtitle">{term.subtitle}</span>
          </button>
          <div className="course-term-popover">
            <p className="popover-kicker">Courses in {term.label}</p>
            <ul>
              {term.courses.map(course => <li key={course}>{course}</li>)}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}

export default CourseTimeline;