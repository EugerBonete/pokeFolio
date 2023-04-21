import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Overlay() {
  const comp = useRef(); // create a ref for the root level element (for scoping)
  const text = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (text.current) {
        gsap.fromTo(
          text.current,
          {
            opacity: 0,
            duration: 1.5,
          },
          {
            x: 10,
            y: -30,
            duration: 1.5,
            delay: 3,
            opacity: 1,
          }
        );
      }
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={text}
      className="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center flex-col scroll-smooth"
    >
      <h1 className="text-2xl">Welcome to my portfolio!</h1>
      <div className="">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
        obcaecati porro vel quam magnam temporibus voluptatibus id iure placeat
        tenetur repellendus suscipit similique, quod assumenda dolore minus
        laborum eos sunt?
      </div>
    </div>
  );
}
