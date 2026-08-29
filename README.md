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
