import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary";

type BaseButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type NativeButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type AnchorButtonProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = NativeButtonProps | AnchorButtonProps;

function isAnchorButtonProps(props: ButtonProps): props is AnchorButtonProps {
  return typeof (props as AnchorButtonProps).href === "string";
}

export function Button(props: ButtonProps) {
  if (isAnchorButtonProps(props)) {
    const { href, children, className, variant = "primary", ...anchorProps } = props;
    const classes = ["button", className].filter(Boolean).join(" ");

    return (
      <a className={classes} data-variant={variant} href={href} {...anchorProps}>
        {children}
      </a>
    );
  }

  const {
    children: buttonChildren,
    className: buttonClassName,
    variant: buttonVariant = "primary",
    type = "button",
    ...buttonProps
  } = props;
  const buttonClasses = ["button", buttonClassName].filter(Boolean).join(" ");

  return (
    <button
      className={buttonClasses}
      data-variant={buttonVariant}
      type={type}
      {...buttonProps}
    >
      {buttonChildren}
    </button>
  );
}
