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
  action: () => void;
  disabled: boolean;
}) => {
  return <button onClick={action}>{symbolDictionary[symbol]}</button>;
};
