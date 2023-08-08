import { useCounter, useFetch } from "../hooks/index.js";
import { Quote, LoadingQuote} from './index.js'
export const MultipleCustomHooks = () => {
  
    const { increment, counter, decrement, reset} = useCounter(1);
    const {data, isLoading, hasError} = useFetch (`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    const { author, quote } = !!data && data[0];

    return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />
        
        { isLoading  
        ? (<LoadingQuote/> ) 
        : ( <Quote quote = {quote} author={author}/> ) }
      <button className="btn btn-primary" onClick={ () => increment() }> Next quote</button>
      <button className="btn btn-primary" onClick={ () => decrement() }> Past quote</button>
      <button className="btn btn-primary" onClick={ () => reset() }> Original quote</button>

      

    </>
  )
}
