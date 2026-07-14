# Portafolio — Roberto Illesca

Sitio de portafolio personal construido con [Astro](https://astro.build). Sitio 100 % estático, bilingüe (español e inglés) y con tema claro/oscuro.

## Características

- **i18n por rutas estáticas**: `/` contiene español y `/en/` contiene inglés. El botón EN/ES navega entre ambas versiones.
- **Contenido editable en YAML**: perfil, educación, habilidades, experiencia y proyectos viven en `src/content/` con validación de Astro Content Collections.
- **Iconos Lucide**: acciones y datos de contacto usan `@lucide/astro`.
- **Tema claro/oscuro**: alternable desde la barra de navegación, persistido en `localStorage`; por defecto respeta `prefers-color-scheme`. Se aplica antes del primer render para evitar parpadeos (FOUC).
- **Animaciones de aparición al hacer scroll** con `IntersectionObserver`, respetando `prefers-reduced-motion`.
- **Formulario de contacto** que abre el cliente de correo con asunto y cuerpo prellenados (`mailto:`).
- **CV descargable** desde `public/assets/CV-Roberto-Illesca.pdf`.

## Estructura

```text
src/
├── content.config.ts        # Esquemas y colecciones de contenido
├── content/
│   ├── profile/             # Perfil, hero, educación, habilidades y contacto por idioma
│   ├── experience/          # Experiencias laborales como archivos YAML
│   └── projects/            # Proyectos como archivos YAML
├── data/ui.ts               # Textos cortos de interfaz por idioma
├── styles/global.css        # Design tokens (variables CSS) y todos los estilos
├── layouts/Layout.astro     # <head>, fuentes, script de tema y animaciones de scroll
├── components/
│   ├── PortfolioPage.astro  # Página completa parametrizada por idioma
│   ├── Nav.astro            # Navegación + enlace de idioma y botón de tema
│   ├── Hero.astro           # Presentación, CV y datos de contacto
│   ├── Education.astro
│   ├── Skills.astro
│   ├── Experience.astro     # Línea de tiempo de experiencia laboral
│   ├── Projects.astro
│   ├── Contact.astro        # Datos de contacto + formulario mailto
│   ├── Footer.astro
│   └── SectionHeading.astro
└── pages/
    ├── index.astro          # Español /
    └── en/index.astro       # Inglés /en/
```

## Editar contenido

Para cambiar el perfil, la descripción, educación, habilidades o contacto, edita:

- `src/content/profile/es.yaml`
- `src/content/profile/en.yaml`

Para agregar experiencia, crea un archivo YAML en el idioma correspondiente:

- `src/content/experience/es/nueva-experiencia.yaml`
- `src/content/experience/en/new-experience.yaml`

Ejemplo:

```yaml
lang: es
role: "Desarrollador de Software"
company: "Empresa"
location: "Ciudad, País"
workMode: "Remoto"
period: "2026 — Actualidad"
order: 1
bullets:
  - "Responsabilidad o logro principal."
```

Para agregar proyectos, crea archivos YAML en `src/content/projects/es/` y `src/content/projects/en/`. La estructura esperada está documentada en `src/content/projects/README.md`.

Los textos cortos de interfaz, como navegación y botones, se editan en `src/data/ui.ts`. Los colores y la tipografía se ajustan en los tokens de `src/styles/global.css` (`--accent`, `--radius`, etc.).

## Comandos

| Comando        | Acción                                          |
| :------------- | :---------------------------------------------- |
| `pnpm install` | Instala las dependencias                        |
| `pnpm dev`     | Servidor de desarrollo en `localhost:4321`      |
| `pnpm build`   | Compila el sitio de producción en `./dist/`     |
| `pnpm preview` | Previsualiza el build localmente                |
