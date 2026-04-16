<script lang="ts">
  import { fly, fade } from 'svelte/transition';
  import type { TierData } from '$lib/benchmarkData';
  import { getRankDetails, isLightColor } from '$lib/utils';

  let {
    currentTier,
    scenarioScores,
    activeTab
  }: {
    currentTier: TierData;
    scenarioScores: Record<string, number>;
    activeTab: string;
  } = $props();
</script>

<div class="dashboard-content">
  {#key activeTab}
    <div in:fly={{ y: 20, duration: 500, delay: 100 }} out:fade={{ duration: 150 }} class="table-outer">
      <div class="table-container">
        <table class="benchmark-table">
          <thead>
            <tr>
              <th colspan="2" class="sticky-header-scen">Scenario</th>
              <th class="sticky-header-score">High Score</th>
              <th class="sticky-header-prog">Progress</th>
              {#each currentTier.ranks as rank}
                {#if rank.isSpacer}
                  <th class="spacer-col"></th>
                {:else}
                  <th class="rank-header" style="background-color: {rank.headerColor}; color: {isLightColor(rank.headerColor) ? '#222' : '#fff'}">
                    {rank.name}
                  </th>
                {/if}
              {/each}
            </tr>
          </thead>
          <tbody>
            {#each currentTier.categories as category}
              {#each category.subcategories as subcategory, subIdx}
                {#each subcategory.scenarios as scenario, scenIdx}
                  {@const score = scenarioScores[scenario.name] || 0}
                  {@const details = getRankDetails(score, scenario.thresholds, currentTier.ranks)}
                  {@const isFirstInCategory = subIdx === 0 && scenIdx === 0}
                  {@const isFirstInSub = scenIdx === 0}

                  <tr class:category-border={isFirstInCategory}>
                    {#if isFirstInSub}
                      <td class="category-vertical" rowspan={subcategory.scenarios.length}>
                        <span>{subcategory.name}</span>
                      </td>
                    {/if}

                    <td class="scenario-name">{scenario.name}</td>

                    <td class="score-cell" style="color: {details.color !== 'transparent' ? '#fff' : 'var(--text-muted)'}">
                      {score > 0 ? score.toLocaleString() : '-'}
                    </td>

                    <td class="progress-cell">
                      <div class="progress-bar-bg">
                        <div class="progress-bar-fill" 
                             style="width: {details.percentage}%; 
                                    background: linear-gradient(to right, {details.prevColor}, {details.nextColor}); 
                                    --fill-shadow: {details.nextColor}">
                        </div>
                      </div>
                    </td>

                    {#each currentTier.ranks as rank}
                      {#if rank.isSpacer}
                        <td class="spacer-col"></td>
                      {:else}
                        <td class="rank-threshold" 
                            class:is-current={details.rank === rank.name}
                            style="background-color: {rank.cellColor}; color: {isLightColor(rank.cellColor) ? '#333' : '#fff'}">
                          {scenario.thresholds[rank.key]?.toLocaleString() ?? '-'}
                        </td>
                      {/if}
                    {/each}
                  </tr>
                {/each}
              {/each}
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  {/key}
</div>

<style>
  .dashboard-content {
    padding: 0;
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .table-outer { 
    height: 100%; 
    display: flex; 
    flex-direction: column;
    flex: 1;
  }

  .table-container {
    background: transparent;
    overflow: auto;
    flex: 1;
    border: none;
  }


  .table-container::-webkit-scrollbar { width: 8px; height: 8px; }
  .table-container::-webkit-scrollbar-thumb { background: var(--border); border-radius: 10px; }

  .benchmark-table { 
    width: max-content; 
    min-width: 100%;
    border-collapse: separate; 
    border-spacing: 0; 
    table-layout: fixed;

    /* Column Sizing Variables */
    --col-category: 20px;
    --col-scenario: 180px;
    --col-score: 200px;
    --col-progress: 200px;
    --col-rank: 90px;
    --col-spacer: 16px;

    /* Calculated Sticky Offsets */
    --off-scenario: var(--col-category);
    --off-score: calc(var(--col-category) + var(--col-scenario));
    --off-progress: calc(var(--off-score) + var(--col-score));
  }

  .benchmark-table th {
    position: sticky;
    top: 0;
    background: var(--surface-solid);
    padding: 1.2rem 1rem;
    font-family: 'Outfit', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    color: var(--text-muted);
    border-bottom: 1px solid var(--border);
    z-index: 30;
  }

  .benchmark-table td {
    padding: 1rem;
    border-bottom: 1px solid var(--border);
  }


  .sticky-header-scen { left: 0; z-index: 50 !important; width: var(--off-score); }
  .sticky-header-score { left: var(--off-score); z-index: 50 !important; width: var(--col-score); }
  .sticky-header-prog { left: var(--off-progress); z-index: 50 !important; width: var(--col-progress); }

  .category-vertical {
    position: sticky;
    left: 0;
    z-index: 20;
    background: var(--bg-color);
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    text-align: center;
    font-family: 'Outfit', sans-serif;
    font-weight: 800;
    text-transform: uppercase;
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    color: var(--text-muted);
    width: var(--col-category);
    min-width: var(--col-category);
    padding: 0;
    border-right: 1px solid var(--border);
  }

  .scenario-name { 
    position: sticky;
    left: var(--off-scenario);
    z-index: 20;
    background: var(--bg-color);
    font-weight: 600; 
    color: var(--text-main); 
    font-size: 0.85rem; 
    width: var(--col-scenario);
    min-width: var(--col-scenario);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 1rem;
  }
  
  .score-cell {
    position: sticky;
    left: var(--off-score);
    z-index: 20;
    background: var(--bg-color);
    font-family: 'Inter', monospace;
    font-weight: 800;
    text-align: center;
    font-size: 0.9rem;
    width: var(--col-score);
    min-width: var(--col-score);
  }

  .progress-cell {
    position: sticky;
    left: var(--off-progress);
    z-index: 20;
    background: var(--bg-color);
    width: var(--col-progress);
    min-width: var(--col-progress);
    border-right: 2px solid var(--border);
    box-shadow: 4px 0 10px rgba(0, 0, 0, 0.05);
  }

  :global([data-theme="dark"]) .progress-cell {
    box-shadow: 4px 0 15px rgba(0, 0, 0, 0.2);
  }

  .rank-header, .rank-threshold {
    width: 90px;
    min-width: 90px;
  }

  .rank-threshold {
    font-family: 'Inter', monospace;
    font-weight: 600;
    font-size: 0.75rem;
    text-align: right;
  }

  .rank-threshold.is-current {
    filter: brightness(0.85);
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
    font-weight: 800;
    position: relative;
  }

  .spacer-col { 
    width: var(--col-spacer); 
    background: var(--column-spacer); 
    border: none; 
  }
</style>
