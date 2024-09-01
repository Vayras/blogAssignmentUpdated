import React from 'react';

interface CardProps {
  category: string;
  title: string;
  date: string;
  description: string;
  thumbnail: string;
  linkText: string;
  categoryColor: string;
}

const Card: React.FC<CardProps> = ({
  category,
  title,
  date,
  description,
  thumbnail,
  linkText,
  categoryColor,
}) => {
  return (
    <div className="flex border overflow-hidden w-full">
      <div className="p-4 flex-1">
        <h5 className={`text-${categoryColor}-500 text-sm font-semibold`}>
          {category}
        </h5>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-gray-500">{date}</p>
        <p className="text-gray-700 mt-2">{description}</p>
        <a href="#" className="text-blue-500 mt-4 inline-block">
          {linkText}
        </a>
      </div>
      <div className="bg-gray-600 text-white flex items-center justify-center w-48">
        {thumbnail}
      </div>
    </div>
  );
};

export default Card;
