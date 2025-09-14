import { Card, CardContent } from "@/components/ui/card"

export default function Interview() {
  return (
    <section className="section-y bg-card">
      <div className="container-max">
        {/* FAQ Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-12 heading-text japanese-text">
            よくある質問
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-background border-0 shadow-sm">
              <CardContent className="p-6 text-left">
                <h3 className="font-bold text-foreground mb-3 japanese-text">朝が苦手でも大丈夫？</h3>
                <p className="text-muted-foreground japanese-text">
                  はい、週1から始められるので無理なく続けられます。朝活は早朝ではなく、あなたの生活リズムに合わせて参加できます。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-0 shadow-sm">
              <CardContent className="p-6 text-left">
                <h3 className="font-bold text-foreground mb-3 japanese-text">発言は必須？</h3>
                <p className="text-muted-foreground japanese-text">
                  聞くだけ参加OK、顔出し不要です。慣れてきたら少しずつ参加していただければ大丈夫です。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-0 shadow-sm">
              <CardContent className="p-6 text-left">
                <h3 className="font-bold text-foreground mb-3 japanese-text">LINEツールは難しくない？</h3>
                <p className="text-muted-foreground japanese-text">
                  普段のLINEと同じ感覚で使えます。複雑な操作は一切ありません。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-0 shadow-sm">
              <CardContent className="p-6 text-left">
                <h3 className="font-bold text-foreground mb-3 japanese-text">本当に続けられる？</h3>
                <p className="text-muted-foreground japanese-text">
                  仲間＋仕組みで自然に続けられる環境を整えています。一人では難しいことも、みんなとなら続けられます。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow text-accent mb-4">Success Story</p>
            <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-6 heading-text japanese-text">
              習慣が変われば、人生が変わる
            </h2>

            <div className="space-y-6 japanese-text">
              <p className="text-card-foreground leading-relaxed">
                「また続かなかった...」そんな自分にうんざりしていませんか？
              </p>

              <p className="text-card-foreground leading-relaxed">
                習慣化に必要なのは、意志力ではありません。正しい仕組みと仲間です。
              </p>

              <p className="text-card-foreground leading-relaxed font-medium">
                重要：一人で頑張るのではなく、みんなで支え合うから続けられる。
              </p>

              <p className="text-card-foreground leading-relaxed">
                朝活×ジャーナル×LINE習慣化ツールで、あなたの毎日が劇的に変化します。
              </p>

              <p className="text-card-foreground leading-relaxed">三日坊主から卒業し、理想の自分を手に入れましょう。</p>

              <p className="text-card-foreground leading-relaxed">
                昨日までの自分をリセットし、新しい習慣をここから始めませんか？
              </p>
            </div>
          </div>

          <div className="relative">
            <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
              <CardContent className="p-8">
                <div className="aspect-video bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[12px] border-l-accent-foreground border-y-[8px] border-y-transparent ml-1" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-2 japanese-text">習慣化に成功した秘訣</h3>
                <p className="text-muted-foreground japanese-text">実際の参加者の変化をご覧ください</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
