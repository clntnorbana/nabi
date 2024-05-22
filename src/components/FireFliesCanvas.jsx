import { useRef, useEffect } from "react";

const FirefliesCanvas = () => {
  const canvasRef = useRef(null);
  const firefliesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    class Firefly {
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.s = Math.random() * 2;
        this.ang = Math.random() * 2 * Math.PI;
        this.v = (this.s * this.s) / 12;
      }

      move() {
        this.x += this.v * Math.cos(this.ang);
        this.y += this.v * Math.sin(this.ang);
        this.ang += (Math.random() * 20 * Math.PI) / 180 - (10 * Math.PI) / 180;
      }

      show(c) {
        c.beginPath();
        c.arc(this.x, this.y, this.s, 0, 2 * Math.PI);
        c.fillStyle = "#fddba3";
        c.fill();
      }
    }

    const createFireflies = (count) => {
      const newFireflies = [];
      for (let i = 0; i < count; i++) {
        newFireflies.push(new Firefly());
      }
      return newFireflies;
    };

    const draw = () => {
      // Clear only the fireflies, not the background
      c.clearRect(0, 0, w, h);

      firefliesRef.current.forEach((firefly) => {
        firefly.move();
        firefly.show(c);
      });

      // Filter out fireflies that are out of bounds
      firefliesRef.current = firefliesRef.current.filter(
        (firefly) =>
          firefly.x >= 0 && firefly.x <= w && firefly.y >= 0 && firefly.y <= h
      );

      // Add new fireflies if there are fewer than 100
      if (firefliesRef.current.length < 100) {
        firefliesRef.current.push(...createFireflies(10));
      }
    };

    const loop = () => {
      draw();
      requestAnimationFrame(loop);
    };

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      firefliesRef.current = createFireflies(100); // Re-initialize fireflies on resize
    };

    window.addEventListener("resize", handleResize);

    firefliesRef.current = createFireflies(100); // Initialize fireflies
    loop();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="canvas"
      style={{
        zIndex: "20",
      }}
    ></canvas>
  );
};

export default FirefliesCanvas;
