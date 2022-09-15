import PageLayout from "./PageLayout";

const MissingPage = () => {
  return (
    <PageLayout>
      <div className="flex flex-col items-center gap-4 text-white font-bold text-xl">
        <h1>404</h1>
        <h1>Page Does Not Exist</h1>
        <div className="bg-center bg-cover bg-skeleton-guy w-full h-[60vh] rounded-lg shadow-2xl"></div>
      </div>
    </PageLayout>
  );
};

export default MissingPage;
