import {addDoc,collection,getFirestore,serverTimestamp} from 'firebase/firestore'; import {app,firebaseEnabled} from './config';
// ゲーム詳細ページ内リンクのクリックを1件ずつ記録する。画面遷移を待たせないよう await せずに呼び出す想定。
export const GAME_LINK_CLICKS='gameLinkClicks';
export function recordGameLinkClick({gameId,gameTitle,linkLabel,url}){if(!firebaseEnabled){console.warn('[gameLinkClicks] Firebase が未設定のため記録しません',{gameId,linkLabel,url});return Promise.resolve()}return addDoc(collection(getFirestore(app),GAME_LINK_CLICKS),{gameId,...(gameTitle?{gameTitle}:{}),linkLabel,url,clickedAt:serverTimestamp()}).catch(e=>console.error('[gameLinkClicks] クリックの記録に失敗しました',{gameId,linkLabel,url},e))}
