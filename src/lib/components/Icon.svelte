<script lang="ts">
  let { name, color = 'currentColor', size = 18, strokeWidth = 2, class: className = '' } = $props<{
    name: 'refresh' | 'chevron' | 'logout' | 'user' | 'arrow-right';
    color?: string;
    size?: number | string;
    strokeWidth?: number;
    class?: string;
  }>();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  stroke={color}
  stroke-width={strokeWidth}
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon {className}"
>
  {#if name === 'refresh'}
    <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
    <polyline points="21 3 21 9 15 9"></polyline>
  {:else if name === 'chevron'}
    <polyline points="6 9 12 15 18 9"></polyline>
  {:else if name === 'logout'}
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
    <polyline points="16 17 21 12 16 7"></polyline>
    <line x1="21" y1="12" x2="9" y2="12"></line>
  {:else if name === 'user'}
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  {:else if name === 'arrow-right'}
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  {/if}
</svg>

<style>
  .icon {
    display: inline-block;
    vertical-align: middle;
    flex-shrink: 0;
  }
</style>
