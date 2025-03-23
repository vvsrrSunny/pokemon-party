type AnimationBoxProps = {
  boxLocation: string;
};

const AnimationBox: React.FC<AnimationBoxProps> = ({ boxLocation }) => {
  return (
    <div
      className={`group-hover:animate-scale absolute ${boxLocation} h-6 w-6 border-white opacity-0 group-hover:opacity-100 group-hover:duration-300`}
    ></div>
  );
};

export default AnimationBox;
