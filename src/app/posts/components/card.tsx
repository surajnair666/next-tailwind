interface CardProps {
  children: React.ReactNode;
}
const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="rounded-lg h-auto w-48 border border-white shadow-md flex justify-center items-center bg-cyan-800 m-4 p-2">
      {children}
    </div>
  );
};

export default Card;
