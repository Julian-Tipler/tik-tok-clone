import { UserProfile } from "./UserProfile";

export const Header = () => {
  return (
    <header className="border-b-1 fixed z-10 flex w-full flex-row items-center justify-between border-gray-400 bg-white px-4 py-4">
      <div className="text-2xl font-bold">TikTok</div>
      <div>Search</div>
      <div className="flex space-x-4">
        <button>Upload</button>
        <UserProfile />
      </div>
    </header>
  );
};
