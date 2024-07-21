const Button = ({ text }: { text: string }) => {
  return <button className="text-white bg-black py-2 px-3 rounded-lg cursor-pointer">{text}</button>;
};

export default Button;
