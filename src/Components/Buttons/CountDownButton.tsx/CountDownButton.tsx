import React, { useEffect, useState } from "react";

interface CountDownButtonProps {
  onResend: () => void;
  autoStart?: boolean; // if you want to auto-start on load
}

const CountDownButton: React.FC<CountDownButtonProps> = ({
  onResend,
  autoStart = true,
}) => {
  const [counter, setCounter] = useState<number>(autoStart ? 30 : 0);
  const [isCounting, setIsCounting] = useState<boolean>(autoStart);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (isCounting && counter > 0) {
      timer = setTimeout(() => {
        setCounter((prev) => prev - 1);
      }, 1000);
    } else if (counter === 0 && isCounting) {
      setIsCounting(false);
    }

    return () => clearTimeout(timer);
  }, [counter, isCounting]);

  const handleResend = () => {
    if (!isCounting) {
      setCounter(30);
      setIsCounting(true);
      onResend(); // call after state set
    }
  };

  return (
    <span
      onClick={handleResend}
      className={`font-medium ${
        isCounting
          ? "text-gray-400 cursor-not-allowed "
          : "text-text cursor-pointer hover:text-slate-900"
      }`}
    >
      {isCounting ? (
        <span className="text-blue-500 text-center">{counter}</span>
      ) : (
        <span className="text-blue-500 text-center ">Resend</span>
      )}
    </span>
  );
};

export default CountDownButton;
