<template>
  <div class="cache">
    <Breadcrumb :crumbs="['Docs', 'Cache']"></Breadcrumb>
    <h3>Cache API Documentation</h3>
    <hr />
    <h4>Status codes</h4>
    <ul>
      <li>HTTP <code>404 NOT FOUND</code> - Returns empty body</li>
      <li>HTTP <code>500 INTERNAL SERVER ERROR</code> - Returns error object</li>
    </ul>
    <p>Error object example:</p>
    <pre><code class="lang-json">{
      <span class="hljs-attr">"name"</span>: <span class="hljs-string">"RuntimeException"</span>,
      <span class="hljs-attr">"message"</span>: <span class="hljs-string">"User not found"</span>,
      <span class="hljs-attr">"path"</span>: <span class="hljs-string">"/api/user/651476404201979926/06805a4280d0463dbf7151b1e1317cd"</span>,
      <span class="hljs-attr">"timestamp"</span>: <span class="hljs-number">1656578263538</span>
  }
  </code></pre>

    <h4 id="endpoints">Endpoints</h4>
    <p>Application supports a big list of endpoints with loads of customization to suite everyone&#39;s needs</p>
    <blockquote>
      <p>Any endpoint that supports pagination can be manipulated using query params <code>page</code>,
        <code>size</code> and <code>sort</code>
      </p>
      <p>Example usage: <code>?page=3&amp;size=12&amp;sort=id.desc</code></p>
    </blockquote>
    <ul>
      <li>GET <code>/api/data</code> - Paged list of all data</li>
    </ul>
    <pre><code class="lang-json">{
    <span class="hljs-attr">"content"</span>: [
      {
        <span class="hljs-attr">"id"</span>: <span class="hljs-number">1</span>,
        <span class="hljs-attr">"name"</span>: <span class="hljs-string">"nikeq"</span>,
        <span class="hljs-attr">"uuid"</span>: <span class="hljs-string">"17933cb0b20f463e966f4d59518a2c7c"</span>,
        <span class="hljs-attr">"discordId"</span>: <span class="hljs-string">"667897322742743040"</span>,
        <span class="hljs-attr">"tag"</span>: <span class="hljs-string">"finley#0141"</span>,
        <span class="hljs-attr">"avatar"</span>: <span class="hljs-string">"https://cdn.discordapp.com/avatars/667897322742743040/ed4481fe121922a6aacadf6aab5a4e16.png"</span>,
        <span class="hljs-attr">"guildId"</span>: <span class="hljs-string">"264801645370671114"</span>,
        <span class="hljs-attr">"createdAt"</span>: <span class="hljs-string">"2021-06-29T14:58:14"</span>
      },
      {
        <span class="hljs-attr">"id"</span>: <span class="hljs-number">2</span>,
        <span class="hljs-attr">"name"</span>: <span class="hljs-string">"GDLudus"</span>,
        <span class="hljs-attr">"uuid"</span>: <span class="hljs-string">"60d1d626909b419fbcd824a7269bfdb0"</span>,
        <span class="hljs-attr">"discordId"</span>: <span class="hljs-string">"360217670639026187"</span>,
        <span class="hljs-attr">"tag"</span>: <span class="hljs-string">"Ludus#5299"</span>,
        <span class="hljs-attr">"avatar"</span>: <span class="hljs-string">"https://cdn.discordapp.com/avatars/360217670639026187/f7e9964277991dcb1aaf91340ea07eca.png"</span>,
        <span class="hljs-attr">"guildId"</span>: <span class="hljs-string">"264801645370671114"</span>,
        <span class="hljs-attr">"createdAt"</span>: <span class="hljs-string">"2021-06-29T15:24:22"</span>
      },
      {
        <span class="hljs-attr">"id"</span>: <span class="hljs-number">3</span>,
        <span class="hljs-attr">"name"</span>: <span class="hljs-string">"P19E"</span>,
        <span class="hljs-attr">"uuid"</span>: <span class="hljs-string">"a19513154af94ffb8b69562080b37e81"</span>,
        <span class="hljs-attr">"discordId"</span>: <span class="hljs-string">"687297991358546054"</span>,
        <span class="hljs-attr">"tag"</span>: <span class="hljs-string">"nikkekikkeli#3007"</span>,
        <span class="hljs-attr">"avatar"</span>: <span class="hljs-string">"https://cdn.discordapp.com/avatars/687297991358546054/973e9ffb9bd79810916580e76c6017ee.png"</span>,
        <span class="hljs-attr">"guildId"</span>: <span class="hljs-string">"264801645370671114"</span>,
        <span class="hljs-attr">"createdAt"</span>: <span class="hljs-string">"2021-06-29T15:24:28"</span>
      }
    ],
    <span class="hljs-attr">"pageable"</span>: {
      <span class="hljs-attr">"sort"</span>: {
        <span class="hljs-attr">"empty"</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">"sorted"</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">"unsorted"</span>: <span class="hljs-literal">true</span>
      },
      <span class="hljs-attr">"offset"</span>: <span class="hljs-number">0</span>,
      <span class="hljs-attr">"pageNumber"</span>: <span class="hljs-number">0</span>,
      <span class="hljs-attr">"pageSize"</span>: <span class="hljs-number">3</span>,
      <span class="hljs-attr">"paged"</span>: <span class="hljs-literal">true</span>,
      <span class="hljs-attr">"unpaged"</span>: <span class="hljs-literal">false</span>
    },
    <span class="hljs-attr">"last"</span>: <span class="hljs-literal">false</span>,
    <span class="hljs-attr">"totalPages"</span>: <span class="hljs-number">218</span>,
    <span class="hljs-attr">"totalElements"</span>: <span class="hljs-number">653</span>,
    <span class="hljs-attr">"size"</span>: <span class="hljs-number">3</span>,
    <span class="hljs-attr">"number"</span>: <span class="hljs-number">0</span>,
    <span class="hljs-attr">"sort"</span>: {
      <span class="hljs-attr">"empty"</span>: <span class="hljs-literal">true</span>,
      <span class="hljs-attr">"sorted"</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">"unsorted"</span>: <span class="hljs-literal">true</span>
    },
    <span class="hljs-attr">"first"</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">"numberOfElements"</span>: <span class="hljs-number">3</span>,
    <span class="hljs-attr">"empty"</span>: <span class="hljs-literal">false</span>
  }
  </code></pre>
    <ul>
      <li>GET <code>/api/data/{id}</code> - Data for specific ID</li>
    </ul>
    <blockquote>
      <p>All IDs match the original API for simpler integration</p>
    </blockquote>
    <pre><code class="lang-json">{
        <span class="hljs-attr">"id"</span>: <span class="hljs-number">1</span>,
        <span class="hljs-attr">"name"</span>: <span class="hljs-string">"nikeq"</span>,
        <span class="hljs-attr">"uuid"</span>: <span class="hljs-string">"17933cb0b20f463e966f4d59518a2c7c"</span>,
        <span class="hljs-attr">"discordId"</span>: <span class="hljs-string">"667897322742743040"</span>,
        <span class="hljs-attr">"tag"</span>: <span class="hljs-string">"finley#0141"</span>,
        <span class="hljs-attr">"avatar"</span>: <span class="hljs-string">"https://cdn.discordapp.com/avatars/667897322742743040/ed4481fe121922a6aacadf6aab5a4e16.png"</span>,
        <span class="hljs-attr">"guildId"</span>: <span class="hljs-string">"264801645370671114"</span>,
        <span class="hljs-attr">"createdAt"</span>: <span class="hljs-string">"2021-06-29T14:58:14"</span>
  }
  </code></pre>
    <ul>
      <li>GET <code>/api/data/discord/{id}</code> - Data for specific Discord ID</li>
      <li>GET <code>/api/data/guild/{id}</code> - Paged list of data for specific Guild ID</li>
      <li>GET <code>/api/data/uuid/{uuid}</code> - Data for specific UUID</li>
      <li>GET <code>/api/data/name/{username}</code> - Data for username</li>
      <li>GET <code>/api/data/search/{name}</code> - Search result (as list) by ether name or tag</li>
    </ul>

  </div>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue';
</script>