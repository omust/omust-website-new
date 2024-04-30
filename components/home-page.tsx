/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/X5AKAvicRlT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Rubik } from 'next/font/google'
import { Chivo } from 'next/font/google'

rubik({
  subsets: ['latin'],
  display: 'swap',
})

chivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

import { Link1Icon } from "@radix-ui/react-icons";

export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm dark:bg-gray-950/80">
        <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <ShieldIcon className="h-6 w-6" />
            <span>OMUST</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#about"
            >
              About
            </a>
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#features"
            >
              Activities
            </a>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              Sponsor
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              History
            </Link>
            <Link
              
              className="text-sm font-medium hover:underline underline-offset-4"
              href="darkmode"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <section className="relative flex flex-col items-center justify-center bg-gradient-to-r from-[#0072C6] to-[#00A0D2] py-24 md:py-32 lg:py-40">
        <div className="container mx-auto max-w-6xl px-4 text-center text-white md:px-6">
          <div className="animate-tracking-in-contract">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Welcome to OMU Security Club
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg md:text-xl">
              Where you can learn about cybersecurity, network with friends, and
              compete in capture the flag events.
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <div></div>
          <Link
            href="darkmode"
            className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black shadow transition-colors hover:bg-white/90 hover:text-white hover:bg-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-900/90 dark:focus-visible:ring-gray-300"
          >
            Toggle Dark Mode
          </Link>
        </div>
      </section>
      <section className="bg-gray-100 py-16 dark:bg-gray-900" id="about">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                About OMUST
              </h2>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                omustは今年に結成されたばかりのサークルです。(公認処理中)
                主に情報セキュリティ全般に興味ある大阪公立大学の学生を歓迎します。
                *ハード、ソフトは問いません。低レイヤー、高レイヤーどちらでも。
                pcの知識がない方でも、ハッキング、ホワイトハッカーなどの単語に興味が湧いたら覗いてみてください
              </p>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                ※ゲーム創作や音楽制作、アプリ開発がしたい方には、本団体は向いておりません。randomやアプリnavi
                などの他の公認サークルへの参加を推奨します
              </p>
            </div>
            <div className="order-1 md:order-2">
              <Image
                alt="logo"
                src="/logo.png"
                width={500}
                height={300}
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16" id="features">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Activities
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-gray-500 dark:text-gray-400">
            Check out what activities we plan to do！
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg dark:bg-gray-950">
              <ShieldIcon className="h-12 w-12 text-[#0072C6]" />
              <h3 className="mt-4 text-xl font-bold">
                Finding Vulnerabilities
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Participate in the CTF and practice finding vulnerabilities in a
                competitive format; the CTF is divided into six genres: Web,
                Crypto, Forensics, Reversing, Pwn, and Misc.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg dark:bg-gray-950">
              <LockIcon className="h-12 w-12 text-[#00A0D2]" />
              <h3 className="mt-4 text-xl font-bold">Penetration Testing</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Uncover and address security weaknesses through comprehensive
                penetration testing.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg dark:bg-gray-950">
              <BriefcaseIcon className="h-12 w-12 text-[#0072C6]" />
              <h3 className="mt-4 text-xl font-bold">Security workshops</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                We hold security study sessions and teach each other. We also
                participate in various study group events such as security camps
                as a group.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg dark:bg-gray-950">
              <CloudIcon className="h-12 w-12 text-[#00A0D2]" />
              <h3 className="mt-4 text-xl font-bold">omust Server</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                {` With university funds, the circle's server will be built and put
                to good use.`}
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg dark:bg-gray-950">
              <FingerprintIcon className="h-12 w-12 text-[#0072C6]" />
              <h3 className="mt-4 text-xl font-bold">OSINT</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Gathering information is an essential part of learning security.
                Utilize paid OSINT tools to gather the latest information.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg dark:bg-gray-950">
              <ShieldCheckIcon className="h-12 w-12 text-[#00A0D2]" />
              <h3 className="mt-4 text-xl font-bold">Bug Bounties</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                {` Find bugs and vulnerabilities and tell the company about them.
                Maybe we'll even get an allowance!`}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-16 dark:bg-gray-900" id="team">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Team Member
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-gray-500 dark:text-gray-400">
            Our club consists of six students now
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="https://github.com/tratiger"
              className="rounded-lg bg-white p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg dark:bg-gray-950"
            >
              <Image
                alt="tratiger"
                src="/tratiger.png"
                width={80}
                height={80}
                objectFit="contain"
              />
              <h3 className="mt-4 text-xl font-bold">tratiger</h3>
              <p className="mt-1 text-gray-500 dark:text-gray-400">CEO</p>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                団体長です。omustを立ち上げました。情報工学科２年です。直近ではpicoCTFに参加しました。BurpSuiteでウェブセキュリティとリバースエンジニアリングを学んでいます。今後は、低レイアーの知識と暗号技術についても勉強したいです。Flipper買いたい。
              </p>
            </Link>
            <Link
              href="#"
              className="rounded-lg bg-white p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg dark:bg-gray-950"
            >
              <Image
                alt="Akira"
                src="/Akira.png"
                width={80}
                height={80}
                objectFit="contain"
              />
              <h3 className="mt-4 text-xl font-bold">Akira</h3>
              <p className="mt-1 text-gray-500 dark:text-gray-400">CTO</p>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                副団長です。情報工学科２年です。今はtryhackmeでセキュリティの勉強をしているらしいです。C言語とJava使えます。まらしぃが好きらしく、ピアノ上手いです。
              </p>
            </Link>
            <Link
              href="https://github.com/4equest"
              className="rounded-lg bg-white p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg dark:bg-gray-950"
            >
              <Image
                alt="4equest"
                src="/4equest.png"
                width={80}
                height={80}
                objectFit="contain"
              />
              <h3 className="mt-4 text-xl font-bold">4equest</h3>
              <p className="mt-1 text-gray-500 dark:text-gray-400">
                Head of Incident Response
              </p>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                他大学の助っ人です。omustのなかで一番セキュリティに詳しく、技術力も高いです。高校生からバクハンティングなどしています。CTFはあまりしないらしいですが、直近のpicoではreverseを完答していて、forensicsもかなり解いていました。一瞬世界７位だったとか。
              </p>
            </Link>
            <Link
              href="https://github.com/okisidentarisu"
              className="rounded-lg bg-white p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg dark:bg-gray-950"
            >
              <Image
                alt="occidentalis"
                src="/occidentalis.png"
                width={80}
                height={80}
                objectFit="contain"
              />
              <h3 className="mt-4 text-xl font-bold">occidentalis</h3>
              <p className="mt-1 text-gray-500 dark:text-gray-400">
                Head of Incident Response
              </p>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                他大学の助っ人です。omustの中でも技術力高いです。CTFではwebやForensicsを解くことが多いようですが、ジャンルは気にしていないそうです。インフラ関係に強く、高校生から事業に参加していました。よくFlipperで
                <s>毒電波を撒いてる</s>遊んでいるのを見かけます。
              </p>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16" id="contact">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-gray-500 dark:text-gray-400">
            Have a question or ready to join our security club? Fill out the
            form below, and one of our experts will be in touch.
          </p>
          <form className="mx-auto mt-12 max-w-md space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Kali Linux" required type="text" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="kali@example.com"
                required
                type="email"
              />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="情報工学科3年のニックネーム:毒電波撒い太郎です。OMUSTに入部したいのですが、手続きお願いします。"
                required
                rows={5}
              />
            </div>
            <Button className="w-full" type="submit" variant="null">
              Submit
            </Button>
          </form>
        </div>
      </section>
      <footer className="bg-gray-900 py-8 text-white">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <ShieldIcon className="h-6 w-6" />
              <span className="text-lg font-semibold">
                大阪公立大学セキュリティサークル
              </span>
            </div>
            <nav className="flex flex-wrap justify-center gap-4 text-sm font-medium">
              <Link
                className="text-xs hover:underline underline-offset-4 text-gray-400"
                href="https://github.com/omust"
              >
                GitHub
              </Link>
              <Link
                className="text-xs hover:underline underline-offset-4 text-gray-400"
                href="https://twitter.com/omust2024"
              >
                Twitter
              </Link>
              <Link
                className="text-xs hover:underline underline-offset-4 text-gray-400"
                href="https://www.instagram.com/omust2024"
              >
                Instagram
              </Link>
            </nav>
            <p className="text-sm text-gray-400">
              © 2024 大阪公立大学セキュリティサークル omust. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BriefcaseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function CloudIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

function FingerprintIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4" />
      <path d="M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2" />
      <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
      <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
      <path d="M8.65 22c.21-.66.45-1.32.57-2" />
      <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
      <path d="M2 16h.01" />
      <path d="M21.8 16c.2-2 .131-5.354 0-6" />
      <path d="M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2" />
    </svg>
  );
}

function LockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function ShieldCheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  );
}
