import styles from "./AnimationImage.module.css";
import { useSpring, animated } from "react-spring";
import blobshape from "blobshape";
import { useState } from "react";
import type { CSSProperties } from "react";
import foto_perfil from "../assets/imagenes/foto-personal.jpeg";

interface BlobProps {
  image?: boolean;
  color?: string;
  style?: CSSProperties;
}

export default function AnimationImage() {
  return (
    <div className="flex justify-center items-center w-full py-8">
      <div className="relative w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[500px] aspect-square">
        <Blob color="#a5c8d6" style={{ opacity: 0.2 }} />
        <Blob color="#010a13ff" style={{ opacity: 0.4 }} />
        <Blob color="#304356" style={{ opacity: 0.5 }} />
        <Blob image style={{ opacity: 0.95 }} />
      </div>
    </div>
  );
}

function getRandomPath() {
  return blobshape({
    growth: 8,
    edges: 18,
  }).path;
}

function Blob(props: BlobProps) {
  const [flip, set] = useState(false);

  const { path } = useSpring<{ path: string }>({
    to: { path: getRandomPath() },
    from: { path: getRandomPath() },
    reverse: flip,
    config: {
      duration: props.image ? 9000 : 6000,
    },
    onRest: (spring) => {
      (spring as { value: { path: string } }).value.path = getRandomPath();
      set(!flip);
    },
  });

  return (
    <svg
      className={styles.estilo}
      viewBox="0 0 390 390"
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        ...props.style,
      }}
    >
      {!props.image && <animated.path fill={props.color} d={path} />}

      {props.image && (
        <>
          <defs>
            <clipPath id="a">
              <animated.path fill={props.color} d={path} />
            </clipPath>
          </defs>
          <image
            width="100%"
            height="125%"
            clipPath="url(#a)"
            xlinkHref={foto_perfil}
            preserveAspectRatio="xMidYMid slice"
            className={styles.imagen}
          />
        </>
      )}
    </svg>
  );
}
