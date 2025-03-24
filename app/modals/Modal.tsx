import { useCallback } from "react";
import Button from "../components/Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  subtitle?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  subtitle,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    onClose();
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="
          justify-center
          items-center
          flex
          overflow-x-hidden
          overflow-y-auto
          fixed
          top-0
          inset-0
          z-50
          outline-none
          focus:outline-none
          bg-neutral-800/70
          backdrop-blur-[1px]
        "
      >
        <div
          className="
            relative 
            w-full
            lg:w-2/5
            my-2
            mx-auto
            lg:max-w-3xl
            h-full
            lg:h-auto
          "
        >
          {/* content */}
          <div
            className="
                h-full
                lg:h-auto
                border-0
                lg:rounded-[25px]
                rounded-[0px]
                shadow-lg
                relative
                flex
                flex-col
                w-full
                bg-white
                outline-none
                focus:outline-none
              "
          >
            {/* header */}
            <div
              className="
                  flex
                  items-center
                  justify-
                  px-10
                  py-8
                  rounded-t
                "
            >
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl text-[#404040] font-bold">{title}</h3>
                <p className="text-[14px] text-[#707070]">{subtitle}</p>
              </div>

              <button
                onClick={handleClose}
                className="
                  py-[5px]
                  px-5
                  rounded-full
                  ml-auto
                  border-2
                  border-[#404040]
                  text-[#404040]
                  hover:opacity-70
                  transition
                "
              >
                Close
              </button>
            </div>
            {/* body */}
            <div className="relative px-10 flex-auto">{body}</div>
            {/* footer */}
            <div className="flex flex-col gap-2  pb-10 px-10 pt-4">
              <div className="flex flex-row gap-2">
                {secondaryAction && secondaryActionLabel && (
                  <Button
                    outline
                    disabled={disabled}
                    label={secondaryActionLabel}
                    onClick={handleSecondaryAction}
                  />
                )}
                {actionLabel && (
                  <Button
                  disabled={disabled}
                  label={actionLabel}
                  onClick={handleSubmit}
                />
                )}
              </div>
              {footer}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
