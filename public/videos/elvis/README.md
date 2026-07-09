# Videos de Elvis Rodríguez

Copia aquí los videos de la carpeta local:

```
C:\Users\LENOVO\Downloads\VIDEOS-ELVIS
```

## Nombres esperados

La web busca estos archivos (definidos en `data/videos.ts`):

| Archivo | Uso | Formato recomendado |
|---|---|---|
| `hero.mp4` | Video de fondo del hero | Horizontal (16:9), sin audio necesario |
| `hero.jpg` | Poster del hero (opcional) | Imagen 16:9 |
| `transformacion-01.mp4` | Reel "Rubio luminoso" | Vertical (9:16) |
| `transformacion-02.mp4` | Reel "Balayage natural" | Vertical (9:16) |
| `transformacion-03.mp4` | Reel "Corrección de tono" | Vertical (9:16) |
| `transformacion-04.mp4` | Reel "Corte y movimiento" | Vertical (9:16) |
| `transformacion-05.mp4` | Reel "Color con cuidado capilar" | Vertical (9:16) |
| `transformacion-06.mp4` | Reel "Transformación personalizada" | Vertical (9:16) |

Dos opciones:

1. **Renombrar tus videos** con estos nombres, o
2. **Editar `data/videos.ts`** y cambiar los `src` por los nombres reales de tus archivos.

Si un archivo no existe, la web muestra automáticamente un placeholder
visual premium — la página nunca se rompe por un video faltante.

## Optimización recomendada

Los videos de celular suelen pesar mucho. Antes de subirlos, comprímelos
con [HandBrake](https://handbrake.fr/) o ffmpeg:

```bash
# Reels verticales (9:16), calidad web:
ffmpeg -i original.mp4 -vf "scale=720:-2" -c:v libx264 -crf 26 -preset slow -movflags +faststart -an transformacion-01.mp4

# Hero horizontal (16:9), sin audio:
ffmpeg -i original.mp4 -vf "scale=1280:-2" -c:v libx264 -crf 27 -preset slow -movflags +faststart -an hero.mp4
```

Objetivo: cada reel por debajo de ~5 MB y el hero por debajo de ~8 MB.

> Nota: los archivos `.mp4`, `.mov` y `.webm` de esta carpeta están en
> `.gitignore` para no inflar el repositorio. Al hacer deploy (Vercel, etc.)
> súbelos manualmente o quita esas líneas del `.gitignore` si prefieres
> versionarlos.
