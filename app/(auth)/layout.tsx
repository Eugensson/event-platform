const authLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full   bg-cover bg-fixed bg-center">
      {children}
    </div>
  );
};

export default authLayout;
