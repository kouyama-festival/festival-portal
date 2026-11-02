export const games=[
{id:'game-05',title:'Frog Up',summary:'カエルが地下から地上を目指す縦スクロールアクションゲーム',description:'カエルが地下から地上を目指す縦スクロールアクションゲーム',club:'チーム1',tags:['アクション'],links:[{label:'プレイページ',url:'https://unityroom.com/games/frog_up'}]},
{id:'game-01',title:'Rhythm Adventure : Lost Notes',club:'チーム2',tags:['リズム'],image:'/images/games/team2.webp',links:[{label:'プレイページ',url:'https://unityroom.com/games/rhythm_adventure-lost_notes'}]},
{id:'game-03',title:'Electronic_Azarasi',club:'チーム5',tags:['アクション'],image:'/images/games/team5.webp',links:[{label:'プレイページ',url:'https://unityroom.com/games/electronicazarasi'}]},
{id:'game-02',title:'パクリーん',club:'チーム6',tags:['陣取り'],image:'/images/games/team6.webp',links:[{label:'プレイページ',url:'https://unityroom.com/games/pakurin'}]},
{id:'game-04',title:'ひっくりカエル',club:'チーム8',tags:['アクション'],image:'/images/games/team8.webp',links:[{label:'プレイページ',url:'https://unityroom.com/games/ksu-cac-koyama2026-team8'}]},
{id:'game-06',club:'チーム14',tags:['格ゲー'],links:[{label:'Googleドライブ',url:'https://drive.google.com/drive/folders/1yMnXSgRDv1LxFnTjYV4Jp8GRMzarc7AF'}]}
];
export const getGame=id=>games.find(g=>g.id===id);
