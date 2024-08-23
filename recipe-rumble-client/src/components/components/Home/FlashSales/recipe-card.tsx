import * as React from "react";

interface RecipeCardProps {
  percent: string;
  image: string;
  imageAlt: string;
  name: string;
  ingredients: string;
  time: string;
  rating: string;
  vote: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ percent, image, imageAlt, name, ingredients, time, rating, vote }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <img src={image} alt={imageAlt} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-orange-600">{name}</h3>
        <p className="text-gray-600">{ingredients}</p>
        <p className="text-gray-600">Time: {time}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-orange-600">{rating} stars</span>
          <span className="text-gray-600">{vote} votes</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;