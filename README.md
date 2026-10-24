# Unidad Cuidados Críticos Cardiológicos HM

App estática con menú lateral por áreas clínicas y panel de protocolos/herramientas.

## Contenido inicial

| Sección | Recursos |
|---|---|
| Respiratorio | Cuidados integrales en VM, Póster humidificador 6 |
| Infecciones | DDS (folleto + protocolo detallado); Profilaxis (AMC, ISHLT 2024) |
| Nutrición | Estreñimiento en UCI, Diarrea en UCI con NE, Calculadora nutrición clínica UCI |
| Coagulación | Anticoagulación en SEC (protocolo clínico + resumen de enfermería) |
| Sedoanalgesia | Analgosedación en VM |
| Hemodinámica | Escalas en shock cardiogénico (pantalla de inicio), Fármacos, Monitorización hemodinámica, TEP |
| Neurológico | Monitorización CONOX |
| Formación | Conferencias de cardiología crítica, ECMO V1 borrador |

## Cómo abrir en local

Desde la raíz del proyecto:

```bash
npx --yes serve -l 5501 .
```

Luego abre:

[http://127.0.0.1:5501/app/](http://127.0.0.1:5501/app/)

También puedes usar cualquier servidor estático apuntando a esta carpeta (por ejemplo Live Server o un `node` http server).

## Estructura

- `app/` — interfaz (`index.html`, `styles.css`, `app.js`)
- `assets/protocolos/` — documentos clínicos copiados para uso offline en la app
- `assets/formacion/` — material formativo copiado para uso offline en la app

Este proyecto es independiente del repositorio Posters.
