<template>
    <router-link v-bind:class="['article', type == 'double' ? 'article_type_double' : '']" :to="`/article/${id}`">
        <div class="article__in">
            <h2 class="article__title">{{ title }}</h2>
            <p class="article__description">{{ description }}</p>
        </div>
        <img class="article__thumb" src="http://placekitten.com/g/400/300" alt="">                
    </router-link>
</template>

<script>
export default {
    name: 'Article',
    props: ['title', 'description', 'type', 'id']
}
</script>

<style>
.article {
    position: relative;
    overflow: hidden;
    text-decoration: none;
    
    /* old browsers >*/
    float: left;
    min-height: 300px;
    width: 100%;
    /* < old browsers */
}

.article::after {
    content: '';
    position: absolute;
    left: 0;
    top:0;
    bottom: 0;
    right: 0;
    background: rgba(0,0,0, 0.5);
}
.article__in {
    position: relative;
    z-index: 1;
    color: #fff;
    padding: 10px 20px
}
.article__thumb {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    height: auto;
}

/* old browsers >*/
@media (min-width: 480px) {
    .article {
        width: 50%;
    }
    .article_type_double {
        width: 100%;
    }
}
@media (min-width: 1025px) {
    .article {
        width: 33.3%;
    }
    .article_type_double {
        width: 66.6%;
    }
}
/* < old browsers */

@supports (display: grid) {
    .article {
        width: 100%;
    }
    @media (min-width: 480px) {
        .article_type_double {
            grid-column-start: span 2;
        }
    }
}

</style>
