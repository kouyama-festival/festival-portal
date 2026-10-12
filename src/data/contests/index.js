export const contests=[
{id:'contest-01',title:'祭をもっと楽しくするWebアプリ',author:'Team Horizon',tags:['Web','React','企画'],summary:'来場者が会場を探索しやすくするWebアプリ。',description:'展示場所やイベント情報をまとめ、来場者同士でおすすめを共有できるWebアプリを提案しました。',year:2026,image:'/images/contest-01.svg'},
{id:'contest-02',title:'AR神山マップ',author:'AR Project',tags:['AR','Unity','地域'],summary:'スマートフォン越しに会場情報を表示するAR企画。',description:'現実の風景に案内情報を重ね、初めて来る人にも分かりやすい会場案内を目指しました。',year:2026,image:'/images/contest-02.svg'},
{id:'contest-03',title:'Festival Sound',author:'Sound Makers',tags:['音楽','映像','作品'],summary:'神山祭の空気感を音と映像で表現した作品。',description:'会場の環境音とオリジナル楽曲を組み合わせたメディア作品です。',year:2025,image:'/images/contest-03.svg'},
{id:'contest-04',title:'みんなの祭アルバム',author:'Photo Circle',tags:['写真','Web','コミュニティ'],summary:'参加者が写真を投稿して作るオンラインアルバム。',description:'祭の思い出を参加者自身の視点で残すことを目的にした作品です。',year:2025,image:'/images/contest-04.svg'}
];
export const getContest=id=>contests.find(c=>c.id===id);
