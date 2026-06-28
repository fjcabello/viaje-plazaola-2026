# Pedaleando voy, pedaleando vengo — Web del viaje

Sitio web estático publicado en **GitHub Pages** en:
👉 https://fjcabello.github.io/viaje-plazaola-2026/

Repo: `fjcabello/viaje-plazaola-2026`  
Rama: `main` → se despliega automáticamente en Pages.

---

## Estructura de ficheros

```
web/
├── index.html          ← Toda la estructura de la página (una sola página)
├── styles.css          ← Todos los estilos (CSS variables, componentes, responsive)
├── script.js           ← Cuenta atrás hasta 25/7/2026 16:00h + animaciones scroll
└── img/
    ├── foto1.jpg       ← Foto de la Vía Verde (usada en hero background y galería)
    ├── foto2.jpg       ← Foto de la ruta (caserío vasco, galería)
    ├── grupo.jpg       ← Foto del grupo (polaroid en hero + sección viajeros)
    ├── perfiles_elevacion.png  ← Gráfico matplotlib de los 5 perfiles de elevación
    ├── christine.jpg   ← Foto perfil Christine (Instagram @komunikiidiomas)
    ├── rocio.jpg       ← Recortada de grupo.jpg
    ├── mery.jpg        ← Recortada de grupo.jpg
    └── paco.jpg        ← Avatar GitHub fjcabello
```

---

## Stack técnico

- **Vanilla HTML + CSS + JS** — sin frameworks, sin build step
- **Google Fonts**: `Dancing Script` (títulos hero), `Cormorant Garamond` (body serif), `Lato` (sans-serif)
- **CSS variables** definidas en `:root` en `styles.css`:
  - `--verde-oscuro: #1a472a`, `--verde-medio: #2d6a4f`, `--verde-claro: #52b788`
  - `--verde-menta: #b7e4c7`, `--beige: #f5f0e8`, `--beige-oscuro: #e8e0d0`
- **Sin dependencias externas** salvo Google Fonts y el iframe de Google Maps

---

## Secciones de la página (en orden)

| Sección | ID nav | Descripción |
|---|---|---|
| Hero | `#hero` | Título, cuenta atrás, chips viajeros, polaroid grupo |
| La ruta | `#seccion-ruta` | Descripción VV Plazaola + stats (158 km, 5 etapas, ↑486m, ↓1021m) |
| El mapa | `#seccion-mapa` | Iframe Google Maps My Maps + links Wikiloc/Maps |
| Perfiles | `#seccion-perfiles` | Imagen PNG de los 5 perfiles de elevación |
| Las etapas | `#seccion-etapas` | 5 tarjetas con stats + hoja de ruta desplegable (`<details>`) |
| Alojamientos | `#seccion-aloj` | 7 tarjetas (noches 0-6) con estado de desayuno |
| Transporte | `#seccion-transporte` | Bus ALSA Madrid↔Vitoria/SS (25 jul y 1 ago, 16:00h, 15% dcto.) |
| Equipaje | `#seccion-material` | 10 ítems esenciales |
| El equipo | `#seccion-viajeros` | Foto grupo + 4 avatares circulares |
| Galería | *(sin nav)* | 3 fotos de la ruta y el grupo |

---

## Datos del viaje

**Viajeros**: Rocío, Christine, Paco, Mery

**Fechas**: 25 julio (salida Madrid) → 1 agosto (vuelta Madrid)

**Etapas ciclistas**:
| # | Fecha | Tramo | km | ↑ | ↓ | Tiempo | Alojamiento |
|---|---|---|---|---|---|---|---|
| 1 | Dom 26/7 | Vitoria-Gasteiz → Salvatierra | 28 km | 153m | 77m | ~2h47 | El Gordo |
| 2 | Lun 27/7 | Salvatierra → Etxarri-Aranatz | 34 km | 47m | 149m | ~3h01 | Hotel Aritzalko |
| 3 | Mar 28/7 | Etxarri-Aranatz → Irurzun | 25 km | 27m | 83m | ~2h13 | Hotel Plazaola ★★★ |
| 4 | Mié 29/7 | Irurzun → Leitza | 30 km | 217m | 179m | ~3h04 | Leitzarooms |
| 5 | Jue 30/7 | Leitza → San Sebastián | 42 km | 42m | 533m | ~3h43 | Ametzagana |

**Ruta en Wikiloc**: https://es.wikiloc.com/rutas-ciclismo-de-turismo/via-verde-del-plazaola-vitoria-gasteiz-san-sebastian-158-km-5-etapas-271570751  
**Mapa Google Maps ID**: `1wHipbtxfu2j4hghKWv1bymmafdU-WrQ`

---

## Cómo publicar cambios

```bash
cd "/Users/ESCabellFr/Downloads/viaje en bici/web"

# Editar index.html / styles.css / script.js

git add -A
git commit -m "descripción del cambio"
git -c credential.helper='!gh auth git-credential' push origin main
```

> El usuario activo de gh CLI debe ser `fjcabello` (no `franciscojavier-cabello-es_nestle`).  
> Para cambiar: `gh auth switch --user fjcabello`

Los cambios se despliegan automáticamente en Pages en ~1 minuto tras el push.

---

## Componentes CSS clave

- **`.etapa-card`** — tarjeta de etapa con `.etapa-header`, `.etapa-body`, `.etapa-stats`, `.etapa-aloj`, `.aviso`
- **`details.roadbook`** — hoja de ruta desplegable; filas `<tr class="key">` para puntos importantes
- **`.aloj-card`** — tarjeta de alojamiento; clases de desayuno: `.incl`, `.cerca`, `.reservar`, `.libre`
- **`.viajero-card` + `.viajero-avatar-img`** — avatar circular 120×120px
- **`.hero-polaroid`** — foto polaroid posicionada en esquina inferior derecha del hero
- **`.perfil-img`** — imagen de perfiles de elevación a ancho completo
- **`#galeria-grid`** — grid 3 columnas (2fr 1fr 1fr) para la galería de fotos
- **`.badge`** — etiqueta inline; `.badge.verde` (verde menta), `.badge.naranja` (naranja)
- **`.fade-in`** — clase para animación de entrada (se activa con `.visible` al hacer scroll)
