# 网站图片资源

将图片放在此目录，**保持文件名一致**即可被网站引用。

| 文件名 | 用途 | 建议规格 |
|--------|------|----------|
| `hero-bayterek-wide.png` | 首页 Hero 背景（桌面 ≥1024px） | 宽版 21:9 |
| `hero-bayterek.png` | 首页 Hero 背景（手机/平板） | 塔体偏右 |
| `sinomar-logo.png` | 导航栏 Logo | 横版 PNG，透明底（白/金字用于深色导航） |
| `wechat-qr.jpeg` | 右下角微信弹窗二维码 | 方形图，建议 ≥ 400px |

换图后若浏览器仍显示旧图，可在 `site-header.tsx` 中把 Logo 地址的 `?v=` 版本号加 1。微信号在 `site-content.ts` → `wechatId`。
