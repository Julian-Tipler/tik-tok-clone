export const ForYou = () => {
  return (
    <div className="align-center flex flex-1 flex-col justify-center">
      {[1, 2, 3, 4].map((video) => {
        return <div>Video {video}</div>;
      })}
    </div>
  );
};
