import { Login } from "./Login";
import { useModal } from "./ModalContext";

export const Header = () => {
  const { showModal } = useModal();
  return (
    <header className="flex flex-row items-center justify-between py-4">
      <div className="text-2xl font-bold">TikTok</div>
      <div>Search</div>
      <div className="flex space-x-4">
        <div>Upload</div>
        <div onClick={() => showModal(<Login />)}>Login</div>
      </div>
    </header>
  );
};
