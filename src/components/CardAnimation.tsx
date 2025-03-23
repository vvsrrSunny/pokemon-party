import AnimationBox from './AnimationBox';

const CardAnimation: React.FC = () => {
  return (
    <>
      {/* Top-Left Corner */}
      <AnimationBox boxLocation="-top-2 -left-2 border-t-6 border-l-6" />

      {/* Top-Right Corner */}
      <AnimationBox boxLocation="-top-2 -right-2 border-t-6 border-r-6" />

      {/* Bottom-Left Corner */}
      <AnimationBox boxLocation="-bottom-2 -left-2 border-b-6 border-l-6" />

      {/* Bottom-Right Corner */}
      <AnimationBox boxLocation="-right-2 -bottom-2 border-r-6 border-b-6" />
    </>
  );
};

export default CardAnimation;
