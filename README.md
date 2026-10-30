# 神山祭 C.A.C ポータルサイト
React + Vite で実装した神山祭ポータルサイトです。Figma のワイヤーフレームを基準に、ゲーム制作物・活動内容・コンテスト作品・受賞作品・レビューを一通り閲覧できる構成にしています。

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

## ゲームリンククリック集計
ゲーム制作物の詳細ページ（`/games/:id`）にあるリンクがクリックされるたびに、Firestore の `gameLinkClicks` コレクションへ 1 件記録します。記録件数がそのままクリック数になります。コンテスト作品・受賞作品のリンク、ページ閲覧、滞在時間、端末情報、参照元は記録しません。

| フィールド | 型 | 内容 |
| --- | --- | --- |
| `gameId` | string | ゲーム ID（例: `game-01`） |
| `gameTitle` | string（任意） | 作品名（例: 星降るキャンパス） |
| `linkLabel` | string | リンク名（例: プレイページ） |
| `url` | string | リンク先 URL |
| `clickedAt` | Timestamp | クリック日時（サーバー時刻） |

### Firebase の設定
1. Firebase Console でプロジェクトと Web アプリを作成し、Firestore Database を有効化します。
2. `.env.example` を `.env` にコピーし、Web アプリの設定値を `VITE_FIREBASE_*` に入れます。接続情報はソースコードに書かないでください。
3. セキュリティルールを反映します。ルールは `firestore.rules` で管理しています（`reviews` のルールも含みます）。
   ```bash
   npx firebase-tools deploy --only firestore:rules --project <プロジェクトID>
   ```
   公開サイトから `gameLinkClicks` に許可されるのは、決められたフィールドと型での追加だけです。読み取り・変更・削除はできません。

### リンクの追加と記録関数
リンクは `src/data/games/index.js` の各ゲームの `links`（`{label,url}` の配列）で設定します。現在は `example.com` の仮リンクです。詳細ページでは `src/components/game/GameLinks.jsx` がリンクを表示し、クリック時に記録関数を呼び出します。

```js
import {recordGameLinkClick} from '../firebase/gameLinkClicks';
// await しない（画面遷移を待たせない）。失敗時はコンソールにエラーを出す。
recordGameLinkClick({gameId:'game-01',gameTitle:'星降るキャンパス',linkLabel:'プレイページ',url:'https://example.com/games/game-01/play'});
```

ゲーム詳細ページ以外では、この関数を呼ばないでください。通常クリックと中クリックは記録されますが、右クリックメニューの「新しいタブで開く」はブラウザの仕様上検知できないため記録されません。

### 集計の確認
- **Firebase Console:** Firestore Database → `gameLinkClicks` で 1 件ずつの記録を確認できます。
- **集計スクリプト:** 作品別・リンク別の件数を表示します。管理者権限で読み取るため、サービスアカウント鍵のパスを `GOOGLE_APPLICATION_CREDENTIALS` に設定するか、`gcloud auth application-default login` を事前に済ませておいてください。
  ```bash
  npm run clicks            # 全作品
  npm run clicks -- game-01 # 1 作品だけ
  ```

### 動作確認の手順
1. `.env` を設定して `npm run dev` を実行します。
2. ゲーム A（例: `game-01`）の「プレイページ」を 3 回、ゲーム B（例: `game-02`）の「プレイページ」を 2 回クリックします（リンクは新しいタブで開きます）。
3. `npm run clicks` を実行し、`game-01` が 3 件、`game-02` が 2 件になっていることを確認します。
4. コンテスト作品・受賞作品のページでリンクをクリックしても、件数が増えないことを確認します。
5. 詳細ページを開いたり再読み込みしたりするだけでは、記録が増えないことを確認します。
