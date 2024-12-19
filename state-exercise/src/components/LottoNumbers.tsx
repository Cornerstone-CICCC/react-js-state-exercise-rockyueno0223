type Props = {
  setLottoNumbers: React.Dispatch<React.SetStateAction<number[]>>;
}

export const LottoNumbers = ({ setLottoNumbers }: Props) => {
  return (
    <button onClick={() => setLottoNumbers(() => {
      const numbers: number[] = [];
      while (numbers.length < 7) {
        const randomNumber = Math.floor(Math.random() * 50) + 1;
        if (!numbers.includes(randomNumber)) {
          numbers.push(randomNumber);
        }
      }
      return numbers
    })}>Generate Lotto Numbers</button>
  )
}
