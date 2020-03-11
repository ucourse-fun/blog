<template>
    <Layout>
        <g-image :src="$page.course.featuredImage" style="width: 100%"/>
        <h1>{{ $page.course.title }}</h1>
        <p>{{ $page.course.excerpt }}</p>
        <g-link :to="$page.course.path">
            {{ $page.course.path }}
        </g-link>
        <VueRemarkContent />

    </Layout>
</template>

<page-query>
query Course($id: ID!){
  course(id: $id){
    title
    featuredImage (width: 1024, height: 538)
    path
    excerpt
    content
    
  }
}
</page-query>
