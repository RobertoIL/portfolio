# Portafolio — Roberto Illesca

Sitio de portafolio personal construido con [Astro](https://astro.build). Sitio 100 % estático, bilingüe (español e inglés) y con tema claro/oscuro.

## Características

- **i18n con rutas**: `/` (español, idioma por defecto) y `/en/` (inglés). El botón EN/ES de la barra de navegación guarda la preferencia en `localStorage` y las visitas posteriores redirigen automáticamente al idioma elegido.
- **Tema claro/oscuro**: alternable desde la barra de navegación, persistido en `localStorage`; por defecto respeta `prefers-color-scheme`. Se aplica antes del primer render para evitar parpadeos (FOUC).
- **Animaciones de aparición al hacer scroll** con `IntersectionObserver`, respetando `prefers-reduced-motion`.
- **Formulario de contacto** que abre el cliente de correo con asunto y cuerpo prellenados (`mailto:`).
- **CV descargable** desde `public/assets/CV-Roberto-Illesca.pdf`.

## Estructura

```text
src/
├── i18n/index.ts            # Traducciones (ES/EN), experiencia laboral, habilidades y datos de contacto
├── styles/global.css        # Design tokens (variables CSS) y todos los estilos
├── layouts/Layout.astro     # <head>, fuentes, script de tema/idioma, animaciones de scroll
├── components/
│   ├── PortfolioPage.astro  # Página completa parametrizada por idioma
│   ├── Nav.astro            # Navegación + botones de idioma y tema
│   ├── Hero.astro           # Presentación, CV y datos de contacto
│   ├── Education.astro
│   ├── Skills.astro
│   ├── Experience.astro     # Línea de tiempo de experiencia laboral
│   ├── Projects.astro
│   ├── Contact.astro        # Datos de contacto + formulario mailto
│   ├── Footer.astro
│   └── SectionHeading.astro
└── pages/
    ├── index.astro          # Ruta / (ES)
    └── en/index.astro       # Ruta /en/ (EN)
```

Para editar el contenido (bio, experiencia, habilidades, contacto), modifica `src/i18n/index.ts`. Los colores y la tipografía se ajustan en los tokens de `src/styles/global.css` (`--accent`, `--radius`, etc.).

## Comandos

| Comando        | Acción                                          |
| :------------- | :---------------------------------------------- |
| `pnpm install` | Instala las dependencias                        |
| `pnpm dev`     | Servidor de desarrollo en `localhost:4321`      |
| `pnpm build`   | Compila el sitio de producción en `./dist/`     |
| `pnpm preview` | Previsualiza el build localmente                |
