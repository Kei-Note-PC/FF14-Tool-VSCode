const MAP_LABELS = {
  "map/gaitiranosia.png": "外地ラノシア",
  "map/toubuSinrin.png": "東部森林",
  "map/東ラノシア.png": "東ラノシア",
  "map/西ザラナーン.png": "西ザラナーン",
  "map/南ザラナーン.png": "南ザラナーン",
  "map/西ラノシア.png": "西ラノシア",
  "map/モードゥナ.png": "モードゥナ",
  "map/東部森林.png": "東部森林",
};

const DOCUMENTS = {
  "enten-1": {
    title: "黄道十二文書：炎天一巻",
    images: [
      { file: "map/gaitiranosia.png", label: MAP_LABELS["map/gaitiranosia.png"] },
      {
        file: "mission/enemyPage.png",
        label: "モンスター討伐",
        note: "対象モンスターを選択してください",
        hotspots: [
          { name: "シンセティック・ドブラン", note: "対象：赤丸3か所", mapFile: "map/enemy/8.png", hotspot: { left: 57, top: 70.5, width: 10, height: 17 } },
          { name: "ミルクルート・クラスター", note: "対象：場所5", mapFile: "map/enemy/5.png", hotspot: { left: 70, top: 70.5, width: 10, height: 17 } },
          { name: "ジャイアント・ロガー", note: "対象マップ：クルザス中央高地 / 出現場所10", mapFile: "map/enemy/10.png", hotspot: { left: 41.5, top: 66, width: 14, height: 21 } },
          { name: "バジリスク", note: "対象マップ：北ザラナーン / 出現場所1", mapFile: "map/enemy/1.png", hotspot: { left: 85, top: 36, width: 15, height: 21 } },
          { name: "Ⅱ子ホルス・ホブロマクス", note: "対象マップ：東ラノシア / 出現場所2", mapFile: "map/enemy/2.png", hotspot: { left: 85, top: 66.5, width: 15, height: 21 } },
          { name: "Ⅳコホルス・ホブロマクス", note: "対象マップ：西ザラナーン / 出現場所3", mapFile: "map/enemy/3.png", hotspot: { left: 69.5, top: 33, width: 11, height: 15 } },
          { name: "ザンラク・ピュージャリスト", note: "対象マップ：南ザラナーン / 出現場所4", mapFile: "map/enemy/4.png", hotspot: { left: 69.5, top: 51.5, width: 11, height: 16 } },
          { name: "ショアルスパイン・サハギン", note: "対象マップ：西ラノシア / 出現場所6", mapFile: "map/enemy/6.png", hotspot: { left: 57, top: 33.5, width: 11, height: 16 } },
          { name: "Ⅴコホルス・ヴァンガード", note: "対象マップ：モードゥナ / 出現場所7", mapFile: "map/enemy/7.png", hotspot: { left: 56.5, top: 52, width: 10, height: 17 } },
          { name: "デアリング・ハリアー", note: "対象マップ：モードゥナ / 出現場所9", mapFile: "map/enemy/9.png", hotspot: { left: 41, top: 40, width: 13, height: 22 } },
        ],
      },
      {
        file: "mission/fatePasge.png",
        label: "FATE",
        note: "対象FATEを選択してください",
        hotspots: [
          { name: "雷雨を呼ぶ者「ブラウンガー」", note: "対象：中央", mapFile: "map/fate/2.png", hotspot: { left: 62, top: 51.5, width: 33, height: 52 }, shape: "polygon(0 0, 100% 0, 68% 100%, 38% 100%)" },
          { name: "※続ラークスコール遭遇戦", note: "対象マップ：東部森林 / 出現場所1", mapFile: "map/fate/1.png", hotspot: { left: 82, top: 52, width: 28, height: 52 }, shape: "polygon(38% 0, 100% 2%, 100% 100%, 0 100%)" },
          { name: "	騎兵の天敵「セプズ」", note: "対象マップ：モードゥナ / 出現場所3", mapFile: "map/fate/3.png", hotspot: { left: 44, top: 51.5, width: 28, height: 52 }, shape: "polygon(0 0, 55% 0, 100% 100%, 0 100%)" },
        ],
      },
    ],
  },
  "enten-2": {
    title: "黄道十二文書：炎天二巻",
    folder: "炎天二巻",
    images: [
      {
        file: "mission/enemyPage.png",
        label: "モンスター討伐",
        note: "対象アイコンにカーソルを合わせてください",
        hotspots: [
          { name: "テンパード・グラディエイター", mapFile: "map/enemy/1.png", hotspot: { left: 57, top: 70.5, width: 10, height: 17 } },
          { name: "ザハラク・アーチャー", mapFile: "map/enemy/2.png", hotspot: { left: 70, top: 70.5, width: 10, height: 17 } },
          { name: "シルフィード・サイ", mapFile: "map/enemy/3.png", hotspot: { left: 41.5, top: 66, width: 14, height: 21 } },
          { name: "ウ・ガマロ・ゴーレム", mapFile: "map/enemy/4.png", hotspot: { left: 85, top: 36, width: 15, height: 21 } },
          { name: "ナタラン・ボールドウイング", mapFile: "map/enemy/5.png", hotspot: { left: 85, top: 66.5, width: 15, height: 21 } },
          { name: "デュラハン", mapFile: "map/enemy/6.png", hotspot: { left: 69.5, top: 33, width: 11, height: 15 } },
          { name: "海蛇の赤き鱗", mapFile: "map/enemy/7.png", hotspot: { left: 69.5, top: 51.5, width: 11, height: 16 } },
          { name: "ビアスト", mapFile: "map/enemy/8.png", hotspot: { left: 57, top: 33.5, width: 11, height: 16 } },
          { name: "ショアルトゥース・サハギン", mapFile: "map/enemy/9.png", hotspot: { left: 56.5, top: 52, width: 10, height: 17 } },
          { name: "レイジング・ハリアー", mapFile: "map/enemy/10.png", hotspot: { left: 41, top: 40, width: 13, height: 22 } },
        ],
      },
      {
        file: "mission/fatePasge.png",
        label: "FATE",
        note: "対象アイコンにカーソルを合わせてください",
        hotspots: [
          { name: "我ら第二戦闘大隊", note: "対象：中央", mapFile: "map/fate/1.png", hotspot: { left: 62, top: 51.5, width: 33, height: 52 }, shape: "polygon(0 0, 100% 0, 68% 100%, 38% 100%)" },
          { name: "イクサル軍伐採所強襲作戦", note: "対象マップ：東部森林", mapFile: "map/fate/2.png", hotspot: { left: 82, top: 52, width: 28, height: 52 }, shape: "polygon(38% 0, 100% 2%, 100% 100%, 0 100%)" },
          { name: "	南防波壁の戦い：本体強襲", note: "対象マップ：モードゥナ", mapFile: "map/fate/3.png", hotspot: { left: 44, top: 51.5, width: 28, height: 52 }, shape: "polygon(0 0, 55% 0, 100% 100%, 0 100%)" },
        ],
      },
    ],
  },
  "engoku-1": {
    title: "黄道十二文書：炎獄一巻（炎天3）",
    folder: "炎獄一巻(炎天３)",
    images: [
      {
        file: "mission/enemyPage.png",
        label: "モンスター討伐",
        note: "エネミー番号にカーソルを合わせてください",
        hotspots: [
          { name: "テンパード・オラター", number: 1, mapFile: "map/enemy/1.png", hotspot: { left: 57, top: 70.5, width: 10, height: 17 } },
          { name: "海蛇の赤き爪", number: 2, mapFile: "map/enemy/2.png", hotspot: { left: 70, top: 70.5, width: 10, height: 17 } },
          { name: "ヘキシング・ハリアー", number: 3, mapFile: "map/enemy/3.png", hotspot: { left: 41.5, top: 66, width: 14, height: 21 } },
          { name: "ザハラク・フォーチュンテラー", number: 4, mapFile: "map/enemy/4.png", hotspot: { left: 85, top: 36, width: 15, height: 21 } },
          { name: "IIコホルス・ラクエリウス", number: 5, mapFile: "map/enemy/5.png", hotspot: { left: 85, top: 66.5, width: 15, height: 21 } },
          { name: "ギガーズ・ボンズ", number: 6, mapFile: "map/enemy/6.png", hotspot: { left: 69.5, top: 33, width: 11, height: 15 } },
          { name: "ウ・ガマロ・ラウンズマン", number: 7, mapFile: "map/enemy/7.png", hotspot: { left: 69.5, top: 51.5, width: 11, height: 16 } },
          { name: "シルフィード・スクリーチ", number: 8, mapFile: "map/enemy/8.png", hotspot: { left: 57, top: 33.5, width: 11, height: 16 } },
          { name: "ジャイアント・ラガー", number: 9, mapFile: "map/enemy/9.png", hotspot: { left: 56.5, top: 52, width: 10, height: 17 } },
          { name: "ワイルドホッグ", number: 10, mapFile: "map/enemy/10.png", hotspot: { left: 41, top: 40, width: 13, height: 22 } },
        ],
      },
      {
        file: "mission/fatePasge.png",
        label: "FATE",
        note: "FATE番号にカーソルを合わせてください",
        hotspots: [
          { name: "とてとて楽しいキノコ狩り", number: 1, mapFile: "map/fate/1.png", hotspot: { left: 62, top: 51.5, width: 33, height: 52 }, shape: "polygon(0 0, 100% 0, 68% 100%, 38% 100%)" },
          { name: "運命の代弁者　「黒煙のペグジ・チャー」", number: 2, mapFile: "map/fate/2.png", hotspot: { left: 82, top: 52, width: 28, height: 52 }, shape: "polygon(38% 0, 100% 2%, 100% 100%, 0 100%)" },
          { name: "残忍なる悪鬼　「ボリュス」", number: 3, mapFile: "map/fate/3.png", hotspot: { left: 44, top: 51.5, width: 28, height: 52 }, shape: "polygon(0 0, 55% 0, 100% 100%, 0 100%)" },
        ],
      },
    ],
  },
  "suiten-1": {
    title: "黄道十二文書：水天一巻",
    folder: "水天一巻",
    images: [
      {
        file: "mission/enemyPage.png",
        label: "モンスター討伐",
        note: "エネミー番号にカーソルを合わせてください",
        hotspots: [
          { name: "ジャイアントリーダー", number: 1, mapFile: "map/enemy/1.png", hotspot: { left: 57, top: 70.5, width: 10, height: 17 } },
          { name: "シーワスプ", number: 2, mapFile: "map/enemy/2.png", hotspot: { left: 70, top: 70.5, width: 10, height: 17 } },
          { name: "マッドパピー", number: 3, mapFile: "map/enemy/3.png", hotspot: { left: 41.5, top: 66, width: 14, height: 21 } },
          { name: "魔導ヴァンガード", number: 4, mapFile: "map/enemy/4.png", hotspot: { left: 85, top: 36, width: 15, height: 21 } },
          { name: "IIコホルス・エクエス", number: 5, mapFile: "map/enemy/5.png", hotspot: { left: 85, top: 66.5, width: 15, height: 21 } },
          { name: "ウ・ガマロ・クォーリーマン", number: 6, mapFile: "map/enemy/6.png", hotspot: { left: 69.5, top: 33, width: 11, height: 15 } },
          { name: "シルフランド・センチネル", number: 7, mapFile: "map/enemy/7.png", hotspot: { left: 69.5, top: 51.5, width: 11, height: 16 } },
          { name: "アマルジャ・ランサー", number: 8, mapFile: "map/enemy/8.png", hotspot: { left: 57, top: 33.5, width: 11, height: 16 } },
          { name: "レイクコブラ", number: 9, mapFile: "map/enemy/9.png", hotspot: { left: 56.5, top: 52, width: 10, height: 17 } },
          { name: "シェルフスケールサハギン", number: 10, mapFile: "map/enemy/10.png", hotspot: { left: 41, top: 40, width: 13, height: 22 } },
        ],
      },
      {
        file: "mission/fatePasge.png",
        label: "FATE",
        note: "FATE番号にカーソルを合わせてください",
        hotspots: [
          { name: "異国の魔蟲「マンティスキング」", number: 1, mapFile: "map/fate/1.png", hotspot: { left: 62, top: 51.5, width: 33, height: 52 }, shape: "polygon(0 0, 100% 0, 68% 100%, 38% 100%)" },
          { name: "ワサワサドブラン ", number: 2, mapFile: "map/fate/2.png", hotspot: { left: 82, top: 52, width: 28, height: 52 }, shape: "polygon(38% 0, 100% 2%, 100% 100%, 0 100%)" },
          { name: "大口の悪鬼「ガルガメル」", number: 3, mapFile: "map/fate/3.png", hotspot: { left: 44, top: 51.5, width: 28, height: 52 }, shape: "polygon(0 0, 55% 0, 100% 100%, 0 100%)" },
        ],
      },
    ],
   },
  "suiten-2": {
    title: "黄道十二文書：水天二巻",
    folder: "水天二巻",
    images: [
      {
        file: "mission/enemyPage.png",
        label: "モンスター討伐",
        note: "エネミー番号にカーソルを合わせてください",
        hotspots: [
          { name: "海蛇の赤き目", number: 1, mapFile: "map/enemy/1.png", hotspot: { left: 57, top: 70.5, width: 10, height: 17 } },
          { name: "ナタラン・ウォッチウルフ", number: 2, mapFile: "map/enemy/2.png", hotspot: { left: 70, top: 70.5, width: 10, height: 17 } },
          { name: "Vコホルス・ホプロマスク", number: 3, mapFile: "map/enemy/3.png", hotspot: { left: 41.5, top: 66, width: 14, height: 21 } },
          { name: "ギガース・ピグ", number: 4, mapFile: "map/enemy/4.png", hotspot: { left: 85, top: 36, width: 15, height: 21 } },
          { name: "サプサ・シェルフスケール", number: 5, mapFile: "map/enemy/5.png", hotspot: { left: 85, top: 66.5, width: 15, height: 21 } },
          { name: "IVコホルス・ラクエリウス ", number: 6, mapFile: "map/enemy/6.png", hotspot: { left: 69.5, top: 33, width: 11, height: 15 } },
          { name: "シルフ・ボンネット", number: 7, mapFile: "map/enemy/7.png", hotspot: { left: 69.5, top: 51.5, width: 11, height: 16 } },
          { name: "ケッド", number: 8, mapFile: "map/enemy/8.png", hotspot: { left: 57, top: 33.5, width: 11, height: 16 } },
          { name: "ウ・ガマロ・ビーズマン", number: 9, mapFile: "map/enemy/9.png", hotspot: { left: 56.5, top: 52, width: 10, height: 17 } },
          { name: "アイアントータス", number: 10, mapFile: "map/enemy/10.png", hotspot: { left: 41, top: 40, width: 13, height: 22 } },
        ],
      },
      {
        file: "mission/fatePasge.png",
        label: "FATE",
        note: "FATE番号にカーソルを合わせてください",
        hotspots: [
          { name: "湿林の怨念「ンブル」", number: 1, mapFile: "map/fate/1.png", hotspot: { left: 62, top: 51.5, width: 33, height: 52 }, shape: "polygon(0 0, 100% 0, 68% 100%, 38% 100%)" },
          { name: "覚醒のダキシオ ", number: 2, mapFile: "map/fate/2.png", hotspot: { left: 82, top: 52, width: 28, height: 52 }, shape: "polygon(38% 0, 100% 2%, 100% 100%, 0 100%)" },
          { name: "※北防波壁の戦い：本隊強襲", number: 3, mapFile: "map/fate/3.png", hotspot: { left: 44, top: 51.5, width: 28, height: 52 }, shape: "polygon(0 0, 55% 0, 100% 100%, 0 100%)" },
        ],
      },
    ],
   },
  "suigoku-1": {
    title: "黄道十二文書：水獄一巻（水天3）",
    folder: "水獄一巻(水天３)",
    images: [
      {
        file: "mission/enemyPage.png",
        label: "モンスター討伐",
        note: "エネミー番号にカーソルを合わせてください",
        hotspots: [
          { name: "スノウウルフ", number: 1, mapFile: "map/enemy/1.png", hotspot: { left: 57, top: 70.5, width: 10, height: 17 } },
          { name: "IVコホルス・セクトール", number: 2, mapFile: "map/enemy/2.png", hotspot: { left: 70, top: 70.5, width: 10, height: 17 } },
          { name: "カロング", number: 3, mapFile: "map/enemy/3.png", hotspot: { left: 41.5, top: 66, width: 14, height: 21 } },
          { name: "ヴァイオレット・スクリーチ", number: 4, mapFile: "map/enemy/4.png", hotspot: { left: 85, top: 36, width: 15, height: 21 } },
          { name: "サプサ・シェルフクロウ", number: 5, mapFile: "map/enemy/5.png", hotspot: { left: 85, top: 66.5, width: 15, height: 21 } },
          { name: "イクサル・ウインドタロン", number: 6, mapFile: "map/enemy/6.png", hotspot: { left: 69.5, top: 33, width: 11, height: 15 } },
          { name: "ウ・ガマロ・プリースト", number: 7, mapFile: "map/enemy/7.png", hotspot: { left: 69.5, top: 51.5, width: 11, height: 16 } },
          { name: "Vコホルス・ラクエリウス", number: 8, mapFile: "map/enemy/8.png", hotspot: { left: 57, top: 33.5, width: 11, height: 16 } },
          { name: "ギガース・ソーズ", number: 9, mapFile: "map/enemy/9.png", hotspot: { left: 56.5, top: 52, width: 10, height: 17 } },
          { name: "アマルジャ・ブリガンド", number: 10, mapFile: "map/enemy/10.png", hotspot: { left: 41, top: 40, width: 13, height: 22 } },
        ],
      },
      {
        file: "mission/fatePasge.png",
        label: "FATE",
        note: "FATE番号にカーソルを合わせてください",
        hotspots: [
          { name: "※セルリウムロード", number: 1, mapFile: "map/fate/1.png", hotspot: { left: 62, top: 51.5, width: 33, height: 52 }, shape: "polygon(0 0, 100% 0, 68% 100%, 38% 100%)" },
          { name: "烈風の勇士「フェロック四姉妹」", number: 2, mapFile: "map/fate/2.png", hotspot: { left: 82, top: 52, width: 28, height: 52 }, shape: "polygon(38% 0, 100% 2%, 100% 100%, 0 100%)" },
          { name: "遺跡の亡霊騎士「ダイダロス」", number: 3, mapFile: "map/fate/3.png", hotspot: { left: 44, top: 51.5, width: 28, height: 52 }, shape: "polygon(0 0, 55% 0, 100% 100%, 0 100%)" },
        ],
      },
    ],
  },
  "futen-1": { 
    title: "黄道十二文書：風天一巻", 
    folder: "風天一巻",

        images: [
      {
        file: "mission/enemyPage.png",
        label: "モンスター討伐",
        note: "エネミー番号にカーソルを合わせてください",
        hotspots: [
          { name: "ヒッポグリフ", number: 1, mapFile: "map/enemy/1.png", hotspot: { left: 57, top: 70.5, width: 10, height: 17 } },
          { name: "エリート・ラウンズマン", number: 2, mapFile: "map/enemy/2.png", hotspot: { left: 70, top: 70.5, width: 10, height: 17 } },
          { name: "アマルジャ・サーマタージ", number: 3, mapFile: "map/enemy/3.png", hotspot: { left: 41.5, top: 66, width: 14, height: 21 } },
          { name: "アーリマン", number: 4, mapFile: "map/enemy/4.png", hotspot: { left: 85, top: 36, width: 15, height: 21 } },
          { name: "IIコホルス・セクトール", number: 5, mapFile: "map/enemy/5.png", hotspot: { left: 85, top: 66.5, width: 15, height: 21 } },
          { name: "トレンチトゥース・サハギン", number: 6, mapFile: "map/enemy/6.png", hotspot: { left: 69.5, top: 33, width: 11, height: 15 } },
          { name: "ナタラン・ウインドタロン", number: 7, mapFile: "map/enemy/7.png", hotspot: { left: 69.5, top: 51.5, width: 11, height: 16 } },
          { name: "Vコホルス・エクエス", number: 8, mapFile: "map/enemy/8.png", hotspot: { left: 57, top: 33.5, width: 11, height: 16 } },
          { name: "サプサ・エルブスト", number: 9, mapFile: "map/enemy/9.png", hotspot: { left: 56.5, top: 52, width: 10, height: 17 } },
          { name: "シルフィード・スナール", number: 10, mapFile: "map/enemy/10.png", hotspot: { left: 41, top: 40, width: 13, height: 22 } },
        ],
      },
      {
        file: "mission/fatePasge.png",
        label: "FATE",
        note: "FATE番号にカーソルを合わせてください",
        hotspots: [
          { name: "陰険なる魔物「スパイトフル」", number: 1, mapFile: "map/fate/1.png", hotspot: { left: 62, top: 51.5, width: 33, height: 52 }, shape: "polygon(0 0, 100% 0, 68% 100%, 38% 100%)" },
          { name: "モルボル怒りの大繁殖", number: 2, mapFile: "map/fate/2.png", hotspot: { left: 82, top: 52, width: 28, height: 52 }, shape: "polygon(38% 0, 100% 2%, 100% 100%, 0 100%)" },
          { name: "輸送部隊防衛指令", number: 3, mapFile: "map/fate/3.png", hotspot: { left: 44, top: 51.5, width: 28, height: 52 }, shape: "polygon(0 0, 55% 0, 100% 100%, 0 100%)" },
        ],
      },
    ],

   },
  "futen-2": {
    title: "黄道十二文書：風天二巻",
    folder: "風天二巻",
    images: [
      {
        file: "mission/enemyPage.png",
        label: "モンスター討伐",
        note: "エネミー番号にカーソルを合わせてください",
        hotspots: [
          { name: "アマルジャ・アーチャー", number: 1, mapFile: "map/enemy/1.png", hotspot: { left: 57, top: 70.5, width: 10, height: 17 } },
          { name: "サプサ・シェルフトゥース", number: 2, mapFile: "map/enemy/2.png", hotspot: { left: 70, top: 70.5, width: 10, height: 17 } },
          { name: "IVコホルス・シグニフェル", number: 3, mapFile: "map/enemy/3.png", hotspot: { left: 41.5, top: 66, width: 14, height: 21 } },
          { name: "ナタラン・フォグコーラー", number: 4, mapFile: "map/enemy/4.png", hotspot: { left: 85, top: 36, width: 15, height: 21 } },
          { name: "エリート・プリースト", number: 5, mapFile: "map/enemy/5.png", hotspot: { left: 85, top: 66.5, width: 15, height: 21 } },
          { name: "Vコホルス・シグニフェル", number: 6, mapFile: "map/enemy/6.png", hotspot: { left: 69.5, top: 33, width: 11, height: 15 } },
          { name: "ザハラク・バトルドレイク", number: 7, mapFile: "map/enemy/7.png", hotspot: { left: 69.5, top: 51.5, width: 11, height: 16 } },
          { name: "ドリーム・トード", number: 8, mapFile: "map/enemy/8.png", hotspot: { left: 57, top: 33.5, width: 11, height: 16 } },
          { name: "ウォッチウルフ", number: 9, mapFile: "map/enemy/9.png", hotspot: { left: 56.5, top: 52, width: 10, height: 17 } },
          { name: "ギガース・シャモン", number: 10, mapFile: "map/enemy/10.png", hotspot: { left: 41, top: 40, width: 13, height: 22 } },
        ],
      },
      {
        file: "mission/fatePasge.png",
        label: "FATE",
        note: "FATE番号にカーソルを合わせてください",
        hotspots: [
          { name: "※アインハルトの意地", number: 1, mapFile: "map/fate/1.png", hotspot: { left: 62, top: 51.5, width: 33, height: 52 }, shape: "polygon(0 0, 100% 0, 68% 100%, 38% 100%)" },
          { name: "最後の闘猪王「パイア」", number: 2, mapFile: "map/fate/2.png", hotspot: { left: 82, top: 52, width: 28, height: 52 }, shape: "polygon(38% 0, 100% 2%, 100% 100%, 0 100%)" },
          { name: "友と家族と", number: 3, mapFile: "map/fate/3.png", hotspot: { left: 44, top: 51.5, width: 28, height: 52 }, shape: "polygon(0 0, 55% 0, 100% 100%, 0 100%)" },
        ],
      },
    ],
  },
  "doten-1": {
    title: "黄道十二文書：土天一巻",
    folder: "土天一巻",
    images: [
      {
        file: "mission/enemyPage.png",
        label: "モンスター討伐",
        note: "エネミー番号にカーソルを合わせてください",
        hotspots: [
          { name: "アクソロトル", number: 1, mapFile: "map/enemy/1.png", hotspot: { left: 57, top: 70.5, width: 10, height: 17 } },
          { name: "ナタラン・スウィフトビーク", number: 2, mapFile: "map/enemy/2.png", hotspot: { left: 70, top: 70.5, width: 10, height: 17 } },
          { name: "Vコホルス・セクトール", number: 3, mapFile: "map/enemy/3.png", hotspot: { left: 41.5, top: 66, width: 14, height: 21 } },
          { name: "ヴァイオレット・サイ", number: 4, mapFile: "map/enemy/4.png", hotspot: { left: 85, top: 36, width: 15, height: 21 } },
          { name: "IIコホルス・シグニフェル", number: 5, mapFile: "map/enemy/5.png", hotspot: { left: 85, top: 66.5, width: 15, height: 21 } },
          { name: "ハパリット", number: 6, mapFile: "map/enemy/6.png", hotspot: { left: 69.5, top: 33, width: 11, height: 15 } },
          { name: "エリート・クォーリーマン", number: 7, mapFile: "map/enemy/7.png", hotspot: { left: 69.5, top: 51.5, width: 11, height: 16 } },
          { name: "イクサル・ボールドウィング", number: 8, mapFile: "map/enemy/8.png", hotspot: { left: 57, top: 33.5, width: 11, height: 16 } },
          { name: "ザハラク・ピュージャリスト", number: 9, mapFile: "map/enemy/9.png", hotspot: { left: 56.5, top: 52, width: 10, height: 17 } },
          { name: "アマルジャ・スカベンジャー", number: 10, mapFile: "map/enemy/10.png", hotspot: { left: 41, top: 40, width: 13, height: 22 } },
        ],
      },
      {
        file: "mission/fatePasge.png",
        label: "FATE",
        note: "FATE番号にカーソルを合わせてください",
        hotspots: [
          { name: "試掘地強襲作戦", number: 1, mapFile: "map/fate/1.png", hotspot: { left: 62, top: 51.5, width: 33, height: 52 }, shape: "polygon(0 0, 100% 0, 68% 100%, 38% 100%)" },
          { name: "醜悪な合成獣「バドゥ」 ", number: 2, mapFile: "map/fate/2.png", hotspot: { left: 82, top: 52, width: 28, height: 52 }, shape: "polygon(38% 0, 100% 2%, 100% 100%, 0 100%)" },
          { name: "雪山の襲撃者「セベク」", number: 3, mapFile: "map/fate/3.png", hotspot: { left: 44, top: 51.5, width: 28, height: 52 }, shape: "polygon(0 0, 55% 0, 100% 100%, 0 100%)" },
        ],
      },
    ],
  },
};

const key = new URLSearchParams(window.location.search).get("book");
const documentData = DOCUMENTS[key] || DOCUMENTS["enten-1"];
const sourceUrl = `https://ff14-yun.com/archives/985#${encodeURIComponent(documentData.title)}`;
const localImageBase = `/Frontend/images/ゾディアックウェポン/黄道十二文書/${documentData.folder || "炎天一巻"}/`;

document.title = `${documentData.title} — FF14 Tools`;
document.querySelector("#document-title").textContent = documentData.title;
document.querySelector("#document-description").textContent = "マップ上の対象を確認して、ゲーム内で討伐してください。";
const gallery = document.querySelector("#document-gallery");
const imageUrls = documentData.images
  ? documentData.images.map((image) => ({ ...image, url: encodeURI(`${localImageBase}${image.file}`) }))
  : [{ label: "討伐対象マップ", url: encodeURI(`https://ff14-yun.com/wp-content/uploads/${documentData.year}/${documentData.file}`) }];
if (imageUrls.length === 0) {
  const emptyState = document.createElement("p");
  emptyState.className = "document-empty-state";
  emptyState.textContent = documentData.emptyMessage;
  gallery.appendChild(emptyState);
}
for (const [index, imageData] of imageUrls.entries()) {
  const figure = document.createElement("figure");
  figure.className = imageData.note ? "document-figure document-figure--target" : "document-figure";
  const image = document.createElement("img");
  image.className = "document-detail__map";
  image.src = imageData.url;
  image.alt = `${documentData.title} ${imageData.label}`;
  image.loading = "lazy";
  const frame = document.createElement("div");
  frame.className = "document-image-frame";
  frame.appendChild(image);
  const hotspots = imageData.hotspots || (imageData.hotspot ? [imageData] : []);
  for (const [hotspotIndex, hotspotData] of hotspots.entries()) {
    const hotspot = document.createElement("button");
    hotspot.type = "button";
    hotspot.className = "image-hotspot";
    hotspot.tabIndex = 0;
    hotspot.setAttribute("aria-label", hotspotData.name || `${imageData.label}の対象アイコン`);
    hotspot.dataset.tooltip = hotspotData.name || imageData.label;
    hotspot.style.left = `${hotspotData.hotspot.left}%`;
    hotspot.style.top = `${hotspotData.hotspot.top}%`;
    hotspot.style.width = `${hotspotData.hotspot.width}%`;
    hotspot.style.height = `${hotspotData.hotspot.height}%`;
    if (hotspotData.shape) hotspot.style.setProperty("--hotspot-shape", hotspotData.shape);
    const number = document.createElement("span");
    number.className = "image-hotspot__number";
    number.textContent = hotspotData.number || hotspotIndex + 1;
    number.setAttribute("aria-hidden", "true");
    hotspot.appendChild(number);
    const outline = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    outline.classList.add("image-hotspot__outline");
    outline.setAttribute("viewBox", "0 0 100 100");
    outline.setAttribute("aria-hidden", "true");
    const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    const shapePoints = hotspotData.shape
      ? [...hotspotData.shape.matchAll(/(\d+(?:\.\d+)?)%?\s+(\d+(?:\.\d+)?)%?/g)].map((match) => `${match[1]},${match[2]}`).join(" ")
      : "0,0 100,0 100,100 0,100";
    polygon.setAttribute("points", shapePoints);
    outline.appendChild(polygon);
    hotspot.appendChild(outline);
    if (hotspotData.mapFile) hotspot.addEventListener("click", () => openTargetModal({ ...imageData, ...hotspotData }));
    frame.appendChild(hotspot);
  }
  figure.appendChild(frame);
  const caption = document.createElement("figcaption");
  caption.textContent = imageData.note ? `${imageData.label}：${imageData.note}` : imageData.label;
  figure.appendChild(caption);
  gallery.appendChild(figure);
}
document.querySelector("#source-link").href = sourceUrl;

const targetModal = document.querySelector("#target-modal");
const targetModalTitle = document.querySelector("#target-modal-title");
const targetModalNote = document.querySelector("#target-modal-note");
const targetModalMap = document.querySelector("#target-modal-map");

function openTargetModal(imageData) {
  targetModalTitle.textContent = imageData.name || imageData.label;
  targetModalNote.textContent = imageData.note;
  targetModalMap.src = encodeURI(`${localImageBase}${imageData.mapFile || "map/gaitiranosia.png"}`);
  targetModalMap.alt = `${imageData.label}の出現場所マップ`;
  targetModal.hidden = false;
  targetModal.classList.add("modal-overlay--open");
  document.querySelector("#target-modal-close").focus();
}

function closeTargetModal() {
  targetModal.classList.remove("modal-overlay--open");
  targetModal.hidden = true;
}

document.querySelector("#target-modal-close").addEventListener("click", closeTargetModal);
targetModal.addEventListener("click", (event) => {
  if (event.target === targetModal) closeTargetModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !targetModal.hidden) closeTargetModal();
});