import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background texture/pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95" />

      <div className="container-max relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 heading-text">
            <span className="block text-accent">三日坊主の自分から卒業。</span>
            <span className="block">朝活×ジャーナルで、</span>
            <span className="block">昨日までの自分をリセットしよう。</span>
          </h1>

          <p className="text-lg md:text-xl text-accent font-medium mb-4 japanese-text">
            週1の朝活 × LINE習慣化ツールで、もう一人で挫折しない。
          </p>

          <div className="space-y-4 mb-8">
            <p className="text-sm md:text-base text-muted-foreground japanese-text">
              続けられない悩みを、今日で終わらせませんか？
            </p>
            <p className="text-sm md:text-base text-muted-foreground japanese-text">
              仲間と一緒だから自然と続く、新しい習慣化の仕組み
            </p>
          </div>

          <Button
            size="lg"
            className="bg-success hover:bg-success/90 text-success-foreground px-8 py-3 text-base font-medium rounded-lg transition-all duration-200 hover:scale-105"
          >
            ▶ 無料で体験する
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs text-muted-foreground japanese-text">習慣が続く仕組みを見る</span>
          <div className="w-px h-8 bg-accent animate-pulse" />
        </div>
      </div>
    </section>
  )
}
