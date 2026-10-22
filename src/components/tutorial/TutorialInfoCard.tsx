import { InfoIcon, ScanSearchIcon } from 'lucide-react';
import type { InfoTone } from '../../types/tutorial';

interface TutorialInfoCardProps {
  tone: InfoTone;
  title: string;
  body: string;
}

export function TutorialInfoCard({ tone, title, body }: TutorialInfoCardProps) {
  const isVerify = tone === 'verify';
  const Icon = isVerify ? ScanSearchIcon : InfoIcon;
  return (
    <aside
      className={`flex gap-3.5 rounded-xl border p-4 sm:p-5 ${
      isVerify ? 'border-dashed border-line-strong bg-transparent' : 'border-lavender/25 bg-lavender/[0.06]'}`
      }>
      
      <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${isVerify ? 'text-fg-subtle' : 'text-lavender'}`} aria-hidden="true" />
      <div>
        <p className={`text-sm font-semibold ${isVerify ? 'text-fg-muted' : 'text-white'}`}>{title}</p>
        <p className="mt-1 text-sm leading-relaxed text-fg-muted">{body}</p>
      </div>
    </aside>);

}