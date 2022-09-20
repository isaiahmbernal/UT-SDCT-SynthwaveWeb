import PageLayout from "./PageLayout";

const ProgressPage = () => {
  return (
    <PageLayout>
      {/* Background Div */}
      <div className="relative bg-mountain-wave bg-cover bg-center flex flex-col items-center w-full h-full p-4">
        {/* Component Code Goes Here */}
        <p className="text-white">Progress Page</p>
        <p className="text-white">Ironic, isn't it</p>
      </div>
    </PageLayout>
  );
};

export default ProgressPage;
