export function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground text-sm">
          Designed & Built by <span className="text-primary font-medium">Doni Julyano</span>
        </p>
        <p className="text-muted-foreground text-xs mt-2">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  )
}
