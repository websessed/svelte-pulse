
/* 
what it is?
Svelte Realtime Feed Starter Kit is a lightweight, reusable library that allows Svelte developers to create live-updating applications with minimal boilerplate. It wraps reactive Svelte stores around a real-time data source using a pluggable adapter system, enabling components to automatically update whenever data changes. Supabase Realtime is the default adapter, but developers can implement other adapters such as Socket.IO, Firebase, or custom WebSocket servers. The library’s core store just calls `adapter.subscribe()`—it doesn’t care about the backend, making it fully flexible for different real-time sources.

use cases?
    - Real-time social media or news feeds (e.g., Trendible)
    - Chat or messaging applications
    - Live polling, voting systems, or interactive dashboards
    - Collaborative note-taking or document editing apps
    - Stock tickers, crypto dashboards, or real-time metrics visualization

tech stack?
    - Svelte / SvelteKit
    - Adapter-based backend (Supabase Realtime by default)
    - TypeScript for type-safe store definitions
    - Optional: IndexedDB for offline caching

core features: 
    - Reactive Svelte store that automatically updates on data changes via any compatible adapter
    - Pluggable adapter system for Supabase, Socket.IO, Firebase, or custom WebSocket backends
    - Basic CRUD operations integrated with the adapter
    - Simple interface for sorting, filtering, and mapping data in components

add-ons 
    - Offline caching support using IndexedDB or localStorage
    - Optimistic updates for smoother UX
    - Utilities for conflict resolution in collaborative scenarios
    - Demo components and example app showcasing usage with Supabase Realtime
    - Backend-agnostic design: supports multiple adapters (Socket.IO, Firebase, custom WebSocket) while the core store remains unchanged
*/
