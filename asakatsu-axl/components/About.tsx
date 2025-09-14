import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <section className="section-y bg-background">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
              <CardContent className="p-8">
                <div className="aspect-[3/4] bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-bold text-primary">朝活</span>
                    </div>
                    <p className="text-accent font-medium japanese-text">習慣化コーチ</p>
                  </div>
                </div>
                <div className="bg-accent text-accent-foreground px-4 py-2 rounded-lg text-center">
                  <p className="font-bold japanese-text">習慣化の専門書</p>
                  <p className="text-sm japanese-text">三日坊主からの卒業法</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <p className="eyebrow text-accent mb-4">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 heading-text japanese-text">
              "続ける力"を
              <br />
              科学的にサポート
            </h2>

            <div className="space-y-6 japanese-text">
              <p className="text-foreground leading-relaxed">
                私たちは、これまで500名以上の方の習慣化をサポートしてきました。
                単なる精神論ではなく、科学的根拠に基づいた習慣化メソッドを提供しています。
              </p>

              <p className="text-foreground leading-relaxed">
                朝活、ジャーナル、目標設定を組み合わせることで、
                一人では続かない習慣も、仲間と一緒なら自然と続けられるようになります。
              </p>

              <p className="text-foreground leading-relaxed">
                私たちの強みは、心理学と行動科学に基づいた実証済みのメソッドと、 温かいコミュニティの力です。
              </p>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="font-bold text-card-foreground mb-4">サポート内容</h3>
                <ul className="space-y-2 text-card-foreground">
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    週1回のオンライン朝活（Zoom、60分）
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    オリジナルLINE習慣化ツール
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    個別目標設定・進捗管理サポート
                  </li>
                  <li className="flex items-start">
                    <span className="text-success mr-2">✓</span>
                    仲間との励まし合いコミュニティ
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 japanese-text">
            昨日までの自分をリセットし、新しい習慣をここから始めよう。
          </h2>

          <Button
            size="lg"
            className="bg-success hover:bg-success/90 text-success-foreground px-8 py-3 text-base font-medium rounded-lg transition-all duration-200 hover:scale-105"
          >
            ▶ 無料で体験する
          </Button>
        </div>
      </div>
    </section>
  )
}
