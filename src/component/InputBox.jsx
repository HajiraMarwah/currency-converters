import React,{useId} from "react";   //useId is react hook for generating unique IDS that can passed to accessiblity attribute
function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency="usd",
    amountDisable=false,
    currencyDisable=false,
    className = "",
}) {
   
const amountInputId=useId()
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=>onAmountChange &&     // && is checker if that avail/exist then call
                        onAmountChange(Number(e.target.value))  //js is notorious as event value inside that event make it strings so wrapped in Number
                    }
                    placeholder="Amount"
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    disabled={onCurrencyChange}
                    value={selectCurrency}
                    onChange={(e)=>onCurrencyChange(e.target.value)}//used directly as need in string 
                >
                    
                    {currencyOptions.map((currency)=>(  //uses key when uses loops to get good performance in loops for repeating values 
                           <option key={currency} value={currency}> 
                            {currency}
                        </option>
                    ))} 
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
