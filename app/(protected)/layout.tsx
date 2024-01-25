import Navbar from "./_component/navbar";

type ProtectedLayoutProps = {
  children: React.ReactNode;
};

function layout({ children }: ProtectedLayoutProps) {
  return (
    <div className="h-full flex items-center flex-col gap-10 justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <Navbar />
      {children}
    </div>
  );
}

export default layout;
