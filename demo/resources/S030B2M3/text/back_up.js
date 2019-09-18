console.log('Back up exists')
const wordIndexTextFile_backUp = "车 	1_1_1\n屋 	1_2_1\n巴士 	1_3_1\n匙羮 	1_4_1\n脚 	1_5_1\n碗 	1_6_1\n门 	1_7_1\n龟 	1_8_1\n肉 	1_9_1\n琴 	1_10_1\n婆婆 	1_11_1\n蛋 	1_12_1\n菜 	1_13_1\n裙 	1_14_1\n香蕉 	1_15_1\n跑 	1_16_1\n叶 	1_17_1\n桥 	1_18_1\n落雨 	1_19_1\n曲奇饼 	1_20_1\n刀 	1_21_1\n表 	1_22_1\n信 	1_23_1\n拉链 	1_24_1\n梳 	1_25_1\n泳衣 	1_26_1\n花 	1_27_1\n电话 	1_28_1\n飞机 	1_29_1\n杯 	1_30_1\n苹果 	1_31_1\n牛 	1_32_1\n衫 	1_33_1\n一件 	1_34_1\n猫 	1_35_1\n糖 	1_36_1\n甜 	1_37_1\n蜡烛 	1_38_1\n热 	1_39_1\n裤 	1_40_1\n干 	1_41_1\n橙色 	1_42_1\n圆 	1_43_1\n汽水 	1_44_1\n渴 	1_45_1\n五 	1_46_1\n唔 	1_47_1\n瀡滑梯 	1_48_1\n男仔 	1_49_1\n出口 	1_50_1\n黑夜 	1_51_1\n春天 	1_52_1\n打风 	1_53_1\n合桃 	1_54_1\n间尺 	1_55_1\n生活 	1_56_1\n脱落 	1_57_1\n客厅 	1_58_1\n发夹 	1_59_1\n喵 	1_60_1\n舐舐脷 	1_61_1\n亚公食饭 	2_1_1\n姑姐喺边 	2_2_1\n件衫愈著愈阔 	2_3_1\n财爷派糖 	2_4_1\n俾只发夹我 	2_5_1\n李白写诗 	2_6_1\n串烧好好味 	2_7_1\n我唔口渴 	2_8_1\n爸爸接放学 	2_9_1\n食到舐舐脷 	2_10_1\n春天温暖潮湿 	2_11_1\n冇刨冰买 	2_12_1\n祝你五福临门 	2_13_1\n而家系一点 	2_14_1\n我好热 	2_15_1\n今晚煮青瓜 	2_16_1\n扔左佢 	2_17_1\n垃圾要回收 	2_18_1\n等到蚊都训 	2_19_1\n窗框漏水 	2_20_1\n佢识魔术 	2_21_1\n黑色靴靓 	2_22_1\n钻石好罕有 	2_23_1\n";
const cuTextFile_backUp = "车\n屋\n巴士\n匙羮\n脚\n碗\n牛\n龟\n肉\n琴\n婆婆\n蛋\n琴\n裙\n香蕉\n跑\n叶\n桥\n落雨\n曲奇饼\n刀\n表\n五\n拉链\n梳\n泳衣\n花\n电话\n飞机\n杯\n苹果\n牛\n衫\n一件\n猫\n糖\n甜\n蜡烛\n热\n裤\n渴\n橙色\n圆\n汽水\n婆婆\n五\n唔\n蛋\n男仔\n出口\n黑夜\n春天\n打风\n合桃\n间尺\n生活\n脱落\n客厅\n发夹\n喵\n舐舐脷\n牛桥\n姑姐喺边\n件衫愈著愈阔\n财爷派糖\n俾只发夹我\n李白写诗\n串烧好好味\n我唔口渴\n爸爸接放学\n食到舐舐脷\n春天温暖潮湿\n冇刨冰买\n祝你五福临门\n而家系一点\n我唔系热\n今晚煮青瓜\n扔左佢\n垃圾要回收\n吴发夹蚊都训\n出去唔框乐窗框漏水\n溪钻石糖\n黑色靴靓客厅\n钻石我唔口渴及喵\n";
// const cuTextFile_backUp = "車\n屋\n巴士\n匙羮\n腳\n碗\n干\n龜\n肉\n琴\n婆婆\n蛋\n糖\n裙\n香蕉\n跑\n甜\n橋\n落雨\n曲奇餅 \n刀\n表\n五\n拉鏈\n梳\n泳衣\n花\n電話\n飛機\n杯\n蘋果\n牛\n衫\n一件\n貓\n糖\n橋\n蠟燭\n熱\n褲\n干\n橙色\n圓\n汽水\n婆婆\n五\n唔\n瀡滑梯\n男仔\n出口\n黑夜\n春天\n打風\n合桃 \n間尺\n生活\n脫落\n客廳\n髮夾 \n喵\n舐舐脷\n牛裙\n姑姐喺邊 \n件衫愈著愈闊 \n財爺派糖 \n俾只髮夾我 \n李白寫詩 \n串燒好好味 \n我唔口渴 \n爸爸接放學 \n食到舐舐脷 \n春天溫暖潮濕 \n冇刨冰買 \n祝你五福臨門\n而家係一點 \n我無熱\n今晚煮青瓜 \n扔左佢 \n垃圾要回收 \n等到蚊都訓 \n窗框漏水 \n佢識魔術 \n黑色靴香蕉\n鑽石好鬼桃罕有\n";
const frameIndexTextFile_backUp = "Subject S030, Block B2: \n\nUtterance \t Begin \t End \n--------- \t ----- \t --- \nS030_B2_1_1_1 \t 30 \t 90\nS030_B2_1_2_1 \t 90 \t 170\nS030_B2_1_3_1 \t 170 \t 270\nS030_B2_1_4_1 \t 270 \t 330\nS030_B2_1_5_1 \t 330 \t 420\nS030_B2_1_6_1 \t 420 \t 465\nS030_B2_1_7_1 \t 465 \t 510\nS030_B2_1_8_1 \t 510 \t 570\nS030_B2_1_9_1 \t 570 \t 645\nS030_B2_1_10_1 \t 645 \t 720\nS030_B2_1_11_1 \t 720 \t 810\nS030_B2_1_12_1 \t 810 \t 885\nS030_B2_1_13_1 \t 885 \t 945\nS030_B2_1_14_1 \t 945 \t 1125\nS030_B2_1_15_1 \t 1125 \t 1170\nS030_B2_1_16_1 \t 1170 \t 1245\nS030_B2_1_17_1 \t 1245 \t 1350\nS030_B2_1_18_1 \t 1350 \t 1425\nS030_B2_1_19_1 \t 1425 \t 1500\nS030_B2_1_20_1 \t 1500 \t 1638\nS030_B2_1_21_1 \t 1638 \t 1680\nS030_B2_1_22_1 \t 1680 \t 1740\nS030_B2_1_23_1 \t 1740 \t 1800\nS030_B2_1_24_1 \t 1800 \t 1890\nS030_B2_1_25_1 \t 1890 \t 1980\nS030_B2_1_26_1 \t 1980 \t 2070\nS030_B2_1_27_1 \t 2070 \t 2160\nS030_B2_1_28_1 \t 2160 \t 2250\nS030_B2_1_29_1 \t 2250 \t 2370\nS030_B2_1_30_1 \t 2370 \t 2400\nS030_B2_1_31_1 \t 2400 \t 2475\nS030_B2_1_32_1 \t 2475 \t 2550\nS030_B2_1_33_1 \t 2550 \t 2610\nS030_B2_1_34_1 \t 2610 \t 2700\nS030_B2_1_35_1 \t 2700 \t 2760\nS030_B2_1_36_1 \t 2760 \t 2820\nS030_B2_1_37_1 \t 2820 \t 2910\nS030_B2_1_38_1 \t 2910 \t 2970\nS030_B2_1_39_1 \t 2970 \t 3060\nS030_B2_1_40_1 \t 3060 \t 3120\nS030_B2_1_41_1 \t 3120 \t 3180\nS030_B2_1_42_1 \t 3180 \t 3270\nS030_B2_1_43_1 \t 3270 \t 3330\nS030_B2_1_44_1 \t 3330 \t 3420\nS030_B2_1_45_1 \t 3420 \t 3480\nS030_B2_1_46_1 \t 3480 \t 3540\nS030_B2_1_47_1 \t 3540 \t 3600\nS030_B2_1_48_1 \t 3600 \t 3660\nS030_B2_1_49_1 \t 3660 \t 3750\nS030_B2_1_50_1 \t 3750 \t 3840\nS030_B2_1_51_1 \t 3840 \t 3900\nS030_B2_1_52_1 \t 3900 \t 3990\nS030_B2_1_53_1 \t 3990 \t 135.5\nS030_B2_1_54_1 \t 4051.45 \t 4126.2\nS030_B2_1_55_1 \t 4126.2 \t 4186\nS030_B2_1_56_1 \t 4186 \t 4305.6\nS030_B2_1_57_1 \t 4305.6 \t 4365.4\nS030_B2_1_58_1 \t 4365.4 \t 4485\nS030_B2_1_59_1 \t 4485 \t 4574.7\nS030_B2_1_60_1 \t 4574.7 \t 4604.6\nS030_B2_1_61_1 \t 4604.6 \t 4694.3\nS030_B2_2_1_1 \t 4694.3 \t 4813.9\nS030_B2_2_2_1 \t 4813.9 \t 4903.6\nS030_B2_2_3_1 \t 4903.6 \t 5023.2\nS030_B2_2_4_1 \t 5023.2 \t 5172.7\nS030_B2_2_5_1 \t 5172.7 \t 5292.3\nS030_B2_2_6_1 \t 5292.3 \t 5441.8\nS030_B2_2_7_1 \t 5441.8 \t 5621.2\nS030_B2_2_8_1 \t 5621.2 \t 5710.9\nS030_B2_2_9_1 \t 5710.9 \t 5815.55\nS030_B2_2_10_1 \t 5815.55 \t 5980\nS030_B2_2_11_1 \t 5980 \t 6129.5\nS030_B2_2_12_1 \t 6129.5 \t 6219.2\nS030_B2_2_13_1 \t 6219.2 \t 6338.8\nS030_B2_2_14_1 \t 6338.8 \t 6458.4\nS030_B2_2_15_1 \t 6482.32 \t 6518.2\nS030_B2_2_16_1 \t 6518.2 \t 6727.5\nS030_B2_2_17_1 \t 6727.5 \t 6802.25\nS030_B2_2_18_1 \t 6802.25 \t 6936.8\nS030_B2_2_19_1 \t 6936.8 \t 7056.4\nS030_B2_2_20_1 \t 7056.4 \t 7205.9\nS030_B2_2_21_1 \t 7205.9 \t 7355.4\nS030_B2_2_22_1 \t 7355.4 \t 7564.7\nS030_B2_2_23_1 \t 7564.7 \t 7744.1\nS030_B2_100 \t 7744.1 \t 8044.1\n";
const googleTextFile_backUp = "车\n\n巴士\n匙羮\n薑\n\n\n\n翁\n琴\n托邦\n長\n倉\n框\n香蕉\n跑\nskip\n豬紅\n落雨\n曲奇饼\n到\n表\n十五\n拉链\nsong\n泳衣\n\n電纜\n飞机\n背\n\n牛\n傻鴨\n一田\n猫\n博康\n\n蜡烛\n\n富豪\n講\n橙色\n元\n汽水\n可愛\n\n\n\n譚仔\n除下胸\n黑夜\n春天\n打风\n客房\n更正\n生活\n血流\n客厅\n發鏡\nmail\n娘娘呢\n食神\n背脊係邊\n雙魚座月份\nsiam paragon\n北京大家樂\n李白的詩\n串烧好好味\n我們樓下\n爸爸接放学\n食到舐舐脷\n春天温暖潮湿\n夢幻冰冷\n祝你福臨門\n而家係邊\n網頁\n今晚煮嘢食呀\n掉咗佢\n三杯酒\n感動漫方法\n窗框 流水\n佢食芒果\n餐廳\n鑽石罕有\n";
const humanTextFile_backUp = "车\n屋\n巴士\n匙羮\n脚\n碗\n门\n櫃\n肉\n琴\n婆婆\n蛋\n菜\n裙\n香蕉\n跑\n叶\n桥\n落雨\n曲奇饼\n刀\n表\n信\n拉链\n梳\n泳衣\n花\n电话\n飞机\n杯\n苹果\n牛\n衫\n一件\n猫\n糖\n甜\n蜡烛\n热\n裤\n干\n橙色\n圆\n汽水\n喝\n五\n唔\n瀡滑梯\n男仔\n出口\n黑夜\n春天\n打风\n合桃\n间尺\n生活\n脱落\n客厅\n发夹\n喵\n舐舐脷\n亚公食饭\n姑姐喺边\n件衫愈著愈阔\n财爷派糖\n俾只发夹我\n李白写诗\n串烧好好味\n我唔口喝\n爸爸接放学\n食到舐舐脷\n春天温暖潮湿\n冇刨冰买\n祝你五福临门\n而家系一点\n我好热\n今晚煮青瓜\n掉左佢\n垃圾要回收\n等到蚊都训\n窗框漏水\n佢识魔术\n黑色her拎\n钻石好罕有\n";