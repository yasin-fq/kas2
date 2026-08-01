const CACHE_NAME = 'pos-kasir-v38'
const BASE = self.location.pathname.replace(/\/sw\.js$/, '') || ''
const BP = BASE + '/'
const APP_SHELL = [BP, BP+'manifest.json', BP+'kasumee-logo.svg', BP+'kasumee-favicon.ico', BP+'kasumee-favicon-32.png', BP+'icons/kasumee-192.png', BP+'icons/kasumee-512.png', BP+'icons/kasumee-apple-touch.png', BP+'sys-props.js']
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(APP_SHELL).catch(() => {}))); self.skipWaiting() })
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim())) })
self.addEventListener('fetch', (e) => {
  const { request } = e
  if (request.method !== 'GET') return
  const url = new URL(request.url)
  if (!url.protocol.startsWith('http')) return
  if (url.origin !== self.location.origin) return
  if (request.mode === 'navigate') {
    e.respondWith(caches.open(CACHE_NAME).then(async (cache) => {
      const cached = await cache.match(request, { ignoreSearch: true })
      if (cached) { fetch(request).then(r => r?.status === 200 && cache.put(request, r.clone()).catch(() => {})).catch(() => {}); return cached }
      try { const r = await fetch(request); if (r?.status === 200) cache.put(request, r.clone()).catch(() => {}); return r }
      catch { const fb = await cache.match(BP); return fb || new Response('<html><body style="font-family:sans-serif;text-align:center;padding:2rem"><h1>Offline</h1><p>Buka aplikasi sekali saat online.</p></body></html>', { headers: { 'Content-Type': 'text/html' } }) }
    }))
    return
  }
  e.respondWith(caches.open(CACHE_NAME).then(async (cache) => {
    const cached = await cache.match(request)
    const fp = fetch(request).then(r => { if (r?.status === 200) cache.put(request, r.clone()).catch(() => {}); return r }).catch(() => cached)
    return cached || fp
  }))
})
