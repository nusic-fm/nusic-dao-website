import { Box } from "@mui/system";
import { useRef, useState } from "react";

type Props = { insertUrl?: string };

const CardWithAnimation = ({ insertUrl }: Props) => {
  const containerRef = useRef<any>(null);
  const innerRef = useRef<any>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const counter = useRef(0);
  const refreshRate = 10;

  const handleMouseMove = (e: any) => {
    if (counter.current++ % refreshRate !== 0) return;
    const client = containerRef.current.getBoundingClientRect();
    const origin = {
      x: client.left + Math.floor(client.width / 2),
      y: client.top + Math.floor(client.height / 2),
    };

    const obj = {
      x: e.clientX - origin.x,
      y: (e.clientY - origin.y) * -1,
    };
    const innerClient = innerRef.current.getBoundingClientRect();
    const mouse = {
      x: (obj.y / innerClient.height / 2).toFixed(2) as any,
      y: (obj.x / innerClient.width / 2).toFixed(2) as any,
    };
    setMousePosition(mouse);
  };
  const onMouseLeaveHandler = function () {
    setMousePosition({ x: 0, y: 0 });
  };
  const onMouseEnterHandler = function (e: any) {
    const client = containerRef.current.getBoundingClientRect();
    const origin = {
      x: client.left + Math.floor(client.width / 2),
      y: client.top + Math.floor(client.height / 2),
    };

    const obj = {
      x: e.clientX - origin.x,
      y: (e.clientY - origin.y) * -1,
    };
    const innerClient = innerRef.current.getBoundingClientRect();
    const mouse = {
      x: (obj.y / innerClient.height / 2).toFixed(2) as any,
      y: (obj.x / innerClient.width / 2).toFixed(2) as any,
    };
    setMousePosition(mouse);
  };

  return (
    <Box
      ref={containerRef}
      sx={{ perspective: "10px", transform: { md: "scale(1.1)" } }}
      onMouseMove={handleMouseMove}
      onMouseLeave={onMouseLeaveHandler}
      onMouseEnter={onMouseEnterHandler}
      position="relative"
    >
      <Box
        ref={innerRef}
        position="relative"
        sx={{
          transform: `rotateX(${mousePosition.x}deg) rotateY(${mousePosition.y}deg)`,
          transition: "transform 0.1s",
        }}
      >
        <Box
          sx={{
            backgroundImage: "url(/alive/new_card.png)",
            borderRadius: "10px",
            boxShadow: "2px 2px 30px rgba(255, 255, 255, 0.2)",
            width: 280,
            height: 178,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
        {insertUrl && (
          <Box
            position={"absolute"}
            width="100%"
            height="100%"
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            left={0}
            top={0}
          >
            <Box
              width={{ xs: "100px", md: "98px" }}
              height={{ xs: "100px", md: "98px" }}
            >
              <img
                src={insertUrl}
                alt=""
                width={"100%"}
                height={"100%"}
                style={{ objectFit: "cover", borderRadius: "50%" }}
              />
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CardWithAnimation;
