let arr = new Array("Почтмейстер", "Городничий", "Аммос Федорович");
let str = "Почтмейстер. Объясните, господа, что, какой чиновник едет?\
Городничий. А вы разве не слышали?\
Почтмейстер. Слышал от Петра Ивановича Бобчинского. Он только что был у меня в почтовой конторе.\
Городничий. Ну, что? Как вы думаете об этом?\
Почтмейстер. А что думаю? война с турками будет.\
Аммос Федорович. В одно слово! я сам то же думал.\
Городничий. Да, оба пальцем в небо попали!\
Почтмейстер. Право, война с турками. Это все француз гадит.\
Городничий. Какая война с турками! Просто нам плохо будет, а не туркам. Это уже известно: у меня письмо.\
Почтмейстер. А если так, то не будет войны с турками.\
Городничий. Ну что же, как вы, Иван Кузьмич?\
Почтмейстер. Да что я? Как вы, Антон Антонович?\
Городничий. Да что я? Страху-то нет, а так, немножко... Купечество да гражданство меня смущает. Говорят, что я им солоно пришелся, а я, вот ей-Богу, если и взял с иного, то, право, без всякой ненависти. Я даже думаю (берет его под руку и отводит в сторону), я даже думаю, не было ли на меня какого-нибудь доноса. Зачем же в самом деле к нам ревизор? Послушайте, Иван Кузьмич, нельзя ли вам, для общей нашей пользы, всякое письмо, которое прибывает к вам в почтовую контору, входящее и исходящее, знаете, этак немножко распечатать и прочитать: не содержится ли в нем какого-нибудь донесения или просто переписки. Если же нет, то можно опять запечатать; впрочем, можно даже и так отдать письмо, распечатанное.\
Почтмейстер. Знаю, знаю... Этому не учите, это я делаю не то чтоб из предосторожности, а больше из любопытства: смерть люблю узнать, что есть нового на свете. Я вам скажу, что это преинтересное чтение. Иное письмо с наслажденьем прочтешь — так описываются разные пассажи... а назидательность какая... лучше, чем в «Московских ведомостях»!\
Городничий. Ну что ж, скажите, ничего не начитывали о каком-нибудь чиновнике из Петербурга?\
Почтмейстер. Нет, о петербургском ничего нет, а о костромских и саратовских много говорится. Жаль, однако ж, что вы не читаете писем: есть прекрасные места. Вот недавно один поручик пишет к приятелю и описал бал в самом игривом... очень, очень хорошо: «Жизнь моя, милый друг, течет, говорит, в эмпиреях: барышень много, музыка играет, штандарт скачет...» — с большим, с большим чувством описал. Я нарочно оставил его у себя. Хотите, прочту?\
Городничий. Ну, теперь не до того. Так сделайте милость, Иван Кузьмич: если на случай попадется жалоба или донесение, то без всяких рассуждений задерживайте.\
Почтмейстер. С большим удовольствием.\
Аммос Федорович. Смотрите, достанется вам когда-нибудь за это.\
Почтмейстер. Ах, батюшки!\
Городничий. Ничего, ничего. Другое дело, если бы вы из этого публичное что-нибудь сделали, но ведь это дело семейственное.\
Аммос Федорович. Да, нехорошее дело заварилось! А я, признаюсь, шел было к вам, Антон Антонович, с тем чтобы попотчевать вас собачонкою. Родная сестра тому кобелю, которого вы знаете. Ведь вы слышали, что Чептович с Варховинским затеяли тяжбу, и теперь мне роскошь: травлю зайцев на землях и у того и у другого.\
Городничий. Батюшки, не милы мне теперь ваши зайцы: у меня инкогнито проклятое сидит в голове. Так и ждешь, что вот отворится дверь и — шасть...";
let arr1 = str.split(arr[0]+".");
let arr2 = str.split(arr[1]+".");
let arr3 = str.split(arr[2]+".");
let end;
for (let i = 0; i < arr.length; i++)
{
    for (let j = 0; j <arr1.length;j++)
    {
        end = arr1[j].indexOf(arr[i]);
        arr1[j] = arr1[j].slice(0,end);
    }
}
for (let i = 0; i < arr.length; i++)
{
    for (let j = 0; j <arr2.length;j++)
    {
        end = arr2[j].indexOf(arr[i]);
        arr2[j] = arr2[j].slice(0,end);
    }
}
for (let i = 0; i < arr.length; i++)
{
    for (let j = 0; j <arr3.length;j++)
    {
        end = arr3[j].indexOf(arr[i]);
        arr3[j] = arr3[j].slice(0,end);
    }
}
console.log("Почтмейстер:");
for (let i = 0; i<arr1.length;i++)
{
    console.log(arr1[i]);
}
console.log("Городничий:");
for (let i = 0; i<arr2.length;i++)
{
    console.log(arr2[i]);
}
console.log("Аммос Федорович:");
for (let i = 0; i<arr3.length;i++)
{
    console.log(arr3[i]);
}
//let arrSum = new Array(arr1, arr2, arr3);
/*for (let i = 0; i < arr.length; i++)
{
    for (let j = 0; j <arrSum[i][j].length;j++)
    {
        end = arrSum[i][j].indexOf(arr[i]);
        arrSum[i][j] = arrSum[i][j].slice(0,end);
        console.log(arrSum[i][j]);
    }
}*/