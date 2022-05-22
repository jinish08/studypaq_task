/** @type {import('next').NextConfig} */
module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/images",
        destination: "http://localhost:5000/images",
      },
    ];
  };
  return {
    rewrites,
  };
};
