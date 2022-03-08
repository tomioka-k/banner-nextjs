import Head from "next/head";
import Image from "next/image";

import Layout from "../components/Layout";
import Heading3 from "../components/Heading3";

export default function PrivacyPolicy() {
  return (
    <Layout title="about | banner-reference">
      <div className="container flex py-10 mx-auto">
        <div className="bg-white flex mx-auto my-5 w-full  lg:w-3/4 rounded-2xl shadow">
          <div className="mx-10 my-5">
            <h2 className="text-5xl text-center my-10">Privacy Policy</h2>

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
                公開しているページであれば、どのページにリンクしていただいても問題ありません。
                ただしインラインフレームの使用や、画像への直リンクなどは禁止させて頂いております。
                <br />
                当サイトに掲載・提供している情報、リンク先などにより、いかなる損失や損害などの被害が発生しても当サイトでは責任を負いかねますので、ご了承ください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
