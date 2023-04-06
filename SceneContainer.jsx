import { OrbitControls, PerspectiveCamera, Enviorment } from "@react-three/drei";
import { Suspense } from "react";

export function SceneContainer() {
    return (
        <Suspense fallback={null}>
            <Enviorment background={'only'} files={process.env.PUBLIC_URL + "texture/bg.hdr"} />
            <Enviorment background={false} files={process.env.PUBLIC_URL + "texture/envmap.hdr"} />

            <PerspectiveCamera makeDefault fov={50} position={[-1.75, 10.85, 20.35]} />
            <OrbitControls target={[1, 5, 0]} maxPolarAngle={Math.PI * 0.5}/>

            <Workshop/>
        </Suspense>
    );
}