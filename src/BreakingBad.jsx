import { LoadingQuote, Quote } from "./components";
import { useCounter, useFetch } from "./hooks";

export const BreakingBad = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  const {author, quote} = !!data && data[0];
  return (
    <>
      <h1>Breaking Bad App</h1>
      <hr />
      {
        isLoading
          ? <LoadingQuote />
          : <Quote author={author} quote={quote} />
      }
      <button
        className="btn btn-primary"
        onClick={increment}
      >Next Quote</button>
    </>
  )
}
