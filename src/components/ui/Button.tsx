"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import type { ReactNode, MouseEvent } from "react";
import { useRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type BaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  magnetic?: boolean;
};

type ButtonAsLink = BaseProps & {
  href: string;
  onClick?: never;
};

type ButtonAsButton = BaseProps & {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white dark:bg-primary-dark dark:text-primary hover:opacity-90",
  secondary:
    "bg-secondary text-primary dark:bg-secondary-dark dark:text-primary-dark hover:bg-border dark:hover:bg-border-dark",
  ghost:
    "bg-transparent text-primary dark:text-primary-dark hover:bg-secondary dark:hover:bg-secondary-dark",
};

function MagneticWrap({
  children,
  enabled,
}: {
  children: ReactNode;
  enabled: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!enabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.25);
    y.set(relY * 0.35);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    children,
    variant = "primary",
    className,
    magnetic = true,
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-colors duration-200",
    variantClasses[variant],
    className
  );

  const content =
    "href" in props && props.href ? (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    ) : (
      <button
        type={(props as ButtonAsButton).type ?? "button"}
        onClick={(props as ButtonAsButton).onClick}
        className={classes}
      >
        {children}
      </button>
    );

  return <MagneticWrap enabled={magnetic}>{content}</MagneticWrap>;
}
