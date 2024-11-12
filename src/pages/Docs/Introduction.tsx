const Introduction = () => {
  return (
    <>
      <h1 className="w-full text-5xl font-bold text-white mb-8">Introduction</h1>
      <div className="space-y-8">
        <p>
          ReactKit is a React component library created to make web application
          development faster, easier, and more efficient. Designed with elegance
          and simplicity, ReactKit provides modern, customizable, and accessible
          components that you can effortlessly integrate into your projects.
        </p>
        <p>
          With ReactKit, our goal is to help you focus on building your app’s
          functionality without the hassle of designing from scratch. Each
          component is thoughtfully structured and optimized to offer
          flexibility in design and ease of use, allowing you to create an
          exceptional user experience.
        </p>
        <p>
          Whether you're building simple applications or complex platforms,
          ReactKit adapts to your needs, making it easy to develop consistent
          and professional interfaces. Additionally, every component is fully
          customizable and responsive to different screen sizes, ensuring a
          smooth, attractive appearance on any device.
        </p>
        <p>
          ReactKit is open-source and has an active community of developers
          contributing continuous improvements. All components are designed with
          best practices for accessibility in mind, ensuring that everyone,
          regardless of their abilities, can use your applications.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/your-repo/reactkit"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-500"
          >
            GitHub
          </a>
          <a
            href="/docs"
            className="px-4 py-2 border border-orange-600 text-orange-600 font-semibold rounded-md hover:bg-orange-100"
          >
            Documentation
          </a>
        </div>
      </div>
    </>
  );
};

export default Introduction;
