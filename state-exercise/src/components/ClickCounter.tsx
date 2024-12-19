type Props = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
}
export const ClickCounter = ({setCount}: Props) => {
  return (
    <button onClick={() => setCount((prev) => prev + 1)}>
      ClickCounter
    </button>
  )
}
