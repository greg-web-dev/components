import {
  useState,
  Children,
  ReactNode,
  FunctionComponent,
  useEffect,
  useRef,
} from "react";
import { SwitchTransition, Transition } from "react-transition-group";
import Dot from "./Dot.svg";

interface CarouselProps {
  className?: string;
  onChange?: (activeIndex: number) => void;
  auto?: boolean;
}

export const Carousel: FunctionComponent<CarouselProps> = ({
  className,
  onChange,
  auto,
  children,
}) => {
  const [slide, setSlide] = useState(0);
  const timeoutCancel = useRef<NodeJS.Timeout | null>(null);

  const duration = 400;

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 }, //exiting: { opacity: 0, position: "absolute", top: 0 },
    exited: { opacity: 0 },
  };

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out, transform ${duration}ms`,
    opacity: 0,
    margin: "0 20px",
    flex: 1,
  };

  const next = () => {
    const slideIncr = slide + 1;

    const next = slideIncr >= Children.count(children) ? 0 : slideIncr;

    setSlide(next);
    onChange && onChange(next);
  };

  const prev = () => {
    const slideDecr = slide - 1;

    const prev = slideDecr < 0 ? Children.count(children) - 1 : slideDecr;

    setSlide(prev);
    onChange && onChange(prev);
  };

  useEffect(() => {
    if (!auto) return;
    timeoutCancel.current = setTimeout(() => {
      next();
    }, 10000);
  }, [slide]);

  const renderDots = () => {
    const dots: ReactNode[] = [];

    for (let i = 0; i < Children.count(children); i++) {
      dots.push(
        <Dot
          key={i + Math.random()}
          style={{
            fontSize: ".75rem",
            cursor: "pointer",
            color: i === slide ? "#03586A" : "#E4E4E4",
            margin: "0 3px",
          }}
          onClick={() => {
            setSlide(i);
            if (!auto) return;
            timeoutCancel.current && clearTimeout(timeoutCancel.current);
            if (i === slide) {
              timeoutCancel.current = setTimeout(() => {
                next();
              }, 10000);
            }
          }}
        />
      );
    }

    return dots;
  };

  return (
    <div
      className={className}
      style={{ position: "relative", display: "flex", flexDirection: "column" }}
    >
      <SwitchTransition mode="out-in">
        <Transition key={slide} timeout={duration} unmountOnExit>
          {(state: keyof typeof transitionStyles) => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              {Children.map(children, (child, index) =>
                index === slide ? child : null
              )}
            </div>
          )}
        </Transition>
      </SwitchTransition>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px 0",
          position: "absolute",
          bottom: 8,
          right: 24,
        }}
      >
        {renderDots()}
      </div>
    </div>
  );
};
