export const GetTransferDeclination = (transferAmount : number) : string => {
  let transferDeclination;
  if (transferAmount === 0) {
    return "Без пересадок";
  } 
  if (transferAmount === 1) {
    transferDeclination = "пересадка";
  }
  if ([2,3,4].includes(transferAmount)) {
    transferDeclination = "пересадки";
  };
  if ([5].includes(transferAmount)) {
    transferDeclination = "пересадок";
  } 
  return `${transferAmount} ${transferDeclination}`;
}