import PageLayout from "./PageLayout";

const ProgressPage = () => {
  const codes = localStorage.getItem("codes");
  const progress = JSON.parse(codes);
  console.log(progress);

  const totalQR = Object.values(progress).length;
  const scannedQR = Object.values(progress).filter((val) => {
    return val === true;
  }).length;

  return (
    <PageLayout>
      {/* Background Div */}
      <div className="text-white relative bg-mountain-wave bg-cover bg-center flex flex-col items-center w-full h-full p-4">
        {/* Component Code Goes Here */}
        <p>Progress Page</p>
        <p>Ironic, isn't it haaaaaaaaaaaa</p>
        <p>Ironic, isn't it haaaaaaaaaaaaloooo</p>
        <h1>
          {scannedQR} / {totalQR} QR Codes Scanned
        </h1>
      </div>
    </PageLayout>
  );
};

export default ProgressPage;
