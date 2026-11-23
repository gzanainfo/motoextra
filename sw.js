const C="motoextra-v13";
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(["./","index.html","manifest.json","icon.svg","config.js"])));self.skipWaiting()});
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x))))));
self.addEventListener("fetch",e=>{
  const u=new URL(e.request.url);
  // nunca interceptar a API da nuvem (dados dos clientes) nem requisicoes que nao sao GET
  if(e.request.method!=="GET"||u.hostname.endsWith("supabase.co"))return;
  e.respondWith(fetch(e.request,{cache:"no-cache"}).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match(e.request)))});
