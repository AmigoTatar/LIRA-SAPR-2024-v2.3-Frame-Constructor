// === 1. СТАРТОВАЯ БАЗА ИЗ 59 ПРОФИЛЕЙ (ЧАСТЬ А: ДВУТАВРЫ) ===
const INITIAL_PROFILES_RAW = [
    ["Двутавр", "Двутавр 10Б1 (ГОСТ Р 57837)", "21678.3 35.9226 3.34418 0.0927588 0 0 /\n0 Y 0.00560958 0.00560958 Z 0.0331415 0.0331415 /\n0 RO 0.0081/\n0 S8 13 5.5 10 0 0", "DoubleT", "dv-b_gostr-57837-2017.profiles.srt", "10Б1", ""],
    ["Двутавр", "Двутавр 12Б1 (ГОСТ Р 57837)", "23169.8 54.0614 4.70328 0.0795803 0 0 /\n0 Y 0.00634349 0.00634349 Z 0.0396815 0.0396815 /\n0 RO 0.0087/\n0 S8 13 6.4 11.76 0 0", "DoubleT", "dv-b_gostr-57837-2017.profiles.srt", "12Б1", ""],
    ["Двутавр", "Двутавр 14Б1 (ГОСТ Р 57837)", "28127.2 91.3474 7.65044 0.107129 0 0 /\n0 Y 0.00745189 0.00745189 Z 0.0472729 0.0472729 /\n0 RO 0.0105/\n0 S8 13 7.3 13.74 0 0", "DoubleT", "dv-b_gostr-57837-2017.profiles.srt", "14Б1", ""],
    ["Двутавр", "Двутавр 16Б1 (ГОСТ Р 57837)", "33800 144.7 11.3 0.16 0 0 /\n0 Y 0.0084 0.0084 Z 0.054 0.054 /\n0 RO 0.0127/\n0 S8 13 8.2 15.7 0 0", "DoubleT", "dv-b_gostr-57837-2017.profiles.srt", "16Б1", ""],
    ["Двутавр", "Двутавр 18Б1 (ГОСТ Р 57837)", "41130 223.295 17.204 0.212958 0 0 /\n0 Y 0.00919306 0.00919306 Z 0.0613447 0.0613447 /\n0 RO 0.01536/\n0 S8 13 9.1 17.7 0 0", "DoubleT", "dv-b_gostr-57837-2017.profiles.srt", "18Б1", ""],
    ["Двутавр", "Двутавр 20Б1 (ГОСТ Р 57837)", "57052.7 387.408 28.1293 0.459701 0 0 /\n0 Y 0.00986083 0.00986083 Z 0.0679035 0.0679035 /\n0 RO 0.0213/\n0 S8 13 10 20 0 0", "DoubleT", "dv-b_gostr-57837-2017.profiles.srt", "20Б1", ""],
    ["Двутавр", "Двутавр 25Б1 (ГОСТ Р 57837)", "68648.1 743.011 53.5342 0.533437 0 0 /\n0 Y 0.012578 0.012578 Z 0.0872861 0.0872861 /\n0 RO 0.0257/\n0 S8 13 12.4 24.8 0 0", "DoubleT", "dv-b_gostr-57837-2017.profiles.srt", "25Б1", ""],
    ["Двутавр", "Двутавр 30Б1 (ГОСТ Р 57837)", "85705.1 1327.22 92.8472 0.683771 0 0 /\n0 Y 0.0145414 0.0145414 Z 0.103932 0.103932 /\n0 RO 0.032/\n0 S8 13 14.9 29.8 0 0", "DoubleT", "dv-b_gostr-57837-2017.profiles.srt", "30Б1", ""],
    ["Двутавр", "Двутавр 35Б1 (ГОСТ Р 57837)", "110660 2330.53 166.272 1.08087 0 0 /\n0 Y 0.0172706 0.0172706 Z 0.121735 0.121735 /\n0 RO 0.0414/\n0 S8 13 17.4 34.6 0 0", "DoubleT", "dv-b_gostr-57837-2017.profiles.srt", "35Б1", ""],
    ["Двутавр", "Двутавр 40Б1 (ГОСТ Р 57837)", "151580 4205.19 303.988 2.15336 0 0 /\n0 Y 0.0201554 0.0201554 Z 0.140113 0.140113 /\n0 RO 0.0566/\n0 S8 13 19.9 39.6 0 0", "DoubleT", "dv-b_gostr-57837-2017.profiles.srt", "40Б1", ""],
    ["Двутавр", "Двутавр 45Б1 (ГОСТ Р 57837)", "194055 7739.06 332.309 3.54156 0 0 /\n0 Y 0.0172105 0.0172105 Z 0.162117 0.162117 /\n0 RO 0.0725/\n0 S8 13 19.9 49.2 0 0", "DoubleT", "dv-b_gostr-57837-2017.profiles.srt", "45Б1", ""],
    ["Двутавр", "Двутавр 50Б1 (ГОСТ Р 57837)", "194055 7739.06 332.309 3.54156 0 0 /\n0 Y 0.0172105 0.0172105 Z 0.162117 0.162117 /\n0 RO 0.0725/\n0 S8 13 19.9 49.6 0 0", "DoubleT", "dv-b_gostr-57837-2017.profiles.srt", "50Б1", ""],
    ["Двутавр", "Двутавр 20К1 (ГОСТ Р 57837)", "110681 807.897 276.021 1.40575 0 0 /\n0 Y 0.0250636 0.0250636 Z 0.0744826 0.0744826 /\n0 RO 0.04134/\n0 S8 13 19.9 19.6 0 0", "DoubleT", "dv-k_gostr-57837-2017.profiles.srt", "20К1", ""],
    ["Двутавр", "Двутавр 25К1 (ГОСТ Р 57837)", "167461 1926.46 649.103 3.08175 0 0 /\n0 Y 0.0311337 0.0311337 Z 0.0935277 0.0935277 /\n0 RO 0.0626/\n0 S8 13 24.9 24.6 0 0", "DoubleT", "dv-k_gostr-57837-2017.profiles.srt", "25К1", ""],
    ["Двутавр", "Двутавр 30К1 (ГОСТ Р 57837)", "226866 3804.21 1276.96 5.2352 0 0 /\n0 Y 0.0375247 0.0375247 Z 0.113301 0.113301 /\n0 RO 0.08475/\n0 S8 13 30 29.6 0 0", "DoubleT", "dv-k_gostr-57837-2017.profiles.srt", "30К1", ""],
    ["Двутавр", "Двутавр 30К2 (ГОСТ Р 57837)", "260500 4450 1500 8.5 0 0 /\n0 Y 0.038 0.038 Z 0.115 0.115 /\n0 RO 0.097/\n0 S8 13 30 30 0 0", "DoubleT", "dv-k_gostr-57837-2017.profiles.srt", "30К2", ""],
    ["Двутавр", "Двутавр 35К1 (ГОСТ Р 57837)", "293456 6640.05 2251.86 8.31951 0 0 /\n0 Y 0.0438491 0.0438491 Z 0.131936 0.131936 /\n0 RO 0.1096/\n0 S8 13 35 34.3 0 0", "DoubleT", "dv-k_gostr-57837-2017.profiles.srt", "35К1", ""],
    ["Двутавр", "Двутавр 35К2 (ГОСТ Р 57837)", "369288 11007.2 3699.18 12.5937 0 0 /\n0 Y 0.0500853 0.0500853 Z 0.151688 0.151688 /\n0 RO 0.1379/\n0 S8 13 35 35.2 0 0", "DoubleT", "dv-k_gostr-57837-2017.profiles.srt", "35К2", ""],
    ["Двутавр", "Двутавр 40К2 (ГОСТ)", "443230 13473.3 4484.81 21.5803 0 0 /\n0 Y 0.0505924 0.0505924 Z 0.151991 0.151991 /\n0 RO 0.1655/\n0 S8 13 40 40 0 0", "DoubleT", "dv-k.profiles.srt", "40К2", ""],
    ["Двутавр", "Двутавр 30Ш1С (ГОСТ)", "146203 2281.27 336.309 2.17775 0 0 /\n0 Y 0.0230029 0.0230029 Z 0.106146 0.106146 /\n0 RO 0.05461/\n0 S8 13 20 29.4 0 0", "DoubleT", "dv-sh.profiles.srt", "30Ш1С", ""],
    ["Двутавр", "Двутавр 30С2С (Свайный)", "295094 4677.52 1591.25 9.6424 0 0 /\n0 Y 0.0353597 0.0353597 Z 0.105673 0.105673 /\n0 RO 0.110232/\n0 S8 13 30.5 30 0 0", "DoubleT", "dv-s.profiles.srt", "30С2С", ""],
// Швеллеры одиночные (13)
    ["Швеллер", "Швеллер 8У (ДСТУ 3634)", "18863.5 18.7795 2.68879 0.104036 0 0 /\n0 Y 0.00529885 0.0108808 Z 0.0248886 0.0248886 /\n0 RO 0.00705/\n0 RU -0.02457 0 /\n0 S8 13 4 8 0 0", "Channel", "dstu_3634_96_short_uk.srt", "8У", ""],
    ["Швеллер", "Швеллер 10У (ДСТУ 3634)", "22896.7 36.5507 4.28526 0.131556 0 0 /\n0 Y 0.00592266 0.0129969 Z 0.0319266 0.0319266 /\n0 RO 0.00859/\n0 RU -0.02799 0 /\n0 S8 13 4.6 10 0 0", "Channel", "dstu_3634_96_short_uk.srt", "10У", ""],
    ["Швеллер", "Швеллер 12У (ДСТУ 3634)", "27938.2 63.8587 6.55422 0.172 0 0 /\n0 Y 0.0065 0.0152 Z 0.038 0.038 /\n0 RO 0.0104/\n0 RU -0.031 0 /\n0 S8 13 5.2 12 0 0", "Channel", "dstu_3634_96_short_uk.srt", "12У", ""],
    ["Швеллер", "Швеллер 14У (ДСТУ 3634)", "32769.6 103.14 9.53679 0.212923 0 0 /\n0 Y 0.00704663 0.0174267 Z 0.0449634 0.0449634 /\n0 RO 0.0123/\n0 RU -0.0341 0 /\n0 S8 13 5.8 14 0 0", "Channel", "dstu_3634_96_short_uk.srt", "14У", ""],
    ["Швеллер", "Швеллер 16У (ДСТУ 3634)", "38021.1 156.916 13.2969 0.263429 0 0 /\n0 Y 0.00760269 0.0194291 Z 0.0515884 0.0515884 /\n0 RO 0.0142/\n0 RU -0.03735 0 /\n0 S8 13 6.4 16 0 0", "Channel", "dstu_3634_96_short_uk.srt", "16У", ""],
    ["Швеллер", "Швеллер 18У (ДСТУ 3634)", "43482.7 228.967 18.0653 0.321492 0 0 /\n0 Y 0.00821065 0.0214154 Z 0.0585078 0.0585078 /\n0 RO 0.0163/\n0 RU -0.04068 0 /\n0 S8 13 7 18 0 0", "Channel", "dstu_3634_96_short_uk.srt", "18У", ""],
    ["Швеллер", "Швеллер 20У (ДСТУ 3634)", "49154.4 319.294 23.737 0.387588 0 0 /\n0 Y 0.00873248 0.0233288 Z 0.0649573 0.0649573 /\n0 RO 0.0184/\n0 RU -0.04393 0 /\n0 S8 13 7.6 20 0 0", "Channel", "dstu_3634_96_short_uk.srt", "20У", ""],
    ["Швеллер", "Швеллер 10П (ГОСТ)", "22896.7 36.7608 4.74739 0.131952 0 0 /\n0 Y 0.00675373 0.0135516 Z 0.0321101 0.0321101 /\n0 RO 0.008553/\n0 RU -0.0303032 0 /\n0 S8 13 4.6 10 0 0", "Channel", "shv-parl.profiles.srt", "10П", ""],
    ["Швеллер", "Швеллер 12П (ГОСТ)", "27938.2 64.0688 7.33115 0.168707 0 0 /\n0 Y 0.0074126 0.0158076 Z 0.0382205 0.0382205 /\n0 RO 0.01044/\n0 RU -0.0335343 0 /\n0 S8 13 5.2 12 0 0", "Channel", "shv-parl.profiles.srt", "12П", ""],
    ["Швеллер", "Швеллер 14П (ГОСТ)", "32769.6 103.56 10.8182 0.211029 0 0 /\n0 Y 0.00829468 0.0181389 Z 0.0451465 0.0451465 /\n0 RO 0.01224/\n0 RU -0.0373491 0 /\n0 S8 13 5.8 14 0 0", "Channel", "shv-parl.profiles.srt", "14П", ""],
    ["Швеллер", "Швеллер 16П (ГОСТ)", "38021.1 157.546 14.8724 0.261 0 0 /\n0 Y 0.0091 0.0203 Z 0.0518 0.0518 /\n0 RO 0.0142/\n0 RU -0.0412 0 /\n0 S8 13 6.4 16 0 0", "Channel", "shv-parl.profiles.srt", "16П", ""],
    ["Швеллер", "Швеллер 20П (ГОСТ)", "49154.4 321.394 28.1482 0.377473 0 0 /\n0 Y 0.0108047 0.0248978 Z 0.0653846 0.0653846 /\n0 RO 0.01836/\n0 RU -0.0489628 0 /\n0 S8 13 7.6 20 0 0", "Channel", "shv-parl.profiles.srt", "20П", ""],
    ["Швеллер", "Швеллер 24П (ГОСТ)", "64278.8 611.279 52.0953 0.601271 0 0 /\n0 Y 0.0129054 0.0297962 Z 0.0792484 0.0792484 /\n0 RO 0.02401/\n0 RU -0.0586146 0 /\n0 S8 13 9 24 0 0", "Channel", "shv-parl.profiles.srt", "24П", ""],
    ["Швеллер (Коробочка)", "Коробочка 2х10П", "45793.4 73.5215 52.6546 32.4477 0 0 /\n0 Y 0.0249963 0.0249963 Z 0.0321101 0.0321101 /\n0 RO 0.017106/\n0 S8 13 9.2 10 0 0", "ChannelBox", "shv-parl.profiles.srt", "10П", ""],
    ["Швеллер (Коробочка)", "Коробочка 2х12П", "55876.4 128.138 84.6843 54.5998 0 0 /\n0 Y 0.0291455 0.0291455 Z 0.0382205 0.0382205 /\n0 RO 0.02088/\n0 S8 13 10.4 12 0 0", "ChannelBox", "shv-parl.profiles.srt", "12П", ""],
    ["Швеллер (Коробочка)", "Коробочка 2х14П", "65539.2 207.121 125.453 84.0674 0 0 /\n0 Y 0.0330029 0.0330029 Z 0.0451465 0.0451465 /\n0 RO 0.02448/\n0 S8 13 11.6 14 0 0", "ChannelBox", "shv-parl.profiles.srt", "14П", ""],
    ["Швеллер (Коробочка)", "Коробочка 2х16П", "76042.3 315.092 179.817 123.015 0 0 /\n0 Y 0.0369484 0.0369484 Z 0.0517956 0.0517956 /\n0 RO 0.0284/\n0 S8 13 12.8 16 0 0", "ChannelBox", "shv-parl.profiles.srt", "16П", ""],
    ["Швеллер (Коробочка)", "Коробочка 2х18П", "86965.5 457.934 247.421 173.027 0 0 /\n0 Y 0.0406436 0.0406436 Z 0.0585078 0.0585078 /\n0 RO 0.03248/\n0 S8 13 14 18 0 0", "ChannelBox", "shv-parl.profiles.srt", "18П", ""],
    ["Швеллер (Коробочка)", "Коробочка 2х20П", "98308.8 642.788 332.446 235.778 0 0 /\n0 Y 0.0444954 0.0444954 Z 0.0653846 0.0653846 /\n0 RO 0.03672/\n0 S8 13 15.2 20 0 0", "ChannelBox", "shv-parl.profiles.srt", "20П", ""],
    ["Швеллер (Коробочка)", "Коробочка 2х24П", "128558 1222.56 611.201 437.433 0 0 /\n0 Y 0.0528255 0.0528255 Z 0.0792484 0.0792484 /\n0 RO 0.04802/\n0 S8 13 18 24 0 0", "ChannelBox", "shv-parl.profiles.srt", "24П", ""],
// Уголки одиночные (11)
    ["Уголок", "Уголок гн. 50x3 (ГОСТ 19771)", "5965.75 1.47463 1.47463 0.00675686 0 0 /\n0 Y 0.00684718 0.017783 Z 0.00684718 0.017783 /\n0 RO 0.00223/\n0 S8 13 5 5 0 0", "Angle", "ug-gn931.profiles.srt", "50x3", ""],
    ["Уголок", "Уголок гн. 60x4 (ГОСТ 19771)", "9452.77 3.35258 3.35258 0.0190024 0 0 /\n0 Y 0.00824806 0.0208627 Z 0.00824806 0.0208627 /\n0 RO 0.00353/\n0 S8 13 6 6 0 0", "Angle", "ug-gn931.profiles.srt", "60x4", ""],
    ["Уголок", "Уголок гн. 70x5 (ГОСТ 19771)", "13750 7.1 7.1 0.045 0 0 /\n0 Y 0.0096 0.0242 Z 0.0096 0.0242 /\n0 RO 0.0052/\n0 S8 13 7 7 0 0", "Angle", "ug-gn931.profiles.srt", "70x5", ""],
    ["Уголок", "Уголок гн. 80x6 (ГОСТ 19771)", "18860 12.6 12.6 0.09 0 0 /\n0 Y 0.011 0.0275 Z 0.011 0.0275 /\n0 RO 0.0071/\n0 S8 13 8 8 0 0", "Angle", "ug-gn931.profiles.srt", "80x6", ""],
    ["Уголок", "Уголок 90x90x7 (ГОСТ 8509)", "25795.6 19.8088 19.8088 0.174916 0 0 /\n0 Y 0.0117598 0.0310897 Z 0.0117598 0.0310897 /\n0 RO 0.00963587/\n0 S8 13 9 9 0 0", "Angle", "ug-gost-8509-93.profiles.srt", "90x90x7", ""],
    ["Уголок", "Уголок 100x100x8 (ГОСТ 8509)", "32770 31.1 31.1 0.28 0 0 /\n0 Y 0.0131 0.0345 Z 0.0131 0.0345 /\n0 RO 0.0122/\n0 S8 13 10 10 0 0", "Angle", "ug-gost-8509-93.profiles.srt", "100x100x8", ""],
    ["Уголок", "Уголок 110x110x8 (ГОСТ 8509)", "36130 41.8 41.8 0.31 0 0 /\n0 Y 0.0143 0.0378 Z 0.0143 0.0378 /\n0 RO 0.0135/\n0 S8 13 11 11 0 0", "Angle", "ug-gost-8509-93.profiles.srt", "110x110x8", ""],
    ["Уголок", "Уголок 125x125x10 (ГОСТ 8509)", "51108 75.576 75.576 0.706702 0 0 /\n0 Y 0.0163313 0.0429209 Z 0.0163313 0.0429209 /\n0 RO 0.0191/\n0 S8 13 12.5 12.5 0 0", "Angle", "ug-gost-8509-93.profiles.srt", "125x125x10", ""],
    ["Уголок", "Уголок 63x6 (ГОСТ)", "15290 5.7 5.7 0.075 0 0 /\n0 Y 0.0084 0.0221 Z 0.0084 0.0221 /\n0 RO 0.0057/\n0 S8 13 6.3 6.3 0 0", "Angle", "ug.srt", "63x6", ""],
    ["Уголок", "Уголок 75x7 (ГОСТ)", "21320 11.3 11.3 0.14 0 0 /\n0 Y 0.0099 0.0262 Z 0.0099 0.0262 /\n0 RO 0.008/\n0 S8 13 7.5 7.5 0 0", "Angle", "ug.srt", "75x7", ""],
    ["Уголок", "Уголок L50x5 (ДСТУ 2251)", "10080 2.35 2.35 0.034 0 0 /\n0 Y 0.0068 0.0178 Z 0.0068 0.0178 /\n0 RO 0.0038/\n0 S8 13 5 5 0 0", "Angle", "dstu_2251_2018_short_uk.srt", "L50x5", ""],
    ["Уголок спаренный", "Уголки крестом 2xL50x5", "20160 12.4 12.4 0.068 0 0 /\n0 Y 0.0178 0.0178 Z 0.0178 0.0178 /\n0 RO 0.0076/\n0 S8 13 10 10 0 0", "AnglesCross", "dstu_2251_2018_short_uk.srt", "L50x5", ""],
    ["Уголок спаренный", "Уголки крестом 2x63x6", "30580 29.8 29.8 0.15 0 0 /\n0 Y 0.0221 0.0221 Z 0.0221 0.0221 /\n0 RO 0.0114/\n0 S8 13 12.6 12.6 0 0", "AnglesCross", "ug.srt", "63x6", ""],
    ["Уголок спаренный", "Уголки крестом 2x75x7", "42640 59.0 59.0 0.28 0 0 /\n0 Y 0.0262 0.0262 Z 0.0262 0.0262 /\n0 RO 0.016/\n0 S8 13 15 15 0 0", "AnglesCross", "ug.srt", "75x7", ""],
    ["Уголок спаренный", "Уголки крестом 2x90x90x7", "51591.2 103.1 103.1 0.35 0 0 /\n0 Y 0.0311 0.0311 Z 0.0311 0.0311 /\n0 RO 0.0193/\n0 S8 13 18 18 0 0", "AnglesCross", "ug-gost-8509-93.profiles.srt", "90x90x7", ""],
    ["Уголок спаренный", "Уголки крестом 2x100x100x8", "65540 161.0 161.0 0.56 0 0 /\n0 Y 0.0345 0.0345 Z 0.0345 0.0345 /\n0 RO 0.0244/\n0 S8 13 20 20 0 0", "AnglesCross", "ug-gost-8509-93.profiles.srt", "100x100x8", ""],
    ["Уголок спаренный", "Уголки крестом 2x125x125x10", "102216 392.7 392.7 1.41 0 0 /\n0 Y 0.0429 0.0429 Z 0.0429 0.0429 /\n0 RO 0.0382/\n0 S8 13 25 25 0 0", "AnglesCross", "ug-gost-8509-93.profiles.srt", "125x125x10", ""],
    ["Уголок спаренный", "Уголки тавром 2x63x6", "30580 11.4 29.8 0.15 0 0 /\n0 Y 0.0084 0.0221 Z 0.0221 0.0221 /\n0 RO 0.0114/\n0 S8 13 6.3 12.6 0 0", "AnglesT", "ug.srt", "63x6", ""]
  ];


  const DB_STORAGE_KEY = 'lira_karcas_profiles_v23';
  let PROFILES_DB = [];

  // Разворачиваем компактную базу + добавляем ЖБ
   
  function getDefaultProfiles() {
    const list = INITIAL_PROFILES_RAW.map(item => ({
      group: item.at(0),
      name: item.at(1),
      block3: `${item.at(2)} ${item.at(6)}`,
      type: item.at(3),
      file: item.at(4),
      prof: item.at(5),
      extra13: []
    }));
    list.push({
      group: "Железобетон",
      name: "ЖБ Брус 400x400 (B25)",
      block3: "S0 3e6 0.16 0.002133 0.002133 0.003604 0.384 0.4 0.4",
      type: null, file: null, prof: null, extra13: []
    });
    return list;
  }



  // Загрузка базы из localStorage при старте
  function initProfilesDB() {
    PROFILES_DB = getDefaultProfiles();
    try {
      const saved = localStorage.getItem(DB_STORAGE_KEY);
      if (saved) {
        const customList = JSON.parse(saved);
        customList.forEach(c => {
          if (!PROFILES_DB.some(p => p.name === c.name)) {
            PROFILES_DB.push(c);
          }
        });
      }
    } catch (e) { console.error("Ошибка чтения localStorage:", e); }
    updateDbBadge();
  }

  function updateDbBadge() {
    const badge = document.getElementById('dbCountBadge');
    if (badge) badge.textContent = `В базе: ${PROFILES_DB.length}`;
  }

  // Заполнение всех выпадающих списков с группировкой по типам
  function populateAllSelects() {
    const groups = {};
    PROFILES_DB.forEach(p => {
      if (!groups[p.group]) groups[p.group] = [];
      groups[p.group].push(p.name);
    });

    let optionsHtml = '';
    for (const [grpName, names] of Object.entries(groups)) {
      optionsHtml += `<optgroup label="${grpName}">`;
      names.forEach(n => { optionsHtml += `<option value="${n}">${n}</option>`; });
      optionsHtml += `</optgroup>`;
    }

    document.querySelectorAll('select.profile-select').forEach(sel => {
      const prevVal = sel.value || sel.getAttribute('data-default');
      sel.innerHTML = optionsHtml;
      if (prevVal && PROFILES_DB.some(p => p.name === prevVal)) {
        sel.value = prevVal;
      }
    });
  }
  // === 2. НАКОПИТЕЛЬНЫЙ ПАРСЕР .TXT ИЗ ЛИРА-САПР ===
   function handleImportTxt(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
      // ЛИРА-САПР всегда сохраняет текстовые файлы в Windows-1251
      const decoder = new TextDecoder('windows-1251');
      const text = decoder.decode(e.target.result);
      const addedCount = parseLiraTxtAndMerge(text);
      const statusEl = document.getElementById('importStatus');
      if (addedCount > 0) {
        statusEl.style.color = '#27ae60';
        statusEl.textContent = `✅ Добавлено новых жесткостей: ${addedCount}. Всего в базе: ${PROFILES_DB.length}`;
        populateAllSelects();
        renderColumnTiers();
        updateModel();
      } else {
        statusEl.style.color = '#e67e22';
        statusEl.textContent = `ℹ️ Новых жесткостей не найдено (все уже есть в базе или не найден блок ( 3/ )).`;
      }
      event.target.value = '';
    };
    reader.readAsArrayBuffer(file); // Читаем как сырые байты, чтобы декодировать через TextDecoder
  }


  function parseLiraTxtAndMerge(text) {
    const b3Match = text.match(/\(\s*3\s*\/([\s\S]*?)\)/);
    if (!b3Match) return 0;
    const b3Lines = b3Match[1].split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    const map3 = {};
    b3Lines.forEach(line => {
      const m = line.match(/^(\d+)\s+(.+)$/);
      if (m) map3[m[1]] = m[2].replace(/\/$/, '').trim();
    });

    const b13Match = text.match(/\{\s*13\s*\/([\s\S]*?)\}/);
    const map13 = {};
    if (b13Match) {
      const b13Lines = b13Match[1].split(/\r?\n/).map(l => l.trim()).filter(Boolean);
      let curId = null;
      b13Lines.forEach(line => {
        const idM = line.match(/^(\d+)\s+([A-Za-z0-9_]+)\s*=\s*(.+)$/);
        if (idM) {
          curId = idM[1];
          map13[curId] = { [idM[2]]: idM[3].replace(/\|/g, '').trim() };
        } else if (curId) {
          const kvM = line.match(/^([A-Za-z0-9_]+)\s*=\s*(.+)$/);
          if (kvM) map13[curId][kvM[1]] = kvM[2].replace(/\|/g, '').trim();
        }
      });
    }

    const typeNames = {
      'DoubleT': ['Двутавр', 'Двутавр'],
      'Channel': ['Швеллер', 'Швеллер'],
      'ChannelBox': ['Швеллер (Коробочка)', 'Коробочка 2х'],
      'Angle': ['Уголок', 'Уголок'],
      'AnglesCross': ['Уголок спаренный', 'Уголки крестом 2x'],
      'AnglesT': ['Уголок спаренный', 'Уголки тавром 2x'],
      'Box': ['Труба прямоугольная', 'Труба кв.'],
      'Pipe': ['Труба круглая', 'Труба кр.'],
      'Sheet': ['Лист / Пластина', 'Лист']
    };

    let added = 0;
    const customSaved = JSON.parse(localStorage.getItem(DB_STORAGE_KEY) || '[]');

    for (const [id, block3Str] of Object.entries(map3)) {
      const meta = map13[id] || {};
      const t = meta.Type || '';
      const prof = meta.Prof || `Сечение №${id}`;
      const srt = meta.File || '';
      const grpInfo = typeNames[t] || ['Импортированные', 'Профиль'];
      const displayName = `${grpInfo[1]} ${prof} (${srt ? srt.split('.')[0] : 'ЛИРА'})`.replace('2х ', '2х').replace('2x ', '2x');

      const exists = PROFILES_DB.some(p => p.name === displayName || (p.block3 === block3Str && p.prof === prof));
      if (!exists) {
        const newObj = {
          group: grpInfo[0],
          name: displayName,
          block3: block3Str,
          type: t || null,
          file: srt || null,
          prof: meta.Prof || null
        };
        PROFILES_DB.push(newObj);
        customSaved.push(newObj);
        added++;
      }
    }

    if (added > 0) {
      localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(customSaved));
      updateDbBadge();
    }
    return added;
  }


  function resetProfilesDB() {
    if (confirm('Удалить все импортированные вручную жесткости и оставить 59 базовых?')) {
      localStorage.removeItem(DB_STORAGE_KEY);
      initProfilesDB();
      populateAllSelects();
      renderColumnTiers();
      updateModel();
      document.getElementById('importStatus').textContent = 'База сброшена до 59 стартовых профилей.';
    }
  }
  // === 3. УПРАВЛЕНИЕ ЯРУСАМИ КОЛОНН ===
  let columnTiers = [
    { h: 4.2, sec: "Двутавр 30К1 (ГОСТ Р 57837)" },
    { h: 4.2, sec: "Двутавр 25К1 (ГОСТ Р 57837)" }
  ];

  function renderColumnTiers() {
    const container = document.getElementById('columnTiersList');
    container.innerHTML = '';

    const groups = {};
    PROFILES_DB.forEach(p => {
      if (!groups[p.group]) groups[p.group] = [];
      groups[p.group].push(p.name);
    });

    columnTiers.forEach((tier, idx) => {
      let opts = '';
      for (const [grpName, names] of Object.entries(groups)) {
        opts += `<optgroup label="${grpName}">`;
        names.forEach(n => {
          opts += `<option value="${n}" ${n === tier.sec ? 'selected' : ''}>${n}</option>`;
        });
        opts += `</optgroup>`;
      }

      const div = document.createElement('div');
      div.className = 'tier-item';
      div.innerHTML = `
        <span style="font-size:11px; font-weight:bold; width:42px;">Яр.${idx+1}:</span>
        <input type="number" value="${tier.h}" step="0.2" min="0.5" onchange="updateTierH(${idx}, this.value)" title="Высота яруса (м)">
        <span style="font-size:11px;">м</span>
        <select onchange="updateTierSec(${idx}, this.value)">${opts}</select>
        ${columnTiers.length > 1 ? `<button class="btn-red" onclick="removeColumnTier(${idx})" title="Удалить ярус">✕</button>` : ''}
      `;
      container.appendChild(div);
    });
  }

  function addColumnTier() {
    const lastSec = columnTiers[columnTiers.length - 1].sec;
    columnTiers.push({ h: 3.0, sec: lastSec });
    syncHeightFromTiers();
    renderColumnTiers();
    updateModel();
  }

  function removeColumnTier(idx) {
    if (columnTiers.length <= 1) return;
    columnTiers.splice(idx, 1);
    syncHeightFromTiers();
    renderColumnTiers();
    updateModel();
  }

  function updateTierH(idx, val) {
    columnTiers[idx].h = Math.max(0.2, parseFloat(val) || 1.0);
    syncHeightFromTiers();
    updateModel();
  }

  function updateTierSec(idx, val) {
    columnTiers[idx].sec = val;
    updateModel();
  }

  function syncHeightFromTiers() {
    const total = columnTiers.reduce((sum, t) => sum + t.h, 0);
    document.getElementById('heightZ').value = Number(total.toFixed(3));
  }

  function onHeightChange() {
    const newH = Math.max(1, parseFloat(document.getElementById('heightZ').value) || 6.0);
    const oldTotal = columnTiers.reduce((sum, t) => sum + t.h, 0);
    if (oldTotal > 0) {
      const ratio = newH / oldTotal;
      columnTiers.forEach(t => t.h = Number((t.h * ratio).toFixed(3)));
    }
    renderColumnTiers();
    updateModel();
  }

  // === 4. ГЕНЕРАЦИЯ 3D ГЕОМЕТРИИ И ТЕКСТА ЛИРЫ ===
  let model = { nodes: [], elements: [], supports: [], activeSections: [] };

  function parseNumberList(str, fallback) {
    const arr = str.split(',').map(s => parseFloat(s.trim())).filter(n => !isNaN(n) && n > 0);
    return arr.length > 0 ? arr : fallback;
  }

  function parseIntList(str) {
    return str.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n) && n >= 1);
  }

    function getCleanTaskName() {
    const raw = (document.getElementById('taskName')?.value || 'KARCAS_MK2_V24').trim();
    const cleaned = raw.replace(/[^A-Za-z0-9_-]/g, '_').replace(/_+/g, '_');
    return cleaned || 'KARCAS_MK2_V24';
  }


  function updateModel() {
    const spansX = parseNumberList(document.getElementById('spansX').value, [6]);
    const stepsY = parseNumberList(document.getElementById('stepsY').value, [6]);
    const supportType = document.getElementById('supportType').value;
    const colAngle = parseFloat(document.getElementById('colAngle').value) || 0;
    const addTieBeams = document.getElementById('addTieBeams').checked;

    const hasTruss = document.getElementById('hasTruss').checked;
    document.getElementById('trussParams').style.display = hasTruss ? 'block' : 'none';
    document.getElementById('tieBeamSecRow').style.display = addTieBeams ? 'flex' : 'none';

    const trussH = parseFloat(document.getElementById('trussH').value) || 1.5;
    const trussSlope = parseFloat(document.getElementById('trussSlope').value) || 0;
    let trussPanels = parseInt(document.getElementById('trussPanels').value) || 4;
    if (trussPanels % 2 !== 0) trussPanels++;

    const trussType = document.getElementById('trussType').value;
    const hingeWeb = document.getElementById('hingeWeb')?.checked ?? true;
    const hingeBrace = document.getElementById('hingeBrace')?.checked ?? true;
    const hingeTrussSupport = document.getElementById('hingeTrussSupport')?.checked ?? false;

    const braceBaysY = parseIntList(document.getElementById('braceBaysY').value);
    const hasVertBraces = document.getElementById('hasVertBraces').checked;
    const hasHorizBraces = document.getElementById('hasHorizBraces').checked;

    const usedSecNames = new Set();
    columnTiers.forEach(t => usedSecNames.add(t.sec));
    if (addTieBeams) usedSecNames.add(document.getElementById('secTieBeam').value);
    if (hasTruss) {
      usedSecNames.add(document.getElementById('secChord').value);
      usedSecNames.add(document.getElementById('secWeb').value);
    }
    if (hasVertBraces || hasHorizBraces) {
      usedSecNames.add(document.getElementById('secBrace').value);
    }

    const activeSections = [];
    const secNameToId = {};
    let nextSecId = 1;
    usedSecNames.forEach(name => {
      const dbObj = PROFILES_DB.find(p => p.name === name) || PROFILES_DB[0];
      activeSections.push({ id: nextSecId, ...dbObj });
      secNameToId[name] = nextSecId;
      nextSecId++;
    });

    const nodes = [];
    const elements = [];
    const supports = [];
    const nodeMap = new Map();

    function getOrCreateNode(x, y, z) {
      const rx = Math.round(x * 1000) / 1000;
      const ry = Math.round(y * 1000) / 1000;
      const rz = Math.round(z * 1000) / 1000;
      const key = `${rx}_${ry}_${rz}`;
      if (nodeMap.has(key)) return nodeMap.get(key);
      const id = nodes.length + 1;
      nodes.push({ id, x: rx, y: ry, z: rz });
      nodeMap.set(key, id);
      return id;
    }

    const xCoords = new Array(1).fill(0);
    spansX.forEach(s => xCoords.push(xCoords[xCoords.length - 1] + s));

    const yCoords = new Array(1).fill(0);
    stepsY.forEach(s => yCoords.push(yCoords[yCoords.length - 1] + s));

    const zLevels = new Array(1).fill(0);
    columnTiers.forEach(t => zLevels.push(zLevels[zLevels.length - 1] + t.h));
    const H = zLevels[zLevels.length - 1];

    // 1. Колонны по ярусам и опоры
    for (let j = 0; j < yCoords.length; j++) {
      const y = yCoords[j];
      for (let i = 0; i < xCoords.length; i++) {
        const x = xCoords[i];
        const baseNode = getOrCreateNode(x, y, 0);
        supports.push({ node: baseNode, type: supportType });

        for (let tIdx = 0; tIdx < columnTiers.length; tIdx++) {
          const n1 = getOrCreateNode(x, y, zLevels[tIdx]);
          const n2 = getOrCreateNode(x, y, zLevels[tIdx + 1]);
          const secId = secNameToId[columnTiers[tIdx].sec];
          elements.push({ id: elements.length + 1, n1, n2, sec: secId, group: 'col', hingeStart: false, hingeEnd: false, angle: colAngle });
        }
      }
    }

    // 2. Распорки по верху колонн вдоль Y
    if (addTieBeams) {
      const tieSecId = secNameToId[document.getElementById('secTieBeam').value];
      for (let i = 0; i < xCoords.length; i++) {
        const x = xCoords[i];
        for (let j = 0; j < yCoords.length - 1; j++) {
          const n1 = getOrCreateNode(x, yCoords[j], H);
          const n2 = getOrCreateNode(x, yCoords[j + 1], H);
          elements.push({ id: elements.length + 1, n1, n2, sec: tieSecId, group: 'tie', hingeStart: hingeBrace, hingeEnd: hingeBrace, angle: 0 });
        }
      }
    }

    // 3. Стропильные фермы вдоль X
    if (hasTruss) {
      const chordSecId = secNameToId[document.getElementById('secChord').value];
      const webSecId = secNameToId[document.getElementById('secWeb').value];

      for (let j = 0; j < yCoords.length; j++) {
        const y = yCoords[j];
        for (let sIdx = 0; sIdx < spansX.length; sIdx++) {
          const xStart = xCoords[sIdx];
          const L = spansX[sIdx];
          const dx = L / trussPanels;
          const halfPanels = trussPanels / 2;

          const botNodes = [];
          const topNodes = [];

          for (let p = 0; p <= trussPanels; p++) {
            const px = xStart + p * dx;
            const distFromEdge = p <= halfPanels ? p * dx : (trussPanels - p) * dx;
            const pzTop = H + trussH + distFromEdge * (trussSlope / 100);

            botNodes.push(getOrCreateNode(px, y, H));
            topNodes.push(getOrCreateNode(px, y, pzTop));
          }

          // Пояса фермы (учет шарнирного опирания на опорах p=0 и p=trussPanels-1)
          for (let p = 0; p < trussPanels; p++) {
            const hStart = hingeTrussSupport && p === 0;
            const hEnd = hingeTrussSupport && p === trussPanels - 1;
            elements.push({ id: elements.length + 1, n1: botNodes[p], n2: botNodes[p+1], sec: chordSecId, group: 'chord', hingeStart: hStart, hingeEnd: hEnd, angle: 0 });
            elements.push({ id: elements.length + 1, n1: topNodes[p], n2: topNodes[p+1], sec: chordSecId, group: 'chord', hingeStart: hStart, hingeEnd: hEnd, angle: 0 });
          }

          // Стойки фермы
          for (let p = 0; p <= trussPanels; p++) {
            if (trussType === 'pratt' || p === 0 || p === trussPanels || p === halfPanels) {
              elements.push({ id: elements.length + 1, n1: botNodes[p], n2: topNodes[p], sec: webSecId, group: 'web', hingeStart: hingeWeb, hingeEnd: hingeWeb, angle: 0 });
            }
          }

          // Раскосы фермы
          for (let p = 0; p < trussPanels; p++) {
            if (trussType === 'pratt') {
              if (p < halfPanels) {
                elements.push({ id: elements.length + 1, n1: topNodes[p], n2: botNodes[p+1], sec: webSecId, group: 'web', hingeStart: hingeWeb, hingeEnd: hingeWeb, angle: 0 });
              } else {
                elements.push({ id: elements.length + 1, n1: botNodes[p], n2: topNodes[p+1], sec: webSecId, group: 'web', hingeStart: hingeWeb, hingeEnd: hingeWeb, angle: 0 });
              }
            } else {
              if (p % 2 === 0) {
                elements.push({ id: elements.length + 1, n1: botNodes[p], n2: topNodes[p+1], sec: webSecId, group: 'web', hingeStart: hingeWeb, hingeEnd: hingeWeb, angle: 0 });
              } else {
                elements.push({ id: elements.length + 1, n1: topNodes[p], n2: botNodes[p+1], sec: webSecId, group: 'web', hingeStart: hingeWeb, hingeEnd: hingeWeb, angle: 0 });
              }
            }
          }
        }
      }
    }

    // 4. Связи
    const braceSecId = secNameToId[document.getElementById('secBrace').value];
    braceBaysY.forEach(bayNum => {
      const j = bayNum - 1;
      if (j < 0 || j >= yCoords.length - 1) return;
      const y1 = yCoords[j];
      const y2 = yCoords[j + 1];

      if (hasVertBraces) {
        for (let i = 0; i < xCoords.length; i++) {
          const x = xCoords[i];
          for (let tIdx = 0; tIdx < columnTiers.length; tIdx++) {
            const zBot = zLevels[tIdx];
            const zTop = zLevels[tIdx + 1];
            const n11 = getOrCreateNode(x, y1, zBot);
            const n12 = getOrCreateNode(x, y1, zTop);
            const n21 = getOrCreateNode(x, y2, zBot);
            const n22 = getOrCreateNode(x, y2, zTop);
            elements.push({ id: elements.length + 1, n1: n11, n2: n22, sec: braceSecId, group: 'brace', hingeStart: hingeBrace, hingeEnd: hingeBrace, angle: 0 });
            elements.push({ id: elements.length + 1, n1: n21, n2: n12, sec: braceSecId, group: 'brace', hingeStart: hingeBrace, hingeEnd: hingeBrace, angle: 0 });
          }
        }
      }

      if (hasHorizBraces) {
        for (let sIdx = 0; sIdx < spansX.length; sIdx++) {
          const x1 = xCoords[sIdx];
          const x2 = xCoords[sIdx + 1];
          const n11 = getOrCreateNode(x1, y1, H);
          const n21 = getOrCreateNode(x2, y1, H);
          const n12 = getOrCreateNode(x1, y2, H);
          const n22 = getOrCreateNode(x2, y2, H);
          elements.push({ id: elements.length + 1, n1: n11, n2: n22, sec: braceSecId, group: 'brace', hingeStart: hingeBrace, hingeEnd: hingeBrace, angle: 0 });
          elements.push({ id: elements.length + 1, n1: n21, n2: n12, sec: braceSecId, group: 'brace', hingeStart: hingeBrace, hingeEnd: hingeBrace, angle: 0 });
        }
      }
    });


    model = { nodes, elements, supports, activeSections };
    document.getElementById('stats').textContent = `Узлов: ${nodes.length} | Элементов: ${elements.length} | Профилей в схеме: ${activeSections.length}`;

    generateLiraText();
    draw();
  }
  
    function generateLiraText() {
    const taskName = getCleanTaskName();
    let lines = [];
    lines.push(`( 0/ 1; ${taskName}/ 2; 5/`);
    lines.push("28; 0 0 1  1 0 0  0 1 0; /");
    lines.push("33;M 1 CM 100 T 1 C 1 /");
    lines.push("39;");
    lines.push("1: ЗАГРУЖЕНИЕ 1 ;");
    lines.push(" /");
    lines.push("50; 1 /");
    lines.push("51; 1 /");
    lines.push("52; 0.001 /");
    lines.push("53; 0 /");
    lines.push("54; 0 /");
    lines.push("55; 2 /");
    lines.push(")");

    lines.push("( 1/");
    model.elements.forEach(el => {
      lines.push(`10 ${el.sec} ${el.n1} ${el.n2} /`);
    });
    lines.push(")");

    // Блок ( 2/ ) — Шарниры на концах стержней (освобождение UY=5, UZ=6)
    const hingedElems = model.elements.filter(el => el.hingeStart || el.hingeEnd);
    if (hingedElems.length > 0) {
      lines.push("( 2/");
      hingedElems.forEach(el => {
        let parts = [];
        if (el.hingeStart) parts.push(`${el.id} 1 5 0/`, `${el.id} 1 6 0/`);
        if (el.hingeEnd) parts.push(`${el.id} 2 5 0/`, `${el.id} 2 6 0/`);
        lines.push(parts.join(''));
      });
      lines.push(")");
    }

    lines.push("( 3/");
    model.activeSections.forEach(sec => {
      lines.push(`${sec.id} ${sec.block3} /`);
    });
    lines.push(")");

    lines.push("( 4/");
    model.nodes.forEach(n => {
      lines.push(`${n.x} ${n.y} ${n.z} /`);
    });
    lines.push(")");

    // Блок ( 5/ ) — Связи (опоры)
    lines.push("( 5/");
    model.supports.forEach(s => {
      const dof = s.type === 'fixed' ? '1 2 3 4 5 6' : '1 2 3';
      lines.push(`${s.node} ${dof} /`);
    });
    lines.push(")");

    // Блок {13/ — Металлические сечения в родном формате ЛИРА-САПР 2024 R2.3
    const metalSections = model.activeSections.filter(s => s.type && s.file && s.prof);
    if (metalSections.length > 0) {
      lines.push("{13/");
      metalSections.forEach(s => {
        lines.push(`[${s.id}]`);
        lines.push(`Section = ${s.type} `);
        lines.push(`MatId = STL `);
        lines.push(`File  = |${s.file}| `);
        lines.push(`Shape = |${s.prof}| `);
        if (s.type === 'AnglesCross' || s.type === 'AnglesT') {
          lines.push(`Rotation = 2\tBluePoint = 1 \tYellowPoint = 0`);
          lines.push(`Y1Coupling = 1\t`);
        }
        lines.push(``);
      });
      lines.push("}");
    }

    document.getElementById('liraOutput').value = lines.join('\n');
  }


  // === 5. 3D ВИЗУАЛИЗАЦИЯ НА CANVAS ===
  const canvas = document.getElementById('previewCanvas');
  const ctx = canvas.getContext('2d');
  let cam = { rotZ: -0.6, rotX: 0.45, zoom: 1, panX: 0, panY: 0, isDrag: false, btn: 0, lastX: 0, lastY: 0 };

  function setView(mode) {
    document.querySelectorAll('.canvas-toolbar button').forEach(b => b.classList.remove('active'));
    if (mode === 'iso') { cam.rotZ = -0.6; cam.rotX = 0.45; document.getElementById('btnViewIso').classList.add('active'); }
    if (mode === 'front') { cam.rotZ = 0; cam.rotX = 0; document.getElementById('btnViewFront').classList.add('active'); }
    if (mode === 'side') { cam.rotZ = -Math.PI / 2; cam.rotX = 0; document.getElementById('btnViewSide').classList.add('active'); }
    if (mode === 'top') { cam.rotZ = 0; cam.rotX = Math.PI / 2; document.getElementById('btnViewTop').classList.add('active'); }
    cam.panX = 0; cam.panY = 0;
    draw();
  }

  function resetCamera() { cam.zoom = 1; setView('iso'); }

  canvas.addEventListener('mousedown', e => { cam.isDrag = true; cam.btn = e.button; cam.lastX = e.clientX; cam.lastY = e.clientY; });
  window.addEventListener('mouseup', () => { cam.isDrag = false; });
  window.addEventListener('mousemove', e => {
    if (!cam.isDrag) return;
    const dx = e.clientX - cam.lastX;
    const dy = e.clientY - cam.lastY;
    cam.lastX = e.clientX; cam.lastY = e.clientY;
    if (cam.btn === 2 || e.shiftKey) {
      cam.panX += dx; cam.panY += dy;
    } else {
      cam.rotZ += dx * 0.01;
      cam.rotX = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, cam.rotX + dy * 0.01));
    }
    draw();
  });
  canvas.addEventListener('contextmenu', e => e.preventDefault());
  canvas.addEventListener('wheel', e => {
    e.preventDefault();
    cam.zoom *= e.deltaY < 0 ? 1.12 : 0.89;
    cam.zoom = Math.max(0.1, Math.min(15, cam.zoom));
    draw();
  });

  function draw() {
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (model.nodes.length === 0) return;

    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity, minZ = Infinity, maxZ = -Infinity;
    model.nodes.forEach(n => {
      if (n.x < minX) minX = n.x; if (n.x > maxX) maxX = n.x;
      if (n.y < minY) minY = n.y; if (n.y > maxY) maxY = n.y;
      if (n.z < minZ) minZ = n.z; if (n.z > maxZ) maxZ = n.z;
    });

    const cx = (minX + maxX) / 2;
    const cy = (minY + maxY) / 2;
    const cz = (minZ + maxZ) / 2;
    const maxDim = Math.max(maxX - minX, maxY - minY, maxZ - minZ, 1);
    const baseScale = (Math.min(canvas.width, canvas.height) * 0.65 / maxDim) * cam.zoom;

    const cosZ = Math.cos(cam.rotZ), sinZ = Math.sin(cam.rotZ);
    const cosX = Math.cos(cam.rotX), sinX = Math.sin(cam.rotX);

    const projNodes = new Array(model.nodes.length + 1);
    model.nodes.forEach(n => {
      const dx = n.x - cx, dy = n.y - cy, dz = n.z - cz;
      const x1 = dx * cosZ - dy * sinZ;
      const y1 = dx * sinZ + dy * cosZ;
      const y2 = y1 * cosX - dz * sinX;
      const z2 = y1 * sinX + dz * cosX;
      projNodes[n.id] = {
        sx: canvas.width / 2 + x1 * baseScale + cam.panX,
        sy: canvas.height / 2 - z2 * baseScale + cam.panY
      };
    });

    const colors = { col: '#2980b9', tie: '#16a085', chord: '#27ae60', web: '#e67e22', brace: '#8e44ad' };
    const widths = { col: 2.5, tie: 1.8, chord: 2.0, web: 1.2, brace: 1.2 };

    model.elements.forEach(el => {
      const p1 = projNodes[el.n1], p2 = projNodes[el.n2];
      if (!p1 || !p2) return;
      ctx.beginPath();
      ctx.moveTo(p1.sx, p1.sy);
      ctx.lineTo(p2.sx, p2.sy);
      ctx.strokeStyle = colors[el.group] || '#333';
      ctx.lineWidth = widths[el.group] || 1.5;
      ctx.stroke();

      if (document.getElementById('showElems').checked) {
        ctx.fillStyle = '#555';
        ctx.font = '10px sans-serif';
        ctx.fillText(el.id, (p1.sx + p2.sx) / 2, (p1.sy + p2.sy) / 2);
      }
            // Визуализация шарниров на 3D-схеме
      if (el.hingeStart || el.hingeEnd) {
        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = '#222222';
        ctx.lineWidth = 1;
        if (el.hingeStart) {
          const hx = p1.sx + (p2.sx - p1.sx) * 0.12;
          const hy = p1.sy + (p2.sy - p1.sy) * 0.12;
          ctx.beginPath();
          ctx.arc(hx, hy, 2.2, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        }
        if (el.hingeEnd) {
          const hx = p2.sx + (p1.sx - p2.sx) * 0.12;
          const hy = p2.sy + (p1.sy - p2.sy) * 0.12;
          ctx.beginPath();
          ctx.arc(hx, hy, 2.2, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        }
      }

    });

    model.supports.forEach(s => {
      const p = projNodes[s.node];
      if (!p) return;
      ctx.fillStyle = s.type === 'fixed' ? '#c0392b' : '#e67e22';
      ctx.fillRect(p.sx - 4, p.sy - 4, 8, 8);
    });

    if (document.getElementById('showNodes').checked) {
      ctx.fillStyle = '#000';
      ctx.font = '10px sans-serif';
      model.nodes.forEach(n => {
        const p = projNodes[n.id];
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillText(n.id, p.sx + 4, p.sy - 4);
      });
    }
  }

  // === 6. ЭКСПОРТ И ИНИЦИАЛИЗАЦИЯ ===
     function encodeWindows1251(str) {
    // Заменяем математический знак умножения '×' на русскую 'х' перед кодированием
    const cleanStr = str.replace(/\u00D7/g, 'х').replace(/\uFFFD/g, '');
    const bytes = new Uint8Array(cleanStr.length);
    for (let i = 0; i < cleanStr.length; i++) {
      const c = cleanStr.charCodeAt(i);
      if (c < 128) bytes[i] = c;
      else if (c >= 0x0410 && c <= 0x044F) bytes[i] = c - 0x0350; // А-Я, а-я
      else if (c === 0x0401) bytes[i] = 0xA8; // Ё
      else if (c === 0x0451) bytes[i] = 0xB8; // ё
      else if (c === 0x2116) bytes[i] = 0xB9; // №
      else bytes[i] = 0x3F;
    }
    return bytes;
  }


 function downloadLiraFile() {
  const text = document.getElementById('liraOutput').value;
  const splitIndex = text.indexOf('{13/');

  let finalBytes;
  if (splitIndex !== -1) {
    // Основная схема (0/ .. 5/) в Windows-1251
    const mainPart = encodeWindows1251(text.slice(0, splitIndex));
    // Блок жесткостей {13/ в UTF-8 для новых сортаментов .profiles.srt
    const srtPart = new TextEncoder().encode(text.slice(splitIndex));

    finalBytes = new Uint8Array(mainPart.length + srtPart.length);
    finalBytes.set(mainPart, 0);
    finalBytes.set(srtPart, mainPart.length);
  } else {
    finalBytes = encodeWindows1251(text);
  }

  const blob = new Blob([finalBytes], { type: 'application/octet-stream' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `${getCleanTaskName()}.txt`;
  a.click();
}



  function copyToClipboard() {
    const ta = document.getElementById('liraOutput');
    ta.select();
    document.execCommand('copy');
    alert('Текст задачи скопирован в буфер обмена!');
  }

  window.addEventListener('resize', draw);

  // Старт приложения
  initProfilesDB();
  populateAllSelects();
  renderColumnTiers();
  updateModel();