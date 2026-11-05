# Sitio web de Jetra Apps

Sitio estático (HTML + CSS, sin dependencias) con la portada del estudio y las
páginas de Pixforma. Español e inglés con selector de idioma; la app abre las
páginas con `?lang=xx` para mostrarlas en su idioma.

| Página | URL publicada |
|---|---|
| Portada del estudio | https://jeater.github.io/ |
| Pixforma | https://jeater.github.io/pixforma/ |
| Soporte | https://jeater.github.io/pixforma/support.html |
| Política de privacidad | https://jeater.github.io/pixforma/privacy.html |
| Términos de uso | https://jeater.github.io/pixforma/terms.html |

La app usa estas URLs desde `lib/services/support_service.dart` (`Support.siteBase`).

## Publicar en GitHub Pages

1. En GitHub (usuario `jeater`), crea un repositorio público llamado
   **`jeater.github.io`**. Ese nombre exacto hace que se publique en la raíz
   `https://jeater.github.io/`.
2. Sube el contenido de esta carpeta (`website/`) a la raíz de ese repositorio:
   ```bash
   cd website
   git init -b main
   git add .
   git commit -m "Sitio de Jetra Apps y Pixforma"
   git remote add origin https://github.com/jeater/jeater.github.io.git
   git push -u origin main
   ```
3. En el repositorio: **Settings → Pages → Build and deployment → Deploy from a
   branch → `main` / `(root)`**. En uno o dos minutos el sitio queda en línea.

Si prefieres publicarlo en otro repositorio (por ejemplo `jeater/jetra-apps`),
la URL será `https://jeater.github.io/jetra-apps/` y hay que actualizar
`Support.siteBase` en la app y las URLs de esta tabla.

## Agregar otra app

Copia la carpeta `pixforma/` con el nombre de la nueva app, ajusta los textos y
añade su tarjeta en `index.html`.
