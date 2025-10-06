interface SectionTitleProps {
  number: string
  title: string
}

export function SectionTitle({ number, title }: SectionTitleProps) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="text-primary font-mono text-xl">{number}.</span>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
      <div className="flex-1 h-px bg-border ml-4" />
    </div>
  )
}
