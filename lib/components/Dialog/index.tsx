import "./dialog.css";
import { VButton } from "../Button";
import type { ReactNode } from "react";
import { X } from "lucide-react";

type DialogProps = {
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
  title?: string;
  showCloseButton?: boolean;
  children?: ReactNode;
};

function noOp() {}

export function VDialog(props: DialogProps) {
  if (props.isOpen != true) {
    return null;
  }

  let header = null;
  const setIsOpen = props.setIsOpen ?? noOp;

  if (props.title != undefined || props.showCloseButton) {
    header = (
      <div className="vaar-dialog-header">
        <span>{props.title}</span>
        {props.showCloseButton && (
          <VButton onClick={() => setIsOpen(false)} size="small-icon">
            <X />
          </VButton>
        )}
      </div>
    );
  }
  return (
    <div
      className="vaar-dialog-portal"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsOpen(false);
        }
      }}
    >
      <div className="vaar-panel vaar-dialog">
        {header}
        {props.children}
      </div>
    </div>
  );
}
