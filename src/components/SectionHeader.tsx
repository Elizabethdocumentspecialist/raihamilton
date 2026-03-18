interface SectionHeaderProps {
  number: string;
  title: string;
  className?: string;
}

export default function SectionHeader({ number, title, className = "" }: SectionHeaderProps) {
  return (
    <div className={`w-full border-t border-white/10 pt-4 mb-12 ${className}`}>
      <span className="font-mono text-[10px] uppercase tracking-widest text-gold/60">
        {number} // {title}
      </span>
    </div>
  );
}
