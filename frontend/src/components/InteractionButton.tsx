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

export const InteractionButton = ({ symbol }: { symbol: ButtonSymbol }) => {
  return <button>{symbolDictionary[symbol]}</button>;
};
