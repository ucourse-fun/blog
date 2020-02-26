<template>
    <Layout>
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
    path
    excerpt
    content
    
  }
}
</page-query>
