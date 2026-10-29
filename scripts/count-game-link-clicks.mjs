// gameLinkClicks の記録件数を「gameId × linkLabel × url」ごとに集計して表示する。
// 使い方: npm run clicks [-- game-01]
// 認証: サービスアカウント鍵のパスを GOOGLE_APPLICATION_CREDENTIALS に設定するか、gcloud auth application-default login を済ませておく。
import {applicationDefault,initializeApp} from 'firebase-admin/app'; import {getFirestore} from 'firebase-admin/firestore';
const projectId=process.env.VITE_FIREBASE_PROJECT_ID||process.env.GOOGLE_CLOUD_PROJECT; if(!projectId){console.error('VITE_FIREBASE_PROJECT_ID が設定されていません（.env を確認してください）');process.exit(1)}
initializeApp({credential:applicationDefault(),projectId});
const gameId=process.argv[2]; let q=getFirestore().collection('gameLinkClicks'); if(gameId)q=q.where('gameId','==',gameId);
const snap=await q.get(); const rows=new Map();
for(const d of snap.docs){const {gameId,gameTitle='',linkLabel,url}=d.data();const k=JSON.stringify([gameId,linkLabel,url]);const r=rows.get(k)||{gameId,gameTitle,linkLabel,url,clicks:0};r.clicks++;rows.set(k,r)}
const list=[...rows.values()].sort((a,b)=>a.gameId.localeCompare(b.gameId)||b.clicks-a.clicks);
if(list.length)console.table(list);else console.log('記録はまだありません');
const byGame=Object.groupBy(list,r=>r.gameId); for(const [id,rs] of Object.entries(byGame))console.log(`${id} ${rs[0].gameTitle}: ${rs.reduce((n,r)=>n+r.clicks,0)} 件`);
console.log(`合計 ${snap.size} 件`);
