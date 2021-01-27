import React from 'react';
import QuizBackground from '../src/components/QuizBackground';
import db from '../db.json';

export default function QuizPage() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <div style={{
        position: 'absolute',
        top: '50%',
        width: '100%',
        transform: 'translateY(-50%)',
        color: '#eeee11',
        fontSize: '80px',
        textAlign: 'center',
      }}
      >
        Em construção, aguarde h3h3
      </div>
    </QuizBackground>
  );
}
