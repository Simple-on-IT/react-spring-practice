import { useSprings, animated } from '@react-spring/web';

const UseSpringsExample = () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];
  const springs = useSprings(
    items.length,
    items.map((_, i) => ({
      from: { opacity: 0, transform: 'translateX(-100px)' },
      to: { opacity: 1, transform: 'translateX(0)' },
      delay: i * 100, // Задержка для каждого элемента
    }))
  );

  return (
    <div>
      {springs.map((style, index) => (
        <animated.div key={index} style={style}>
          {items[index]}
        </animated.div>
      ))}
    </div>
  );
};

export default UseSpringsExample;