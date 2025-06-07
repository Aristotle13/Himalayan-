export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} The Himalayan Sweets & Bakes. All rights reserved.</p>
        <p>Designed with <span className="text-primary">&hearts;</span> by Himalayan Delights Team</p>
      </div>
    </footer>
  );
}
