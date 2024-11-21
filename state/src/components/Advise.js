import React, {useState, useEffect, useCallback} from 'react'

function Advise() {
    const [advice, setAdvise] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [history, setHistory] = useState([]);
  
    const getAdvice = useCallback(async () => {
      try {
        setIsLoading(true);
        setError(null);
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        setAdvise(data.slip.advice);
        if (!history.includes(data.slip.advice)) {
          setHistory((prev) => [data.slip.advice, ...prev].slice(0, 3));
        }
      } catch (err) {
        setError("Failed to fetch advice. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }, [history]);
  
    useEffect(() => {
      setTimeout(() =>{
        getAdvice();
      },[5000])
    },[]);
  
    const handleOnClick = () => {
      getAdvice();
    };
  
    const handleShare = async () => {
      try {
        await navigator.share({
          title: "Daily Advice",
          text: advice,
        });
      } catch (err) {
        console.log("Share failed:", err);
      }
    };
    
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-800 relative">
                <div className="absolute inset-0 bg-white/30  backdrop-blur-lg"></div>
                <div className="z-10 w-full max-w-md bg-white/20 backdrop-blur-md rounded-lg shadow-lg p-6 text-center border border-white/30">
                    {error ? (
                        <div className="text-red-500 text-xl mb-10">{error}</div>
                    ) : (
                        <>
                            {isLoading ? (
                                <div className="loading-spinner"></div>
                            ) : (
                                <h1 className="text-xl text-white glow text-center mb-10">{advice}</h1>
                            )}
                        </>
                    )}
                    <div className="flex gap-4 justify-center">
                        <button
                            onClick={handleOnClick}
                            disabled={isLoading}
                            className="px-6 py-2 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 disabled:bg-gray-500"
                        >
                            {isLoading ? "Loading..." : "New Advice"}
                        </button>
                        <button
                            onClick={handleShare}
                            disabled={isLoading || !advice}
                            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 disabled:bg-gray-500"
                        >
                            Share
                        </button>
                    </div>
                    {history.length > 0 && (
                        <div className="mt-8 text-left">
                            <h2 className="text-white text-xl mb-4">Previous Advice:</h2>
                            <div className="flex flex-col gap-3">
                                {history.map((item, index) => (
                                    <div
                                        key={index}
                                        className="text-gray-200 bg-gray-900/60 p-3 border border-gray-800 rounded"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Advise