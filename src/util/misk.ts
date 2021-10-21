export function declOfNum(number:number, words:string[]) {
  const ofSecondType = number % 100 > 4 && number % 100 < 20;

  let idx;
  if (ofSecondType) {
    idx = 2;
  } else {
    const idxInDecade = number % 10;
    idx = [2, 0, 1, 1, 1, 2][Math.min(5, idxInDecade)]
  }

  return `${number} ${words[idx]}`;
}

export function printPDF() {
  const content = document.getElementById('divContents');
  const iframe = document.getElementById('ifmContentsToPrint') as HTMLIFrameElement;
  const pri = iframe.contentWindow;
  pri?.document.open();
  pri?.document.write(content?.innerHTML || '');
  pri?.document.close();
  pri?.focus();
  pri?.print();
}