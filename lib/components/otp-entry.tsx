import { useRef } from "react";
import "./otp-entry.css";

export type OtpEntryProps = {
  label: string;
  length: number;
  mode?: "numeric" | "alphanumeric";
  value?: string;
  readOnly?: boolean;
  onChange?: (value: string) => void;
};

export function OtpEntry(props: OtpEntryProps) {
  const { length, mode = "numeric", value = "", readOnly, onChange } = props;
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const chars = Array.from({ length }, (_, i) => value[i] ?? "");

  const pattern = mode === "numeric" ? /^[0-9]$/ : /^[A-Z0-9]$/;
  const inputMode = mode === "numeric" ? "numeric" : "text";

  function updateValue(newChars: string[]) {
    if (onChange) {
      onChange(newChars.join("").trimEnd());
    }
  }

  function handleInput(index: number, inputValue: string) {
    const char = inputValue.slice(-1).toUpperCase();
    if (!pattern.test(char)) return;

    const newChars = [...chars];
    newChars[index] = char;
    updateValue(newChars);

    if (index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(index: number, e: React.KeyboardEvent) {
    if (e.key === "Backspace") {
      e.preventDefault();
      const newChars = [...chars];
      if (chars[index] !== "" && chars[index] !== " ") {
        newChars[index] = "";
        updateValue(newChars);
      } else if (index > 0) {
        newChars[index - 1] = "";
        updateValue(newChars);
        inputsRef.current[index - 1]?.focus();
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputsRef.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  }

  function handlePaste(e: React.ClipboardEvent) {
    e.preventDefault();
    if (readOnly) return;

    const pasted = e.clipboardData
      .getData("text")
      .toUpperCase()
      .slice(0, length);
    const newChars = chars.slice();
    let lastFilledIndex = 0;

    for (let i = 0; i < pasted.length; i++) {
      if (pattern.test(pasted[i])) {
        newChars[i] = pasted[i];
        lastFilledIndex = i;
      }
    }

    updateValue(newChars);
    inputsRef.current[Math.min(lastFilledIndex + 1, length - 1)]?.focus();
  }

  let className = "vaar-entry vaar-otp-entry";
  if (readOnly) {
    className += " vaar-entry-readonly";
  }

  return (
    <div className={className}>
      <label>{props.label}</label>
      <div className="vaar-otp-entry-fields" onPaste={handlePaste}>
        {chars.map((char, i) => (
          <input
            key={i}
            ref={(el) => {
              inputsRef.current[i] = el;
            }}
            type="text"
            inputMode={inputMode}
            maxLength={2}
            value={char.trim()}
            readOnly={readOnly}
            onChange={(e) => handleInput(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
          />
        ))}
      </div>
    </div>
  );
}
