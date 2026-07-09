# Videos de Elvis Rodríguez

Copia aquí los videos de tu carpeta local:

```
C:\Users\LENOVO\Downloads\VIDEOS-ELVIS
```

En PowerShell, desde la carpeta del proyecto:

```powershell
Copy-Item "C:\Users\LENOVO\Downloads\VIDEOS-ELVIS\*" -Destination "public\videos\elvis\" -Recurse
npm run dev
```

**No necesitas renombrar nada.** Al correr `npm run dev` (o `npm run build`),
el script `scripts/sync-videos.mjs` detecta automáticamente los videos y los
conecta a la web:

- Un archivo cuyo nombre contenga `hero`, `portada` o `principal` se usa como
  **video de fondo del hero**. Si ninguno lo contiene, el hero usa su fondo
  visual elegante (recomendado: renombra tu mejor video horizontal a
  `hero.mp4`).
- Los demás videos van a las cards de **"Transformaciones reales"**, en orden
  alfabético, con los títulos curados ("Rubio luminoso", "Balayage natural",
  etc.).
- Una imagen con el mismo nombre que un video (ej. `mi-video.jpg` junto a
  `mi-video.mp4`) se usa como poster de ese video.
- Formatos soportados: `.mp4` (recomendado), `.webm`, `.mov`, `.m4v`.
- Si un archivo falta o no carga, esa card muestra un placeholder visual
  premium — la página nunca se rompe.

Para cambiar qué título recibe cada video, edita el orden alfabético de los
archivos (ej. prefijos `01-`, `02-`…) o ajusta `data/videos.ts`.

## Optimización recomendada

Los videos de celular suelen pesar mucho. Antes de subirlos, comprímelos
con [HandBrake](https://handbrake.fr/) o ffmpeg:

```bash
# Reels verticales (9:16), calidad web:
ffmpeg -i original.mp4 -vf "scale=720:-2" -c:v libx264 -crf 26 -preset slow -movflags +faststart -an reel-01.mp4

# Hero horizontal (16:9), sin audio:
ffmpeg -i original.mp4 -vf "scale=1280:-2" -c:v libx264 -crf 27 -preset slow -movflags +faststart -an hero.mp4
```

Objetivo: cada reel por debajo de ~5 MB y el hero por debajo de ~8 MB.

> Nota: los archivos `.mp4`, `.mov` y `.webm` de esta carpeta están en
> `.gitignore` para no inflar el repositorio. Al hacer deploy (Vercel, etc.)
> quita esas líneas del `.gitignore` y commitea los videos comprimidos, o
> súbelos a un almacenamiento externo.
