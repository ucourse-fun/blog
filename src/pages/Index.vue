<template>
  <Layout>
    <TopSection class='white--text'>
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
                <v-btn outline color="white" @click='dialog=true'><span class='ls-4'>訂閱課程快訊</span></v-btn>
        </div>
        <v-dialog v-model='dialog' max-width='500'>
            <MailingListForm @close='dialog=false' />
        </v-dialog>
    </TopSection>
    <CourseCardList :courses='$static.allCourse.edges.map(e => e.node)' />
  </Layout>
</template>
<static-query>
query {
  allCourse{
    edges{
      node{
        featuredImage (width: 400, height: 200)
        title
        level
        excerpt
        path
      }
    }
  }
}
</static-query>

<script>
import Layout from '~/layouts/LandingPage'
import MailingListForm from '~/components/MailingListForm'
import TopSection from '~/components/TopSection'
import CourseCardList from '~/components/CourseCardList'

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
    TopSection,
    Layout,
    CourseCardList,
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
    height: 50vh;
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
