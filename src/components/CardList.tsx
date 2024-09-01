import React from 'react';
import Card from './Card';

const cardData = [
  {
    category: 'World',
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    thumbnail: 'Thumbnail',
    linkText: 'Continue reading',
    categoryColor: 'blue',
  },
  {
    category: 'Design',
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    thumbnail: 'Thumbnail',
    linkText: 'Continue reading',
    categoryColor: 'green',
  },
];

const CardList: React.FC = () => {
  return (
    <div className="flex flex-col  md:flex-row md:space-x-4 md:space-y-0 sm:space-y-4 container mx-auto">
      {cardData.map((data, index) => (
        <Card key={index} {...data} />
      ))}
    </div>
  );
};

export default CardList;
