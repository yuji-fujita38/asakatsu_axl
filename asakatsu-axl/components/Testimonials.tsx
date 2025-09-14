import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "田中様",
    age: "30代",
    image: "/images/testimonial-1.jpg",
    content:
      "朝が弱くて毎日後悔していましたが、週1の朝活で毎朝リセットできるようになり、仕事も家庭も好循環になりました。",
    result: "毎朝リセット習慣",
    before: "朝が弱くて後悔",
    after: "毎朝リセットでき仕事も家庭も好循環に",
  },
  {
    id: 2,
    name: "佐藤様",
    age: "40代",
    image: "/images/testimonial-2.jpg",
    content: "何をやっても続けられず自己嫌悪の日々でしたが、仲間とツールのおかげで習慣が3ヶ月も続いています。",
    result: "習慣3ヶ月継続",
    before: "続けられず自己嫌悪",
    after: "仲間とツールで習慣が3ヶ月続いた",
  },
  {
    id: 3,
    name: "山田様",
    age: "50代",
    image: "/images/testimonial-3.jpg",
    content: "一人だと孤独で挫折していましたが、朝活の仲間ができて毎週が楽しみになりました。",
    result: "仲間との安心感",
    before: "孤独で挫折",
    after: "朝活の仲間と毎週が楽しみに",
  },
]

export default function Testimonials() {
  return (
    <section className="section-y bg-gradient-to-b from-background to-primary/5">
      <div className="container-max">
        {/* Problem Empathy Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 heading-text japanese-text">
            あなたも、こんな悩みありませんか？
          </h2>

          <div className="max-w-3xl mx-auto space-y-4 mb-12">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <p className="text-card-foreground japanese-text">✓ 続けられずに自己嫌悪してしまう</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <p className="text-card-foreground japanese-text">✓ 成長したいのに停滞している</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <p className="text-card-foreground japanese-text">✓ 一人では弱く、仲間や承認がほしい</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <p className="text-card-foreground japanese-text">✓ 感情や生活をコントロールできずダラダラしてしまう</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <p className="text-card-foreground japanese-text">✓ 昨日のモヤモヤを引きずって朝を迎えてしまう</p>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 heading-text japanese-text">
            続けられない自分を変える、2つの仕組み
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card border-0 shadow-lg p-8">
              <CardContent className="p-0">
                <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
                  週1のオンライン朝活（Zoom）
                </div>
                <p className="text-card-foreground japanese-text leading-relaxed">
                  呼吸・感謝・振り返り・ジャーナル・目標設定で一週間のリズムを整える。仲間と一緒だから自然と続く。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-lg p-8">
              <CardContent className="p-0">
                <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
                  オリジナルLINE習慣化ツール
                </div>
                <p className="text-card-foreground japanese-text leading-relaxed">
                  目標設定／進捗管理／リマインド通知。忙しくても毎日の習慣をブースト。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Before→After Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 heading-text japanese-text">
            習慣が続いたら、毎日はこう変わります
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-red-600 mb-4">Before</h3>
              <ul className="space-y-2 text-red-700 japanese-text">
                <li>三日坊主</li>
                <li>自分に失望</li>
                <li>生活が乱れる</li>
                <li>孤独感</li>
              </ul>
            </div>

            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-green-600 mb-4">After</h3>
              <ul className="space-y-2 text-green-700 japanese-text">
                <li>習慣が続く</li>
                <li>自信が持てる</li>
                <li>感情に振り回されない</li>
                <li>仲間と安心感</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 heading-text japanese-text">
            実際に変化を手に入れた人たち
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-accent">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium mb-2">
                      {testimonial.result}
                    </div>
                    <h3 className="font-bold text-card-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.age}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="text-sm">
                    <span className="text-red-600 font-medium">Before: </span>
                    <span className="text-red-700 japanese-text">{testimonial.before}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-green-600 font-medium">After: </span>
                    <span className="text-green-700 japanese-text">{testimonial.after}</span>
                  </div>
                </div>

                <p className="text-card-foreground japanese-text leading-relaxed">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-lg font-medium text-foreground mb-8 japanese-text">
            続けられない悩みを、今日で終わらせませんか？
          </p>

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
