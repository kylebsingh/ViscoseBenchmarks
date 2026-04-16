<script lang="ts">
  import { fly, fade } from 'svelte/transition';
  import { getInitial } from '$lib/utils';
  import Icon from './Icon.svelte';

  let {
    activeTab = $bindable('easy'),
    loadingScores,
    profile,
    username,
    onRefresh,
    onLogout
  }: {
    activeTab: 'easy' | 'medium' | 'hard';
    loadingScores: boolean;
    profile: PlayerProfile | null;
    username: string;
    onRefresh: () => void;
    onLogout: () => void;
  } = $props();

  let isMenuOpen = $state(false);

  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (!node.contains(event.target as Node)) {
        isMenuOpen = false;
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }
</script>

<header class="global-header">
  <div class="logo-area">
    <h1>Viscose Benchmarks</h1>
  </div>

  <div class="header-center">
    <nav class="tabs-pill">
      <button class:active={activeTab === 'easy'} onclick={() => { activeTab = 'easy'; }}>Easy</button>
      <button class:active={activeTab === 'medium'} onclick={() => { activeTab = 'medium'; }}>Medium</button>
      <button class:active={activeTab === 'hard'} onclick={() => { activeTab = 'hard'; }}>Hard</button>
    </nav>
  </div>

  <div class="header-right">
    <div class="actions-group">
      <button class="btn-ghost refresh-btn" onclick={onRefresh} disabled={loadingScores}>
        <Icon name="refresh" strokeWidth={2.5} />
        <span>Refresh</span>
      </button>

      <div class="divider"></div>

      <div class="profile-area" use:clickOutside>
        <button class="profile-trigger btn-ghost" onclick={() => isMenuOpen = !isMenuOpen} class:active={isMenuOpen}>
          {#if profile?.steamAccountAvatar}
            <img src={profile.steamAccountAvatar} alt="Avatar" class="steam-avatar" />
          {:else}
            <div class="initial-avatar">
              {getInitial(profile?.steamAccountName || username)}
            </div>
          {/if}
          <span class="player-name">{profile?.steamAccountName || username}</span>
          <Icon name="chevron" class="icon-chevron {isMenuOpen ? 'rotated' : ''}" strokeWidth={3} size={12} />
        </button>

        {#if isMenuOpen}
          <div class="dropdown-menu" in:fly={{ y: 5, duration: 200 }} out:fade={{ duration: 100 }}>
            <button class="dropdown-item logout-item" onclick={() => { onLogout(); isMenuOpen = false; }}>
              <Icon name="logout" class="icon-red" size={16} />
              <span>Log Out</span>
            </button>
          </div>
        {/if}
      </div>
    </div>
  </div>
</header>

<style>
  .global-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    height: 64px;
    background: var(--header-bg);
    border-bottom: 1px solid var(--border);
    position: sticky;
    top: 0;
    z-index: 1000;
  }

  .logo-area h1 {
    margin: 0;
    font-family: 'Outfit', sans-serif;
    font-weight: 800;
    font-size: 1.25rem;
    color: var(--text-main);
    letter-spacing: -0.01em;
  }

  .header-center {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .tabs-pill {
    display: flex;
    background: var(--tab-bg);
    padding: 0.25rem;
    border-radius: 12px;
    border: 1px solid var(--border);
  }

  .tabs-pill button {
    background: transparent;
    color: var(--tab-text);
    border: none;
    padding: 0.45rem 1.5rem;
    border-radius: 9px;
    font-size: 0.8rem;
    font-weight: 700;
    font-family: 'Outfit', sans-serif;
    transition: all 0.2s;
    cursor: pointer;
  }

  .tabs-pill button.active {
    background: var(--tab-active-bg);
    color: var(--tab-text-active);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .header-right {
    display: flex;
    align-items: center;
  }

  .actions-group {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .divider {
    width: 1px;
    height: 16px;
    background: var(--divider-color);
  }

  .refresh-btn {
    gap: 0.5rem;
    padding: 0.5rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.85rem;
  }

  .profile-area {
    position: relative;
    display: flex;
    align-items: center;
  }

  .profile-trigger {
    gap: 0.75rem;
    border: 1px solid transparent;
    padding: 0.4rem 0.6rem;
    padding-right: 1rem;
    border-radius: 10px;
  }

  .profile-trigger:hover, .profile-trigger.active {
    border-color: var(--border);
  }

  .steam-avatar {
    width: 28px;
    height: 28px;
    border-radius: 6px;
    border: 1px solid var(--border);
    object-fit: cover;
  }

  .initial-avatar {
    width: 28px;
    height: 28px;
    background: #00b894;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    font-weight: 800;
    font-size: 0.8rem;
    font-family: 'Outfit';
  }

  .player-name {
    font-family: 'Outfit', sans-serif;
    font-weight: 700;
    font-size: 0.85rem;
    color: var(--text-main);
  }

  .icon-chevron {
    width: 12px;
    height: 12px;
    color: var(--text-muted);
    transition: transform 0.2s;
  }

  .icon-chevron.rotated { transform: rotate(180deg); }


  .dropdown-menu {
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    width: 180px;
    background: var(--surface-glass);
    border: 1px solid var(--border);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border-radius: 12px;
    padding: 0.5rem;
    box-shadow: 0 10px 40px var(--shadow);
    z-index: 1000;
  }

  .dropdown-item {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    background: transparent;
    border: none;
    border-radius: 8px;
    font-weight: 700;
    font-size: 0.8rem;
    font-family: 'Outfit';
    color: var(--text-main);
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .dropdown-item:hover { background: var(--surface-hover); }

  .logout-item { color: #ff5252; }
  .logout-item:hover { background: rgba(255, 82, 82, 0.08); }

  .icon-red { width: 16px; height: 16px; color: #ff5252; }
</style>
