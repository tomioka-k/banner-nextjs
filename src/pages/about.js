import Head from "next/head";
import Image from "next/image";

import Layout from "../components/Layout";
import Heading3 from "../components/Heading3";

export default function About() {
  return (
    <Layout title="about | banner-reference">
      <div className="container flex py-10 mx-auto">
        <div className="bg-white flex mx-auto my-5 w-full  lg:w-3/4 rounded-3xl">
          <div className="mx-10 my-5">
            <h2 className="text-5xl text-center my-10">About</h2>
            <Heading3 title={"掲載バナーについて"} />

            <div className="my-14 text-lg text-gray-700 leading-loose">
              <p>
                当サイトでご紹介しているバナーは、あくまで広告をデザインする方の参考のため、当サイト管理者がインターネット上に公開されているものを保存し、並べて再公開しているものです。
              </p>
              <p>
                各バナーの著作権や使用権は各バナー制作者・管理者様のものであり、当サイトにはその権限は一切関係ございません。
              </p>
              <p>
                万が一、このバナーの制作者・管理者様が当サイトをご覧になり、バナーの表示を停止するよう求めた場合は、ただちにその指示に従い、当サイトから該当するバナーのファイル自体を削除し、公開を停止いたします。
                また、ここに掲載しているバナーは広告の効果を保証するものではありません。あくまでもデザインの参考までにご覧ください。
              </p>
            </div>
            <Heading3 title={"当サイトに掲載されている広告について"} />

            <div className="my-14 text-lg text-gray-700 leading-loose">
              <p>
                当サイトでは、第三者配信の広告サービスの
                <a
                  className="text-blue-400"
                  href="http://www.google.com/adsense/start/"
                >
                  Googleアドセンス
                </a>
                を利用しています。
                このような広告配信事業者は、ユーザーの興味に応じた商品やサービスの広告を表示するため、当サイトや他サイトへのアクセスに関する情報
                『Cookie』(氏名、住所、メール アドレス、電話番号は含まれません)
                を使用することがあります。
                またGoogleアドセンスに関して、このプロセスの詳細やこのような情報が広告配信事業者に使用されないようにする方法については、
                <a
                  className="text-blue-400"
                  href="http://www.google.co.jp/policies/technologies/ads/"
                >
                  こちら
                </a>
                をクリックしてください。
              </p>
            </div>

            <Heading3
              title={"当サイトが使用しているアクセス解析ツールについて"}
            />

            <div className="my-14 text-lg text-gray-700 leading-loose">
              <p>
                当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
                このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。
                このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
                この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
                この規約に関して、詳しくは以下のWebページをクリックしてください。
              </p>
              <a
                className="text-blue-400"
                href="https://www.google.com/analytics/terms/jp.html"
              >
                {" "}
                Terms of Service | Google Analytics – Google
              </a>
            </div>
            <Heading3 title={"当サイトへのリンクについて"} />
            <div className="my-14 text-lg text-gray-700 leading-loose">
              <p>
                当サイトは完全リンクフリーです。
                トップページ、記事など、正規に公開しているページであれば、どのページにリンクしていただいても問題ありません。
                ただしインラインフレームの使用や、画像への直リンクなどは禁止させて頂いております。
                免責事項
                当サイトに掲載する情報は記事公表時点の正しいものを提供するよう努めております。
                ただし、提供している情報、リンク先などにより、いかなる損失や損害などの被害が発生しても当サイトでは責任を負いかねますので、ご了承ください。
                リンク先の商品は当サイトが販売しているのではなく、各リンク先店舗での販売となります。
                購入方法、その他お問い合わせは各店舗までご確認ください。商品購入に関するトラブルに関しては、当サイトでは責任を負いかねますのでご了承ください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
