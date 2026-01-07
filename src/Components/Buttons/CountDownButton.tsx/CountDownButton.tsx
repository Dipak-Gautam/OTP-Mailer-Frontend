import React, { useEffect, useState, useRef } from "react";

interface CountDownButtonProps {
  onResend: () => void;
  autoStart?: boolean;
  duration?: number;
}

const CountDownButton: React.FC<CountDownButtonProps> = ({
  onResend,
  autoStart = true,
  duration = 30,
}) => {
  const [counter, setCounter] = useState(autoStart ? duration : 0);
  const [isCounting, setIsCounting] = useState(autoStart);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isCounting) return;

    intervalRef.current = window.setInterval(() => {
      setCounter((prev) => {
        if (prev <= 1) {
          setIsCounting(false);
          window.clearInterval(intervalRef.current!);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isCounting]);

  const handleResend = () => {
    if (isCounting) return;

    setCounter(duration);
    setIsCounting(true);
    onResend();
  };

  return (
    <span
      onClick={handleResend}
      className={`font-medium ${
        isCounting
          ? "text-gray-400 cursor-not-allowed"
          : "text-text cursor-pointer hover:text-slate-900"
      }`}
    >
      {isCounting ? (
        <span className="text-blue-500">{counter}</span>
      ) : (
        <span className="text-blue-500">Resend</span>
      )}
    </span>
  );
};

export default CountDownButton;
