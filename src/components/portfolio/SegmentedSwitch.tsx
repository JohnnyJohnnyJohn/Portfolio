import type { ReactNode } from "react";

type SegmentedSwitchOption<TValue extends string> = {
  value: TValue;
  label: string;
};

type SegmentedSwitchProps<TValue extends string> = {
  value: TValue;
  options: SegmentedSwitchOption<TValue>[];
  onChange: (value: TValue) => void;
};

export function SegmentedSwitch<TValue extends string>({
  value,
  options,
  onChange,
}: SegmentedSwitchProps<TValue>) {
  const activeIndex = Math.max(
    options.findIndex((option) => option.value === value),
    0,
  );
  const segmentWidth = 100 / options.length;
  const indicatorLeft = activeIndex * segmentWidth + segmentWidth / 2;

  return (
    <div className="relative rounded-full w-45 h-12 border border-portfolio-border bg-linear-60 from-gray-500/5 to-transparent p-1.5 shadow-[0_18px_70px_rgba(0,0,0,.55)] backdrop-blur-md transition-colors hover:border-white/20 hover:from-white/10">
      <span
        className="absolute -top-0.75 left-0 h-0.5 w-6 -translate-x-1/2 rounded-t-full bg-white shadow-[0_0_6px_rgba(255,255,255,.85),0_0_16px_3px_rgba(255,255,255,.42),0_0_34px_7px_rgba(255,255,255,.18)] transition-[left] duration-500 ease-out"
        style={{
          left: `${indicatorLeft}%`,
        }}
      />
      <div
        className="relative z-10 grid h-full gap-0.5"
        style={{
          gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))`,
        }}
      >
        <span
          className="absolute top-0 bottom-0 rounded-full bg-linear-to-b from-gray-500/15 to-transparent backdrop-blur-xl transition-transform duration-300 ease-out"
          style={{
            width: `${100 / options.length}%`,
            transform: `translateX(${activeIndex * 100}%)`,
          }}
        />
        {options.map((option, index) => (
          <SegmentedSwitchButton
            key={option.value}
            isActive={option.value === value}
            isFirst={index === 0}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </SegmentedSwitchButton>
        ))}
      </div>
    </div>
  );
}

function SegmentedSwitchButton({
  children,
  isActive,
  isFirst,
  onClick,
}: {
  children: ReactNode;
  isActive: boolean;
  isFirst: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={`relative z-20 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full text-xs font-semibold text-white outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-portfolio-bg ${
        isFirst ? "hover:bg-linear-to-bl" : "hover:bg-linear-to-br"
      } hover:from-transparent hover:to-white/15`}
    >
      {children}
    </button>
  );
}
