const stylesMap = {
  // Font-Family
  "chai-font-sans": { fontFamily: "Arial, sans-serif" },

  // Spacing
  "chai-m-2": { margin: "8px" },
  "chai-mt-2": { marginTop: "8px" },
  "chai-mb-2": { marginBottom: "8px" },
  "chai-ml-2": { marginLeft: "8px" },
  "chai-mr-2": { marginRight: "8px" },
  "chai-m-4": { margin: "16px" },
  "chai-mt-4": { marginTop: "16px" },
  "chai-mb-4": { marginBottom: "16px" },
  "chai-ml-4": { marginLeft: "16px" },
  "chai-mr-4": { marginRight: "16px" },
  "chai-p-2": { padding: "8px" },
  "chai-pt-2": { paddingTop: "8px" },
  "chai-pb-2": { paddingBottom: "8px" },
  "chai-pl-2": { paddingLeft: "8px" },
  "chai-pr-2": { paddingRight: "8px" },
  "chai-p-4": { padding: "16px" },
  "chai-pt-4": { paddingTop: "16px" },
  "chai-pb-4": { paddingBottom: "16px" },
  "chai-pl-4": { paddingLeft: "16px" },
  "chai-pr-4": { paddingRight: "16px" },

  // Text
  "chai-text-center": { textAlign: "center" },
  "chai-text-left": { textAlign: "left" },
  "chai-text-sm": { fontSize: "small" },
  "chai-text-lg": { fontSize: "large" },
  "chai-fw-bold": { fontWeight: "bold" },
  "chai-text-xl": { fontSize: "20px" },
  "chai-text-md": { fontSize: "16px" },
  "chai-text-red": { color: "red" },
  "chai-text-blue": { color: "blue" },
  "chai-text-white": { color: "white" },
  "chai-text-black": { color: "black" },
  "chai-text-gray": { color: "gray" },
  "chai-text-lightgray": { color: "lightgray" },
  "chai-text-green": { color: "green" },
  "chai-text-yellow": { color: "yellow" },
  "chai-text-orange": { color: "orange" },
  "chai-text-pink": { color: "pink" },
  "chai-text-purple": { color: "purple" },

  // Layout
  "chai-flex": { display: "flex" },
  "chai-block": { display: "block" },
  "chai-none": { display: "none" },
  "chai-relative": { position: "relative" },
  "chai-absolute": { position: "absolute" },

  // Flexbox
  "chai-jc-center": { justifyContent: "center" },
  "chai-jc-between": { justifyContent: "space-between" },
  "chai-ai-center": { alignItems: "center" },
  "chai-flex-col": { flexDirection: "column" },
  "chai-gap-5": { gap: "20px" },

  // Width / Height
  "chai-h-screen": { height: "100vh" },
  "chai-w-screen": { width: "100vw" },
  "chai-w-200": { width: "200px" },
  "chai-h-200": { height: "200px" },

  // Background
  "chai-bg-red": { backgroundColor: "red" },
  "chai-bg-blue": { backgroundColor: "blue" },
  "chai-bg-white": { backgroundColor: "white" },
  "chai-bg-black": { backgroundColor: "black" },
  "chai-bg-gray": { backgroundColor: "gray" },
  "chai-bg-lightgray": { backgroundColor: "lightgray" },
  "chai-bg-green": { backgroundColor: "green" },
  "chai-bg-yellow": { backgroundColor: "yellow" },
  "chai-bg-orange": { backgroundColor: "orange" },
  "chai-bg-pink": { backgroundColor: "pink" },
  "chai-bg-purple": { backgroundColor: "purple" },

  // Border
  "chai-border-solid": { borderStyle: "solid" },
  "chai-border-dashed": { borderStyle: "dashed" },
  "chai-border-none": { borderStyle: "none" },
  "chai-border-width-2": { borderWidth: "2px" },
  "chai-border-width-4": { borderWidth: "4px" },
  "chai-border-black": { borderColor: "black" },
  "chai-border-red": { borderColor: "red" },
  "chai-border-blue": { borderColor: "blue" },
  "chai-border-white": { borderColor: "white" },
  "chai-border-gray": { borderColor: "gray" },
  "chai-border-lightgray": { borderColor: "lightgray" },
  "chai-border-green": { borderColor: "green" },
  "chai-border-yellow": { borderColor: "yellow" },
  "chai-border-orange": { borderColor: "orange" },
  "chai-border-pink": { borderColor: "pink" },
  "chai-border-purple": { borderColor: "purple" },
  "chai-rounded-2": { borderRadius: "2px" },
  "chai-rounded-4": { borderRadius: "4px" },
  "chai-rounded-6": { borderRadius: "6px" },
  "chai-rounded-8": { borderRadius: "8px" },

  // Shadow
  "chai-shadow": { boxShadow: "0 2px 12px rgba(0, 0, 0, 0.35)" },

  // Misc Useful
  "chai-cursor-pointer": { cursor: "pointer" },
  "chai-overflow-hidden": { overflow: "hidden" },
  "chai-z-10": { zIndex: "10" },
};

function applyStyle(ele) {
  ele.classList.forEach((cls) => {
    if (stylesMap[cls]) {
      Object.assign(ele.style, stylesMap[cls]);
    }
  });
}

document.querySelectorAll("*").forEach(applyStyle);

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    // Case 1: New element added
    if (mutation.type === "childList") {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) {
          // element node
          applyStyle(node);

          // Check on child nodes
          node.querySelectorAll("[class]").forEach(applyStyle);
        }
      });
    }

    // Case 2: Class attribute changed
    if (mutation.type === "attributes" && mutation.attributeName === "class") {
      applyStyle(mutation.target);
    }
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: true,
});
