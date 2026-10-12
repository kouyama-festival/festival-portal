# 神山祭 C.A.C ポータルサイト
React + Vite で実装した神山祭ポータルサイトです。Figma のワイヤーフレームを基準に、ゲーム制作物・活動風景・コンテスト作品・受賞作品・レビューを一通り閲覧できる構成にしています。

## 起動
```bash
npm install
npm run dev
```

## ビルド
```bash
npm run build
```

Firebase の環境変数を設定するとレビューを Firestore に保存できます。未設定時はブラウザの localStorage を使うため、UI の確認はそのまま可能です。
