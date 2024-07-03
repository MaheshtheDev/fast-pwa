"use client";

import { useIsAppOffline, useIsPWAInstalled } from "@/lib/hooks";

export default function Home() {
  const isInstalled = useIsPWAInstalled();
  const isAppOffline = useIsAppOffline();
  return (
    <main className={"flex min-h-screen flex-col "}>
      <header className="text-4xl text-blue-500 font-bold text-center py-4">
        fast PWA
      </header>
      <div className="mx-auto py-1">
        <p>building PWA has never been easier</p>
        <section className="my-2 text-center">
          <h2 className="text-lg font-semibold">Features</h2>
          <ul className="list-none flex gap-2 justify-around">
            <li>PWA</li>
            <li>TailwindCSS</li>
            <li>Next.js</li>
          </ul>
        </section>
        <section>
          <h2 className="text-lg font-semibold">References</h2>
          <div>
            <p>More About PWA</p>
          </div>
        </section>
        <section className="my-4">
          <p>
            btw, This Web App is{" "}
            <span className="text-blue-400 font-semibold">{isInstalled ? "PWA App" : "Not PWA App"}</span>
          </p>
          <p>
            And, This Web App is{" "}
            <span className="text-blue-400 font-semibold">{isAppOffline ? "Offline" : "Online"}</span>
          </p>
        </section>
      </div>
    </main>
  );
}
