import PageLayout from "./PageLayout";

const CountdownPage = () => {
  return (
    <PageLayout>
      {/* Background Div */}
      <div className="relative bg-pink-grid bg-center flex flex-col items-center w-full h-full p-4">
        {/* Component Code Goes Here */}
        <p className="text-white">Countdown Page</p>
        <p className="text-white">Test test, is this thing on</p>
      </div>
    </PageLayout>
  );
};

export default CountdownPage;
