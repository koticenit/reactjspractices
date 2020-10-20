import React from 'react';

const names = ['James', 'John', 'Paul', 'Ringo', 'George'];

const dogs = [
  {
    id: 'dog-1',
    name: 'Poodle',
    temperament: [
      'Intelligent',
      'Active',
      'Alert',
      'Faithful',
      'Trainable',
      'Instinctual',
    ],
  },
  {
    id: 'dog-2',
    name: 'Bernese Mountain Dog',
    temperament: ['Affectionate', 'Intelligent', 'Loyal', 'Faithful'],
  },
  {
    id: 'dog-3',
    name: 'Labrador Retriever',
    temperament: [
      'Intelligent',
      'Even Tempered',
      'Kind',
      'Agile',
      'Outgoing',
      'Trusting',
      'Gentle',
    ],
  },
]

function Arraymethods() {
  return (
    
    <div>
      <div>
      <h1>Using Filter, includes and map functions</h1>
    </div>
      {dogs.filter(dog => dog.temperament.includes('Faithful')).map(dog => (
        <li>
          {dog.temperament}
        </li>
      ))}
      {dogs.some(dog => dog.temperament.includes('Aggressive'))}
      {dogs.some(dog => dog.temperament.includes('Aggressive'))}

      <div>
      <h1>Using Reduce function</h1>
    </div>

      {dogs.reduce((allTemperaments, dog) => {
        return [...allTemperaments, ...dog.temperament,',']
      }, [])}
    </div>
  );
}



export default Arraymethods;