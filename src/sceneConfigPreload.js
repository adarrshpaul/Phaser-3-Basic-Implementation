const sceneConfig = {
  key: "preload",
  // active: false,
  // visible: true,
  pack: {
    files: [
      {
        type: "image",
        key: "PreloadBg",
        url: "src/assets/GraphicsGame/Loading/PreloadBg.png",
      },
      {
        type: "image",
        key: "LoadingBar",
        url: "src/assets/GraphicsGame/Loading/Fillbar.png",
      },
      { type: "image", key: "title", url: "src/assets/GraphicsGame/Title.png" },
      {
        type: "image",
        key: "Loading",
        url: "src/assets/GraphicsGame/Loading/LoadingText.png",
      },
      {
        type: "image",
        key: "LoadingBarBg",
        url: "src/assets/GraphicsGame/Loading/FillbarBg.png",
      },
    ],
  },
  // cameras: null,
  // map: {},
  // physics: {},
  // loader: {},
  // plugins: false,
  // input: {}
};

export { sceneConfig };
