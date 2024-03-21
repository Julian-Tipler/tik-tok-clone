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
}: {
  symbol: ButtonSymbol;
  action: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
  disabled: boolean;
}) => {
  const maybeAction = disabled ? () => null : action;
  return <button onClick={maybeAction}>{symbolDictionary[symbol]}</button>;
};
