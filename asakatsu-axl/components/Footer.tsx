export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground section-y">
      <div className="container-max">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4">朝活×習慣化</div>
          <p className="text-primary-foreground/80 mb-8 japanese-text">Morning Activity & Habit Formation</p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
            <a
              href="#home"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors japanese-text"
            >
              ホーム
            </a>
            <a
              href="#case"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors japanese-text"
            >
              実績
            </a>
            <a
              href="#company"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors japanese-text"
            >
              私たちについて
            </a>
            <a
              href="#contact"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors japanese-text"
            >
              お問い合わせ
            </a>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-sm text-primary-foreground/60 japanese-text">
              © 2024 朝活×習慣化プログラム. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
