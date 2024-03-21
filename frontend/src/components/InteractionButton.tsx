type ButtonSymbol = "like" | "message" | "save" | "share";

type SymbolDictionary = {
  [key in ButtonSymbol]: string;
};

const symbolDictionary: SymbolDictionary = {
  like: "👍",
  message: "💬",
  save: "💾",
  share: "📤",
};

export const InteractionButton = ({
  symbol,
  action,
  disabled,
  highlighted = false,
}: {
  symbol: ButtonSymbol;
  action: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
  disabled: boolean;
  highlighted?: boolean;
}) => {
  const maybeAction = disabled ? () => null : action;
  return (
    <button
      className={`${highlighted ? "shadow-md shadow-zinc-400" : ""}`}
      onClick={maybeAction}
    >
      {symbolDictionary[symbol]}
    </button>
  );
};
