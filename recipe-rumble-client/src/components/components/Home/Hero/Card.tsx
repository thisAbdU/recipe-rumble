import Image, { StaticImageData } from 'next/image';

interface CardProps {
  icon: StaticImageData | string; // Allow both StaticImageData and string for flexibility
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md text-primary">
    <div className="mb-4">
      <Image src={icon} alt="card image" />
    </div>
    <h3 className="text-lg font-bold">{title}</h3>
    <p className="text-md px-4">{description}</p>
  </div>
);

export default Card;