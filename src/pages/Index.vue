<template>
  <Layout>
    <WavySection class='white--text'>
        <div class='italianno text-xs-left pl-2 mb-8'>
            UCourse.fun
        </div>
        <div class='imfd text-xs-right pr-2 mb-4'>
            <p>
                Tell me and I forget. <br />
                Teach me and I remember. <br />
                Involve me and I learn.
            </p>
            <p>
                - Benjamin Franklin  
            </p>
                <v-btn outline color="white" @click='dialog=true'><span class='ls-4'>訂閱電子報</span></v-btn>
        </div>
    </WavySection>
    <section class='sec2'>
    <v-dialog v-model='dialog' max-width='500'>
        <MailingListForm @close='dialog=false' />
    </v-dialog>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
        </p>
        <p>
        美國FY21預算出爐在即(應該明天就會看到了)
        國防部長Mark Esper表示，他保證美國會有355艘船海軍

                                                         基於去年底的海軍大砍船風波
                                                         部長說他絕對支持355艘船海軍
                                                         但是要達到355艘船，海軍必須要徹底重整變成造起來比較快的小船為主
                                                         ──一個可以養船廠又能維持航母部隊的調整

                                                         也就是說不再是海軍過去規劃的104大52小
                                                         這對在國防部不希望預算繼續成長的狀況之下去建造更大更致命的艦隊來說是必要的

                                                         所以部長說海軍必須要立刻推行輕型的有人船隻
                                                         這是在評估美國海軍未來的艦隊該長什麼樣子後，部長認為要達到這個目標
                                                         最快的就是有人小船，在一段時間後能轉換成無人船

                                                         部長說先造出這些有人小船
                                                         然後隨著科技的進步變成選擇性無人化，最終才變成無人
                                                         這是國防部該推行的方向，而且要更積極的發展才行
                                                         如果不是要求比355艘更多的話，大概2030年就能達到355艘


                                                         一方面關於大砍船的問題
                                                         根據彭博社的報導，雖然美國海軍FY21只打算請求比FY20少四艘的八艘船
                                                         被砍掉的那艘柏克三被偷偷加回來了

                                                         部長說，預算這些他沒有出什麼意見，他接任時已經八月了
                                                         三個軍部的預算早就大部分寫好


                                                         那雖然國防部跟海軍都要推行無人船
                                                         這個方針被國會打槍

                                                         部長說，部長辦公室已經準備好去跟國會報告新的艦隊組成
                                                         國防部打算請國防委員會的議員大人們來實際看看海軍現在在幹嘛
                                                         這也是部長想要聽取民意的部分

                                                         除了議員外退休海軍將領與國防官員也會被邀請來檢視整個過程
                                                         來確保整個國防部有在軌道上

                                                         同時建造更多小船也能開放更多機會讓小船廠也能納入海軍的造艦工業基礎中
                                                         這對適逢選舉年的議員大人們來說也很有吸引力
                                                         (政策買票啊喂)

                                                         部長強調美國需要以現代化船廠來擴張與健全化工業基礎
                                                         美國可以透過增強美國國內船廠的數量並維持高度熟練人才不外流來確保造船能量


                                                         而同時國防部的預算取得與計畫發展辦公室將會與海軍展開一連串的兵推
                                                         來找出未來前進的方向
                                                         但任何重大的決定都要等到今年夏天會完成的整合國防部各部會的新聯合作戰計畫完成

                                                         部長認為這些程序跑完後的未來艦隊將會是一個基礎與指引
                                                         這會告訴國防部該走的大方向
                                                         部長也認為未來艦隊會是一個對制度面來說與對海軍海陸混合部隊來說的Game changer


                                                         好啦國防部說要小船海軍
                                                         那去年，國防部研發次長Mike Griffin公開放話說
                                                         他在煩惱中國比較怕2000發極音速常規打擊武器還是航母

                                                         那所以說這航母要怎麼辦呢，部長說，其實不用這麼極端
                                                         這個問題常常變成0艘航母與12艘航母兩個極端
                                                         部長本人其實也不知道航母會怎樣，但是他認為航母很重要
                                                         航母展現了美國的國力與國威，吸引民眾的注意力，產生強大的抑止力
                                                         並且帶給美國強大的力量

                                                         部長說事實上美國海軍為了維持未來競爭力，而正在(第N次的)檢討一個新的航母方向
                                                         比方說日本就要把F-35B塞上本來只給直升機用的小船上頭
                                                         航母可以有很多種變化，所以可以討論大小或是討論數量
                                                         過去美國海軍已經檢討過N次到底要造大航母還是小航母乃至於F-35航母
                                                         代理海軍部長Modly已經跟部長談過這個話題了
                                                         部長說這些都會是他們探討未來艦隊組成時會檢視的部分
        </p>
        <p>
        美國FY21預算出爐在即(應該明天就會看到了)
        國防部長Mark Esper表示，他保證美國會有355艘船海軍

        基於去年底的海軍大砍船風波
                                                         部長說他絕對支持355艘船海軍
                                                         但是要達到355艘船，海軍必須要徹底重整變成造起來比較快的小船為主
                                                         ──一個可以養船廠又能維持航母部隊的調整

                                                         也就是說不再是海軍過去規劃的104大52小
                                                         這對在國防部不希望預算繼續成長的狀況之下去建造更大更致命的艦隊來說是必要的

                                                         所以部長說海軍必須要立刻推行輕型的有人船隻
                                                         這是在評估美國海軍未來的艦隊該長什麼樣子後，部長認為要達到這個目標
                                                         最快的就是有人小船，在一段時間後能轉換成無人船

                                                         部長說先造出這些有人小船
                                                         然後隨著科技的進步變成選擇性無人化，最終才變成無人
                                                         這是國防部該推行的方向，而且要更積極的發展才行
                                                         如果不是要求比355艘更多的話，大概2030年就能達到355艘


                                                         一方面關於大砍船的問題
                                                         根據彭博社的報導，雖然美國海軍FY21只打算請求比FY20少四艘的八艘船
                                                         被砍掉的那艘柏克三被偷偷加回來了

                                                         部長說，預算這些他沒有出什麼意見，他接任時已經八月了
                                                         三個軍部的預算早就大部分寫好


                                                         那雖然國防部跟海軍都要推行無人船
                                                         這個方針被國會打槍

                                                         部長說，部長辦公室已經準備好去跟國會報告新的艦隊組成
                                                         國防部打算請國防委員會的議員大人們來實際看看海軍現在在幹嘛
                                                         這也是部長想要聽取民意的部分

                                                         除了議員外退休海軍將領與國防官員也會被邀請來檢視整個過程
                                                         來確保整個國防部有在軌道上

                                                         同時建造更多小船也能開放更多機會讓小船廠也能納入海軍的造艦工業基礎中
                                                         這對適逢選舉年的議員大人們來說也很有吸引力
                                                         (政策買票啊喂)

                                                         部長強調美國需要以現代化船廠來擴張與健全化工業基礎
                                                         美國可以透過增強美國國內船廠的數量並維持高度熟練人才不外流來確保造船能量


                                                         而同時國防部的預算取得與計畫發展辦公室將會與海軍展開一連串的兵推
                                                         來找出未來前進的方向
                                                         但任何重大的決定都要等到今年夏天會完成的整合國防部各部會的新聯合作戰計畫完成

                                                         部長認為這些程序跑完後的未來艦隊將會是一個基礎與指引
                                                         這會告訴國防部該走的大方向
                                                         部長也認為未來艦隊會是一個對制度面來說與對海軍海陸混合部隊來說的Game changer


                                                         好啦國防部說要小船海軍
                                                         那去年，國防部研發次長Mike Griffin公開放話說
                                                         他在煩惱中國比較怕2000發極音速常規打擊武器還是航母

                                                         那所以說這航母要怎麼辦呢，部長說，其實不用這麼極端
                                                         這個問題常常變成0艘航母與12艘航母兩個極端
                                                         部長本人其實也不知道航母會怎樣，但是他認為航母很重要
                                                         航母展現了美國的國力與國威，吸引民眾的注意力，產生強大的抑止力
                                                         並且帶給美國強大的力量

                                                         部長說事實上美國海軍為了維持未來競爭力，而正在(第N次的)檢討一個新的航母方向
                                                         比方說日本就要把F-35B塞上本來只給直升機用的小船上頭
                                                         航母可以有很多種變化，所以可以討論大小或是討論數量
                                                         過去美國海軍已經檢討過N次到底要造大航母還是小航母乃至於F-35航母
                                                         代理海軍部長Modly已經跟部長談過這個話題了
                                                         部長說這些都會是他們探討未來艦隊組成時會檢視的部分
        </p>
    </section>
  </Layout>
</template>

<script>
import Layout from '~/layouts/LandingPage'
import MailingListForm from '~/components/MailingListForm'
import WavySection from '~/components/WavySection'

export default {
  data() {
    return {
      dialog: false,
    }
  },
  metaInfo: {
    title: '優課坊'
  },
  components: {
    MailingListForm,
    WavySection,
    Layout,
  },
}
</script>

<style>
section {
    position: relative;
    margin: 0;
    padding: 0;
    background: #209cee url('../../static/bg30.png');
    background-size: cover;
    width: 100%;
    height: 100vh;
}

#curve {
    position: absolute;
    bottom: 0;
    width: 100%;
}

#curve path {
    fill: #fff;
}

section.sec2 {
    width: 100%;
    height: 100%;
    background: #fff;
}
.cinzel {
    font-family: 'Cinzel', serif;
    font-weight: 300;
    font-size: 25px;
}
.imfd {
    font-family: 'IM Fell DW Pica SC', serif;
    font-weight: 500;
    font-size: 25px;
    text-shadow: 2px 2px 2px #333;
}
.marc {
    font-family: 'Marcellus SC', serif;
    font-weight: 300;
    font-size: 25px;
}
.fred {
    font-family: 'Fredericka the Great', cursive;
    font-weight: 300;
    font-size: 50px;
}
.ben {
    font-family: 'Pinyon Script', cursive;
    font-weight: 300;
    font-size: 40px;
}
.italianno {
    font-family: 'Italianno', cursive;
    font-weight: 500;
    font-size: 40px;
    text-shadow: 4px 4px 4px #000;
}
.leck {
    font-family: 'Leckerli One', cursive;
    font-weight: 300;
    font-size: 40px;
}
.cabin {
    font-family: 'Cabin Sketch', cursive;
    font-weight: 300;
    font-size: 30px;
}
.sansTitle {
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 300;
    font-size: 80px;
}

.serifTitle {
    font-family: 'cwTeXFangSong', serif;
    font-weight: 700;
    font-size: 80px;
}
.ls-4 {
    letter-spacing: 1em;
    padding-left: 1em;
}
</style>
