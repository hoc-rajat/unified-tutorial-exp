export type ButtonVariant = 'primary' | 'lavender' | 'secondary' | 'ghost' | 'outlineAccent';
export type ButtonSize = 'sm' | 'md' | 'lg';

const base =
'inline-flex items-center justify-center gap-2 rounded-lg font-semibold whitespace-nowrap transition-[background-color,border-color,color,transform] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender focus-visible:ring-offset-2 focus-visible:ring-offset-ink active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40';

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-pink text-white hover:bg-pink-hover',
  lavender: 'bg-lavender text-ink hover:bg-lavender-soft',
  secondary: 'border border-line-strong bg-ink-700/40 text-white hover:border-lavender/50 hover:bg-ink-700',
  ghost: 'text-fg-muted hover:bg-white/5 hover:text-white',
  outlineAccent: 'border border-pink/60 text-white hover:border-pink hover:bg-pink'
};

const sizes: Record<ButtonSize, string> = {
  sm: 'h-9 px-3.5 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-[15px]'
};

export function buttonClasses(variant: ButtonVariant = 'primary', size: ButtonSize = 'md'): string {
  return `${base} ${variants[variant]} ${sizes[size]}`;
}