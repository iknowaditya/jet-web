const extend = {
  alignContent: {
    stretch: "stretch",
  },
  backgroundColor: {
    body: "#FFF",
    header: "#FFF",
  },
  fontSize: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    md: "1.125rem", //18px
    lg: "1.25rem", // 20px
    xl: "1.5rem", // 24px
    inherit: "inherit",
  },
};

const theme = {
  // Preserve Tailwind defaults + extend from this preset.
  extend,
  // Override Tailwind defaults and preset config.
  screens: {
    xs: "300px",
    sm: "640px",
    md: "800px",
    lg: "960px",
    xl: "1120px",
    "2xl": "1280px",
    "3xl": "1440px",
    "4xl": "1600px",
    max: "1920px",
  },
};

const config = {
  theme,
};

module.exports = config;
