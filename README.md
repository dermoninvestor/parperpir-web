# PARPERPIR · Web pública

Landing independiente para `parperpir.es`. No contiene autenticación, conexiones a datos ni lógica de la aplicación privada. Todos los accesos remiten a `https://app.parperpir.es`.

## Desarrollo local

Requiere Node.js 22.13 o posterior.

```bash
npm install
npm run dev
```

La dirección local se muestra al iniciar el servidor (normalmente `http://localhost:3000`).

## Validación y producción

```bash
npm run lint
npm run build
npm run start
```

La configuración de despliegue está en `.openai/hosting.json`. El dominio y el DNS deben configurarse desde el proveedor de hosting elegido; este proyecto no contiene credenciales ni configuración de producción.

## GitHub Pages

`npm run build:pages` genera una versión estática en `dist/client` con HTML,
estilos, JavaScript, imágenes y fuentes. No requiere servidor ni secretos.
El flujo `.github/workflows/pages.yml` publica automáticamente cada cambio en
`main` y permite publicar manualmente desde GitHub Actions.

En Settings → Pages, la fuente debe ser GitHub Actions. El dominio principal
es `parperpir.es`; tras configurar los DNS y emitirse el certificado, activar
Enforce HTTPS. El flujo obtiene la ruta de publicación de GitHub para servir
tanto la dirección temporal del repositorio como el dominio propio.

El DNS se mantiene en DonDominio: el ANAME del dominio raíz y el CNAME de
`www` deben apuntar a `dermoninvestor.github.io` (sin ruta ni protocolo).
La aplicación privada mantiene su registro `app` apuntando a Railway.
No es necesario cambiar los servidores DNS ni los registros del correo.
