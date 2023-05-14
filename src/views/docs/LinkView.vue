<template>
    <div class="cache">
        <Breadcrumb :crumbs="['Docs', 'Link']"></Breadcrumb>
        <h3>Link API Documentation</h3>
        <p>Super link is a new generation Discord bot utilizing Spring Boot to create Discord and Minecraft account
            links</p>
        <hr />
        <h4 id="status-codes">Status codes</h4>
        <ul>
            <li>HTTP <code>404 NOT FOUND</code> - Returns empty body</li>
            <li>HTTP <code>500 INTERNAL SERVER ERROR</code> - Returns error object</li>
        </ul>
        <p>Error object example:</p>
        <pre><code class="lang-json">{
        <span class="hljs-attr">"name"</span>: <span class="hljs-string">"RuntimeException"</span>,
        <span class="hljs-attr">"message"</span>: <span class="hljs-string">"User not found"</span>,
        <span class="hljs-attr">"path"</span>: <span class="hljs-string">"/api/user/651476404201979926/06805a4280d0463dbf7151b1e1317cd4"</span>,
        <span class="hljs-attr">"timestamp"</span>: <span class="hljs-number">1656578263538</span>
    }
    </code></pre>
        <h4 id="endpoints">Endpoints</h4>
        <p>Application supports a big list of endpoints with loads of customization to suite everyone&#39;s needs</p>
        <h5 id="mojang-api-cache">Mojang API Cache</h5>
        <ul>
            <li>GET <code>/api/cache/uuid/{uuid}</code></li>
            <li>GET <code>/api/cache/name/{name}</code></li>
        </ul>
        <blockquote>
            <p>Query parameter <code>?ignore=1</code> allows you to skip the cache update and use the value from the
                database. Recommended use on websites since it drastically speeds up username loading time.</p>
        </blockquote>
        <h5 id="link-data">Link data</h5>
        <ul>
            <li>GET <code>/api/data</code> - Paged response with all links</li>
            <li>GET <code>/api/data/{id}</code></li>
            <li>GET <code>/api/data/uuid/{uuid}</code></li>
            <li>GET <code>/api/data/uuid/{uuid}/history</code> - List of all link data for account</li>
            <li>GET <code>/api/data/discord/{id}</code></li>
            <li>GET <code>/api/data/discord/{id}/history</code> - List of all link data for user</li>
            <li>GET <code>/api/data/guild/{id}</code> - Paged response of all links in a guild</li>
            <li>GET <code>/api/data/created/after/{date}</code> - Lists all links created after said date</li>
            <li>GET <code>/api/data/deleted/after/{date}</code> - Lists all links deleted after said date</li>
        </ul>
        <h5 id="discord-user-member">Discord User/Member</h5>
        <ul>
            <li>GET <code>/api/user/{uuid}</code> - Retrieves discord user</li>
            <li>GET <code>/api/user/{guild}/{uuid}</code> - Retrieves discord member based of the discord server id</li>
            <li>GET <code>/api/user/{guild}/{role}/{uuid}</code> - Retrieves discord member based of the discord server
                id
                and target role id
            </li>
        </ul>
        <blockquote>
            <p>Request params <code>supporter</code> and <code>moderator</code> are available for requests that contain
                path
                param <code>guild</code>. They need to represent a text channel id from that guild and will be checked
                if
                the member <strong>can talk</strong> in theme</p>
        </blockquote>
        <h5 id="minecraft-server-status">Minecraft server status</h5>
        <ul>
            <li>GET <code>/api/status/{hostname}</code> - Status for domain (detects SRV record) or an IP with default
                port
            </li>
            <li>GET <code>/api/status/{hostname}/{port}</code> - Status for domain or IP with custom port</li>
        </ul>
        <h5 id="application-info">Application Info</h5>
        <ul>
            <li>GET <code>/api/info</code></li>
            <li>GET <code>/api/info/guilds</code></li>
        </ul>
        <h5 id="lookup">Lookup</h5>
        <ul>
            <li>GET <code>/api/lookup/{name}</code></li>
            <li>GET <code>/api/lookup/{guild}/{name}</code></li>
            <li>GET <code>/api/lookup/{guild}/{role}/{name}</code></li>
        </ul>
        <h5 id="ban">Ban</h5>
        <ul>
            <li>GET <code>/api/ban</code></li>
            <li>GET <code>/api/ban/{id}</code></li>
            <li>GET <code>/api/ban/admin/{id}</code> - All bans by admin, ID is admins discord user id</li>
            <li>GET <code>/api/ban/guild/{id}</code> - All bans by guild where the ban was done, ID is discord guild id
            </li>
        </ul>
    </div>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue';
</script>