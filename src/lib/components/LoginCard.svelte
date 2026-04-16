<script lang="ts">
  import { fade } from "svelte/transition";
  import Icon from "./Icon.svelte";

  let {
    username = $bindable(""),
    globalLoading,
    errorMsg,
    onLogin,
  }: {
    username: string;
    globalLoading: boolean;
    errorMsg: string;
    onLogin: () => void;
  } = $props();
</script>

<div class="login-container" in:fade={{ duration: 600 }}>
  <div class="login-card">
    <div class="login-header">
      <h1 class="login-title">
        Viscose <span class="accent-text">Benchmarks</span>
      </h1>
    </div>

    <form
      class="login-form"
      onsubmit={(e) => {
        e.preventDefault();
        onLogin();
      }}
    >
      <div class="input-wrapper">
        <Icon name="user" class="input-icon" strokeWidth={2} />
        <input
          type="text"
          placeholder="KovaaK's Username"
          bind:value={username}
          required
        />
      </div>

      <button type="submit" class="btn-primary" disabled={globalLoading}>
        {globalLoading ? "Authenticating..." : "Enter Dashboard"}
        <Icon name="arrow-right" class="btn-icon" strokeWidth={2.5} />
      </button>
    </form>
    {#if errorMsg}<p class="error">{errorMsg}</p>{/if}
  </div>
</div>

<style>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .login-card {
    background: var(--surface-solid);
    padding: 3.5rem;
    border-radius: 24px;
    border: 1px solid var(--border);
    box-shadow: var(--card-shadow);
    text-align: center;
    width: 440px;
    position: relative;
    overflow: hidden;
  }

  .login-title {
    font-family: "Outfit", sans-serif;
    font-weight: 800;
    font-size: 2.8rem;
    margin: 0;
    letter-spacing: -0.04em;
    color: var(--text-main);
  }

  .accent-text {
    color: var(--accent);
  }

  .subtitle {
    font-family: "Outfit", sans-serif;
    color: var(--text-muted);
    font-size: 1.1rem;
    margin: 0.75rem 0 2.5rem 0;
    font-weight: 500;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  .input-icon {
    position: absolute;
    left: 1rem;
    width: 20px;
    height: 20px;
    color: var(--text-muted);
  }

  .input-wrapper input {
    background: var(--input-bg);
    border: 1px solid var(--border);
    color: var(--text-main);
    padding: 1.1rem 1.2rem 1.1rem 3rem;
    border-radius: 16px;
    font-size: 1.05rem;
    width: 100%;
    outline: none;
    transition: all 0.2s;
  }

  .input-wrapper input:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 4px rgba(131, 145, 255, 0.1);
  }

  .btn-icon {
    width: 18px;
    height: 18px;
    transition: transform 0.2s;
  }
  .btn-primary:hover .btn-icon {
    transform: translateX(4px);
  }

  .login-footer {
    margin-top: 2rem;
  }
  .login-footer p {
    font-size: 0.9rem;
    color: var(--text-muted);
    font-weight: 600;
  }
  .login-footer a {
    color: var(--accent);
    text-decoration: none;
    margin-left: 0.25rem;
  }
  .login-footer a:hover {
    text-underline-offset: 4px;
    text-decoration: underline;
  }

  .error {
    color: #ff5252;
    margin-top: 1rem;
    font-size: 0.9rem;
  }
</style>
