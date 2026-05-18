"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const WECHAT_QR_SRC = "/images/wechat-qr.jpeg";

type WechatFloatLabels = {
  wechatFab: string;
  wechatTitle: string;
  wechatClose: string;
  wechatScan: string;
  wechatMobileHint: string;
  wechatCopy: string;
  wechatCopied: string;
};

type WechatFloatProps = {
  wechatId: string;
  labels: WechatFloatLabels;
};

export function WechatFloat({ wechatId, labels }: WechatFloatProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (!opened) {
      return;
    }
    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpened(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpened(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [opened]);

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
    <div ref={rootRef} className="wechat-float">
      {opened ? (
        <div className="wechat-float__panel" role="dialog" aria-label={labels.wechatTitle}>
          <div className="wechat-float__head">
            <p className="wechat-float__title">{labels.wechatTitle}</p>
            <button type="button" onClick={() => setOpened(false)} className="wechat-float__close">
              {labels.wechatClose}
            </button>
          </div>
          <p className="wechat-float__hint wechat-float__hint--mobile">{labels.wechatMobileHint}</p>
          <p className="wechat-float__hint wechat-float__hint--desktop">{labels.wechatScan}</p>
          <div className="wechat-float__qr-wrap">
            <Image
              src={WECHAT_QR_SRC}
              alt={labels.wechatScan}
              width={220}
              height={220}
              className="wechat-float__qr"
              unoptimized
            />
          </div>
          <p className="wechat-float__id">{wechatId}</p>
          <button type="button" onClick={copyWechatId} className="wechat-float__copy">
            {copied ? labels.wechatCopied : labels.wechatCopy}
          </button>
        </div>
      ) : (
        <button type="button" onClick={() => setOpened(true)} className="wechat-float__fab">
          {labels.wechatFab}
        </button>
      )}
    </div>
  );
}
