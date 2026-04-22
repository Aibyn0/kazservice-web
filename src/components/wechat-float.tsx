"use client";

import { useState } from "react";

type WechatFloatProps = {
  wechatId: string;
};

export function WechatFloat({ wechatId }: WechatFloatProps) {
  const [copied, setCopied] = useState(false);
  const [opened, setOpened] = useState(false);

  async function copyWechatId() {
    try {
      await navigator.clipboard.writeText(wechatId);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-40">
      {opened ? (
        <div className="w-56 rounded-2xl border border-brand-accent/40 bg-brand-primary p-4 text-white shadow-xl">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">微信咨询</p>
            <button type="button" onClick={() => setOpened(false)} className="text-xs text-slate-200">
              收起
            </button>
          </div>
          <p className="mt-1 text-xs opacity-90">{wechatId}</p>
          <button
            type="button"
            onClick={copyWechatId}
            className="mt-3 rounded-lg bg-brand-accent px-3 py-1 text-xs font-semibold text-brand-primary transition hover:brightness-95"
          >
            {copied ? "已复制" : "复制微信号"}
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpened(true)}
          className="rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white shadow-lg"
        >
          微信咨询
        </button>
      )}
    </div>
  );
}
