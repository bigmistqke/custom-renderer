import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { DOMElements, SVGElements } from "solid-js/web/dist/dev.cjs";

export default defineConfig({
  plugins: [
    solidPlugin({
      solid: {
        moduleName: "solid-js/web",
        // @ts-ignore
        generate: "dynamic",
        renderers: [
          {
            name: "dom",
            moduleName: "solid-js/web",
            elements: [...DOMElements.values(), ...SVGElements.values()]
          },
          {
            name: "universal",
            moduleName: "/src/renderer.tsx",
            elements: []
          }
        ]
      }
    })
  ],
  server: {
    port: 3000
  },
  build: {
    target: "esnext"
  }
});
