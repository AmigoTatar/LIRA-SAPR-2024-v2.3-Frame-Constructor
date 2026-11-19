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

  
  function normalizeProfile(raw) {
    if (Array.isArray(raw)) {
      const fixedRaw = [...raw];
      if (fixedRaw.at(5)) {
        fixedRaw.splice(5, 1, String(fixedRaw.at(5)).replace(/[хХ×]/g, 'x'));
      }
      const [cat = '', name = 'Профиль', l3 = '', engType = '', srtFile = '', secSize = '', extra = ''] = fixedRaw;
      const l13 = srtFile ? `${engType} ${srtFile} ${secSize} ${extra}`.trim() : name;
      return { cat, name, l3, l13, raw: fixedRaw };
    }
    return raw;
  }



  function initProfilesDB() {
    try {
      const saved = localStorage.getItem(DB_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0 && parsed.name) {
          PROFILES_DB = parsed;
          return;
        }
      }
    } catch (e) { console.warn('Ошибка чтения localStorage:', e); }
    PROFILES_DB = INITIAL_PROFILES_RAW.map(normalizeProfile);
    saveProfilesDB();
  }

  function resetProfilesDB() {
    if (!confirm('Сбросить базу жесткостей к стандартным значениям (59 профилей)?')) return;
    PROFILES_DB = INITIAL_PROFILES_RAW.map(normalizeProfile);
    saveProfilesDB();
    populateAllSelects();
    generateModel();
  }


  function saveProfilesDB() {
    try {
      localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(PROFILES_DB));
      updateDbBadge();
    } catch (e) { console.warn('Ошибка записи localStorage:', e); }
  }

  




  function updateDbBadge() {
    const badge = document.getElementById('dbCountBadge');
    if (badge) badge.textContent = `В базе: ${PROFILES_DB.length} шт.`;
  }
  function handleLiraTxtImport(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
      const buffer = e.target.result;
      const textUtf8 = new TextDecoder('utf-8', { fatal: false }).decode(buffer);
      const textWin1251 = new TextDecoder('windows-1251', { fatal: false }).decode(buffer);

      const map3 = {};
      const block3Match = textWin1251.match(/\(\s*3\/([\s\S]*?)\)/);
      if (block3Match) {
        const lines = block3Match[1].split('/');
        lines.forEach(line => {
          const clean = line.replace(/[\r\n]+/g, ' ').trim();
          if (!clean) return;
          const m = clean.match(/^(\d+)\s+(.+)$/);
          if (m) map3[m[1]] = m[2].trim();
        });
      }

      const map13 = {};
      const block13Match = textUtf8.match(/\{\s*13\/([\s\S]*?)\}/);
      if (block13Match) {
        const lines = block13Match[1].split('/');
        lines.forEach(line => {
          const clean = line.replace(/[\r\n]+/g, ' ').trim();
          if (!clean) return;
          const m = clean.match(/^(\d+)\s+\d+\s+(.+)$/);
          if (m) map13[m[1]] = m[2].trim();
        });
      }
      let addedCount = 0;
      let updatedCount = 0;

      Object.keys(map13).forEach(idx => {
        const name = map13[idx];
        const l3 = map3[idx];
        if (!name || !l3) return;

        const existingIdx = PROFILES_DB.findIndex(p => p.name === name);
        if (existingIdx >= 0) {
          if (PROFILES_DB[existingIdx].l3 !== l3) {
            PROFILES_DB[existingIdx].l3 = l3;
            updatedCount++;
          }
        } else {
          PROFILES_DB.push({ name: name, l3: l3 });
          addedCount++;
        }
      });

      if (addedCount > 0 || updatedCount > 0) {
        saveProfilesDB();
        populateAllSelects();
        generateModel();
        alert(`Импорт из "${file.name}" завершен!\n\nДобавлено новых жесткостей: ${addedCount}\nОбновлено существующих: ${updatedCount}\nВсего в базе программы: ${PROFILES_DB.length}`);
      } else {
        alert(`В файле "${file.name}" не найдено новых жесткостей (или все найденные жесткости уже есть в базе программы).`);
      }
      event.target.value = '';
    };
    reader.readAsArrayBuffer(file);
  }

  // Массив ярусов колонн с независимым управлением распорками Y и X
  let columnTiers = [
    { h: 6.0, profIdx: 6, tieY: false, tieX: false },
    { h: 4.0, profIdx: 4, tieY: true,  tieX: false }
  ];
  let isUniformX = true;
  let isUniformY = true;
  let generatedLiraText = "";

  function getProfileOptionsHTML(selectedIndex) {
    return PROFILES_DB.map((p, idx) => `<option value="${idx}" ${idx === selectedIndex ? 'selected' : ''}>${p.name}</option>`).join('');
  }

  function populateAllSelects() {
    const defaults = {
      tieProfile: 21,
      tieXProfile: 4,
      vBraceProfile: 38,
      hBraceProfile: 38,
      trussTopProf: 43,
      trussBotProf: 43,
      trussDiagProf: 39,
      trussVertProf: 38
    };
    Object.keys(defaults).forEach(id => {
      const sel = document.getElementById(id);
      if (!sel) return;
      const prevVal = sel.value !== "" ? parseInt(sel.value) : defaults[id];
      const safeVal = (prevVal >= 0 && prevVal < PROFILES_DB.length) ? prevVal : Math.min(defaults[id], PROFILES_DB.length - 1);
      sel.innerHTML = getProfileOptionsHTML(safeVal);
    });
    renderTiers();
  }

  function renderTiers() {
    const container = document.getElementById('columnTiersList');
    if (!container) return;
    container.innerHTML = '';
    const hasTrussEl = document.getElementById('hasTruss');
    const hasTruss = hasTrussEl ? hasTrussEl.checked : false;
    const total = columnTiers.length;

    columnTiers.forEach((tier, idx) => {
      const isTop = idx === total - 1;
      const xDisabled = isTop && hasTruss;
      const xChecked = xDisabled ? false : !!tier.tieX;
      const xTitle = xDisabled ? 'Отключено: заменено нижним поясом фермы' : 'Распорки вдоль X по верху яруса';

      const row = document.createElement('div');
      row.className = 'tier-row';
      row.innerHTML = `
        <span style="font-size:11px; color:var(--text-muted); min-width:30px;">Яр.${idx + 1}</span>
        <input type="number" value="${tier.h}" step="0.5" min="1" max="30" style="width:52px;" title="Высота яруса (м)" onchange="updateTier(${idx}, 'h', this.value)">
        <select style="flex:1; min-width:85px;" onchange="updateTier(${idx}, 'profIdx', this.value)">
          ${getProfileOptionsHTML(tier.profIdx)}
        </select>
        <label class="tier-chk" title="Распорки вдоль Y по верху яруса">
          <input type="checkbox" ${tier.tieY ? 'checked' : ''} onchange="updateTier(${idx}, 'tieY', this.checked)">Y
        </label>
        <label class="tier-chk ${xDisabled ? 'disabled' : ''}" title="${xTitle}">
          <input type="checkbox" ${xChecked ? 'checked' : ''} ${xDisabled ? 'disabled' : ''} onchange="updateTier(${idx}, 'tieX', this.checked)">X
        </label>
        ${total > 1 ? `<button class="btn-danger" onclick="removeTier(${idx})" title="Удалить ярус">✕</button>` : ''}
      `;
      container.appendChild(row);
    });
  }
  function addTier() {
    columnTiers.push({ h: 3.0, profIdx: 4, tieY: true, tieX: false });
    renderTiers();
    generateModel();
  }

  function removeTier(idx) {
    if (columnTiers.length <= 1) return;
    columnTiers.splice(idx, 1);
    renderTiers();
    generateModel();
  }

  function updateTier(idx, key, val) {
    if (key === 'h') {
      columnTiers[idx].h = Math.max(0.5, parseFloat(val) || 3.0);
    } else if (key === 'profIdx') {
      columnTiers[idx].profIdx = parseInt(val) || 0;
    } else {
      columnTiers[idx][key] = !!val;
    }
    generateModel();
  }

  function setSpanMode(uniform) {
    isUniformX = uniform;
    document.getElementById('btnUniformX').classList.toggle('active', uniform);
    document.getElementById('btnCustomX').classList.toggle('active', !uniform);
    document.getElementById('uniformXBlock').classList.toggle('hidden', !uniform);
    document.getElementById('customXBlock').classList.toggle('hidden', uniform);
    generateModel();
  }

  function setStepMode(uniform) {
    isUniformY = uniform;
    document.getElementById('btnUniformY').classList.toggle('active', uniform);
    document.getElementById('btnCustomY').classList.toggle('active', !uniform);
    document.getElementById('uniformYBlock').classList.toggle('hidden', !uniform);
    document.getElementById('customYBlock').classList.toggle('hidden', uniform);
    generateModel();
  }

  function parseDimensions(str, fallback) {
    const arr = str.split(',').map(s => parseFloat(s.trim())).filter(n => !isNaN(n) && n > 0);
    return arr.length > 0 ? arr : fallback;
  }

  let previewData = { nodes: [], bars: [], maxX: 18, maxY: 24, maxZ: 10 };
  let lastHasTruss = null;

  function generateModel() {
    const taskName = (document.getElementById('taskName').value.trim() || 'Karcas_MK2').replace(/\//g, '_');

    let spans = [];
    if (isUniformX) {
      const cnt = Math.max(1, parseInt(document.getElementById('spanCountX').value) || 1);
      const val = Math.max(1, parseFloat(document.getElementById('spanSizeX').value) || 18);
      spans = Array(cnt).fill(val);
    } else {
      spans = parseDimensions(document.getElementById('customSpansX').value, [18]);
    }

    let steps = [];
    if (isUniformY) {
      const cnt = Math.max(1, parseInt(document.getElementById('stepCountY').value) || 1);
      const val = Math.max(1, parseFloat(document.getElementById('stepSizeY').value) || 6);
      steps = Array(cnt).fill(val);
    } else {
      steps = parseDimensions(document.getElementById('customStepsY').value, [6]);
    }

    let xCoords =[0];
    spans.forEach(s => xCoords.push(+(xCoords[xCoords.length - 1] + s).toFixed(4)));
    let yCoords =[0];
    steps.forEach(s => yCoords.push(+(yCoords[yCoords.length - 1] + s).toFixed(4)));

    let zLevels =[0];



    columnTiers.forEach(t => zLevels.push(+(zLevels[zLevels.length - 1] + t.h).toFixed(4)));
    const H = zLevels[zLevels.length - 1];

    const colAngle = parseFloat(document.getElementById('colAngle').value) || 0;
    const tieYProfIdx = parseInt(document.getElementById('tieProfile').value) || 0;
    const tieXProfIdx = parseInt(document.getElementById('tieXProfile').value) || 0;
    const hingeTieY = document.getElementById('hingeTieY').checked;
    const hingeTieX = document.getElementById('hingeTieX').checked;

    const vBraceMode = document.getElementById('vBraceMode').value;
    const vBraceProfIdx = parseInt(document.getElementById('vBraceProfile').value) || 0;
    const hBraceMode = document.getElementById('hBraceMode').value;
    const hBraceProfIdx = parseInt(document.getElementById('hBraceProfile').value) || 0;

    const hasTruss = document.getElementById('hasTruss').checked;
    document.getElementById('trussSettings').classList.toggle('hidden', !hasTruss);
    if (lastHasTruss !== null && lastHasTruss !== hasTruss) {
      renderTiers();
    }
    lastHasTruss = hasTruss;
    const trussH1 = Math.max(0.2, parseFloat(document.getElementById('trussH1').value) || 1.5);
    const trussH2 = Math.max(0.2, parseFloat(document.getElementById('trussH2').value) || 2.8);
    let panels = Math.max(2, parseInt(document.getElementById('trussPanels').value) || 6);
    if (panels % 2 !== 0) panels += 1;

    const trussTopProf = parseInt(document.getElementById('trussTopProf').value) || 0;
    const trussBotProf = parseInt(document.getElementById('trussBotProf').value) || 0;
    const trussDiagProf = parseInt(document.getElementById('trussDiagProf').value) || 0;
    const trussVertProf = parseInt(document.getElementById('trussVertProf').value) || 0;
    const hingeTrussEnds = document.getElementById('hingeTrussEnds').checked;
    const hingeTrussWeb = document.getElementById('hingeTrussWeb').checked;

    const nodeMap = new Map();
    const nodes = [];
    function getNodeId(x, y, z) {
      const kx = Math.round(x * 10000);
      const ky = Math.round(y * 10000);
      const kz = Math.round(z * 10000);
      const key = `${kx}_${ky}_${kz}`;
      if (nodeMap.has(key)) return nodeMap.get(key);
      const id = nodes.length + 1;
      nodes.push({ id, x: kx / 10000, y: ky / 10000, z: kz / 10000 });
      nodeMap.set(key, id);
      return id;
    }

    const usedProfilesMap = new Map();
    const usedProfilesList = [];
    function getStiffIdx(profIdx) {
      if (usedProfilesMap.has(profIdx)) return usedProfilesMap.get(profIdx);
      const newIdx = usedProfilesList.length + 1;
      usedProfilesMap.set(profIdx, newIdx);
      usedProfilesList.push({ stiffId: newIdx, profile: PROFILES_DB[profIdx] });
      return newIdx;
    }

    const bars = [];
    function addBar(n1, n2, profIdx, role, hingeType = 0, angle = 0) {
      if (n1 === n2) return;
      const stiffId = getStiffIdx(profIdx);
      bars.push({ id: bars.length + 1, n1, n2, stiffId, role, hingeType, angle });
    }

    // 1. Колонны по ярусам и опорные узлы
    const baseNodeIds = [];
    for (let ix = 0; ix < xCoords.length; ix++) {
      for (let iy = 0; iy < yCoords.length; iy++) {
        const x = xCoords[ix];
        const y = yCoords[iy];
        baseNodeIds.push(getNodeId(x, y, 0));
        for (let t = 0; t < columnTiers.length; t++) {
          const nBot = getNodeId(x, y, zLevels[t]);
          const nTop = getNodeId(x, y, zLevels[t + 1]);
          addBar(nBot, nTop, columnTiers[t].profIdx, 'column', 0, colAngle);
        }
      }
    }

    // 2. Распорки по ярусам (вдоль Y и вдоль X с автоблокировкой верхних X при наличии ферм)
    const tieYHingeCode = hingeTieY ? 3 : 0;
    const tieXHingeCode = hingeTieX ? 3 : 0;
    columnTiers.forEach((tier, t) => {
      const zTierTop = zLevels[t + 1];
      const isTop = t === columnTiers.length - 1;

      if (tier.tieY) {
        for (let ix = 0; ix < xCoords.length; ix++) {
          for (let iy = 0; iy < yCoords.length - 1; iy++) {
            addBar(getNodeId(xCoords[ix], yCoords[iy], zTierTop), getNodeId(xCoords[ix], yCoords[iy + 1], zTierTop), tieYProfIdx, 'tieY', tieYHingeCode, 0);
          }
        }
      }
      if (tier.tieX && !(isTop && hasTruss)) {
        for (let iy = 0; iy < yCoords.length; iy++) {
          for (let ix = 0; ix < xCoords.length - 1; ix++) {
            addBar(getNodeId(xCoords[ix], yCoords[iy], zTierTop), getNodeId(xCoords[ix + 1], yCoords[iy], zTierTop), tieXProfIdx, 'tieX', tieXHingeCode, 0);
          }
        }
      }
    });
    // 3. Стропильные фермы (двускатные с треугольной/раскосной решеткой)
    if (hasTruss) {
      const webHingeCode = hingeTrussWeb ? 3 : 0;
      for (let iy = 0; iy < yCoords.length; iy++) {
        const y = yCoords[iy];
        for (let s = 0; s < spans.length; s++) {
          const xStart = xCoords[s];
          const L = spans[s];
          const dx = L / panels;
          const half = panels / 2;

          const botNodes = [];
          const topNodes = [];
          for (let p = 0; p <= panels; p++) {
            const px = xStart + p * dx;
            const distFromEdge = p <= half ? p : (panels - p);
            const pz = H + trussH1 + (trussH2 - trussH1) * (distFromEdge / half);
            botNodes.push(getNodeId(px, y, H));
            topNodes.push(getNodeId(px, y, pz));
          }

          for (let p = 0; p < panels; p++) {
            const isLeftEnd = (p === 0 && hingeTrussEnds);
            const isRightEnd = (p === panels - 1 && hingeTrussEnds);
            let hCode = 0;
            if (isLeftEnd && isRightEnd) hCode = 3;
            else if (isLeftEnd) hCode = 1;
            else if (isRightEnd) hCode = 2;

            addBar(botNodes[p], botNodes[p + 1], trussBotProf, 'truss', hCode, 0);
            addBar(topNodes[p], topNodes[p + 1], trussTopProf, 'truss', 0, 0);
          }

          for (let p = 0; p <= panels; p++) {
            addBar(botNodes[p], topNodes[p], trussVertProf, 'truss', webHingeCode, 0);
          }

          for (let p = 0; p < panels; p++) {
            if (p < half) addBar(topNodes[p], botNodes[p + 1], trussDiagProf, 'truss', webHingeCode, 0);
            else addBar(botNodes[p], topNodes[p + 1], trussDiagProf, 'truss', webHingeCode, 0);
          }
        }
      }
    }

    // 4. Вертикальные связи по колоннам
    const vBays = [];
    if (vBraceMode === 'ends' && steps.length >= 1) {
      vBays.push(0);
      if (steps.length > 1) vBays.push(steps.length - 1);
    } else if (vBraceMode === 'center' && steps.length >= 1) {
      vBays.push(Math.floor((steps.length - 1) / 2));
    } else if (vBraceMode === 'all') {
      for (let i = 0; i < steps.length; i++) vBays.push(i);
    }

    vBays.forEach(iy => {
      for (let ix = 0; ix < xCoords.length; ix++) {
        for (let t = 0; t < columnTiers.length; t++) {
          const n00 = getNodeId(xCoords[ix], yCoords[iy], zLevels[t]);
          const n10 = getNodeId(xCoords[ix], yCoords[iy + 1], zLevels[t]);
          const n01 = getNodeId(xCoords[ix], yCoords[iy], zLevels[t + 1]);
          const n11 = getNodeId(xCoords[ix], yCoords[iy + 1], zLevels[t + 1]);
          addBar(n00, n11, vBraceProfIdx, 'brace', 3, 0);
          addBar(n10, n01, vBraceProfIdx, 'brace', 3, 0);
        }
      }
    });
    // 5. Горизонтальные связи по покрытию
    const hBays = [];
    if (hBraceMode === 'ends' && steps.length >= 1) {
      hBays.push(0);
      if (steps.length > 1) hBays.push(steps.length - 1);
    } else if (hBraceMode === 'all') {
      for (let i = 0; i < steps.length; i++) hBays.push(i);
    }

    hBays.forEach(iy => {
      for (let s = 0; s < spans.length; s++) {
        const n00 = getNodeId(xCoords[s], yCoords[iy], H);
        const n10 = getNodeId(xCoords[s + 1], yCoords[iy], H);
        const n01 = getNodeId(xCoords[s], yCoords[iy + 1], H);
        const n11 = getNodeId(xCoords[s + 1], yCoords[iy + 1], H);
        addBar(n00, n11, hBraceProfIdx, 'brace', 3, 0);
        addBar(n10, n01, hBraceProfIdx, 'brace', 3, 0);
      }
    });

    // Формирование выходного файла ЛИРА-САПР 2024 R2.3
    const cleanTaskName = taskName.replace(/[^A-Za-z0-9_-]/g, '_').replace(/_+/g, '_') || 'KARCAS_MK2';
    let out = [];
    out.push(`( 0/ 1; ${cleanTaskName}/ 2; 5/`);
    out.push("28; 0 0 1  1 0 0  0 1 0; /");
    out.push("33;M 1 CM 100 T 1 C 1 /");
    out.push("39;");
    out.push("1: ЗАГРУЖЕНИЕ 1 ;");
    out.push(" /");
    out.push("50; 1 /");
    out.push("51; 1 /");
    out.push("52; 0.001 /");
    out.push("53; 0 /");
    out.push("54; 0 /");
    out.push("55; 2 /");
    out.push(")");

    out.push("( 1/");
    bars.forEach(b => { out.push(`10 ${b.stiffId} ${b.n1} ${b.n2} /`); });
    out.push(")");

    const hingedBars = bars.filter(b => b.hingeType > 0);
    if (hingedBars.length > 0) {
      out.push("( 2/");
      hingedBars.forEach(b => {
        let parts = [];
        if (b.hingeType === 1 || b.hingeType === 3) parts.push(`${b.id} 1 5 0/`, `${b.id} 1 6 0/`);
        if (b.hingeType === 2 || b.hingeType === 3) parts.push(`${b.id} 2 5 0/`, `${b.id} 2 6 0/`);
        out.push(parts.join(''));
      });
      out.push(")");
    }

        out.push("( 3/");
    usedProfilesList.forEach(item => {
      const p = item.profile;
      if (Array.isArray(p.raw)) {
        const [, , l3 = '', , , , extra = ''] = p.raw;
        out.push(`${item.stiffId} ${`${l3} ${extra}`.trim()} /`);
      } else {
        out.push(`${item.stiffId} ${p.l3} /`);
      }
    });
    out.push(")");

    out.push("( 4/");
    nodes.forEach(n => { out.push(`${n.x} ${n.y} ${n.z} /`); });
    out.push(")");

    out.push("( 5/");
    baseNodeIds.forEach(id => { out.push(`${id} 1 2 3 4 5 6 /`); });
    out.push(")");

    const rotatedBars = bars.filter(b => Math.abs(b.angle) > 0.001);
    if (rotatedBars.length > 0) {
      out.push("( 9/");
      rotatedBars.forEach(b => { out.push(`${b.id} 1 ${b.angle.toFixed(2)} /`); });
      out.push(")");
    }

    const metalSections = usedProfilesList.filter(item => {
      const r = item.profile.raw;
      return Array.isArray(r) && r.at(3) && r.at(4) && r.at(5);
    });
    if (metalSections.length > 0) {
      out.push("{13/");
      metalSections.forEach(item => {
        const [, , , engType, srtFile, secSize] = item.profile.raw;
        const cleanShape = String(secSize).replace(/[хХ×]/g, 'x');
        out.push(`[${item.stiffId}]`);
        out.push(`Section = ${engType} `);
        out.push(`MatId = STL `);
        out.push(`File  = |${srtFile}| `);
        out.push(`Shape = |${cleanShape}| `);
        if (engType === 'AnglesCross' || engType === 'AnglesT') {
          out.push(`Rotation = 2\tBluePoint = 1 \tYellowPoint = 0`);
          out.push(`Y1Coupling = 1\t`);
        }
        out.push(``);
      });
      out.push("}");
    }




    generatedLiraText = out.join('\n');
    document.getElementById('liraOutput').value = generatedLiraText;
    document.getElementById('statNodes').textContent = nodes.length;
    document.getElementById('statBars').textContent = bars.length;
    document.getElementById('statStiff').textContent = usedProfilesList.length;

    const maxH = H + (hasTruss ? trussH2 : 0);
    previewData = { nodes, bars, maxX: xCoords[xCoords.length - 1], maxY: yCoords[yCoords.length - 1], maxZ: maxH };
    drawCanvas();
  }

  function copyText() {
    const out = document.getElementById('liraOutput');
    out.select();
    document.execCommand('copy');
    const btn = document.getElementById('copyBtn');
    const orig = btn.innerHTML;
    btn.innerHTML = '✔ Скопировано!';
    setTimeout(() => btn.innerHTML = orig, 1800);
  }

  function encodeWindows1251(str) {
    const cleanStr = str.replace(/\u00D7/g, 'х').replace(/\uFFFD/g, '');
    const bytes = new Uint8Array(cleanStr.length);
    for (let i = 0; i < cleanStr.length; i++) {
      const c = cleanStr.charCodeAt(i);
      if (c < 128) bytes[i] = c;
      else if (c >= 0x0410 && c <= 0x044F) bytes[i] = c - 0x0350;
      else if (c === 0x0401) bytes[i] = 0xA8;
      else if (c === 0x0451) bytes[i] = 0xB8;
      else if (c === 0x2116) bytes[i] = 0xB9;
      else bytes[i] = 0x3F;
    }
    return bytes;
  }

  function downloadTxt() {
    const rawName = (document.getElementById('taskName').value.trim() || 'KARCAS_MK2');
    const cleanTaskName = rawName.replace(/[^A-Za-z0-9_-]/g, '_').replace(/_+/g, '_') || 'KARCAS_MK2';
    const splitIndex = generatedLiraText.indexOf('{13/');

    let finalBytes;
    if (splitIndex !== -1) {
      const mainPart = encodeWindows1251(generatedLiraText.slice(0, splitIndex));
      const srtPart = new TextEncoder().encode(generatedLiraText.slice(splitIndex));
      finalBytes = new Uint8Array(mainPart.length + srtPart.length);
      finalBytes.set(mainPart, 0);
      finalBytes.set(srtPart, mainPart.length);
    } else {
      finalBytes = encodeWindows1251(generatedLiraText);
    }

    const blob = new Blob([finalBytes], { type: 'application/octet-stream' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${cleanTaskName}.txt`;
    a.click();
    URL.revokeObjectURL(a.href);
  }


  // ==========================================
  // 3D CANVAS ПРЕВЬЮ + ГИЗМО ОСЕЙ XYZ
  // ==========================================
  const canvas = document.getElementById('previewCanvas');
  const ctx = canvas.getContext('2d');
  let camAngleZ = -0.65;
  let camAngleX = 0.42;
  let camZoom = 1.0;
  let isDragging = false;
  let lastMouse = { x: 0, y: 0 };

  canvas.addEventListener('mousedown', e => { isDragging = true; lastMouse = { x: e.clientX, y: e.clientY }; });
  window.addEventListener('mouseup', () => { isDragging = false; });
  canvas.addEventListener('mousemove', e => {
    if (!isDragging) return;
    camAngleZ -= (e.clientX - lastMouse.x) * 0.008;
    camAngleX = Math.max(-1.4, Math.min(1.4, camAngleX + (e.clientY - lastMouse.y) * 0.008));
    lastMouse = { x: e.clientX, y: e.clientY };
    drawCanvas();
  });
  canvas.addEventListener('wheel', e => {
    e.preventDefault();
    camZoom = Math.max(0.3, Math.min(3.5, camZoom * (e.deltaY > 0 ? 0.9 : 1.1)));
    drawCanvas();
  }, { passive: false });

  function resetCamera() {
    camAngleZ = -0.65; camAngleX = 0.42; camZoom = 1.0;
    drawCanvas();
  }

  function projectPoint(x, y, z, cx, cy, scale) {
    const cosZ = Math.cos(camAngleZ), sinZ = Math.sin(camAngleZ);
    const cosX = Math.cos(camAngleX), sinX = Math.sin(camAngleX);
    const x1 = x * cosZ - y * sinZ;
    const y1 = x * sinZ + y * cosZ;
    const z2 = z * cosX - y1 * sinX;
    return { x: cx + x1 * scale, y: cy - z2 * scale };
  }

  function drawAxisGizmo() {
    const ox = 52, oy = canvas.height - 62, len = 30;
    const axes = [
      { label: 'X', dx: 1, dy: 0, dz: 0, color: '#ef4444' },
      { label: 'Y', dx: 0, dy: 1, dz: 0, color: '#22c55e' },
      { label: 'Z', dx: 0, dy: 0, dz: 1, color: '#3b82f6' }
    ];

    ctx.save();
    ctx.beginPath();
    ctx.arc(ox, oy, len + 15, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(15, 23, 42, 0.72)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.25)';
    ctx.lineWidth = 1;
    ctx.stroke();

    axes.forEach(ax => {
      const end = projectPoint(ax.dx, ax.dy, ax.dz, ox, oy, len);
      const ang = Math.atan2(end.y - oy, end.x - ox);
      ctx.beginPath();
      ctx.moveTo(ox, oy);
      ctx.lineTo(end.x, end.y);
      ctx.strokeStyle = ax.color;
      ctx.lineWidth = 2.2;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(end.x, end.y);
      ctx.lineTo(end.x - 6 * Math.cos(ang - 0.4), end.y - 6 * Math.sin(ang - 0.4));
      ctx.lineTo(end.x - 6 * Math.cos(ang + 0.4), end.y - 6 * Math.sin(ang + 0.4));
      ctx.closePath();
      ctx.fillStyle = ax.color;
      ctx.fill();

      ctx.fillStyle = ax.color;
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText(ax.label, end.x + 6 * Math.cos(ang) - 3, end.y + 6 * Math.sin(ang) + 4);
    });
    ctx.restore();
  }

  function drawCanvas() {
    const rect = canvas.parentElement.getBoundingClientRect();
    if (canvas.width !== rect.width || canvas.height !== rect.height) {
      canvas.width = rect.width;
      canvas.height = rect.height;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const { nodes, bars, maxX, maxY, maxZ } = previewData;
    if (!nodes.length) return;

    const midX = maxX / 2, midY = maxY / 2, midZ = maxZ / 2;
    const maxDim = Math.max(maxX, maxY, maxZ, 10);
    const scale = (Math.min(canvas.width, canvas.height) * 0.62 / maxDim) * camZoom;
    const cx = canvas.width / 2;
    const cy = canvas.height / 2 + 15;

    const colors = {
      column: '#3b82f6',
      tieY: '#14b8a6',
      tieX: '#f97316',
      truss: '#22c55e',
      brace: '#eab308'
    };

    bars.forEach(b => {
      const p1 = nodes[b.n1 - 1];
      const p2 = nodes[b.n2 - 1];
      const s1 = projectPoint(p1.x - midX, p1.y - midY, p1.z - midZ, cx, cy, scale);
      const s2 = projectPoint(p2.x - midX, p2.y - midY, p2.z - midZ, cx, cy, scale);

      ctx.beginPath();
      ctx.moveTo(s1.x, s1.y);
      ctx.lineTo(s2.x, s2.y);
      ctx.strokeStyle = colors[b.role] || '#94a3b8';
      ctx.lineWidth = b.role === 'column' ? 2.4 : 1.5;
      ctx.stroke();

      if (b.hingeType > 0) {
        ctx.fillStyle = '#ffffff';
        if (b.hingeType === 1 || b.hingeType === 3) {
          ctx.beginPath(); ctx.arc(s1.x + (s2.x - s1.x) * 0.12, s1.y + (s2.y - s1.y) * 0.12, 2.2, 0, Math.PI * 2); ctx.fill();
        }
        if (b.hingeType === 2 || b.hingeType === 3) {
          ctx.beginPath(); ctx.arc(s2.x - (s2.x - s1.x) * 0.12, s2.y - (s2.y - s1.y) * 0.12, 2.2, 0, Math.PI * 2); ctx.fill();
        }
      }
    });

    nodes.forEach(n => {
      const s = projectPoint(n.x - midX, n.y - midY, n.z - midZ, cx, cy, scale);
      ctx.beginPath();
      if (n.z === 0) {
        ctx.fillStyle = '#ef4444';
        ctx.fillRect(s.x - 3, s.y - 3, 6, 6);
      } else {
        ctx.fillStyle = '#cbd5e1';
        ctx.arc(s.x, s.y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    drawAxisGizmo();
  }

  window.addEventListener('resize', drawCanvas);
  window.addEventListener('DOMContentLoaded', () => {
    initProfilesDB();
    updateDbBadge();
    populateAllSelects();
    generateModel();
  });
