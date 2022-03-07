import Head from "next/head";
import Image from "next/image";

import Layout from "../components/Layout";
import Heading3 from "../components/Heading3";

export default function About() {
  return (
    <Layout title="about | banner-reference">
      <div className="container flex py-10 mx-auto">
        <div className="bg-white flex mx-auto my-5 w-full  lg:w-3/4 rounded-2xl shadow">
          <div className="mx-10 my-5">
            <h2 className="text-5xl text-center my-10">About</h2>
            <Heading3 title={"当サイトについて"} />
            <div className="my-14 text-lg text-gray-700 leading-loose">
              <p>
                当サイトはバナー作成の際に、デザインの参考用にと思い作成しました。
              </p>
              <p>
                メールマガジンや広告上で目にするデザインは多数ありますが、自分でいざ作ろうとすると難しいものですよね。
              </p>
              <p>
                そんな中で自分も含め沢山の人のお役に立てればと思い作成しました。
              </p>
            </div>
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
            <Heading3 title={"使用技術について"} />
            <div className="my-14 text-lg text-gray-700 leading-loose">
              <p>
                当サイトはフロントエンドは
                <a className="text-blue-400" href="https://nextjs.org/">
                  Next.js
                </a>
                、バックエンドはpythonフレームワークの
                <a
                  className="text-blue-400"
                  href="https://www.djangoproject.com/"
                >
                  django
                </a>
                /
                <a
                  className="text-blue-400"
                  href="https://www.django-rest-framework.org/"
                >
                  djangoRESTframework
                </a>
                で作成しております。
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
