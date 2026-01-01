"use client";

import * as THREE from "three";
import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;
  varying vec2 vUv;

  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uRes;

  float hash(vec2 p){
    return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453123);
  }

  float noise(vec2 p){
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f*f*(3.0-2.0*f);
    return mix(a,b,u.x) + (c-a)*u.y*(1.0-u.x) + (d-b)*u.x*u.y;
  }

  void main() {
    vec2 uv = vUv;

    float d = distance(uv, uMouse);
    float t = uTime * 0.6;

    float n = noise(uv * 4.0 + t);
    float waves = sin((uv.x + uv.y) * 10.0 + t * 2.0) * 0.08;

    float influence = smoothstep(0.45, 0.0, d);

    vec2 warped = uv;
    warped += vec2(waves, -waves) * (0.35 + n) * influence;

    float n2 = noise(warped * 6.0 - t);

    vec3 c1 = vec3(0.15, 0.55, 0.95);
    vec3 c2 = vec3(0.35, 0.95, 0.70);
    vec3 c3 = vec3(0.75, 0.45, 0.95);

    vec3 col = mix(c1, c2, n2);
    col = mix(col, c3, smoothstep(0.25, 0.9, noise(warped * 3.0 + t)));

    col += influence * 0.25;

    gl_FragColor = vec4(col, 1.0);
  }
`;

const FluidMat = shaderMaterial(
  {
    uTime: 0,
    uMouse: new THREE.Vector2(0.5, 0.5),
    uRes: new THREE.Vector2(1, 1),
  },
  vertexShader,
  fragmentShader
);

extend({ FluidMat });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      fluidMat: any;
    }
  }
}

function Plane() {
  const matRef = useRef<any>(null);
  const { size } = useThree();
  const res = useMemo(() => new THREE.Vector2(size.width, size.height), [size]);

  useFrame((state) => {
    if (!matRef.current) return;

    matRef.current.uTime = state.clock.getElapsedTime();

    const mx = state.mouse.x * 0.5 + 0.5;
    const my = state.mouse.y * 0.5 + 0.5;
    matRef.current.uMouse.set(mx, my);

    matRef.current.uRes.copy(res);
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      {/* <fluidMat ref={matRef} /> */}
    </mesh>
  );
}

export default function FluidBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 1] }}
      >
        <Plane />
      </Canvas>
    </div>
  );
}