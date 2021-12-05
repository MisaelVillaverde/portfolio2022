import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.load(
      glbPath,
      (gltf) => {
        const model = gltf.scene;
        model.name = "misael";
        model.position.y = 0;
        model.position.x = 0;
        model.receiveShadow = receiveShadow;
        model.castShadow = castShadow;
        scene.add(model);

        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = castShadow;
            child.receiveShadow = receiveShadow;
          }
        });

        resolve(model);
      },
      undefined,
      (error) => {
        reject(error);
      }
    );
  });
}
