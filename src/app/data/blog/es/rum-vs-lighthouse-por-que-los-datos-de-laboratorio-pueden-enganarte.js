export const post = {
  slug: "rum-vs-lighthouse-por-que-los-datos-de-laboratorio-pueden-enganarte",
  alternateSlug:
    "rum-vs-lighthouse-why-lab-data-can-mislead-seo-user-experience",
  title: "RUM vs. Lighthouse: ¿Los Datos de Laboratorio Pueden Engañarte?",
  h1: "Real User Monitoring (RUM) vs. Lighthouse: Por qué los datos de laboratorio pueden engañarte sobre tu SEO y experiencia de usuario",
  date: "2026-09-07",
  image: "/blog/7.jpg",
  category: "SEO Técnico & Rendimiento",
  tags: [
    "RUM",
    "Lighthouse",
    "Core Web Vitals",
    "SEO Técnico",
    "CrUX",
    "Web Performance",
    "INP",
    "LCP",
    "CLS",
    "Observabilidad",
  ],
  excerpt:
    "Lighthouse puede darte un 100 y tus usuarios seguir sufriendo lentitud. Descubre por qué los datos de laboratorio no bastan, qué diferencias hay con CrUX y RUM, y cómo medir la experiencia real para SEO.",
  content: `**Lighthouse puede darte un 95, 98 o incluso 100 y, aun así, una parte importante de tus usuarios puede estar teniendo una experiencia lenta, poco responsive o visualmente inestable.**

El problema no necesariamente está en Lighthouse.

El problema está en creer que una prueba de laboratorio representa a todos tus usuarios.

Un test sintético carga una página bajo unas condiciones determinadas: dispositivo simulado, red determinada, caché determinada y un recorrido controlado. Un usuario real, en cambio, puede entrar desde un teléfono de gama media, utilizando una red móvil saturada, desde otra ciudad o país, con una extensión instalada, un navegador diferente, un banner de cookies abierto y decenas de interacciones que nunca ocurrirán durante un test automatizado.

Por eso, cuando hablamos de **Core Web Vitals, SEO y experiencia de usuario**, hay que separar tres conceptos:

* **Lab data:** pruebas sintéticas como Lighthouse.
* **Field data:** datos de usuarios reales, como los utilizados por CrUX.
* **RUM (Real User Monitoring):** instrumentación propia para recopilar y analizar el comportamiento real de los usuarios.

Y entender la diferencia puede cambiar completamente la forma en que diagnosticás el rendimiento de un sitio.

---

## Lighthouse no está mintiendo. Está respondiendo otra pregunta

Antes de demonizar Lighthouse hay que aclarar algo.

**Lighthouse es una herramienta excelente.**

El problema aparece cuando utilizamos sus resultados para responder una pregunta que la herramienta no está diseñada para responder.

Lighthouse intenta responder:

> ¿Cómo se comportaría esta página bajo estas condiciones de prueba?

Los datos de campo responden:

> ¿Cómo se comportó realmente esta página para los usuarios que la visitaron?

Son preguntas diferentes.

Lighthouse es especialmente útil durante desarrollo, staging y debugging. Permite detectar recursos pesados, problemas de renderizado, JavaScript costoso, imágenes mal optimizadas, problemas de accesibilidad y muchas otras oportunidades de mejora.

Además, una prueba de laboratorio es repetible. Podés modificar el código, volver a ejecutar el test y comparar resultados bajo condiciones similares.

Eso es extremadamente útil para desarrollo.

Pero una página web no tiene un único usuario.

Tiene miles de combinaciones posibles de:

* dispositivos;
* navegadores;
* sistemas operativos;
* velocidades de conexión;
* ubicaciones geográficas;
* tamaños de pantalla;
* capacidades de CPU;
* estado de caché;
* extensiones;
* bloqueadores;
* interacciones;
* comportamiento de terceros;
* y condiciones de red.

Un único Lighthouse no puede representar toda esa distribución.

---

## Lab Data vs. Field Data

La diferencia fundamental puede resumirse así:

| Característica | Lighthouse / Lab | RUM / Field |
| --- | --- | --- |
| **Usuarios reales** | ❌ | ✅ |
| **Entorno controlado** | ✅ | ❌ |
| **Reproducibilidad** | ✅ | Variable |
| **Dispositivos reales** | ❌ Simulados | ✅ |
| **Redes reales** | ❌ Simuladas | ✅ |
| **Geografía real** | ❌ | ✅ |
| **Interacciones reales** | Limitadas | ✅ |
| **INP real** | ❌ | ✅ |
| **Diagnóstico de desarrollo** | Excelente | Bueno |
| **Monitorización continua** | No por defecto | ✅ |
| **Detección de regresiones reales** | Limitada | ✅ |
| **Datos utilizados por CrUX** | ❌ | No directamente |
| **Utilidad para SEO técnico** | Alta | Muy alta |

Google distingue explícitamente entre mediciones de laboratorio y mediciones de campo. Las Core Web Vitals son, ante todo, métricas de campo, y Google recomienda alcanzar los objetivos en el **percentil 75** de las cargas de página, segmentadas por dispositivo.

---

## Las Core Web Vitals se miden con usuarios reales

Actualmente las Core Web Vitals principales son:

### LCP — Largest Contentful Paint

Mide cuándo aparece el elemento de contenido principal.

El objetivo considerado bueno es:

**LCP ≤ 2,5 segundos**

### INP — Interaction to Next Paint

Mide la capacidad de respuesta de una página frente a las interacciones del usuario.

El objetivo considerado bueno es:

**INP ≤ 200 ms**

### CLS — Cumulative Layout Shift

Mide la estabilidad visual de la página.

El objetivo considerado bueno es:

**CLS ≤ 0,1**

Estos valores se evalúan en el **percentil 75** de las experiencias recopiladas.

Y acá aparece una diferencia fundamental.

Un Lighthouse puede mostrarte:

> LCP: 1,8 s

Pero eso no significa que el 75% de tus usuarios tenga un LCP de 1,8 segundos.

Podrías tener perfectamente:

* usuarios de escritorio: 1,4 s;
* móviles rápidos: 2,0 s;
* móviles de gama media: 3,1 s;
* conexiones móviles lentas: 4,2 s.

El promedio mental que obtenemos mirando un único test puede ocultar completamente esa distribución.

---

## El P75 es más importante que tu mejor resultado

Uno de los errores más comunes en performance es obsesionarse con el mejor resultado.

Pero los Core Web Vitals no preguntan:

> ¿Qué tan rápido puede ser mi sitio?

Preguntan algo más cercano a:

> ¿Qué experiencia recibe una parte representativa de mis usuarios?

Por eso se utiliza el percentil 75.

Imaginemos 100 visitas ordenadas de menor a mayor LCP.

Si la posición 75 está en **3,2 segundos**, entonces tu P75 es aproximadamente 3,2 s.

Aunque tengas usuarios con:

* 1,2 s;
* 1,5 s;
* 1,8 s;
* 2,0 s;

seguís teniendo un problema si la experiencia del segmento más lento empuja el P75 por encima del umbral.

Esta es una de las razones por las que un sitio puede parecer rápido para su equipo interno y, al mismo tiempo, tener Core Web Vitals deficientes entre sus usuarios reales.

---

## El caso especialmente problemático del INP

Acá la diferencia entre laboratorio y campo se vuelve todavía más evidente.

**INP mide interacciones reales.**

Un usuario puede:

1. abrir el menú;
2. desplegar un filtro;
3. aceptar cookies;
4. abrir un modal;
5. agregar un producto al carrito;
6. completar un formulario;
7. cambiar una variante;
8. utilizar un buscador.

Lighthouse no puede reproducir espontáneamente todo ese comportamiento.

Por eso Lighthouse no mide INP como métrica de laboratorio. En su lugar, utiliza **Total Blocking Time (TBT)** como indicador de laboratorio relacionado con la capacidad de respuesta durante la carga. Pero TBT e INP no son la misma métrica.

Esto genera una situación bastante común:

> Lighthouse muestra un TBT excelente, pero los usuarios reales tienen un INP deficiente.

¿Por qué?

Porque el problema puede aparecer después de la carga inicial.

Por ejemplo, imaginemos un ecommerce cuyo botón **“Agregar al carrito”** ejecuta una función JavaScript que bloquea el hilo principal durante 600 ms.

Un Lighthouse que nunca presiona ese botón no necesariamente va a descubrir el problema.

Un RUM sí puede.

Los datos de usuarios pueden indicar que:

\`\`\`text
INP P75: 420 ms
Interacción problemática:
"Agregar al carrito"
Elemento:
<button class="add-to-cart">
Frecuencia:
18,4% de las sesiones móviles
\`\`\`

Ahora tenemos algo accionable.

Ya no estamos preguntando:

> “¿Por qué tenemos un INP malo?”

Estamos preguntando:

> “¿Por qué esta interacción específica está bloqueando el hilo principal?”

Ese cambio es enorme.

---

## CLS: el problema que aparece cuando el usuario ya está navegando

Con CLS sucede algo parecido.

Una prueba de laboratorio puede capturar algunos cambios de layout durante la carga inicial, pero los usuarios reales pueden experimentar desplazamientos mucho después.

Por ejemplo:

* una imagen lazy-loaded aparece sin dimensiones;
* un anuncio se inserta después;
* un iframe cambia de tamaño;
* un banner de cookies aparece;
* un componente se renderiza dinámicamente;
* una fuente provoca cambios visuales;
* contenido cargado mediante JavaScript desplaza elementos existentes.

El resultado puede ser una página que parece perfectamente estable en una captura de Lighthouse y que, sin embargo, genera desplazamientos durante la navegación real.

La medición de campo considera el comportamiento durante la vida útil de la página, no únicamente lo que sucede durante el primer instante de carga.

---

## Entonces, ¿qué utiliza Google para SEO?

Acá hay que hacer una distinción importante.

**Google no toma tu puntuación de Lighthouse y la utiliza directamente como señal de ranking.**

Tampoco significa que instalar un RUM propio haga que Google utilice esos datos para posicionar tu sitio.

Google utiliza datos de campo para evaluar las Core Web Vitals. Su fuente pública principal es **Chrome User Experience Report (CrUX)**, que recopila experiencias reales de usuarios de Chrome que cumplen determinados criterios de recopilación de datos. Esos datos alimentan herramientas como PageSpeed Insights y el informe de Core Web Vitals de Search Console.

Por lo tanto, la relación correcta es:

\`\`\`text
Lighthouse
    ↓
Laboratorio / diagnóstico
    ↓
Detectar y corregir problemas
\`\`\`

Mientras que:

\`\`\`text
Usuarios reales
    ↓
Datos de campo
    ├── CrUX → señales utilizadas por los sistemas de Google
    └── RUM propio → diagnóstico y monitorización
\`\`\`

Y hay una tercera precisión importante:

**las Core Web Vitals no son todo el SEO.**

Google recomienda buenas Core Web Vitals porque forman parte de la experiencia de página y se alinean con lo que sus sistemas de ranking buscan recompensar, pero tener Core Web Vitals perfectas no garantiza alcanzar una determinada posición orgánica. Relevancia, calidad, contenido, intención de búsqueda, autoridad, rastreabilidad y muchos otros factores siguen siendo fundamentales.

---

## CrUX tampoco es lo mismo que RUM

Si Lighthouse representa el laboratorio, podría parecer que simplemente tenemos que reemplazarlo por CrUX.

Tampoco.

**CrUX y RUM son datos de campo, pero tienen objetivos diferentes.**

CrUX es el conjunto de datos de experiencia de usuario de Chrome de Google. Es especialmente importante porque es la referencia pública utilizada para evaluar Core Web Vitals.

Pero tiene limitaciones.

CrUX es:

* agregado;
* anonimizado;
* limitado a Chrome;
* sujeto a requisitos de elegibilidad;
* menos granular que un sistema RUM propio.

RUM, en cambio, es instrumentación que instalás en tu propio sitio.

Eso te permite decidir qué dimensiones querés analizar.

Por ejemplo:

\`\`\`text
URL
↓
/productos/camara-ptz
Dispositivo
↓
Mobile
País
↓
Argentina
Navegador
↓
Chrome
Plantilla
↓
Producto
LCP P75
↓
3.4 s
INP P75
↓
280 ms
CLS P75
↓
0.18
\`\`\`

Ahora tenemos una fotografía mucho más útil para tomar decisiones.

CrUX puede decirte que existe un problema.

**RUM puede ayudarte a encontrar dónde está.**

Google también señala que CrUX ofrece una visión agregada, mientras que el RUM propio puede aportar la telemetría detallada necesaria para diagnosticar y reaccionar ante regresiones.

---

## Cómo implementar tu propio RUM

No necesitás necesariamente contratar una plataforma empresarial de observabilidad para empezar.

El navegador ya proporciona APIs capaces de observar diferentes eventos de rendimiento.

Una de las más importantes es:

\`\`\`javascript
PerformanceObserver
\`\`\`

Con ella podemos observar entradas de rendimiento generadas por el navegador.

Por ejemplo:

\`\`\`javascript
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log(entry);
  }
});
observer.observe({
  type: 'largest-contentful-paint',
  buffered: true
});
\`\`\`

Esto permite acceder a información sobre el LCP registrado durante una visita.

También podemos observar otros tipos de entradas.

Sin embargo, construir correctamente todas las Core Web Vitals directamente con \`PerformanceObserver\` puede resultar bastante más complejo de lo que parece.

Ahí entra en juego una herramienta especialmente útil.

---

## web-vitals: la forma práctica de medir Core Web Vitals

GoogleChromeLabs mantiene la librería **web-vitals**, diseñada para medir las Web Vitals en usuarios reales de una manera alineada con cómo son medidas por las herramientas de Google.

Una implementación básica puede ser tan sencilla como:

\`\`\`javascript
import { onLCP, onINP, onCLS } from 'web-vitals';
onLCP(console.log);
onINP(console.log);
onCLS(console.log);
\`\`\`

Al visitar la página, vas a obtener objetos con información sobre cada métrica.

Por ejemplo, conceptualmente:

\`\`\`javascript
{
  name: "LCP",
  value: 2740,
  rating: "needs-improvement",
  id: "...",
  delta: 2740
}
\`\`\`

La idea importante no es imprimir estos valores en la consola.

La idea es **enviarlos a un sistema de almacenamiento o analítica**.

---

## De la medición al RUM real

Podemos crear una función encargada de enviar las métricas:

\`\`\`javascript
function sendToAnalytics(metric) {
  fetch('/api/rum', {
    method: 'POST',
    body: JSON.stringify({
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      id: metric.id,
      url: location.href
    }),
    headers: {
      'Content-Type': 'application/json'
    },
    keepalive: true
  });
}
\`\`\`

Y conectar las métricas:

\`\`\`javascript
import {
  onLCP,
  onINP,
  onCLS
} from 'web-vitals';
onLCP(sendToAnalytics);
onINP(sendToAnalytics);
onCLS(sendToAnalytics);
\`\`\`

A partir de ese momento, cada visita puede generar datos reales.

Pero todavía falta una parte fundamental:

**contextualizar esos datos.**

---

## El valor real está en segmentar

Un número global puede ser engañoso. Supongamos que obtenemos:

\`\`\`text
LCP P75: 2.4 s
\`\`\`

Parece bastante bueno.

Pero segmentamos:

| Segmento | LCP P75 |
| --- | ---: |
| Desktop | 1.5 s |
| Mobile | 3.1 s |
| Argentina | 2.1 s |
| Brasil | 2.8 s |
| México | 3.0 s |
| Europa | 1.7 s |

Ahora aparece una historia completamente diferente. El problema no es necesariamente “el sitio”.

Puede ser:

> **el sitio para determinados usuarios.**

Y esa diferencia es fundamental para SEO internacional, ecommerce, medios digitales, SaaS y cualquier proyecto con una distribución geográfica o tecnológica heterogénea.

---

## Qué datos debería recopilar un RUM

Además de las métricas, conviene registrar dimensiones que permitan analizar el contexto.

Por ejemplo:

\`\`\`javascript
const rumData = {
  metric: metric.name,
  value: metric.value,
  url: location.href,
  device: /Mobi/i.test(navigator.userAgent)
    ? 'mobile'
    : 'desktop',
  language: navigator.language,
  viewport: {
    width: window.innerWidth,
    height: window.innerHeight
  },
  connection: navigator.connection?.effectiveType || null
};
\`\`\`

También puede resultar útil registrar:

* país o región, cuando exista una base legítima para hacerlo;
* plantilla;
* tipo de página;
* navegador;
* sistema operativo;
* campaña;
* versión de la aplicación;
* release;
* estado de sesión;
* tipo de conexión;
* identificador anonimizado de visita.

La regla debería ser simple:

**recopilar únicamente los datos necesarios y respetar las obligaciones de privacidad aplicables.**

RUM no significa convertir el navegador en una herramienta de vigilancia.

Significa obtener suficiente contexto técnico para entender la experiencia de rendimiento.

---

## P75 por dispositivo: una métrica mucho más útil

Imaginemos ahora un proyecto con estos datos:

### Desktop

\`\`\`text
LCP P75: 1.7 s
INP P75: 120 ms
CLS P75: 0.04
\`\`\`

### Mobile

\`\`\`text
LCP P75: 3.4 s
INP P75: 310 ms
CLS P75: 0.16
\`\`\`

El Lighthouse ejecutado desde tu notebook probablemente no te muestre toda esta historia.

El equipo podría decir:

> “Tenemos 95 puntos de performance.”

Pero el RUM muestra:

> “Nuestros usuarios móviles están teniendo una experiencia deficiente.”

Y si la mayor parte del tráfico orgánico llega desde móviles, esto se convierte en una prioridad SEO y de negocio.

---

## Incluso podés detectar problemas por geografía

Esto es especialmente importante para proyectos internacionales.

Supongamos:

\`\`\`text
España
LCP P75: 1.9 s
Argentina
LCP P75: 2.8 s
México
LCP P75: 3.2 s
Chile
LCP P75: 2.5 s
\`\`\`

Ahora aparece una pregunta mucho más interesante:

**¿Qué está causando la diferencia?**

Puede ser:

* CDN;
* distancia al servidor;
* TTFB;
* proveedor de hosting;
* recursos de terceros;
* imágenes;
* fuentes;
* scripts;
* APIs externas;
* arquitectura de caché;
* infraestructura regional.

El laboratorio no necesariamente te va a revelar esa distribución.

El RUM sí puede mostrarte que existe.

---

## RUM + attribution: cuando queremos saber por qué

La librería \`web-vitals\` también ofrece una variante denominada **attribution**, que agrega información diagnóstica adicional para ayudar a identificar las causas detrás de métricas deficientes.

Por ejemplo:

\`\`\`javascript
import {
  onLCP,
  onINP,
  onCLS
} from 'web-vitals/attribution';
function sendMetric(metric) {
  console.log({
    name: metric.name,
    value: metric.value,
    attribution: metric.attribution
  });
}
onLCP(sendMetric);
onINP(sendMetric);
onCLS(sendMetric);
\`\`\`

Esto puede proporcionar contexto adicional sobre elementos asociados con problemas de LCP, INP o CLS.

Por ejemplo, un diagnóstico puede terminar llevándote hacia:

\`\`\`text
INP elevado
↓
Interacción problemática
↓
Botón "Agregar al carrito"
↓
JavaScript pesado
↓
Tarea larga
↓
Script de tercero
\`\`\`

Eso es mucho más accionable que:

> “Tu INP está en rojo.”

---

## La estrategia correcta: Lighthouse + RUM + CrUX

La conclusión no es abandonar Lighthouse. De hecho, sería un error. La mejor estrategia es utilizar cada fuente para aquello en lo que es buena.

### 1. Lighthouse → prevenir y diagnosticar

Utilizalo durante:

* desarrollo;
* staging;
* QA;
* auditorías;
* refactors;
* optimización de imágenes;
* análisis de JavaScript;
* eliminación de recursos innecesarios.

Su gran ventaja es que permite realizar pruebas controladas y repetibles.

---

### 2. RUM → monitorizar usuarios reales

Utilizalo cuando el sitio está en producción para detectar:

* regresiones;
* problemas por dispositivo;
* problemas geográficos;
* plantillas problemáticas;
* interacciones lentas;
* cambios de layout;
* problemas introducidos por terceros.

Es tu sistema de **observabilidad de experiencia real**.

---

### 3. CrUX → entender la experiencia que Google está registrando

CrUX sirve como referencia fundamental para Core Web Vitals en el ecosistema de Google. Pero tiene una característica importante: **no es instantáneo.**

CrUX utiliza una ventana móvil de 28 días para sus métricas agregadas. Por eso una mejora publicada hoy no necesariamente modifica inmediatamente el estado que ves en Search Console o PageSpeed Insights.

Esto genera una estrategia muy útil:

\`\`\`text
Deploy
   ↓
RUM
   ↓
¿La mejora funcionó?
   ↓
Sí
   ↓
Esperar acumulación de datos
   ↓
CrUX
   ↓
¿Google registra la mejora?
\`\`\`

RUM funciona como una especie de **radar adelantado**.

---

## Un escenario real

Imaginemos que un ecommerce despliega una nueva versión de su frontend.

Lighthouse:

\`\`\`text
Performance: 96
LCP: 1.8 s
TBT: 90 ms
CLS: 0.03
\`\`\`

Todo parece perfecto.

Pero 24 horas después, RUM muestra:

\`\`\`text
Mobile
LCP P75: 3.0 s
INP P75: 380 ms
CLS P75: 0.17
\`\`\`

Segmentamos por plantilla:

\`\`\`text
Home:
LCP 2.2 s
Categorías:
LCP 2.5 s
Producto:
LCP 3.6 s
INP 420 ms
\`\`\`

Después segmentamos por interacción:

\`\`\`text
INP problemático:
1. Selector de variantes
2. Galería de imágenes
3. Add to cart
\`\`\`

Finalmente encontramos que una nueva librería de recomendaciones está ejecutando demasiado JavaScript en el hilo principal.

Sin RUM, el equipo podría haber pasado días optimizando un Lighthouse que ya mostraba 96 puntos.

Con RUM, encontramos el problema real.

---

## Esto también cambia cómo hacemos SEO técnico

Durante mucho tiempo, una auditoría SEO técnica podía centrarse principalmente en:

* indexación;
* canonical;
* sitemap;
* robots.txt;
* arquitectura;
* enlaces internos;
* metadatos;
* Schema;
* JavaScript;
* Core Web Vitals.

Todo eso sigue siendo importante.

Pero el rendimiento moderno exige una capa adicional:

**¿Qué experiencia están teniendo realmente nuestros usuarios?**

Por eso una auditoría técnica avanzada debería poder cruzar:

\`\`\`text
SEO
+
Performance
+
UX
+
Datos reales
\`\`\`

Por ejemplo:

\`\`\`text
URL con caída de tráfico orgánico
        ↓
Search Console
        ↓
Cambio de consultas / CTR / posiciones
        ↓
Core Web Vitals
        ↓
RUM
        ↓
Segmentación por dispositivo
        ↓
Identificación del problema
\`\`\`

Esto no significa asumir automáticamente que una caída de rankings fue causada por Core Web Vitals.

Eso sería una conclusión incorrecta.

Significa incorporar los datos de experiencia real como una variable más dentro de la investigación.

---

## El error de optimizar para el Lighthouse Score

Hay otro problema menos técnico, pero igual de importante: **convertir el Lighthouse Score en un KPI de negocio.** Un 100 puede ser satisfactorio visualmente.

Pero no necesariamente significa:

* más tráfico;
* mejores rankings;
* más conversiones;
* mayor retención;
* mejor UX;
* menor abandono.

De hecho, un sitio puede perder tiempo persiguiendo los últimos puntos de Lighthouse mientras mantiene problemas reales que afectan a sus usuarios.

El objetivo debería ser:

> **mejorar la experiencia real, no conseguir una captura de pantalla perfecta.**

Lighthouse es una herramienta para lograrlo.

No es el objetivo final.

---

## Checklist de implementación RUM

Si estás construyendo un sistema propio de RUM, una implementación inicial podría seguir este esquema:

### Métricas

* LCP (Largest Contentful Paint)
* INP (Interaction to Next Paint)
* CLS (Cumulative Layout Shift)
* FCP (First Contentful Paint)
* TTFB (Time to First Byte)

### Segmentación

* Dispositivo (Mobile / Tablet / Desktop)
* Navegador y motor de renderizado
* Sistema operativo
* País / región geográfica
* URL canónica
* Tipo de plantilla (Home, Catálogo, Producto, Blog)
* Versión y release del frontend

### Diagnóstico

* Elemento objetivo del LCP
* Interacción y selector problemático en INP
* Elementos causantes de layout shifts en CLS
* Scripts asociados y librerías externas
* Long Tasks que bloquean el Main Thread

### Monitorización

* Percentil 75 (P75) como métrica de corte
* Tendencias y evolución temporal histórica
* Alertas tempranas ante regresiones
* Comparativas antes / después de cada deployment
* Segmentación estricta por tipo de dispositivo

### SEO

* Comparar telemetría de RUM interno con CrUX
* Correlacionar con los reportes de Google Search Console
* Evaluar impacto de caídas orgánicas frente a degradación técnica
* Recordar que Core Web Vitals es un pilar técnico, no la totalidad del algoritmo

---

## No abandones Lighthouse, abandoná la idea de que representa a todos

Lighthouse sigue siendo una herramienta imprescindible. El problema no es Lighthouse. El problema es utilizar **datos sintéticos para responder preguntas sobre usuarios reales**.

Una estrategia madura de performance debería trabajar con tres capas:

* 🔬 **Lighthouse:** Te permite experimentar, detectar problemas y validar cambios en condiciones controladas de laboratorio.
* 👥 **RUM:** Te muestra qué está ocurriendo realmente con tus usuarios y permite segmentar la experiencia por dispositivo, geografía, plantilla e interacción.
* 🔎 **CrUX:** Te permite entender los datos de campo agregados que Google utiliza para sus evaluaciones de Core Web Vitals en Search Console y PageSpeed Insights.

La combinación es mucho más poderosa que cualquiera de las tres herramientas por separado.

Porque una web no existe dentro de un Lighthouse.

**Existe en los dispositivos de sus usuarios.**

Y si tu objetivo es mejorar SEO, UX y conversión, la pregunta más importante no debería ser:

> “¿Qué puntuación obtuvimos en Lighthouse?”

Debería ser:

> **“¿Qué experiencia están teniendo realmente nuestros usuarios y dónde está fallando?”**

Ahí es donde el RUM deja de ser una herramienta de performance y empieza a convertirse en una herramienta estratégica para producto, SEO y negocio.

---

## Fuentes y documentación

* **Google Search Central — Core Web Vitals y resultados de búsqueda:** documentación oficial sobre LCP, INP, CLS y su relación con la experiencia de página.
* **web.dev — Web Vitals:** metodología de campo, P75 y diferencias entre herramientas de laboratorio y datos reales.
* **web.dev — Cómo comenzar a medir Web Vitals:** diferencias prácticas entre laboratorio y RUM, especialmente para CLS e INP.
* **GoogleChrome/web-vitals:** librería oficial para medir Web Vitals en usuarios reales y obtener información de attribution.
* **RUMvision — Lighthouse, Core Web Vitals y RUM:** comparación entre datos sintéticos, CrUX y monitorización de usuarios reales.
* **DebugBear — CrUX vs. RUM:** diferencias en cobertura, granularidad, actualización y diagnóstico.

---

### ¿Necesitas auditar tu rendimiento real o implementar RUM en tu sitio?

Si tu sitio web muestra puntuaciones altas en Lighthouse pero tiene problemas en Search Console, caídas de conversión o interacciones lentas en dispositivos móviles, auditar tus métricas reales es el primer paso.

Desde mi trabajo combinando **desarrollo frontend, arquitectura web, SEO técnico y analítica de rendimiento**, ayudo a empresas a implementar observabilidad real (RUM), optimizar Core Web Vitals y garantizar que el rendimiento trabaje a favor del negocio.

📩 **Escribime a [contacto@martinmatias.com.ar](mailto:contacto@martinmatias.com.ar) para conversar sobre tu proyecto.**`,
};

export default post;
