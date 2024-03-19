export const Modal = () => {
  return (
    <div>
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50"></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="w-96 rounded-lg bg-white p-4">Modal</div>
      </div>
    </div>
  );
};
