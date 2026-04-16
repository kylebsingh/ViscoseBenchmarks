<script lang="ts">
  import { onMount } from 'svelte';
  import { ViscoseEasy, ViscoseMedium, ViscoseHard, type TierData } from '$lib/benchmarkData';
  import '$lib/styles/theme.css';

  import LoginCard from '$lib/components/LoginCard.svelte';
  import DashboardHeader from '$lib/components/DashboardHeader.svelte';
  import BenchmarkTable from '$lib/components/BenchmarkTable.svelte';

  let username = $state('');
  let isLoggedIn = $state(false);
  let globalLoading = $state(false);
  let errorMsg = $state('');
  let profile = $state<PlayerProfile | null>(null);

  let scenarioScores = $state<Record<string, number>>({});
  let loadingScores = $state(false);

  let activeTab = $state<'easy' | 'medium' | 'hard'>('easy');

  let currentTier = $derived<TierData>(
    activeTab === 'easy' ? ViscoseEasy :
    activeTab === 'medium' ? ViscoseMedium :
    ViscoseHard
  );



  async function handleLogin() {
    globalLoading = true;
    errorMsg = '';
    const profileRes = await window.electronAPI.getProfile(username);
    if (profileRes.success && profileRes.data.playerId) {
      profile = profileRes.data;
      isLoggedIn = true;
      await fetchHighScores();
    } else {
      errorMsg = 'Could not find player. Make sure your username is exact.';
    }
    globalLoading = false;
  }

  async function fetchHighScores() {
    loadingScores = true;
    const scenariosToFetch = new Set<string>();
    
    [ViscoseEasy, ViscoseMedium, ViscoseHard].forEach(tier => {
      tier.categories.forEach(cat => {
        cat.subcategories.forEach(sub => {
          sub.scenarios.forEach(scen => scenariosToFetch.add(scen.name));
        });
      });
    });

    const newScores: Record<string, number> = {};
    const queries = Array.from(scenariosToFetch).map(async (name) => {
      try {
        const res = await window.electronAPI.getScenarioScore(profile?.webapp?.username || username, name);
        let parsed = 0;
        if (res.success && res.data) {
          if (Array.isArray(res.data) && res.data.length > 0) {
            parsed = Math.max(...res.data.map((d: any) => parseFloat(d.score) || 0));
          } else if ('score' in res.data) {
            parsed = parseFloat((res.data as ScoreData).score as string);
          }
        }
        newScores[name] = parsed;
      } catch (e) {
        console.error(`Failed to fetch score for ${name}:`, e);
      }
    });

    await Promise.allSettled(queries);
    scenarioScores = { ...scenarioScores, ...newScores };
    loadingScores = false;
  }
</script>

<svelte:head>
  <title>Viscose Benchmarks</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;600;700;800&display=swap" rel="stylesheet">
</svelte:head>

<main class="app-wrapper">
  {#if !isLoggedIn}
    <LoginCard
      bind:username
      {globalLoading}
      {errorMsg}
      onLogin={handleLogin}
    />
  {:else}
    <DashboardHeader
      bind:activeTab
      {loadingScores}
      {profile}
      {username}
      onRefresh={fetchHighScores}
      onLogout={() => { isLoggedIn = false; }}
    />

    <BenchmarkTable
      {currentTier}
      {scenarioScores}
      {activeTab}
    />
  {/if}
</main>

<style>
  .app-wrapper {
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 10;
  }
</style>
