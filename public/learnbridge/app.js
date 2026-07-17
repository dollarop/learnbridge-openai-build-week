const topicInput = document.querySelector("#topicInput");
const answerInput = document.querySelector("#answerInput");
const sourceInput = document.querySelector("#sourceInput");
const materialSelect = document.querySelector("#materialSelect");
const bookUpload = document.querySelector("#bookUpload");
const uploadStatus = document.querySelector("#uploadStatus");
const languageSelect = document.querySelector("#languageSelect");
const levelSelect = document.querySelector("#levelSelect");
const profileSelect = document.querySelector("#profileSelect");
const stateLabel = document.querySelector("#stateLabel");
const quickStartInput = document.querySelector("#quickStartInput");
const demoScenarioSelect = document.querySelector("#demoScenarioSelect");
const modeLabel = document.querySelector("#modeLabel");
const masteryLabel = document.querySelector("#masteryLabel");
const badgeLabel = document.querySelector("#badgeLabel");
const usernameInput = document.querySelector("#usernameInput");
const passwordInput = document.querySelector("#passwordInput");
const accountStatus = document.querySelector("#accountStatus");
const projectTitleInput = document.querySelector("#projectTitleInput");
const activeProjectName = document.querySelector("#activeProjectName");
const projectList = document.querySelector("#projectList");
const notesInput = document.querySelector("#notesInput");
const saveLabel = document.querySelector("#saveLabel");
const calcInput = document.querySelector("#calcInput");
const calcOutput = document.querySelector("#calcOutput");
const calculatorMode = document.querySelector("#calculatorMode");
const financeHelpers = document.querySelector("#financeHelpers");
const scientificHelpers = document.querySelector("#scientificHelpers");
const timerDisplay = document.querySelector("#timerDisplay");
const lapList = document.querySelector("#lapList");
const studyMinutesInput = document.querySelector("#studyMinutesInput");
const studySchedule = document.querySelector("#studySchedule");
const sketchCanvas = document.querySelector("#sketchCanvas");
const sketchContext = sketchCanvas.getContext("2d");
const chatPanel = document.querySelector("#chatPanel");
const chatLog = document.querySelector("#chatLog");
const chatInput = document.querySelector("#chatInput");
const chatVoiceButton = document.querySelector("#chatVoiceButton");
const plannerSummary = document.querySelector("#plannerSummary");
const weeklyLearning = document.querySelector("#weeklyLearning");
const calendarGrid = document.querySelector("#calendarGrid");
const agendaList = document.querySelector("#agendaList");
const reminderTitleInput = document.querySelector("#reminderTitleInput");
const reminderDateInput = document.querySelector("#reminderDateInput");
const reminderTimeInput = document.querySelector("#reminderTimeInput");
const reminderNoteInput = document.querySelector("#reminderNoteInput");
const sourceLedger = document.querySelector("#sourceLedger");
const mythCheckOutput = document.querySelector("#mythCheckOutput");
const mindMapOutput = document.querySelector("#mindMapOutput");
const flashcardDeck = document.querySelector("#flashcardDeck");
const helpButton = document.querySelector("#helpButton");
const audioToggle = document.querySelector("#audioToggle");
const helpModal = document.querySelector("#helpModal");
const closeHelpButton = document.querySelector("#closeHelpButton");
const helpContent = document.querySelector("#helpContent");
const floatToolsButton = document.querySelector("#floatToolsButton");
const toolsToggle = document.querySelector("#toolsToggle");
const voiceSelect = document.querySelector("#voiceSelect");
const voiceAccentSelect = document.querySelector("#voiceAccentSelect");
const voiceToneSelect = document.querySelector("#voiceToneSelect");
const voiceRateInput = document.querySelector("#voiceRateInput");
const voicePitchInput = document.querySelector("#voicePitchInput");
const autoSpeakToggle = document.querySelector("#autoSpeakToggle");
const speakPageButton = document.querySelector("#speakPageButton");
const stopSpeechButton = document.querySelector("#stopSpeechButton");
const voiceInputButton = document.querySelector("#voiceInputButton");
const voiceSupportStatus = document.querySelector("#voiceSupportStatus");

let activeUser = "Alberto";
let activeProjectId = "default";
let timerStartedAt = null;
let timerElapsed = 0;
let timerHandle = null;
let isDrawing = false;
let availableVoices = [];
let recognitionHandle = null;
let guidedDemoIndex = 0;

const tabIcons = {
  understand: "◎",
  kid: "☼",
  clinic: "⌁",
  proof: "◇",
  exam: "◫",
  teach: "▣",
  media: "◈",
  play: "✦",
  tools: "⚙",
  planner: "◷"
};

const demoTabSequence = ["understand", "proof", "exam", "teach", "planner"];
let activeSpeechButton = null;
let activeSpeechText = "";

const demoScenarios = {
  energy: {
    id: "energy",
    title: "Energy Transition: grid, storage, nuclear, and renewables",
    material: "Article",
    profile: "Technical professional",
    source: "Source pack: IEA Electricity 2026, IEA Renewables Progress Tracker, IEA Batteries and Secure Energy Transitions, IPCC mitigation framing, grid operator reliability explainers. Demo note: final app would attach live citations and local grid data.",
    answer: "The energy transition is not only replacing fossil plants with solar panels. It is a system redesign: demand grows, variable renewables need flexible grids, batteries shift short-term supply, nuclear can provide firm low-emission generation, and policy decides whether costs, reliability, permitting, and equity move together.",
    explain: "Energy transition is a system problem, not a single technology contest. Solar and wind can deliver low-cost electricity, batteries help move energy across hours, nuclear can provide firm low-carbon supply, and transmission plus demand flexibility determine whether the mix works reliably. The hard question is not 'which technology wins?' but 'which portfolio keeps power affordable, clean, resilient, and politically buildable?'",
    core: "A reliable transition needs four layers working together: clean generation, storage/flexibility, expanded grids, and demand-side adaptation.",
    example: "A coastal city adding electric buses, heat pumps, and data centers cannot solve the load only with rooftop solar. It needs grid upgrades, time-of-use pricing, storage, emergency reserves, and a policy decision about whether firm power comes from nuclear, hydro, geothermal, gas with capture, or imports.",
    os: [
      ["SYSTEM MAP", "Generation + storage + grid + demand become one learning object instead of separate facts."],
      ["CALCULATION LAYER", "Use the calculator for capacity factor, storage duration, levelized cost comparisons, and payback examples."],
      ["DECISION BRIEF", "Export a city-scale recommendation with trade-offs, sources, risks, and questions for public debate."]
    ],
    clinic: [
      ["What you understood", "You separated the transition from a simple solar-versus-fossil story and recognized the grid as the coordination layer."],
      ["Likely gap", "The weak point is time scale: batteries are excellent for hours, grids move power across geography, while seasonal reliability may require firm generation or long-duration storage."],
      ["Correction", "Teach it as: clean electrons are necessary, but timing, location, reliability, permitting, and demand growth decide whether the system actually works."]
    ],
    proof: [
      ["Claim", "A high-renewables grid can be reliable only if planning includes transmission, storage, flexible demand, and firm capacity."],
      ["Evidence needed", "Installed capacity, hourly demand curves, interconnection queues, grid congestion, storage duration, nuclear fleet availability, and policy timelines."],
      ["Confidence", "High confidence on the system structure; numeric claims require regional data and current grid operator reports."]
    ],
    myths: [
      ["Myth", "Solar plus batteries alone can immediately replace every power plant everywhere."],
      ["Reality", "They are central tools, but reliability depends on geography, seasonality, transmission, demand flexibility, and firm resources."],
      ["Myth", "Nuclear and renewables cannot coexist."],
      ["Reality", "Many low-carbon scenarios combine variable renewables with firm low-emission generation; the debate is cost, safety, waste, speed, and public acceptance."]
    ],
    exam: [
      "Explain why electricity demand growth makes the transition harder than a simple fuel swap.",
      "Compare batteries, transmission, and nuclear as reliability tools. What problem does each solve?",
      "Name one misleading claim about energy transition and rewrite it accurately.",
      "Design a three-step plan for a city electrifying transport and heating.",
      "What evidence would you request before choosing a local energy portfolio?",
      "Create a one-slide executive brief for a mayor."
    ],
    media: [
      ["Grid flow diagram", "Animated map showing generation, storage, transmission bottlenecks, and demand peaks."],
      ["Portfolio comparison", "Stacked chart comparing solar, wind, nuclear, storage, demand response, and firm backup by role."],
      ["Cost-risk matrix", "Visual matrix: speed, cost, reliability, emissions, public acceptance, and permitting risk."]
    ],
    storyboard: [
      ["Scene 1", "Night city demand rises while solar output falls."],
      ["Scene 2", "Batteries discharge, transmission imports wind, demand response lowers peaks."],
      ["Scene 3", "Planner compares portfolios and explains trade-offs to citizens."]
    ],
    mind: [
      ["Energy Transition", "Central system: clean generation, grid, storage, demand, policy.", [["proof", "evidence"], ["media", "system map"]]],
      ["Generation Mix", "Solar, wind, nuclear, hydro, geothermal, gas with capture, imports.", [["proof", "compare"], ["exam", "practice"]]],
      ["Flexibility", "Batteries, demand response, interconnection, long-duration storage.", [["tools", "calculate"], ["media", "visualize"]]],
      ["Grid Bottlenecks", "Transmission, permitting, congestion, reliability standards.", [["proof", "sources"], ["teach", "brief"]]],
      ["Public Decision", "Affordability, reliability, equity, emissions, land use.", [["clinic", "misconceptions"], ["teach", "class"]]]
    ],
    lesson: "Run a city council simulation: teams represent grid operator, climate advocate, nuclear engineer, consumer advocate, and mayor. They must design a 2035 electricity portfolio and defend it with sources.",
    sources: "Demo source ledger: IEA Electricity 2026 for demand, grids and flexibility; IEA Renewables Progress Tracker for renewable growth; IEA battery analysis for storage role; IPCC mitigation reports for emissions framing; regional grid data required for local claims."
  },
  misinformation: {
    id: "misinformation",
    title: "How misinformation spreads during elections",
    material: "Article",
    profile: "Academic / researcher",
    source: "Source pack: CISA election security resources, FBI/CISA public service announcements, academic work on rumor cascades and platform amplification, election authority communications. Demo note: production version would include country-specific election commission sources.",
    answer: "Election misinformation spreads when emotional claims, identity cues, low trust, algorithmic amplification, and information gaps combine. The damage is not only believing one false post; it is lowering confidence in institutions, confusing voters about procedures, and making corrections arrive slower than the rumor.",
    explain: "Election misinformation is an information-flow problem. A claim starts in a community, influencer account, foreign campaign, private group, or manipulated media post. It spreads faster when it is emotionally charged, confirms identity, exploits uncertainty, or appears before official sources respond. The correct response is not censorship as a reflex; it is source tracing, prebunking, rapid factual clarification, media literacy, and transparent election administration.",
    core: "Misinformation spreads through speed, emotion, identity, repetition, and low-friction sharing.",
    example: "A false post claims polling places are closed. Screenshots spread in local chats before the election office posts a correction. LearnBridge maps the claim, asks who benefits, checks official election sources, creates a correction script, and teaches students how to avoid amplifying the rumor.",
    os: [
      ["CLAIM TRACE", "Follow origin, amplifier, audience, emotional trigger, and correction path."],
      ["CREDIBILITY LAB", "Separate misinformation, disinformation, malinformation, satire, error, and legitimate dispute."],
      ["CIVIC LESSON", "Export a classroom activity that teaches verification without partisan preaching."]
    ],
    clinic: [
      ["What you understood", "You saw misinformation as a network process, not only a false statement."],
      ["Likely gap", "The weak point is distinguishing false content from misleading framing, missing context, or legitimate uncertainty."],
      ["Correction", "Analyze each claim by source, evidence, intent, timing, audience, and action requested."]
    ],
    proof: [
      ["Claim", "Election misinformation can affect behavior even when people do not fully believe it, by creating confusion or distrust."],
      ["Evidence needed", "Official election procedures, timestamped posts, platform spread data, fact-checks, local election office statements, and survey or behavioral evidence."],
      ["Confidence", "High on mechanisms; claim-specific conclusions require verified source chains and official election records."]
    ],
    myths: [
      ["Myth", "Only fake news from strangers matters."],
      ["Reality", "People often trust misinformation more when it comes from friends, groups, influencers, or familiar community voices."],
      ["Myth", "Corrections automatically undo the harm."],
      ["Reality", "Corrections help, but timing, trust, repetition, and identity shape whether people update beliefs."]
    ],
    exam: [
      "Define misinformation, disinformation, and malinformation with election examples.",
      "Map how one false polling-place claim can travel from post to group chat to local panic.",
      "Create a nonpartisan correction message that does not repeat the false claim unnecessarily.",
      "What official source would you check first and why?",
      "Explain why emotion and identity accelerate sharing.",
      "Design a media-literacy lesson for high school students."
    ],
    media: [
      ["Rumor cascade map", "Nodes show origin, amplifiers, communities, corrections, and lingering uncertainty."],
      ["Verification funnel", "Source, evidence, date, official confirmation, action requested, share/no-share decision."],
      ["Prebunk poster", "Visual guide: pause, source-check, context-check, official-check, then decide."]
    ],
    storyboard: [
      ["Scene 1", "A misleading screenshot appears in a private chat."],
      ["Scene 2", "The claim jumps to influencers and local groups."],
      ["Scene 3", "A correction strategy uses official sources and trusted messengers."]
    ],
    mind: [
      ["Election Misinformation", "Central process: claim, channel, audience, emotion, action.", [["proof", "evidence"], ["media", "cascade"]]],
      ["Claim Types", "False facts, misleading context, impersonation, AI media, procedural confusion.", [["clinic", "diagnose"], ["exam", "practice"]]],
      ["Spread Drivers", "Emotion, identity, speed, repetition, platform incentives.", [["media", "map"], ["teach", "lesson"]]],
      ["Verification", "Official source, date, original evidence, reverse search, local authority.", [["proof", "sources"], ["tools", "notes"]]],
      ["Civic Response", "Prebunking, trusted messengers, correction design, resilience.", [["teach", "activity"], ["exam", "simulate"]]]
    ],
    lesson: "Run a claim-verification lab. Students receive three posts: one false, one misleading, one legitimate but incomplete. They must classify, verify, correct, and explain their reasoning.",
    sources: "Demo source ledger: CISA election security and disinformation resources; FBI/CISA public service announcements; official election office procedures; academic research on rumor spread and correction design; platform transparency data where available."
  },
  "healthcare-ai": {
    id: "healthcare-ai",
    title: "AI in Healthcare: promise, risk, bias, and regulation",
    material: "Article",
    profile: "Postgraduate / researcher",
    source: "Source pack: WHO ethics and governance of AI for health, WHO guidance on large multi-modal models, FDA AI/ML-enabled medical device resources, NIST AI Risk Management Framework, clinical validation literature. Demo note: production version would attach citations by clinical use case.",
    answer: "AI in healthcare is promising because it can triage, summarize, detect patterns, support imaging, and improve access. But it is dangerous if treated as a doctor replacement. The core issues are validation, bias, privacy, liability, explainability, workflow integration, and whether clinicians can challenge the system.",
    explain: "AI in healthcare is a high-stakes decision-support problem. The promise is faster documentation, better pattern detection, personalized support, and access in underserved settings. The risk is that biased data, hallucinated explanations, automation bias, privacy leakage, and weak validation can harm patients. A serious deployment asks: what clinical task, what evidence, what population, what oversight, what failure mode, and who is accountable?",
    core: "Healthcare AI must be judged by clinical task, evidence, risk, workflow, equity, and accountability.",
    example: "A hospital wants an AI tool to flag sepsis risk. LearnBridge separates model performance from clinical usefulness: sensitivity, false alarms, subgroup bias, workflow burden, clinician override, monitoring, privacy, and patient communication.",
    os: [
      ["CLINICAL USE CASE", "Define whether AI is for administration, triage, diagnosis support, patient education, or research."],
      ["RISK REGISTER", "Map bias, privacy, hallucination, automation bias, liability, and validation gaps."],
      ["DEPLOYMENT RUBRIC", "Export a checklist for evidence, monitoring, clinician oversight, and patient safety."]
    ],
    clinic: [
      ["What you understood", "You separated promise from deployment risk and avoided the naive claim that AI simply replaces clinicians."],
      ["Likely gap", "The weak point is validation: a model can perform well on a benchmark and still fail in a real hospital workflow or subgroup."],
      ["Correction", "Ask what decision the AI influences, what evidence supports it, who can override it, and what happens when it is wrong."]
    ],
    proof: [
      ["Claim", "Healthcare AI should be adopted only with task-specific validation, human oversight, bias monitoring, and accountability."],
      ["Evidence needed", "Clinical trial or real-world validation, subgroup performance, privacy assessment, regulatory status, workflow study, adverse-event monitoring."],
      ["Confidence", "High on governance principles; product-specific claims require device documentation, peer-reviewed evidence, and regulatory review."]
    ],
    myths: [
      ["Myth", "If an AI model is accurate overall, it is safe for everyone."],
      ["Reality", "Average performance can hide subgroup failures by age, sex, race, language, disability, geography, or disease prevalence."],
      ["Myth", "A chatbot can replace medical judgment."],
      ["Reality", "For high-stakes care, AI should support qualified professionals, not replace accountability, examination, or emergency protocols."]
    ],
    exam: [
      "Name three healthcare AI use cases and rank their risk.",
      "Explain automation bias with a clinical example.",
      "What evidence would you require before deploying an AI sepsis alert?",
      "How can bias appear even when developers do not intend discrimination?",
      "Design a patient-safety checklist for a hospital AI tool.",
      "Explain the difference between administrative AI and diagnostic AI."
    ],
    media: [
      ["Clinical workflow diagram", "Patient data enters model, alert reaches clinician, clinician verifies, outcome is monitored."],
      ["Risk heat map", "Bias, privacy, hallucination, liability, validation, cybersecurity, workflow burden."],
      ["Evidence ladder", "Prototype, retrospective validation, prospective study, real-world monitoring, regulatory review."]
    ],
    storyboard: [
      ["Scene 1", "A clinician receives an AI alert and asks what evidence supports it."],
      ["Scene 2", "The dashboard reveals subgroup performance and uncertainty."],
      ["Scene 3", "The hospital committee decides deployment rules and monitoring."]
    ],
    mind: [
      ["AI in Healthcare", "Central question: useful decision support or unsafe automation?", [["proof", "evidence"], ["media", "workflow"]]],
      ["Promise", "Triage, imaging support, documentation, patient education, research acceleration.", [["teach", "class"], ["exam", "examples"]]],
      ["Risks", "Bias, hallucination, privacy, automation bias, liability, cybersecurity.", [["proof", "risk"], ["clinic", "gaps"]]],
      ["Validation", "Task, population, subgroup performance, workflow, monitoring.", [["proof", "sources"], ["tools", "checklist"]]],
      ["Governance", "Human oversight, transparency, consent, accountability, regulation.", [["teach", "rubric"], ["media", "map"]]]
    ],
    lesson: "Run a hospital ethics board simulation. Teams represent patient advocate, clinician, data scientist, regulator, and hospital administrator. They must approve, reject, or modify an AI deployment plan.",
    sources: "Demo source ledger: WHO AI health ethics principles; WHO guidance on large multi-modal models; FDA AI/ML-enabled medical-device resources; NIST AI Risk Management Framework; peer-reviewed clinical validation studies required for product claims."
  }
};

const demoScenarioSpanish = {
  energy: {
    title: "Transición energética: red eléctrica, almacenamiento, nuclear y renovables",
    source: "Paquete de fuentes: IEA Electricity 2026, IEA Renewables Progress Tracker, IEA Batteries and Secure Energy Transitions, marco de mitigación del IPCC y explicadores de confiabilidad de operadores de red. Nota demo: la app final adjuntaría citas vivas y datos locales de la red.",
    answer: "La transición energética no consiste solo en sustituir plantas fósiles por paneles solares. Es un rediseño del sistema: crece la demanda, las renovables variables necesitan redes flexibles, las baterías mueven energía entre horas, la nuclear puede aportar generación firme de bajas emisiones y la política decide si costos, confiabilidad, permisos y equidad avanzan juntos.",
    explain: "La transición energética es un problema de sistema, no una competencia entre tecnologías aisladas. La solar y la eólica pueden producir electricidad barata, las baterías ayudan a mover energía entre horas, la nuclear puede aportar suministro firme de bajo carbono, y la transmisión más la flexibilidad de la demanda deciden si la mezcla funciona con confiabilidad. La pregunta difícil no es que tecnología gana, sino que portafolio mantiene la energía accesible, limpia, resiliente y políticamente viable.",
    core: "Una transición confiable necesita cuatro capas coordinadas: generación limpia, almacenamiento y flexibilidad, redes ampliadas y adaptación de la demanda.",
    example: "Una ciudad costera que agrega autobuses eléctricos, bombas de calor y centros de datos no resuelve la carga solo con techos solares. Necesita mejoras de red, tarifas por horario, almacenamiento, reservas de emergencia y una decisión pública sobre si la energía firme vendrá de nuclear, hidro, geotermia, gas con captura o importaciones.",
    os: [
      ["MAPA DEL SISTEMA", "Generación + almacenamiento + red + demanda se vuelven un solo objeto de aprendizaje, no hechos separados."],
      ["CAPA DE CÁLCULO", "Usa la calculadora para factor de capacidad, duración de almacenamiento, costos comparados y recuperación de inversión."],
      ["RESUMEN DE DECISIÓN", "Exporta una recomendación para ciudad con compensaciones, fuentes, riesgos y preguntas para debate público."]
    ],
    clinic: [
      ["Lo que entendiste", "Separaste la transición de una historia simple de solar contra fósiles y reconociste la red eléctrica como capa de coordinación."],
      ["Brecha probable", "El punto débil es la escala temporal: las baterías sirven muy bien por horas, las redes mueven energía por geografía y la confiabilidad estacional puede requerir generación firme o almacenamiento de larga duración."],
      ["Corrección", "Enséñalo así: los electrones limpios son necesarios, pero el tiempo, la ubicación, la confiabilidad, los permisos y el crecimiento de la demanda deciden si el sistema funciona."]
    ],
    proof: [
      ["Afirmación", "Una red con muchas renovables puede ser confiable solo si la planeación incluye transmisión, almacenamiento, demanda flexible y capacidad firme."],
      ["Evidencia necesaria", "Capacidad instalada, curvas horarias de demanda, filas de interconexión, congestión de red, duración de almacenamiento, disponibilidad nuclear y calendarios de política."],
      ["Confianza", "Alta confianza en la estructura del sistema; las cifras requieren datos regionales y reportes actuales del operador de red."]
    ],
    myths: [
      ["Mito", "Solar más baterías puede reemplazar de inmediato todas las plantas eléctricas en cualquier lugar."],
      ["Realidad", "Son herramientas centrales, pero la confiabilidad depende de geografía, estaciones, transmisión, demanda flexible y recursos firmes."],
      ["Mito", "La nuclear y las renovables no pueden coexistir."],
      ["Realidad", "Muchos escenarios de bajo carbono combinan renovables variables con generación firme de bajas emisiones; el debate real es costo, seguridad, residuos, velocidad y aceptación pública."]
    ],
    exam: [
      "Explica por qué el crecimiento de la demanda eléctrica vuelve más difícil la transición que un simple cambio de combustible.",
      "Compara baterías, transmisión y nuclear como herramientas de confiabilidad. ¿Qué problema resuelve cada una?",
      "Nombra una afirmación engañosa sobre transición energética y reescríbela con precisión.",
      "Diseña un plan de tres pasos para una ciudad que electrifica transporte y calefacción.",
      "¿Qué evidencia pedirías antes de elegir un portafolio energético local?",
      "Crea una diapositiva ejecutiva para una alcaldesa o alcalde."
    ],
    media: [
      ["Diagrama de flujo de red", "Mapa animado con generación, almacenamiento, cuellos de botella de transmisión y picos de demanda."],
      ["Comparación de portafolios", "Gráfico apilado que compara solar, eólica, nuclear, almacenamiento, respuesta de demanda y respaldo firme por función."],
      ["Matriz costo-riesgo", "Matriz visual: velocidad, costo, confiabilidad, emisiones, aceptación pública y riesgo de permisos."]
    ],
    storyboard: [
      ["Escena 1", "La demanda nocturna de la ciudad sube mientras cae la producción solar."],
      ["Escena 2", "Las baterías descargan, la transmisión importa viento y la respuesta de demanda baja los picos."],
      ["Escena 3", "La planeadora compara portafolios y explica compensaciones a la ciudadanía."]
    ],
    mind: [
      ["Transición energética", "Sistema central: generación limpia, red, almacenamiento, demanda y política.", [["proof", "evidencia"], ["media", "mapa del sistema"]]],
      ["Mezcla de generación", "Solar, eólica, nuclear, hidro, geotermia, gas con captura e importaciones.", [["proof", "comparar"], ["exam", "practicar"]]],
      ["Flexibilidad", "Baterías, respuesta de demanda, interconexión y almacenamiento de larga duración.", [["tools", "calcular"], ["media", "visualizar"]]],
      ["Cuellos de botella", "Transmisión, permisos, congestión y estándares de confiabilidad.", [["proof", "fuentes"], ["teach", "brief"]]],
      ["Decisión pública", "Accesibilidad, confiabilidad, equidad, emisiones y uso de suelo.", [["clinic", "mitos"], ["teach", "clase"]]]
    ],
    lesson: "Realiza una simulación de cabildo: equipos representan operador de red, defensa climática, ingeniería nuclear, consumidores y alcaldía. Deben diseñar un portafolio eléctrico 2035 y defenderlo con fuentes.",
    sources: "Registro demo de fuentes: IEA Electricity 2026 para demanda, redes y flexibilidad; IEA Renewables Progress Tracker para crecimiento renovable; análisis de baterías de la IEA para almacenamiento; reportes de mitigación del IPCC para emisiones; se requieren datos regionales de red para afirmaciones locales."
  },
  misinformation: {
    title: "Cómo se propaga la desinformación durante las elecciones",
    source: "Paquete de fuentes: recursos de seguridad electoral de CISA, avisos públicos FBI/CISA, trabajos académicos sobre cascadas de rumores y amplificación en plataformas, y comunicaciones de autoridades electorales. Nota demo: la versión final incluiría fuentes de la comisión electoral de cada país.",
    answer: "La desinformación electoral se propaga cuando se combinan afirmaciones emocionales, señales de identidad, baja confianza, amplificación algorítmica y vacíos de información. El daño no es solo creer una publicación falsa; también baja la confianza institucional, confunde a votantes sobre procedimientos y hace que las correcciones lleguen más lento que el rumor.",
    explain: "La desinformación electoral es un problema de flujo de información. Una afirmación nace en una comunidad, cuenta influyente, campaña extranjera, grupo privado o publicación manipulada. Se propaga más rápido cuando carga emoción, confirma identidad, explota incertidumbre o aparece antes de que respondan fuentes oficiales. La respuesta correcta no es censura automática: es rastrear fuentes, prevenir con información previa, aclarar rápido con hechos, alfabetización mediática y administración electoral transparente.",
    core: "La desinformación se propaga por velocidad, emoción, identidad, repetición y facilidad para compartir.",
    example: "Una publicación falsa afirma que cerraron casillas. Las capturas se difunden en chats locales antes de que la oficina electoral publique una corrección. LearnBridge mapea la afirmación, pregunta quién se beneficia, revisa fuentes oficiales, crea un guion de corrección y enseña a estudiantes a no amplificar el rumor.",
    os: [
      ["RASTREO DE AFIRMACIÓN", "Sigue origen, amplificador, audiencia, disparador emocional y ruta de corrección."],
      ["LABORATORIO DE CREDIBILIDAD", "Separa desinformación, propaganda intencional, contexto malicioso, sátira, error y disputa legítima."],
      ["LECCIÓN CÍVICA", "Exporta una actividad de aula que enseña verificación sin sermón partidista."]
    ],
    clinic: [
      ["Lo que entendiste", "Viste la desinformación como un proceso de red, no solo como una frase falsa."],
      ["Brecha probable", "El punto débil es distinguir contenido falso de encuadre engañoso, contexto faltante o incertidumbre legítima."],
      ["Corrección", "Analiza cada afirmación por fuente, evidencia, intención, momento, audiencia y acción solicitada."]
    ],
    proof: [
      ["Afirmación", "La desinformación electoral puede afectar conducta aunque la gente no la crea por completo, porque crea confusión o desconfianza."],
      ["Evidencia necesaria", "Procedimientos electorales oficiales, publicaciones con hora, datos de difusión, verificaciones, declaraciones de oficinas electorales y evidencia de encuestas o comportamiento."],
      ["Confianza", "Alta en los mecanismos; conclusiones sobre un caso concreto requieren cadenas de fuente verificadas y registros electorales oficiales."]
    ],
    myths: [
      ["Mito", "Solo importan las noticias falsas de desconocidos."],
      ["Realidad", "La gente suele confiar más en desinformación cuando viene de amistades, grupos, influencers o voces comunitarias familiares."],
      ["Mito", "Las correcciones deshacen automáticamente el daño."],
      ["Realidad", "Las correcciones ayudan, pero el tiempo, la confianza, la repetición y la identidad influyen en si las personas actualizan creencias."]
    ],
    exam: [
      "Define desinformación, propaganda intencional e información maliciosa con ejemplos electorales.",
      "Mapea cómo una afirmación falsa sobre casillas puede viajar de una publicación a un chat y luego a pánico local.",
      "Crea un mensaje de corrección no partidista que no repita innecesariamente la afirmación falsa.",
      "¿Qué fuente oficial revisarías primero y por qué?",
      "Explica por qué la emoción y la identidad aceleran que se comparta.",
      "Diseña una lección de alfabetización mediática para preparatoria."
    ],
    media: [
      ["Mapa de cascada de rumor", "Nodos muestran origen, amplificadores, comunidades, correcciones e incertidumbre persistente."],
      ["Embudo de verificación", "Fuente, evidencia, fecha, confirmación oficial, acción solicitada y decisión de compartir o no."],
      ["Cartel de prevención", "Guía visual: pausar, revisar fuente, revisar contexto, revisar fuente oficial y decidir."]
    ],
    storyboard: [
      ["Escena 1", "Una captura engañosa aparece en un chat privado."],
      ["Escena 2", "La afirmación salta a influencers y grupos locales."],
      ["Escena 3", "Una estrategia de corrección usa fuentes oficiales y mensajeros confiables."]
    ],
    mind: [
      ["Desinformación electoral", "Proceso central: afirmación, canal, audiencia, emoción y acción.", [["proof", "evidencia"], ["media", "cascada"]]],
      ["Tipos de afirmación", "Hechos falsos, contexto engañoso, suplantación, medios con IA y confusión de procedimientos.", [["clinic", "diagnosticar"], ["exam", "practicar"]]],
      ["Motores de difusión", "Emoción, identidad, velocidad, repetición e incentivos de plataforma.", [["media", "mapa"], ["teach", "lección"]]],
      ["Verificación", "Fuente oficial, fecha, evidencia original, búsqueda inversa y autoridad local.", [["proof", "fuentes"], ["tools", "notas"]]],
      ["Respuesta cívica", "Prevención, mensajeros confiables, diseño de corrección y resiliencia.", [["teach", "actividad"], ["exam", "simular"]]]
    ],
    lesson: "Realiza un laboratorio de verificación. Estudiantes reciben tres publicaciones: una falsa, una engañosa y una legítima pero incompleta. Deben clasificar, verificar, corregir y explicar su razonamiento.",
    sources: "Registro demo de fuentes: recursos de CISA sobre seguridad electoral y desinformación; avisos públicos FBI/CISA; procedimientos oficiales de oficinas electorales; investigación académica sobre difusión de rumores y diseño de correcciones; datos de transparencia de plataformas cuando existan."
  },
  "healthcare-ai": {
    title: "IA en salud: promesa, riesgo, sesgo y regulación",
    source: "Paquete de fuentes: ética y gobernanza de IA para salud de la OMS, guía de la OMS sobre modelos multimodales grandes, recursos de dispositivos médicos con IA/ML de la FDA, marco NIST AI Risk Management Framework y literatura de validación clínica. Nota demo: la versión final adjuntaría citas por caso clínico.",
    answer: "La IA en salud promete ayudar con triaje, resúmenes, detección de patrones, apoyo en imagenología y acceso. Pero es peligrosa si se trata como reemplazo del personal médico. Los temas centrales son validación, sesgo, privacidad, responsabilidad, explicabilidad, integración al flujo clínico y si el personal puede cuestionar el sistema.",
    explain: "La IA en salud es un problema de apoyo a decisiones de alto riesgo. La promesa es documentación más rápida, mejor detección de patrones, soporte personalizado y acceso en lugares desatendidos. El riesgo es que datos sesgados, explicaciones inventadas, sesgo de automatización, filtración de privacidad y validación débil dañen pacientes. Un despliegue serio pregunta: qué tarea clínica, qué evidencia, qué población, qué supervisión, qué modo de falla y quién responde.",
    core: "La IA en salud debe juzgarse por tarea clínica, evidencia, riesgo, flujo de trabajo, equidad y responsabilidad.",
    example: "Un hospital quiere una herramienta de IA para alertar riesgo de sepsis. LearnBridge separa desempeño del modelo de utilidad clínica: sensibilidad, falsas alarmas, sesgo por subgrupos, carga de trabajo, anulación clínica, monitoreo, privacidad y comunicación con pacientes.",
    os: [
      ["CASO DE USO CLÍNICO", "Define si la IA sirve para administración, triaje, apoyo diagnóstico, educación del paciente o investigación."],
      ["REGISTRO DE RIESGOS", "Mapea sesgo, privacidad, alucinación, sesgo de automatización, responsabilidad y brechas de validación."],
      ["RÚBRICA DE DESPLIEGUE", "Exporta lista de verificación para evidencia, monitoreo, supervisión clínica y seguridad del paciente."]
    ],
    clinic: [
      ["Lo que entendiste", "Separaste promesa de riesgo de despliegue y evitaste la idea ingenua de que la IA simplemente reemplaza al personal clínico."],
      ["Brecha probable", "El punto débil es la validación: un modelo puede rendir bien en una prueba y fallar en un hospital real o en un subgrupo."],
      ["Corrección", "Pregunta qué decisión influye la IA, qué evidencia la respalda, quién puede anularla y qué ocurre si se equivoca."]
    ],
    proof: [
      ["Afirmación", "La IA en salud debe adoptarse solo con validación específica de tarea, supervisión humana, monitoreo de sesgos y responsabilidad clara."],
      ["Evidencia necesaria", "Ensayo clínico o validación real, desempeño por subgrupos, evaluación de privacidad, estado regulatorio, estudio de flujo de trabajo y monitoreo de eventos adversos."],
      ["Confianza", "Alta en principios de gobernanza; afirmaciones sobre productos requieren documentación, evidencia revisada por pares y evaluación regulatoria."]
    ],
    myths: [
      ["Mito", "Si un modelo de IA es preciso en promedio, es seguro para todos."],
      ["Realidad", "El promedio puede ocultar fallas por edad, sexo, raza, idioma, discapacidad, geografía o prevalencia de enfermedad."],
      ["Mito", "Un chatbot puede reemplazar el juicio médico."],
      ["Realidad", "En atención de alto riesgo, la IA debe apoyar a profesionales calificados, no reemplazar responsabilidad, exploración o protocolos de emergencia."]
    ],
    exam: [
      "Nombra tres usos de IA en salud y ordénalos por riesgo.",
      "Explica el sesgo de automatización con un ejemplo clínico.",
      "¿Qué evidencia exigirías antes de desplegar una alerta de sepsis con IA?",
      "¿Cómo puede aparecer sesgo aunque las personas desarrolladoras no busquen discriminar?",
      "Diseña una lista de seguridad para una herramienta hospitalaria de IA.",
      "Explica la diferencia entre IA administrativa e IA diagnóstica."
    ],
    media: [
      ["Diagrama de flujo clínico", "Datos del paciente entran al modelo, la alerta llega al personal, se verifica y se monitorea el resultado."],
      ["Mapa de calor de riesgos", "Sesgo, privacidad, alucinación, responsabilidad, validación, ciberseguridad y carga de trabajo."],
      ["Escalera de evidencia", "Prototipo, validación retrospectiva, estudio prospectivo, monitoreo real y revisión regulatoria."]
    ],
    storyboard: [
      ["Escena 1", "Una médica recibe una alerta de IA y pregunta qué evidencia la respalda."],
      ["Escena 2", "El tablero revela desempeño por subgrupos e incertidumbre."],
      ["Escena 3", "El comité hospitalario decide reglas de despliegue y monitoreo."]
    ],
    mind: [
      ["IA en salud", "Pregunta central: apoyo útil de decisión o automatización insegura.", [["proof", "evidencia"], ["media", "flujo"]]],
      ["Promesa", "Triaje, apoyo en imagen, documentación, educación del paciente e investigación.", [["teach", "clase"], ["exam", "ejemplos"]]],
      ["Riesgos", "Sesgo, alucinación, privacidad, automatización, responsabilidad y ciberseguridad.", [["proof", "riesgo"], ["clinic", "brechas"]]],
      ["Validación", "Tarea, población, subgrupos, flujo de trabajo y monitoreo.", [["proof", "fuentes"], ["tools", "lista"]]],
      ["Gobernanza", "Supervisión humana, transparencia, consentimiento, responsabilidad y regulación.", [["teach", "rúbrica"], ["media", "mapa"]]]
    ],
    lesson: "Realiza una simulación de comité ético hospitalario. Equipos representan pacientes, clínica, ciencia de datos, regulación y administración. Deben aprobar, rechazar o modificar un plan de despliegue de IA.",
    sources: "Registro demo de fuentes: principios de ética de IA en salud de la OMS; guía OMS sobre modelos multimodales grandes; recursos FDA para dispositivos médicos con IA/ML; NIST AI Risk Management Framework; estudios clínicos revisados por pares requeridos para afirmaciones de producto."
  }
};

function localizedScenario(scenario) {
  if (!isSpanish()) return scenario;
  return {...scenario, ...(demoScenarioSpanish[scenario.id] || {})};
}

const text = {
  Spanish: {
    titlePrefix: "Ruta de aprendizaje para",
    explain: (topic, level, profile) => `Imagina que ${topic} no es una definición para memorizar, sino un sistema que puedes observar. Para una persona de nivel ${level.toLowerCase()} con perfil ${profile.toLowerCase()}, lo importante es separar tres cosas: qué está pasando, por qué pasa y cómo lo notarías en la vida real. Primero identifica la idea central, después mira sus causas, y al final prueba si puedes explicarla con un ejemplo propio.`,
    pears: (topic) => `Idea central: ${topic} debe quedar reducido a una relación clara entre partes, cambios y resultado. Si puedes decir qué cambia, por qué cambia y cómo comprobarlo, ya tienes una base real para aprenderlo.`,
    local: (topic, place, profile) => `Ejemplo práctico en ${place}: si fueras ${profile.toLowerCase()}, explicarías ${topic} usando algo cercano: precios del mercado, clima del barrio, transporte, una receta, una cosecha, una venta o una clase. La meta es que el concepto deje de vivir en un libro y aparezca en una escena cotidiana.`,
    understood: "Lo que probablemente entendiste",
    gap: "Hueco o confusión probable",
    correction: "Corrección simple",
    evidence: "Evidencia y defensa",
    exam: "Pregunta de examen",
    lesson: "Plan de clase"
  },
  English: {
    titlePrefix: "Learning path for",
    explain: (topic, level, profile) => `Imagine ${topic} as something you can inspect, not a definition to memorize. For a ${level.toLowerCase()} ${profile.toLowerCase()}, the important move is to separate three layers: what is happening, why it happens, and how you would notice it in real life. Start with the core idea, then trace causes, then test whether you can explain it with your own example.`,
    pears: (topic) => `In apples-and-oranges terms: ${topic} is like sorting a basket. Saying "there is fruit" is not enough; you identify the pieces, what changes, and what pattern repeats. Understanding means arranging the basket so another person can see what you see.`,
    local: (topic, place, profile) => `Local example in ${place}: as a ${profile.toLowerCase()}, you would explain ${topic} through something nearby: market prices, local weather, transport, a recipe, a harvest, a sale, or a lesson. The goal is to move the concept out of a textbook and into a concrete scene.`,
    understood: "What you probably understood",
    gap: "Likely gap or misconception",
    correction: "Simple correction",
    evidence: "Evidence and defense",
    exam: "Exam question",
    lesson: "Lesson plan"
  }
};

const uiText = {
  Spanish: {
    state: "Listo",
    ribbon: "Idioma de trabajo",
    headline: "De la duda al dominio: entiende, practica, guarda y enseña.",
    intro: "LearnBridge convierte una pregunta, archivo o meta en un espacio completo de aprendizaje: comprensión, multimedia, chat, práctica, notas, planeación y enseñanza.",
    sample: "Cargar ejemplo",
    run: "Crear ruta de aprendizaje",
    reset: "Limpiar",
    topic: "Tema o pregunta",
    material: "Tipo de material",
    source: "Libro, autor o notas fuente",
    upload: "Subir archivo local de lectura",
    noFile: "Ningún archivo cargado.",
    answer: "Explícalo con tus propias palabras",
    local: "Contexto local",
    level: "Nivel",
    profile: "Perfil",
    language: "Idioma",
    tabs: ["Entender", "Niño", "Diagnóstico", "Prueba", "Examen", "Enseñar", "Visuales", "Jugar", "Herramientas", "Plan"],
    modules: ["Comprensión adaptable", "Modo niño", "Diagnóstico integrado", "Prueba y evidencia", "Simulador de examen con memoria", "Profesor en caja", "Visuales integrados", "Zona de juego", "Espacio de estudio", "Planificador"],
    topEyebrow: "Concepto OpenAI Build Week · Educación",
    stateTitle: "Estado de aprendizaje",
    heroSubtitle: "Tu puente entre preguntar, comprender, practicar y enseñar.",
    heroBadges: ["Voz", "Mapas", "Fuentes", "Notas", "Modo niño"],
    heroOrbit: ["Entiende", "Practica", "Enseña"],
    startHere: "Empieza aquí",
    startQuestion: "¿Qué quieres aprender, entender, practicar o enseñar hoy?",
    quickPlaceholder: "Ejemplo: transición energética, desinformación electoral, IA en salud o preparar un examen de física...",
    quickStart: "Iniciar sesión de aprendizaje",
    winningDemo: "Cargar demo",
    demoTopic: "Tema demo",
    exportPack: "Exportar paquete",
    sharePack: "Compartir enlace",
    promptSuggestions: [
      ["Energía", "Explícame la transición energética con red eléctrica, almacenamiento, nuclear, fuentes y mapa visual."],
      ["Desinformación", "Explícame cómo se propaga la desinformación electoral con verificación de fuentes y actividad de clase."],
      ["IA en salud", "Explícame la IA en salud: promesa, riesgo, sesgo, regulación y un marco para enseñarlo."]
    ],
    showcase: [
      ["Aprende desde una sola pregunta", "La app convierte cualquier tema, libro, archivo o meta en una ruta completa con fuentes, voz, mapas y práctica."],
      ["Comprueba comprensión", "No solo resume: pregunta, detecta huecos, contrasta mitos y exige explicar con palabras propias."],
      ["Produce material reusable", "Notas, dibujos, calculadora, calendario, clase final y paquete exportable viven dentro del proyecto."],
      ["Voz accesible", "Escucha cada bloque, ajusta voz, acento, tono, velocidad y entonación, y estudia sin depender solo de la pantalla."]
    ],
    competitiveEyebrow: "Ventaja para jurado",
    competitiveTitle: "Lo que LearnBridge hace distinto",
    competitiveBody: "No compite como otro generador de flashcards: convierte cualquier tema en un proyecto verificable, practicable, narrable y enseñable.",
    competitiveCards: [
      ["Comprensión primero", "Diagnostica qué entendiste antes de avanzar."],
      ["Aprender para enseñar", "Convierte el estudio en clase, rúbrica o taller."],
      ["Perfiles reales", "Cambia profundidad, interfaz y herramientas por usuario."],
      ["Radar de mitos", "Contrasta evidencia, rumores, exageraciones y medias verdades."],
      ["Mapa editable", "Nodos interactivos para explorar, practicar y verificar."],
      ["Workspace persistente", "Notas, dibujos, agenda, calculadoras e historial por proyecto."],
      ["Multimodal", "Texto, voz, visuales, práctica, examen y paquete compartible."]
    ],
    maturityCards: [
      ["Fuentes", "Registro de fuentes, etiquetas de evidencia, contraste de mitos e historial exportable."],
      ["Audio", "Narración por voz, chat dictable y controles de accesibilidad."],
      ["Práctica", "Memoria de examen, ejercicios tipo flashcard y verificación por explicación final."],
      ["Resolver rápido", "Respuesta breve primero; después prueba, mapa, práctica y paquete de clase."]
    ],
    demoEyebrow: "Demo para jurado",
    demoTitle: "Recorrido guiado de 90 segundos",
    demoIntro: "Carga la demo, avanza por los módulos clave y muestra por qué LearnBridge es más que una respuesta generada.",
    guidedDemo: "Iniciar demo guiada",
    nextDemoStep: "Siguiente paso",
    demoSteps: [
      ["Entrada", "Una sola meta abre un espacio persistente de aprendizaje con perfil, archivo, notas e idioma."],
      ["Comprensión", "LearnBridge explica, adapta el nivel y pide que el usuario demuestre lo que entendió."],
      ["Prueba", "El sistema separa evidencia, inferencias, mitos, fuentes y puntos débiles."],
      ["Media", "Convierte el tema en mapa mental, visuales, storyboard y rutas de profundización."],
      ["Enseñar", "Exporta una clase, examen, notas y paquete compartible para enseñar a otros."]
    ],
    help: "Ayuda",
    close: "Cerrar",
    helpTitle: "Cómo usar LearnBridge",
    helpEyebrow: "Manual rápido",
    helpSteps: [
      ["1. Elige idioma", "Selecciona Español o Inglés arriba. Toda la interfaz y las respuestas de la demo se adaptan a ese idioma."],
      ["2. Escribe tu meta", "Pregunta un tema, pega una consigna, carga un libro o describe qué quieres aprender, practicar o enseñar."],
      ["3. Ajusta el perfil", "Elige si eres niño, usuario general, universitario, profesor, técnico u otro perfil. La app cambia enfoque, herramientas y profundidad."],
      ["4. Crea la ruta", "Pulsa Crear ruta de aprendizaje. Verás explicación, clínica de comprensión, fuentes, mitos, examen, multimedia, notas y plan de enseñanza."],
      ["5. Guarda o comparte", "Toma notas, dibuja, usa calculadora o temporizador, exporta el paquete o crea un enlace para compartir el resultado."]
    ],
    pitchEyebrow: "Pitch Devpost",
    pitchTitle: "Un sistema operativo de aprendizaje, no otro chatbot de tareas.",
    pitchBody: "LearnBridge convierte una pregunta, libro, archivo o meta en un espacio persistente para entender, diagnosticar, practicar, comprobar, guardar, planear y enseñar.",
    pitchCards: [
      ["Problema", "La gente recibe respuestas, pero no siempre entiende, recuerda, demuestra ni puede enseñar lo aprendido."],
      ["Solución", "Una ruta completa con fuentes, comprensión, notas, visuales, examen, calendario y paquete exportable."],
      ["GPT + Codex", "GPT adapta la explicación y Codex arma la experiencia runnable, el flujo, la interfaz y la demo."]
    ],
    defense: [
      ["No solo respuestas", "Convierte un tema en un espacio reutilizable con memoria, notas, multimedia, práctica y explicación final."],
      ["Adaptado por rol", "Niño, adulto casual, estudiante, profesor, académico, técnico, negocio, creativo y casa trabajan distinto."],
      ["Primero comprensión", "Diagnostica lo que el usuario entendió, detecta malentendidos y pide probar o enseñar la idea."],
      ["Fuente + usuario", "Combina archivos cargados con notas, dibujos, temporizador, recordatorios y repositorio de proyectos."],
      ["Voz accesible", "Permite escuchar cada bloque con un icono y ajustar voz, acento, tono, velocidad y entonación."]
    ],
    userLabel: "Usuario local",
    passwordLabel: "Contraseña",
    openWorkspace: "Abrir espacio",
    accountNote: "Cuenta local de demo. La versión final debe usar autenticación segura.",
    coreIdea: "Idea central",
    practicalExample: "Ejemplo práctico",
    adaptivePill: "Adaptativo"
  },
  English: {
    state: "Ready",
    ribbon: "Work language",
    headline: "From question to mastery: understand, practice, save, and teach.",
    intro: "LearnBridge turns one question, file, or goal into a complete learning workspace: comprehension, multimedia, chat, practice, notes, planning, and teaching.",
    sample: "Load sample",
    run: "Build learning path",
    reset: "Reset",
    topic: "Topic or question",
    material: "Material type",
    source: "Book, author, or source notes",
    upload: "Upload local reading file",
    noFile: "No file loaded.",
    answer: "Explain it back in your own words",
    local: "Local context",
    level: "Level",
    profile: "Learner profile",
    language: "Language",
    tabs: ["Understand", "Kid", "Diagnosis", "Proof", "Exam", "Teach", "Visuals", "Play", "Tools", "Planner"],
    modules: ["Adaptive Understanding", "Kid Mode", "Integrated Diagnosis", "Proof and Evidence", "Exam Simulator With Memory", "Teacher in a Box", "Inline Visuals", "Learning Playground", "Study Workspace", "Learning Planner"]
    ,
    topEyebrow: "OpenAI Build Week Concept · Education",
    stateTitle: "Learning state",
    heroSubtitle: "Your bridge from asking to understanding, practicing, and teaching.",
    heroBadges: ["Voice", "Maps", "Sources", "Notes", "Child mode"],
    heroOrbit: ["Understand", "Practice", "Teach"],
    startHere: "Start here",
    startQuestion: "What do you want to learn, understand, practice, or teach today?",
    quickPlaceholder: "Example: energy transition, election misinformation, AI in healthcare, or a physics exam plan...",
    quickStart: "Start learning session",
    winningDemo: "Load demo",
    demoTopic: "Demo topic",
    exportPack: "Export pack",
    sharePack: "Share link",
    promptSuggestions: [
      ["Energy", "Explain the energy transition with grid, storage, nuclear, sources, and a visual map."],
      ["Misinformation", "Explain how misinformation spreads during elections with source checks and a classroom activity."],
      ["Healthcare AI", "Explain AI in healthcare: promise, risk, bias, regulation, and a teachable framework."]
    ],
    showcase: [
      ["Learn from one question", "The app turns any topic, book, file, or goal into a complete path with sources, voice, maps, and practice."],
      ["Prove comprehension", "It does not only summarize: it asks, finds gaps, contrasts myths, and requires teach-back in the learner's words."],
      ["Create reusable material", "Notes, sketches, calculator, calendar, final lesson, and exportable pack live inside the project."],
      ["Accessible voice", "Listen to each block, adjust voice, accent, tone, speed, and pitch, and study without relying only on the screen."]
    ],
    competitiveEyebrow: "Jury advantage",
    competitiveTitle: "What LearnBridge does differently",
    competitiveBody: "It does not compete as another flashcard generator: it turns any topic into a verifiable, practicable, narratable, and teachable project.",
    competitiveCards: [
      ["Comprehension first", "Diagnoses what the learner understood before moving forward."],
      ["Learn to teach", "Turns study into a lesson, rubric, briefing, or workshop."],
      ["Real user profiles", "Changes depth, interface, and tools by learner role."],
      ["Myth radar", "Contrasts evidence, rumors, exaggerations, and half-truths."],
      ["Editable mind map", "Interactive nodes for deeper study, practice, and verification."],
      ["Persistent workspace", "Notes, sketches, agenda, calculators, and project history."],
      ["Multimodal", "Text, voice, visuals, practice, exams, and a shareable pack."]
    ],
    maturityCards: [
      ["Sources", "Source ledger, evidence labels, myth contrast, and export history."],
      ["Audio", "Voice narration, dictation-ready chat, and accessibility controls."],
      ["Practice", "Exam memory, flashcard-style drills, and teach-back checks."],
      ["Fast solve", "Quick answer first; then proof, map, practice, and lesson pack."]
    ],
    demoEyebrow: "Jury demo",
    demoTitle: "90-second guided walkthrough",
    demoIntro: "Load the demo, move through the key modules, and show why LearnBridge is more than a generated answer.",
    guidedDemo: "Start guided demo",
    nextDemoStep: "Next step",
    demoSteps: [
      ["Input", "One goal opens a persistent learning workspace with profile, file, notes, and language."],
      ["Understanding", "LearnBridge explains, adapts depth, and asks the learner to prove what they understood."],
      ["Proof", "The system separates evidence, inferences, myths, sources, and weak points."],
      ["Media", "It turns the topic into a mind map, visuals, storyboard, and deeper-study routes."],
      ["Teach", "It exports a lesson, exam, notes, and shareable pack to teach others."]
    ],
    help: "Help",
    close: "Close",
    pitchEyebrow: "Devpost pitch",
    pitchTitle: "A learning operating system, not another homework chatbot.",
    pitchBody: "LearnBridge turns a question, book, file, or goal into a persistent space to understand, diagnose, practice, verify, save, plan, and teach.",
    pitchCards: [
      ["Problem", "People receive answers, but they do not always understand, remember, prove, or teach what they learned."],
      ["Solution", "A complete path with sources, comprehension, notes, visuals, exam, calendar, and exportable pack."],
      ["GPT + Codex", "GPT adapts the explanation while Codex builds the runnable experience, flow, interface, and demo."]
    ],
    defense: [
      ["Not just answers", "Turns a topic into a reusable workspace with memory, notes, multimedia, practice, and final explanation."],
      ["Role-adaptive", "Child, casual adult, student, teacher, academic, technical, business, creative, and home modes behave differently."],
      ["Comprehension first", "Diagnoses what the user understood, detects misconceptions, and asks them to prove or teach the idea."],
      ["Source + user", "Combines uploaded files with notes, sketches, timer, reminders, and a project repository."],
      ["Accessible voice", "Lets users play each block from an icon and adjust voice, accent, tone, speed, and pitch."]
    ],
    userLabel: "Local user",
    passwordLabel: "Password",
    openWorkspace: "Open workspace",
    accountNote: "Local demo account. The final version should use secure authentication.",
    coreIdea: "Core idea",
    practicalExample: "Practical example",
    adaptivePill: "Adaptive",
    helpTitle: "How to use LearnBridge",
    helpEyebrow: "Quick manual",
    helpSteps: [
      ["1. Choose language", "Pick Spanish or English at the top. The interface and demo responses follow that working language."],
      ["2. Enter your goal", "Ask a topic, paste an assignment, upload a book, or describe what you want to learn, practice, or teach."],
      ["3. Set the profile", "Choose child, general learner, university, teacher, technical, or another profile. The app changes focus, tools, and depth."],
      ["4. Build the path", "Click Build learning path. You get explanation, comprehension clinic, sources, myth check, exam, media, notes, and teaching plan."],
      ["5. Save or share", "Take notes, draw, use calculator or timer, export the pack, or create a link to share the result."]
    ]
  }
};

function audienceDetails(level = levelSelect.value, profile = profileSelect.value) {
  if (profile.includes("Child")) {
    return {
      key: "child",
      title: say("Modo niño", "Child mode"),
      focus: say("Pasos cortos, dibujo primero, misiones de juego y una idea a la vez.", "Short steps, drawing first, playful missions, and one idea at a time."),
      output: say("cuento simple + dibujo + mini quiz", "simple story + drawing prompt + tiny quiz"),
      tools: isSpanish() ? ["bloc grande de dibujo", "juego de quiz", "ejemplos visuales"] : ["big sketch pad", "quiz game", "visual examples"]
    };
  }
  if (profile.includes("Technical")) {
    return {
      key: "technical",
      title: say("Modo técnico", "Technical mode"),
      focus: say("Definiciones precisas, fórmulas, pasos listos para código, diagramas y práctica con calculadora.", "Precise definitions, formulas, code-ready steps, diagrams, and calculator-supported practice."),
      output: say("especificación + ejemplo resuelto + verificación", "specification + worked example + verification checks"),
      tools: isSpanish() ? ["calculadora", "panel de fórmulas", "lista de verificación"] : ["calculator", "formula board", "debug checklist"]
    };
  }
  if (profile.includes("Teacher")) {
    return {
      key: "teacher",
      title: say("Modo profesor", "Teacher mode"),
      focus: say("Objetivos de clase, actividades, rúbrica, revisión de malentendidos y materiales para enseñar.", "Lesson objectives, classroom activities, rubric, misconception checks, and teach-back materials."),
      output: say("plan de clase + actividad + rúbrica", "class plan + activity + assessment rubric"),
      tools: isSpanish() ? ["constructor de clase", "rúbrica", "planificador"] : ["lesson builder", "rubric", "planner"]
    };
  }
  if (profile.includes("Academic") || profile.includes("University") || profile.includes("Postgraduate")) {
    return {
      key: "academic",
      title: say("Modo académico", "Academic mode"),
      focus: say("Tesis, supuestos, citas por adjuntar, estructura argumental y límites de investigación.", "Thesis, assumptions, citations to attach later, argument structure, and research-level limitations."),
      output: say("mapa argumental + evidencia necesaria + preguntas de seminario", "argument map + evidence needs + seminar questions"),
      tools: isSpanish() ? ["notas de prueba", "mapa de fuentes", "examen profundo"] : ["proof notes", "source map", "deep exam"]
    };
  }
  if (profile.includes("Business")) {
    return {
      key: "business",
      title: say("Modo negocio", "Business mode"),
      focus: say("Decisiones, riesgos, implicaciones de mercado, pasos de acción y resumen ejecutivo.", "Decisions, risks, market implications, action steps, and executive summaries."),
      output: say("brief de decisión + tabla de riesgos + siguientes pasos", "decision brief + risk table + next actions"),
      tools: isSpanish() ? ["planificador", "resumen", "escenarios"] : ["planner", "summary", "scenario cards"]
    };
  }
  if (profile.includes("Creative")) {
    return {
      key: "creative",
      title: say("Modo creativo / comunicador", "Creative / communicator mode"),
      focus: say("Historias, ejemplos, metáforas, estructura de presentación y ganchos visuales memorables.", "Stories, examples, metaphors, presentation structure, and memorable visual hooks."),
      output: say("brief narrativo + guion visual + gancho para audiencia", "narrative brief + visual script + audience hook"),
      tools: isSpanish() ? ["storyboard", "paquete multimedia", "explicación final"] : ["storyboard", "media pack", "teach-back"]
    };
  }
  if (profile.includes("Home")) {
    return {
      key: "home",
      title: say("Modo casa / vida diaria", "Home / daily life mode"),
      focus: say("Pasos prácticos, recetas, listas, recordatorios y explicaciones fáciles para uso familiar.", "Practical steps, recipes, checklists, reminders, and easy explanations for family use."),
      output: say("lista de pasos + recordatorio + checklist práctico", "step list + reminder + practical checklist"),
      tools: isSpanish() ? ["agenda", "notas", "pasos visuales"] : ["agenda", "notes", "visual steps"]
    };
  }
  if (profile.includes("Curious") || profile.includes("General") || level.includes("Adult")) {
    return {
      key: "casual",
      title: say("Modo adulto curioso", "Curious adult mode"),
      focus: say("Información general clara sin jerga escolar: qué es, por qué importa y cómo usarlo.", "Clear general information without school jargon: what it is, why it matters, and how to use it."),
      output: say("explicación clara + ideas clave + preguntas útiles", "plain explanation + key takeaways + useful questions"),
      tools: isSpanish() ? ["chat", "notas", "resumen visual"] : ["chat", "notes", "visual summary"]
    };
  }
  return {
    key: "student",
    title: say("Modo estudiante", "Student mode"),
    focus: say("Entender el concepto, practicarlo, preparar exámenes y conservar notas personales.", "Understand the concept, practice it, prepare for exams, and keep personal notes."),
    output: say("ruta de estudio + preguntas de práctica + repaso con memoria", "study path + practice questions + memory review"),
    tools: isSpanish() ? ["simulador de examen", "notas", "temporizador"] : ["exam simulator", "notes", "timer"]
  };
}

function levelForProfile(profile) {
  if (profile.includes("Child")) return "Child";
  if (profile.includes("Student")) return "High school";
  if (profile.includes("University")) return "University";
  if (profile.includes("Academic") || profile.includes("Postgraduate")) return "Postgraduate";
  if (profile.includes("Technical")) return "University";
  if (profile.includes("Teacher")) return "University";
  return "Adult / casual learner";
}

function translatedProfileLabel(profile) {
  const labels = isSpanish() ? {
    "Child learner": "Niño",
    "General learner": "Usuario general",
    "Curious adult / general information": "Adulto curioso / información general",
    Student: "Estudiante",
    "University student": "Universitario",
    "Postgraduate / researcher": "Posgrado / investigador",
    "Teacher / instructor": "Profesor / instructor",
    "Academic / researcher": "Académico / investigador",
    "Business owner": "Empresario",
    "Technical professional": "Profesional técnico",
    "Creative / communicator": "Creativo / comunicador",
    "Home / everyday learner": "Casa / vida diaria"
  } : {
    "Child learner": "Child learner",
    "General learner": "General learner",
    "Curious adult / general information": "Curious adult / general information",
    Student: "Student",
    "University student": "University student",
    "Postgraduate / researcher": "Postgraduate / researcher",
    "Teacher / instructor": "Teacher / instructor",
    "Academic / researcher": "Academic / researcher",
    "Business owner": "Business owner",
    "Technical professional": "Technical professional",
    "Creative / communicator": "Creative / communicator",
    "Home / everyday learner": "Home / everyday learner"
  };
  return labels[profile] || profile;
}

function translatedLevelLabel(level) {
  const labels = isSpanish() ? {
    Child: "niño",
    "High school": "secundaria / preparatoria",
    "Adult / casual learner": "adulto / consulta general",
    "Beginner adult": "adulto principiante",
    University: "universitario",
    Postgraduate: "posgrado"
  } : {
    Child: "child",
    "High school": "high school",
    "Adult / casual learner": "adult / casual learner",
    "Beginner adult": "beginner adult",
    University: "university",
    Postgraduate: "postgraduate"
  };
  return labels[level] || level;
}

function voiceAvailable() {
  return "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
}

function recognitionAvailable() {
  return "SpeechRecognition" in window || "webkitSpeechRecognition" in window;
}

function populateVoices() {
  if (!voiceAvailable()) {
    voiceSupportStatus.textContent = say("Este navegador no tiene narración integrada.", "This browser does not provide built-in narration.");
    voiceSelect.disabled = true;
    speakPageButton.disabled = true;
    stopSpeechButton.disabled = true;
    return;
  }
  availableVoices = window.speechSynthesis.getVoices();
  const selected = voiceSelect.value;
  const preferredLang = voiceAccentSelect.value || (isSpanish() ? "es-MX" : "en-US");
  const langPrefix = preferredLang.slice(0, 2).toLowerCase();
  const exact = availableVoices.filter((voice) => voice.lang.toLowerCase().startsWith(preferredLang.toLowerCase()));
  const sameLanguage = availableVoices.filter((voice) => voice.lang.toLowerCase().startsWith(langPrefix) && !exact.includes(voice));
  const options = exact.concat(sameLanguage).slice(0, 10);
  voiceSelect.innerHTML = `<option value="">${say("Voz automática", "Automatic voice")}</option>` + options.map((voice) => (
    `<option value="${voice.name}">${voice.name} · ${voice.lang}</option>`
  )).join("");
  if (selected && Array.from(voiceSelect.options).some((option) => option.value === selected)) {
    voiceSelect.value = selected;
  }
  voiceSupportStatus.textContent = say("Configura la voz general. Cada bloque se escucha desde su icono 🔉.", "Set the global voice. Each block plays from its 🔉 icon.");
  voiceInputButton.disabled = !recognitionAvailable();
  if (chatVoiceButton) chatVoiceButton.disabled = !recognitionAvailable();
  if (!recognitionAvailable()) {
    voiceInputButton.title = say("El dictado no está disponible en este navegador.", "Speech input is not available in this browser.");
    if (chatVoiceButton) chatVoiceButton.title = say("Dictado no disponible", "Speech input unavailable");
  }
}

function voiceSettings() {
  const tone = voiceToneSelect.value;
  const baseRate = Number(voiceRateInput.value) || 1;
  const basePitch = Number(voicePitchInput.value) || 1;
  const presets = {
    neutral: { rate: baseRate, pitch: basePitch },
    teacher: { rate: Math.max(0.75, baseRate - 0.08), pitch: basePitch },
    warm: { rate: Math.max(0.75, baseRate - 0.04), pitch: Math.min(1.35, basePitch + 0.08) },
    child: { rate: Math.max(0.8, baseRate - 0.05), pitch: Math.min(1.35, basePitch + 0.18) }
  };
  return presets[tone] || presets.neutral;
}

function selectedVoice() {
  const name = voiceSelect.value;
  const accent = voiceAccentSelect.value;
  return availableVoices.find((voice) => voice.name === name)
    || availableVoices.find((voice) => voice.lang === accent)
    || availableVoices.find((voice) => voice.lang.toLowerCase().startsWith(accent.slice(0, 2).toLowerCase()))
    || null;
}

function clearSpeechState() {
  if (activeSpeechButton) {
    activeSpeechButton.classList.remove("playing", "paused");
  }
  activeSpeechButton = null;
  activeSpeechText = "";
}

function speakText(textToSpeak, triggerButton = null) {
  if (!voiceAvailable()) return;
  const clean = textToSpeak.replace(/\s+/g, " ").trim();
  if (!clean) return;
  if (triggerButton && activeSpeechButton === triggerButton && window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
    window.speechSynthesis.pause();
    triggerButton.classList.add("paused");
    triggerButton.classList.remove("playing");
    return;
  }
  if (triggerButton && activeSpeechButton === triggerButton && window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
    triggerButton.classList.add("playing");
    triggerButton.classList.remove("paused");
    return;
  }
  window.speechSynthesis.cancel();
  clearSpeechState();
  const utterance = new SpeechSynthesisUtterance(clean.slice(0, 4200));
  const settings = voiceSettings();
  utterance.lang = voiceAccentSelect.value || (isSpanish() ? "es-MX" : "en-US");
  utterance.rate = settings.rate;
  utterance.pitch = settings.pitch;
  const voice = selectedVoice();
  if (voice) utterance.voice = voice;
  utterance.onend = clearSpeechState;
  utterance.onerror = clearSpeechState;
  activeSpeechButton = triggerButton;
  activeSpeechText = clean;
  if (triggerButton) triggerButton.classList.add("playing");
  window.speechSynthesis.speak(utterance);
}

function currentNarrationText() {
  const activePanel = document.querySelector(".panel.active:not(#toolsPanel)");
  const title = document.querySelector("#explainTitle")?.textContent || "";
  const explanation = document.querySelector("#plainExplanation")?.textContent || "";
  const panelText = activePanel ? activePanel.textContent : "";
  return [title, explanation, panelText].join(". ");
}

function addSectionListenButtons() {
  document.querySelectorAll(".listen-section-btn").forEach((button) => button.remove());
  document.querySelectorAll(".listen-enabled").forEach((node) => node.classList.remove("listen-enabled"));
  const selectors = [
    "#plainExplanation",
    "#learningOSPanel > article",
    "#sourceLedger > article",
    "#readingMap > div",
    ".panel .card-grid > article",
    "#clinicOutput > article",
    "#proofOutput > article",
    "#examOutput > article",
    "#flashcardDeck .flashcard",
    "#lessonOutput > article",
    "#demoScriptOutput > article",
    "#mediaCards > article",
    "#storyboardOutput > article",
    "#mythCheckOutput > article",
    "#mythCheckOutput .myth-grid > div",
    "#mindMapOutput .mind-node",
    ".planner-card",
    ".tool-card"
  ];
  const blocks = Array.from(document.querySelectorAll(selectors.join(",")));
  const uniqueBlocks = blocks.filter((block) => !blocks.some((other) => other !== block && other.contains(block)));
  uniqueBlocks.forEach((block) => {
    const spokenText = block.textContent.replace(/\s+/g, " ").trim();
    if (spokenText.length < 24 || block.querySelector(":scope > .listen-section-btn")) return;
    block.classList.add("listen-enabled");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "listen-section-btn";
    button.textContent = "🔉";
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      speakText(spokenText, button);
    });
    block.append(button);
  });
}

function normalizedNodeLink(tab, label) {
  if (tab === "clinic") return ["proof", say("diagnóstico", "diagnosis")];
  if (tab === "media") return ["understand", say("visual integrado", "inline visual")];
  return [tab, label];
}

function arrangeIntegratedLearningSections() {
  const understandPanel = document.querySelector("#understandPanel");
  const teachPanel = document.querySelector("#teachPanel");
  const mediaLayout = document.querySelector(".media-layout");
  const mindMapSection = document.querySelector(".mindmap-section");
  if (understandPanel && mediaLayout && !understandPanel.contains(mediaLayout)) {
    mediaLayout.classList.add("integrated-media-section");
    const target = understandPanel.querySelector(".card-grid");
    target?.insertAdjacentElement("afterend", mediaLayout);
  }
  if (teachPanel && mindMapSection && !teachPanel.contains(mindMapSection)) {
    mindMapSection.classList.add("integrated-mindmap-section");
    const target = teachPanel.querySelector("#demoScriptOutput");
    target?.insertAdjacentElement("afterend", mindMapSection);
  }
}

function syncVoiceAccentOptions() {
  const current = voiceAccentSelect.value;
  const options = isSpanish()
    ? [["es-MX", "Español México"], ["es-ES", "Español España"]]
    : [["en-US", "English US"], ["en-GB", "English UK"]];
  voiceAccentSelect.innerHTML = options.map(([value, label]) => `<option value="${value}">${label}</option>`).join("");
  voiceAccentSelect.value = options.some(([value]) => value === current) ? current : options[0][0];
}

function startVoiceInput() {
  if (!recognitionAvailable()) {
    voiceSupportStatus.textContent = say("Dictado no disponible en este navegador.", "Speech input is not available in this browser.");
    return;
  }
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognitionHandle = new Recognition();
  recognitionHandle.lang = voiceAccentSelect.value || (isSpanish() ? "es-MX" : "en-US");
  recognitionHandle.interimResults = false;
  recognitionHandle.maxAlternatives = 1;
  recognitionHandle.onstart = () => {
    voiceInputButton.textContent = say("Escuchando...", "Listening...");
    if (chatVoiceButton) chatVoiceButton.textContent = say("Oyendo", "Listening");
  };
  recognitionHandle.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    chatInput.value = chatInput.value ? `${chatInput.value} ${transcript}` : transcript;
    chatPanel.classList.add("open");
    chatInput.focus();
  };
  recognitionHandle.onend = () => {
    voiceInputButton.textContent = say("Dictar al chat", "Dictate to chat");
    if (chatVoiceButton) chatVoiceButton.textContent = say("Voz", "Mic");
  };
  recognitionHandle.start();
}

function renderAudiencePanel() {
  const panel = document.querySelector("#audiencePanel");
  const details = audienceDetails();
  if (panel) {
    panel.innerHTML = `
    <div>
      <span>${say("Espacio actual", "Current workspace")}</span>
      <strong>${details.title}</strong>
      <p>${details.focus}</p>
    </div>
    <div>
      <span>${say("Salida principal", "Primary output")}</span>
      <strong>${details.output}</strong>
      <div class="tag-row">${details.tools.map((tool) => `<span class="tag">${tool}</span>`).join("")}</div>
    </div>
  `;
  }
  const preset = document.querySelector("#modePresetPanel");
  if (preset) {
    preset.innerHTML = `
      <strong>${details.title}</strong>
      <span>${details.focus}</span>
      <em>${details.output}</em>
    `;
  }
}

function sourceProfile(topic, material, source) {
  const hasUpload = /Local upload:/i.test(source);
  const hasNotes = source.trim().length > 80;
  const needsCitation = ["Book", "Article", "Speech"].includes(material);
  const confidence = hasUpload || hasNotes ? say("borrador con fuente", "grounded draft") : needsCitation ? say("requiere paquete de fuentes", "needs source pack") : say("borrador conceptual", "concept draft");
  const next = hasUpload
    ? say("Extraer capítulos, afirmaciones, ejemplos y notas del usuario al espacio de trabajo.", "Extract chapters, claims, examples, and learner notes into the workspace.")
    : needsCitation
      ? say("Adjuntar texto fuente, notas o fragmentos antes de hacer afirmaciones detalladas.", "Attach source text, notes, or excerpts before making detailed claims.")
      : say("Añadir referencias confiables si el resultado se usará públicamente.", "Add trusted references if the output will be used publicly.");
  return {
    title: confidence,
    body: say(`${topic} se maneja como material de tipo ${material.toLowerCase()}. ${next}`, `${topic} is currently handled as ${material.toLowerCase()} material. ${next}`),
    tags: [
      hasUpload ? say("archivo local", "local file") : say("sin archivo", "no file yet"),
      hasNotes ? say("notas fuente", "source notes") : say("requiere notas", "needs notes"),
      needsCitation ? say("sensible a citas", "citation-sensitive") : say("concepto general", "general concept")
    ]
  };
}

function renderLearningOS(topic, material, source, audience, score, weakPoint) {
  const sourceInfo = sourceProfile(topic, material, source);
  const osCards = [
    {
      title: say("Mapa de fuentes", "Source Map"),
      body: sourceInfo.body,
      tag: sourceInfo.title
    },
    {
      title: say("Ciclo de comprensión", "Comprehension Loop"),
      body: say(`El usuario explica con sus palabras, LearnBridge detecta ${weakPoint}, y actualiza práctica, prueba y enseñanza.`, `The learner explains back, LearnBridge detects ${weakPoint}, then updates practice, proof, and teach-back.`),
      tag: say(`${score}% señal`, `${score}% signal`)
    },
    {
      title: say("Paquete por rol", "Role Pack"),
      body: say(`${audience.title} genera ${audience.output}, apoyado por ${audience.tools.join(", ")}.`, `${audience.title} generates ${audience.output}, supported by ${audience.tools.join(", ")}.`),
      tag: audience.key
    },
    {
      title: say("Entregable final", "Final Deliverable"),
      body: say("Exporta un paquete reutilizable de estudio o clase: explicación, notas, plan visual, examen, fuentes y guion de enseñanza.", "Export a reusable study/class pack: explanation, notes, visual plan, exam, evidence ledger, and teaching script."),
      tag: say("portable", "portable")
    }
  ];
  document.querySelector("#learningOSPanel").innerHTML = osCards.map((card) => `
    <article>
      <span>${card.tag}</span>
      <strong>${card.title}</strong>
      <p>${card.body}</p>
    </article>
  `).join("");
  sourceLedger.innerHTML = `
    <article>
      <strong>${say("Registro de fuentes y confianza", "Source and Trust Ledger")}</strong>
      <p>${sourceInfo.body}</p>
      <div class="tag-row">${sourceInfo.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
    </article>
    <article>
      <strong>${say("Fuentes de evidencia", "Evidence Sources")}</strong>
      <p>${say("La versión final debe combinar búsqueda web, documentos subidos, textos de dominio público, material de curso, referencias oficiales y fuentes primarias o revisadas cuando el tema requiera mayor prueba.", "Production mode should combine live web search, uploaded documents, public-domain texts, course material, official references, and peer-reviewed or primary sources when the topic needs stronger proof.")}</p>
      <div class="tag-row"><span class="tag">web</span><span class="tag">${say("archivos", "uploads")}</span><span class="tag">${say("fuentes primarias", "primary sources")}</span></div>
    </article>
    <article>
      <strong>${say("Vista equilibrada", "Balanced View")}</strong>
      <p>${say("En temas políticos, sociales, de salud, finanzas o controversia, LearnBridge debe guardar fuentes a favor, en contra y neutrales en el historial y en el paquete exportado.", "For political, social, health, financial, or controversial topics, LearnBridge should store sources for, against, and neutral/contextual sources in the project history and exported pack.")}</p>
      <div class="tag-row"><span class="tag">${say("a favor", "for")}</span><span class="tag">${say("en contra", "against")}</span><span class="tag">${say("neutral", "neutral")}</span></div>
    </article>
    <article>
      <strong>${say("Defensa contra errores", "Red-Team Guardrail")}</strong>
      <p>${say("No debe fingir que un resumen, cita, receta, fórmula o afirmación histórica está verificada si no viene del paquete de fuentes o de una referencia confiable. La versión final debe marcar cada respuesta como basada en fuente, inferida o pendiente de verificación.", "Do not pretend a summary, citation, recipe, formula, or historical claim is verified unless it came from the attached source pack or a trusted reference. The production app should label every answer as source-grounded, inferred, or needs verification.")}</p>
      <div class="tag-row"><span class="tag">${say("estado de verdad", "truth status")}</span><span class="tag">${say("seguro para derechos", "copyright-safe")}</span><span class="tag">${say("sin falsa certeza", "no fake certainty")}</span></div>
    </article>
  `;
}

function copy() {
  return text[languageSelect.value] || text.English;
}

function isSpanish() {
  return languageSelect.value === "Spanish";
}

function say(es, en) {
  return isSpanish() ? es : en;
}

function inferContext(topic) {
  const patterns = [
    /in ([A-Z][A-Za-z\s]+)/,
    /en ([A-ZÁÉÍÓÚÑ][A-Za-zÁÉÍÓÚÑáéíóúñ\s]+)/,
    /about ([A-Z][A-Za-z\s]+)/,
    /sobre ([A-ZÁÉÍÓÚÑ][A-Za-zÁÉÍÓÚÑáéíóúñ\s]+)/
  ];
  for (const pattern of patterns) {
    const match = topic.match(pattern);
    if (match && match[1]) return match[1].trim();
  }
  return languageSelect.value === "Spanish" ? "el contexto implicito en la pregunta" : "the context implied by the question";
}

function storageKey() {
  return `learnbridge:${activeUser}`;
}

function loadStore() {
  try {
    const raw = localStorage.getItem(storageKey());
    if (raw) return JSON.parse(raw);
  } catch {
    return null;
  }
  return {
    projects: {
      default: {
        id: "default",
        title: say("Proyecto sin título", "Untitled project"),
        topic: "",
        source: "",
        notes: "",
        sketch: "",
        language: "Spanish",
        history: []
      }
    },
    reminders: []
  };
}

function saveStore(store) {
  localStorage.setItem(storageKey(), JSON.stringify(store));
  saveLabel.textContent = say("Guardado", "Saved");
  setTimeout(() => {
    saveLabel.textContent = say("Autoguardado listo", "Autosave ready");
  }, 900);
}

function removeLegacyRomeoDemoProjects(store) {
  Object.keys(store.projects || {}).forEach((id) => {
    const project = store.projects[id] || {};
    const blob = `${project.title || ""} ${project.topic || ""} ${project.source || ""}`;
    if (/Romeo|Juliet|Julieta/i.test(blob)) {
      delete store.projects[id];
    }
  });
}

function currentProject() {
  const store = loadStore();
  return store.projects[activeProjectId] || store.projects.default;
}

function visibleProjectsForLanguage(projects) {
  const currentLanguage = languageSelect.value;
  return Object.values(projects || {}).filter((project) => (
    project.id === activeProjectId ||
    project.id?.startsWith("demo-") ||
    project.language === currentLanguage ||
    (!project.language && project.id === "default" && !(project.topic || project.notes || project.source))
  ));
}

function localizedProjectTitle(project) {
  const scenarioId = project?.id?.replace("demo-", "");
  if (scenarioId && demoScenarios[scenarioId]) {
    return localizedScenario(demoScenarios[scenarioId]).title;
  }
  return project?.title || say("Proyecto sin título", "Untitled project");
}

function persistProject(reason = "updated") {
  const store = loadStore();
  const project = store.projects[activeProjectId] || { id: activeProjectId, history: [] };
  project.title = projectTitleInput.value.trim() || say("Proyecto sin título", "Untitled project");
  project.topic = topicInput.value;
  project.source = sourceInput.value;
  project.answer = answerInput.value;
  project.notes = notesInput.value;
  project.material = materialSelect.value;
  project.language = languageSelect.value;
  project.place = inferContext(project.topic || topicInput.value || "");
  project.level = levelSelect.value;
  project.profile = profileSelect.value;
  project.sourceLedger = sourceLedger?.textContent || "";
  project.mythCheck = mythCheckOutput?.textContent || "";
  project.mindMap = mindMapOutput?.innerHTML || "";
  project.updatedAt = new Date().toISOString();
  project.history = project.history || [];
  project.history.unshift(`${new Date().toLocaleTimeString()} · ${reason}`);
  project.history = project.history.slice(0, 8);
  store.projects[activeProjectId] = project;
  saveStore(store);
  renderProjects();
}

function renderProjects() {
  const store = loadStore();
  const projects = visibleProjectsForLanguage(store.projects);
  projectList.innerHTML = projects.map((project) => `
    <button type="button" class="${project.id === activeProjectId ? "active" : ""}" data-project="${project.id}">
      ${localizedProjectTitle(project)}
    </button>
  `).join("");
  projectList.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => loadProject(button.dataset.project));
  });
  activeProjectName.textContent = localizedProjectTitle(currentProject());
  renderPlanner();
}

function renderPlanner() {
  const store = loadStore();
  const projects = visibleProjectsForLanguage(store.projects || {});
  const reminders = store.reminders || [];
  plannerSummary.textContent = say(`${reminders.length} planes`, `${reminders.length} plans`);
  weeklyLearning.innerHTML = projects.slice(0, 8).map((project) => `
    <div class="learning-item">
      <strong>${localizedProjectTitle(project)}</strong>
      ${say("Tema", "Topic")}: ${project.id?.startsWith("demo-") ? localizedProjectTitle(project) : (project.topic || say("Sin tema todavía", "No topic yet"))}<br>
      ${say("Notas", "Notes")}: ${(project.notes || "").trim() ? say("notas guardadas", "notes saved") : say("sin notas todavía", "no notes yet")}<br>
      ${say("Último", "Last")}: ${(project.history || [say("creado", "created")])[0]}
    </div>
  `).join("") || `<div class="learning-item">${say("Aún no hay registro de aprendizaje. Crea una ruta o guarda notas para empezar.", "No learning record yet. Build a path or save notes to start your route.")}</div>`;

  agendaList.innerHTML = reminders
    .slice()
    .sort((a, b) => `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`))
    .map((reminder) => `
      <div class="agenda-item">
        <strong>${reminder.title}</strong>
        ${reminder.date || say("Sin fecha", "No date")} ${reminder.time || ""}<br>
        ${reminder.note || ""}
      </div>
    `).join("") || `<div class="agenda-item">${say("Aún no hay recordatorios.", "No reminders yet.")}</div>`;

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const days = new Date(year, month + 1, 0).getDate();
  calendarGrid.innerHTML = Array.from({ length: days }, (_, index) => {
    const day = index + 1;
    const iso = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const dayPlans = reminders.filter((item) => item.date === iso);
    return `<div class="calendar-day"><strong>${day}</strong>${dayPlans.map((item) => `<span class="calendar-dot">${item.title.slice(0, 18)}</span>`).join("")}</div>`;
  }).join("");
}

function addReminder() {
  const title = reminderTitleInput.value.trim();
  if (!title) return;
  const store = loadStore();
  store.reminders = store.reminders || [];
  store.reminders.push({
    id: `reminder-${Date.now()}`,
    title,
    date: reminderDateInput.value,
    time: reminderTimeInput.value,
    note: reminderNoteInput.value.trim()
  });
  saveStore(store);
  reminderTitleInput.value = "";
  reminderNoteInput.value = "";
  renderPlanner();
}

function loadProject(id) {
  const store = loadStore();
  const project = store.projects[id];
  if (!project) return;
  if (id.startsWith("demo-")) {
    activeProjectId = id;
    const rawScenario = demoScenarios[id.replace("demo-", "")] || demoScenarios.energy;
    const scenario = localizedScenario(rawScenario);
    projectTitleInput.value = scenario.title;
    topicInput.value = scenario.title;
    sourceInput.value = scenario.source;
    answerInput.value = scenario.answer;
    materialSelect.value = scenario.material;
    profileSelect.value = scenario.profile;
    activeProjectName.textContent = scenario.title;
    applyUiLanguage();
    renderProjects();
    renderScenarioPath(rawScenario);
    renderDemoSketch(scenario);
    restoreSketch(project.sketch || "");
    document.body.classList.add("workspace-started");
    return;
  }
  activeProjectId = id;
  projectTitleInput.value = project.title || "";
  topicInput.value = project.topic || "";
  sourceInput.value = project.source || "";
  answerInput.value = project.answer || "";
  notesInput.value = project.notes || "";
  materialSelect.value = project.material || "Book";
  languageSelect.value = project.language || "Spanish";
    levelSelect.value = project.level || "Beginner adult";
    profileSelect.value = project.profile || (project.level === "Child" ? "Child learner" : "General learner");
  activeProjectName.textContent = project.title || say("Proyecto sin título", "Untitled project");
  applyUiLanguage();
  renderProjects();
  restoreSketch(project.sketch || "");
  if (topicInput.value.trim()) {
    document.body.classList.add("workspace-started");
    buildPath();
  }
}

function newProject() {
  const store = loadStore();
  activeProjectId = `project-${Date.now()}`;
  store.projects[activeProjectId] = {
    id: activeProjectId,
    title: say("Nuevo proyecto de aprendizaje", "New learning project"),
    topic: "",
    source: "",
    notes: "",
    sketch: "",
    history: [`${new Date().toLocaleTimeString()} · ${say("creado", "created")}`]
  };
  saveStore(store);
  loadProject(activeProjectId);
}

function currentUi() {
  return uiText[languageSelect.value] || uiText.English;
}

function renderHelp() {
  const ui = currentUi();
  document.querySelector("#helpEyebrow").textContent = ui.helpEyebrow || "Quick manual";
  document.querySelector("#helpTitle").textContent = ui.helpTitle || "How to use LearnBridge";
  closeHelpButton.textContent = ui.close || "Close";
  const sections = isSpanish() ? [
    ["1. Entrada e idioma", "Arriba eliges Español o Inglés. Ese idioma controla la interfaz, instrucciones, resultados, exportación y guía.", ["Idioma", "Ayuda", "Pregunta inicial"], ["Elige idioma antes de trabajar.", "Escribe tu meta completa en la pregunta inicial.", "Pulsa iniciar para preparar ruta, explicación y módulos."], "understand"],
    ["2. Repositorio del proyecto", "Cada consulta vive como proyecto: nombre, tema, fuente, notas, dibujo, historial, agenda y material exportable.", ["Nuevo", "Nombre", "Historial"], ["Crea carpetas separadas por tema.", "Renombra el proyecto para encontrarlo después.", "Todo se conserva en el espacio local del usuario."], "tools"],
    ["3. Tema, fuente y archivo", "Escribe una pregunta, pega notas o sube un archivo local. Sirve para libros, clases, recetas, temas técnicos y documentos privados.", ["Tema", "Fuente", "Archivo"], ["Sube PDF, Word, TXT, Markdown o EPUB.", "Pega notas de libro para comprensión lectora.", "Incluye región o meta directamente en tu pregunta."], "understand"],
    ["4. Perfil del usuario", "El perfil define profundidad y estilo: niño, usuario general, estudiante, universitario, posgrado, profesor, técnico, negocio, casa o creativo.", ["Perfil", "Modo", "Estilo"], ["Niño activa interfaz infantil y juegos.", "Profesor prioriza clase, rúbrica y actividades.", "Técnico prioriza fórmulas, código, calculadora y verificación."], "understand"],
    ["5. Menú de módulos", "Las pestañas organizan el flujo: Entender explica, Clínica detecta huecos, Prueba contrasta evidencia, Examen practica y Enseñar arma la clase.", ["Entender", "Clínica", "Prueba"], ["Empieza por Entender.", "Usa Clínica después de explicar con tus palabras.", "Usa Prueba para fuentes, mitos, fake news o controversias."], "clinic"],
    ["6. Media y mapa mental", "Aquí aparecen visuales, storyboard, cuadro sinóptico y mapa mental editable. Los nodos sirven para profundizar sin perder el panorama.", ["Visual", "Mapa", "Enlaces"], ["Edita cualquier nodo.", "Pasa el mouse para ver conexiones.", "Usa enlaces del nodo para saltar a práctica, fuentes o enseñanza."], "media"],
    ["7. Herramientas flotantes", "Notas, calculadora básica/científica/financiera, temporizador y bloc de dibujo pueden quedar flotando para trabajar sin salir del tema.", ["Notas", "Calculadora", "Dibujo"], ["Activa Herramientas flotantes.", "Pasa el mouse por la pestaña lateral para desplegar.", "Guarda notas y dibujos mientras estudias o enseñas."], "tools"],
    ["8. Exportar y compartir", "Exportar crea un paquete de estudio/clase. Compartir genera un enlace prototipo para enseñar el resultado y promover la app.", ["Exportar", "Compartir", "Historial"], ["Revisa fuentes y notas antes de exportar.", "Comparte el enlace del proyecto.", "El paquete conserva explicación, mapa, notas, fuentes y práctica."], "teach"]
  ] : [
    ["1. Entry and language", "At the top you choose Spanish or English. That language controls the interface, instructions, outputs, export, and guide.", ["Language", "Help", "Start question"], ["Choose language before working.", "Write your full learning goal.", "Start the session to generate path, explanation, and modules."], "understand"],
    ["2. Project repository", "Each query becomes its own project: name, topic, source, notes, sketch, history, agenda, and exportable material.", ["New", "Name", "History"], ["Create separate folders by topic.", "Rename the project so you can find it later.", "Everything stays in the user's local workspace."], "tools"],
    ["3. Topic, source, and file", "Write a question, paste notes, or upload a local file for books, classes, recipes, technical topics, and private documents.", ["Topic", "Source", "File"], ["Upload PDF, Word, TXT, Markdown, or EPUB.", "Paste book notes for reading comprehension.", "Put region or goal directly in the question."], "understand"],
    ["4. User profile", "The profile defines depth and style: child, general learner, student, university, postgraduate, teacher, technical, business, home, or creative.", ["Profile", "Mode", "Style"], ["Child activates kid interface and games.", "Teacher prioritizes lessons, rubrics, and activities.", "Technical prioritizes formulas, code, calculator, and verification."], "understand"],
    ["5. Module menu", "Tabs organize the flow: Understand explains, Clinic finds gaps, Proof checks evidence, Exam practices, and Teach builds the lesson.", ["Understand", "Clinic", "Proof"], ["Start with Understand.", "Use Clinic after explaining back.", "Use Proof for sources, myths, fake news, or controversies."], "clinic"],
    ["6. Media and mind map", "This area shows visuals, storyboard, synoptic chart, and editable mind map. Nodes help you go deeper without losing the overview.", ["Visual", "Map", "Links"], ["Edit any node.", "Hover to see connections.", "Use node links to jump to practice, sources, or teaching."], "media"],
    ["7. Floating tools", "Notes, basic/scientific/financial calculator, timer, and sketch pad can float so you work without leaving the topic.", ["Notes", "Calculator", "Sketch"], ["Turn on Float tools.", "Hover the side tab to expand it.", "Save notes and sketches while studying or teaching."], "tools"],
    ["8. Export and share", "Export creates a study/class pack. Share creates a prototype link to teach the result and promote the app.", ["Export", "Share", "History"], ["Review sources and notes before exporting.", "Share the project link.", "The pack keeps explanation, map, notes, sources, and practice."], "teach"]
  ];
  helpContent.innerHTML = sections.map(([title, body, labels, steps, jump], index) => `
    <details class="help-section" ${index < 2 ? "open" : ""}>
      <summary>${title}</summary>
      <div class="help-section-body">
        <div class="help-shot" aria-hidden="true">
          ${labels.map((label, i) => `<span class="help-callout c${i + 1}">${label}</span>`).join("")}
        </div>
        <div>
          <p>${body}</p>
          <ol>${steps.map((step) => `<li>${step}</li>`).join("")}</ol>
          <button class="help-jump" type="button" data-help-jump="${jump}">${say("Ir a esta sección", "Go to this section")}</button>
        </div>
      </div>
    </details>
  `).join("");
}

function setText(selector, es, en) {
  const element = document.querySelector(selector);
  if (element) element.textContent = say(es, en);
}

function setLabelLead(label, es, en) {
  if (!label) return;
  const firstText = Array.from(label.childNodes).find((node) => node.nodeType === Node.TEXT_NODE);
  if (firstText) {
    firstText.nodeValue = `${say(es, en)} `;
  }
}

function setOptionLabels(select, labels) {
  Array.from(select.options).forEach((option) => {
    if (labels[option.value] || labels[option.textContent]) {
      option.textContent = labels[option.value] || labels[option.textContent];
    }
  });
}

function replaceTextIn(root, pairs) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    let value = node.nodeValue;
    pairs.forEach(([from, to]) => {
      value = value.replaceAll(from, to);
    });
    node.nodeValue = value;
  });
}

function localizeGeneratedOutput() {
  const results = document.querySelector(".results");
  if (!results) return;
  if (isSpanish()) {
    replaceTextIn(results, [
      ["Reading comprehension mode", "Modo comprensión lectora"],
      ["Source Map", "Mapa de fuentes"],
      ["Comprehension Loop", "Ciclo de comprensión"],
      ["Role Pack", "Paquete por rol"],
      ["Final Deliverable", "Entregable final"],
      ["The learner explains back", "El usuario explica con sus palabras"],
      ["then updates practice, proof, and teach-back", "y luego actualiza práctica, prueba y enseñanza"],
      ["The first output should be", "La primera salida debe ser"],
      ["Useful tools for this profile", "Herramientas útiles para este perfil"],
      ["Whole-work map", "Mapa de la obra completa"],
      ["People and conflict", "Personas y conflicto"],
      ["Themes and symbols", "Temas y símbolos"],
      ["Context", "Contexto"],
      ["Source notes", "Notas fuente"],
      ["Teach-back goal", "Meta de explicación"],
      ["Copyright-safe mode", "Modo seguro de derechos"],
      ["Needs answer", "Falta respuesta"],
      ["signal", "señal"],
      ["Claim", "Afirmación"],
      ["Defense note", "Nota de defensa"],
      ["Confidence", "Confianza"],
      ["Weak point", "Punto débil"],
      ["Exam question", "Pregunta de examen"],
      ["Lesson plan", "Plan de clase"],
      ["Audience", "Audiencia"],
      ["Mode strategy", "Estrategia del modo"],
      ["Hook", "Gancho"],
      ["Core explanation", "Explicación central"],
      ["Practical example", "Ejemplo práctico"],
      ["Clinic", "Clínica"],
      ["Proof round", "Ronda de prueba"],
      ["Exit quiz", "Quiz de salida"],
      ["diagnosis", "diagnóstico"],
      ["misconception", "malentendido"],
      ["reading comprehension", "comprensión lectora"],
      ["source-aware", "con fuentes"],
      ["prototype", "prototipo"],
      ["next API step", "siguiente paso API"],
      ["fact", "hecho"],
      ["inference", "inferencia"],
      ["uncertainty", "incertidumbre"],
      ["cause", "causa"],
      ["effect", "efecto"],
      ["3-minute demo script", "Guion demo de 3 minutos"],
      ["Problem", "Problema"],
      ["Input", "Entrada"],
      ["Differentiator", "Diferenciador"],
      ["Proof", "Prueba"],
      ["Close", "Cierre"],
      ["Visual explanation board", "Panel visual explicativo"],
      ["Interactive media pack", "Paquete multimedia interactivo"],
      ["Video storyboard", "Guion gráfico de video"],
      ["Adaptive media", "Multimedia adaptable"],
      ["Path built", "Ruta creada"]
    ]);
  }
}

function applyUiLanguage() {
  if (isSpanish() && !voiceAccentSelect.value.startsWith("es")) voiceAccentSelect.value = "es-MX";
  if (!isSpanish() && !voiceAccentSelect.value.startsWith("en")) voiceAccentSelect.value = "en-US";
  const ui = currentUi();
  document.documentElement.lang = isSpanish() ? "es" : "en";
  document.querySelector("#toolsPanel").dataset.toolsLabel = say("Herramientas", "Tools");
  document.querySelector(".language-ribbon > span").textContent = ui.ribbon;
  document.querySelector(".topbar .eyebrow").textContent = ui.topEyebrow || "OpenAI Build Week concept · Education";
  setText(".hero-subtitle", ui.heroSubtitle || "Tu puente entre preguntar, comprender, practicar y enseñar.", ui.heroSubtitle || "Your bridge from asking to understanding, practicing, and teaching.");
  document.querySelectorAll(".hero-badges span").forEach((badge, index) => {
    if (ui.heroBadges && ui.heroBadges[index]) badge.textContent = ui.heroBadges[index];
  });
  document.querySelectorAll(".orbit-card strong").forEach((label, index) => {
    if (ui.heroOrbit && ui.heroOrbit[index]) label.textContent = ui.heroOrbit[index];
  });
  document.querySelector(".status-card span").textContent = ui.stateTitle || "Learning state";
  document.querySelector(".start-screen .eyebrow").textContent = ui.startHere || "Start here";
  document.querySelector(".start-screen h2").textContent = ui.startQuestion || "What do you want to learn, understand, practice, or teach today?";
  quickStartInput.placeholder = ui.quickPlaceholder || "Example: energy transition, election misinformation, AI in healthcare, or a physics exam plan...";
  document.querySelector('label[for="demoScenarioSelect"]').textContent = ui.demoTopic || "Demo topic";
  setOptionLabels(demoScenarioSelect, isSpanish() ? {
    energy: "Transición energética",
    misinformation: "Desinformación electoral",
    "healthcare-ai": "IA en salud"
  } : {
    energy: "Energy Transition",
    misinformation: "Election Misinformation",
    "healthcare-ai": "AI in Healthcare"
  });
  document.querySelector("#quickStartButton").textContent = ui.quickStart || "Start learning session";
  document.querySelector("#winningDemoButton").textContent = ui.winningDemo || "Load winning demo";
  document.querySelector("#exportButton").textContent = ui.exportPack || "Export study pack";
  document.querySelector("#shareButton").textContent = ui.sharePack || "Share link";
  document.querySelectorAll(".prompt-suggestions button").forEach((button, index) => {
    if (!ui.promptSuggestions || !ui.promptSuggestions[index]) return;
    button.textContent = ui.promptSuggestions[index][0];
    button.dataset.prompt = ui.promptSuggestions[index][1];
  });
  document.querySelectorAll(".showcase-card").forEach((card, index) => {
    if (!ui.showcase || !ui.showcase[index]) return;
    card.querySelector("strong").textContent = ui.showcase[index][0];
    card.querySelector("p").textContent = ui.showcase[index][1];
  });
  const edge = document.querySelector(".competitive-edge");
  if (edge && ui.competitiveCards) {
    edge.querySelector("summary").textContent = ui.competitiveTitle;
    edge.querySelector(".eyebrow").textContent = ui.competitiveEyebrow;
    edge.querySelector("h2").textContent = ui.competitiveTitle;
    edge.querySelector(".edge-head p:not(.eyebrow)").textContent = ui.competitiveBody;
    edge.querySelectorAll(".edge-grid article").forEach((card, index) => {
      if (!ui.competitiveCards[index]) return;
      card.querySelector("strong").textContent = ui.competitiveCards[index][0];
      card.querySelector("p").textContent = ui.competitiveCards[index][1];
    });
  }
  document.querySelectorAll(".maturity-strip article").forEach((card, index) => {
    if (!ui.maturityCards || !ui.maturityCards[index]) return;
    card.querySelector("strong").textContent = ui.maturityCards[index][0];
    card.querySelector("p").textContent = ui.maturityCards[index][1];
  });
  setText(".jury-demo .eyebrow", ui.demoEyebrow || "Demo para jurado", ui.demoEyebrow || "Jury demo");
  setText(".jury-demo h2", ui.demoTitle || "Recorrido guiado de 90 segundos", ui.demoTitle || "90-second guided walkthrough");
  document.querySelector("#guidedDemoButton").textContent = ui.guidedDemo || "Start guided demo";
  document.querySelector("#nextDemoStepButton").textContent = ui.nextDemoStep || "Next step";
  renderGuidedDemoStep(guidedDemoIndex, false);
  arrangeIntegratedLearningSections();
  helpButton.textContent = ui.help || "Help";
  syncVoiceAccentOptions();
  voiceSupportStatus.textContent = voiceAvailable()
    ? say("Configura la voz general. Cada bloque se escucha desde su icono 🔉.", "Set the global voice. Each block plays from its 🔉 icon.")
    : say("Este navegador no tiene narración integrada.", "This browser does not provide built-in narration.");
  setText('label[for="voiceSelect"]', "Voz", "Voice");
  setText('label[for="voiceAccentSelect"]', "Acento", "Accent");
  setText('label[for="voiceToneSelect"]', "Tono", "Tone");
  setText('label[for="voiceRateInput"]', "Velocidad", "Speed");
  setText('label[for="voicePitchInput"]', "Entonación", "Pitch");
  setText(".toggle-line span", "Narrar respuestas automáticamente", "Automatically narrate responses");
  setText("#speakPageButton", "Escuchar explicación", "Listen to explanation");
  setText("#voiceInputButton", "Dictar al chat", "Dictate to chat");
  setText("#stopSpeechButton", "Detener voz", "Stop voice");
  setText("#audioToggle", document.body.classList.contains("voice-open") ? "Ocultar audio" : "Audio", document.body.classList.contains("voice-open") ? "Hide audio" : "Audio");
  setText("#toolsToggle", document.body.classList.contains("tools-open") ? "Ocultar herramientas" : "Herramientas", document.body.classList.contains("tools-open") ? "Hide tools" : "Tools");
  document.querySelectorAll(".listen-section-btn").forEach((button) => {
    button.textContent = "🔉";
    button.title = say("Escuchar este bloque", "Listen to this block");
    button.setAttribute("aria-label", say("Escuchar este bloque", "Listen to this block"));
  });
  setOptionLabels(voiceToneSelect, isSpanish() ? {
    neutral: "Neutral",
    teacher: "Profesor",
    warm: "Cálido",
    child: "Infantil"
  } : {
    neutral: "Neutral",
    teacher: "Teacher",
    warm: "Warm",
    child: "Child"
  });
  document.querySelector('label[for="usernameInput"]').textContent = ui.userLabel || "Local user";
  document.querySelector('label[for="passwordInput"]').textContent = ui.passwordLabel || "Password";
  document.querySelector("#loginButton").textContent = ui.openWorkspace || "Open workspace";
  if (accountStatus.textContent.includes("Demo") || accountStatus.textContent.includes("demo") || accountStatus.textContent.includes("Cuenta local")) {
    accountStatus.textContent = ui.accountNote || "Demo-local account. Final version should use secure authentication.";
  }
  const pitch = document.querySelector(".devpost-pitch");
  if (pitch && ui.pitchTitle) {
    pitch.querySelector(".eyebrow").textContent = ui.pitchEyebrow;
    pitch.querySelector("h2").textContent = ui.pitchTitle;
    pitch.querySelector(":scope > div > p:not(.eyebrow)").textContent = ui.pitchBody;
    pitch.querySelectorAll(".pitch-grid article").forEach((card, index) => {
      if (!ui.pitchCards[index]) return;
      card.querySelector("span").textContent = ui.pitchCards[index][0];
      card.querySelector("p").textContent = ui.pitchCards[index][1];
    });
  }
  if (ui.defense) {
    document.querySelectorAll(".defense-strip article").forEach((card, index) => {
      if (!ui.defense[index]) return;
      card.querySelector("strong").textContent = ui.defense[index][0];
      card.querySelector("p").textContent = ui.defense[index][1];
    });
  }
  document.querySelector(".intro h2").textContent = ui.headline;
  document.querySelector(".intro p").textContent = ui.intro;
  document.querySelector("#sampleButton").textContent = ui.sample;
  document.querySelector("#readingLevel").textContent = ui.adaptivePill || "Adaptive";
  const mainCards = document.querySelectorAll("#understandPanel .card-grid article h4");
  if (mainCards[0]) mainCards[0].textContent = ui.coreIdea || "Core Idea";
  if (mainCards[1]) mainCards[1].textContent = ui.practicalExample || "Practical Example";
  document.querySelector("#runButton").textContent = ui.run;
  document.querySelector("#resetButton").textContent = ui.reset;
  document.querySelector('label[for="topicInput"]').textContent = ui.topic;
  document.querySelector('label[for="materialSelect"]').textContent = ui.material;
  document.querySelector('label[for="sourceInput"]').textContent = ui.source;
  document.querySelector('label[for="bookUpload"]').textContent = ui.upload;
  if (["No file loaded.", "Ningún archivo cargado."].includes(uploadStatus.textContent.trim())) {
    uploadStatus.textContent = ui.noFile;
  }
  document.querySelector('label[for="profileSelect"]').textContent = ui.profile;
  document.querySelector('label[for="answerInput"]').textContent = ui.answer;
  sourceInput.placeholder = say("Ejemplo: pega notas fuente, extractos, temario, reporte o lo que ya sabes.", "Example: paste source notes, excerpts, syllabus, report, or what you already know.");
  answerInput.placeholder = say("Después de leer la explicación, escribe qué entendiste. La clínica encontrará huecos y confusiones.", "After reading the explanation, write what you understood. The clinic will find gaps and confusion.");
  projectTitleInput.placeholder = say("Proyecto sin título", "Untitled project");
  setText(".repo-head span", "Repositorio del proyecto", "Project repository");
  setText("#newProjectButton", "Nuevo", "New");
  setText('label[for="projectTitleInput"]', "Nombre de la carpeta", "Project folder name");
  setText("#understandPanel .panel-head h3", "Haz una pregunta para empezar.", "Ask a question to begin.");
  setText("#kidPanel .panel-head h3", "Aprendizaje paso a paso con dibujo, palabras simples y misiones.", "Step-by-step learning with drawing, simple words, and playful missions.");
  setText("#clinicPanel .panel-head h3", "Diagnóstico integrado en prueba.", "Diagnosis integrated into proof.");
  setText("#proofPanel .panel-head h3", "Comprensión, evidencia, confianza y notas de defensa.", "Comprehension, evidence, confidence, and defense notes.");
  setText("#examPanel .panel-head h3", "Preguntas de práctica que recuerdan puntos débiles.", "Practice questions that remember weak points.");
  setText("#teachPanel .panel-head h3", "Convierte la comprensión en una clase para otros.", "Turn understanding into a class for others.");
  setText("#mediaPanel .panel-head h3", "Visuales integrados dentro de la explicación.", "Visuals integrated into the explanation.");
  setText("#toolsPanel .panel-head h3", "Notas, dibujo, calculadora, temporizador e historial.", "Notes, drawing, calculator, timer, and project history.");
  setText("#plannerPanel .panel-head h3", "Ruta aprendida, agenda futura, recordatorios y autoevaluación.", "Learning trail, future schedule, reminders, and self-assessment.");
  setText("#chatToggle", "Preguntar a LearnBridge", "Ask LearnBridge");
  setText(".chat-head strong", "Pregunta en vivo", "Live question");
  setText(".chat-head span", "Interrumpe cualquier módulo", "Interrupt any module");
  document.querySelector("#chatInput").placeholder = say("Pregunta una duda sobre el tema actual...", "Ask a doubt about the current topic...");
  setText("#chatVoiceButton", "Voz", "Mic");
  chatVoiceButton.title = say("Dictar pregunta al chat", "Dictate question to chat");
  setText("#chatSendButton", "Enviar", "Send");
  setText("#authorsLine", "Concepto y desarrollo: Alberto Campos + Codex.", "Concept and development: Alberto Campos + Codex.");
  document.querySelectorAll(".session-step").forEach((step, index) => {
    const labels = isSpanish() ? ["1 Entender", "2 Ver", "3 Anotar", "4 Practicar", "5 Enseñar"] : ["1 Understand", "2 See", "3 Note", "4 Practice", "5 Teach"];
    step.textContent = labels[index] || step.textContent;
  });
  const progressLabels = document.querySelectorAll(".progress-strip span");
  const progressText = isSpanish() ? ["Modo", "Dominio", "Insignias"] : ["Mode", "Mastery", "Badges"];
  progressLabels.forEach((label, index) => label.textContent = progressText[index] || label.textContent);
  setText("#understandPanel .main-copy", "LearnBridge producirá una explicación directa ajustada al nivel, perfil, material y meta de aprendizaje.", "LearnBridge will produce a direct explanation matched to the selected level, audience, material type, and learning goal.");
  setText("#kidPanel .pill", "Ruta amigable", "Friendly path");
  setText("#kidPanel .kid-card.big h4", "Cuéntame la idea", "Tell me the idea");
  setText("#kidPanel .kid-card.big p", "Elige perfil Niño y crea una ruta para ver una explicación más simple aquí.", "Choose Child profile and build a path to see a simpler explanation here.");
  setText("#kidPanel .kid-card:nth-child(2) h4", "Dibuja lo que entendiste", "Draw what you understood");
  setText("#kidPanel .kid-card:nth-child(2) p", "Usa el bloc de dibujo en Herramientas. En la app final este lienzo será más grande para niños.", "Use the sketch pad in Tools. In the final app this canvas appears bigger for children.");
  setText("#kidPanel .kid-card:nth-child(3) h4", "Mini misión", "Mini mission");
  setText("#kidMission", "Responde una pregunta pequeña y luego explícasela a alguien en casa.", "Answer one tiny question, then explain it to someone at home.");
  setText("#proofPanel .pill", "Con evidencia", "Evidence-aware");
  setText("#examPanel .pill", "Sin puntos débiles todavía", "No weak points yet");
  setText("#teachPanel .pill", "Listo para clase", "Lesson-ready");
  setText("#playPanel .panel-head h3", "Quiz, rompecabezas, laberinto y juego de relación para el tema actual.", "Quiz, puzzle, maze, and matching missions for the current topic.");
  setText("#playPanel .pill", "Diversión infantil", "Kid fun");
  setText(".notes-card h4", "Notas del proyecto", "Project Notes");
  document.querySelector("#notesInput").placeholder = say("Escribe tus propias notas para este proyecto.", "Write your own notes for this specific project.");
  setText(".tool-card:nth-child(2) h4", "Calculadora", "Calculator");
  setText('label[for="calculatorMode"]', "Tipo de calculadora", "Calculator type");
  setText("#floatToolsButton", document.body.classList.contains("tools-floating") ? "Herramientas estáticas" : "Herramientas flotantes", document.body.classList.contains("tools-floating") ? "Static tools" : "Float tools");
  document.querySelector("#calcInput").placeholder = say("Ejemplo: sin(30) + sqrt(16) + 2^3", "Example: sin(30) + sqrt(16) + 2^3");
  setText("#calcSolveButton", "Resolver", "Solve");
  setText("#calcClearButton", "Limpiar", "Clear");
  setText("#calcOutput", "El resultado aparecerá aquí.", "Result appears here.");
  setOptionLabels(calculatorMode, isSpanish() ? {
    basic: "Básica",
    scientific: "Científica",
    financial: "Financiera"
  } : {
    basic: "Basic",
    scientific: "Scientific",
    financial: "Financial"
  });
  const financeLabels = isSpanish() ? ["Pago mensual", "Valor futuro", "Valor presente"] : ["Payment", "Future value", "Present value"];
  document.querySelectorAll("[data-finance]").forEach((button, index) => {
    button.textContent = financeLabels[index] || button.textContent;
  });
  setText(".tool-card:nth-child(3) h4", "Agenda de estudio + alarma", "Study Schedule + Alarm");
  setText('label[for="studyMinutesInput"]', "Minutos del bloque de enfoque", "Focus block minutes");
  setText("#timerStartButton", "Iniciar", "Start");
  setText("#timerLapButton", "Vuelta", "Lap");
  setText("#timerResetButton", "Reiniciar", "Reset");
  setText(".sketch-card h4", "Escritura / bloc de dibujo", "Handwriting / Sketch Pad");
  setText("#saveSketchButton", "Guardar dibujo", "Save sketch");
  setText("#clearSketchButton", "Limpiar dibujo", "Clear sketch");
  setText(".planner-card:nth-child(1) h4", "Aprendido esta semana", "This Week Learned");
  setText(".planner-card:nth-child(2) h4", "Agregar recordatorio de estudio", "Add Study Reminder");
  setText('label[for="reminderTitleInput"]', "¿Qué debe recordarte LearnBridge?", "What should LearnBridge remind you?");
  document.querySelector("#reminderTitleInput").placeholder = say("Examen de física, comprensión lectora, receta familiar...", "Physics exam, reading comprehension, family recipe...");
  setText('label[for="reminderDateInput"]', "Fecha", "Date");
  setText('label[for="reminderTimeInput"]', "Hora", "Time");
  setText('label[for="reminderNoteInput"]', "Notas", "Notes");
  document.querySelector("#reminderNoteInput").placeholder = say("Recuerda qué estudiar, enseñar, cocinar, leer o preparar.", "Remember what to study, teach, cook, read, or prepare.");
  setText("#addReminderButton", "Agregar recordatorio", "Add reminder");
  setText(".planner-card:nth-child(3) h4", "Calendario mensual", "Monthly Calendar");
  setText(".planner-card:nth-child(4) h4", "Próxima agenda", "Upcoming Agenda");
  setText(".planner-card:nth-child(5) h4", "Autoevaluación de aprendizaje", "Learning Self-Assessment");
  const assessmentLabels = document.querySelectorAll(".assessment-grid label");
  setLabelLead(assessmentLabels[0], "Comprensión", "Understanding");
  setLabelLead(assessmentLabels[1], "Confianza", "Confidence");
  setLabelLead(assessmentLabels[2], "Listo para enseñar", "Ready to teach");
  setText("#saveAssessmentButton", "Guardar evaluación en el proyecto", "Save assessment to project");
  setText(".mindmap-label", "Síntesis editable", "Editable synthesis");
  setText(".mindmap-section h4", "Cuadro sinóptico / mapa mental", "Synoptic chart / mind map");
  const mindNote = document.querySelector(".mindmap-note");
  if (mindNote) mindNote.textContent = say("Edita cualquier bloque. Pasa el mouse sobre un nodo para ver rutas de profundización, fuentes o contraste de ideas.", "Edit any block. Hover a node to see paths for deeper study, sources, or idea contrast.");
  setOptionLabels(materialSelect, isSpanish() ? {
    Concept: "Concepto / tema",
    Book: "Libro / lectura",
    Article: "Artículo / reporte",
    Speech: "Discurso / presentación"
  } : {
    Concept: "Concept / topic",
    Book: "Book / reading",
    Article: "Article / report",
    Speech: "Speech / presentation"
  });
  setOptionLabels(levelSelect, isSpanish() ? {
    Child: "Niño",
    "High school": "Secundaria / preparatoria",
    "Adult / casual learner": "Adulto / consulta general",
    "Beginner adult": "Adulto principiante",
    University: "Universitario",
    Postgraduate: "Posgrado"
  } : {
    Child: "Child",
    "High school": "High school",
    "Adult / casual learner": "Adult / casual learner",
    "Beginner adult": "Beginner adult",
    University: "University",
    Postgraduate: "Postgraduate"
  });
  setOptionLabels(profileSelect, isSpanish() ? {
    "Child learner": "Niño",
    "General learner": "Usuario general",
    "Curious adult / general information": "Adulto curioso / información general",
    Student: "Estudiante",
    "University student": "Universitario",
    "Postgraduate / researcher": "Posgrado / investigador",
    "Teacher / instructor": "Profesor / instructor",
    "Academic / researcher": "Académico / investigador",
    "Business owner": "Empresario",
    "Technical professional": "Profesional técnico",
    "Creative / communicator": "Creativo / comunicador",
    "Home / everyday learner": "Casa / vida diaria"
  } : {
    "Child learner": "Child learner",
    "General learner": "General learner",
    "Curious adult / general information": "Curious adult / general information",
    Student: "Student",
    "University student": "University student",
    "Postgraduate / researcher": "Postgraduate / researcher",
    "Teacher / instructor": "Teacher / instructor",
    "Academic / researcher": "Academic / researcher",
    "Business owner": "Business owner",
    "Technical professional": "Technical professional",
    "Creative / communicator": "Creative / communicator",
    "Home / everyday learner": "Home / everyday learner"
  });
  document.querySelectorAll(".tab").forEach((tab, index) => {
    const icon = tabIcons[tab.dataset.tab] || "•";
    const label = ui.tabs[index] || tab.dataset.tab;
    tab.innerHTML = `<span class="tab-icon" aria-hidden="true">${icon}</span><span class="tab-label">${label}</span>`;
  });
  document.querySelectorAll(".module-label").forEach((label, index) => {
    label.textContent = ui.modules[index] || label.textContent;
  });
  if (stateLabel.textContent === "Ready" || stateLabel.textContent === "Listo" || stateLabel.textContent === "Pret" || stateLabel.textContent === "Pronto") {
    stateLabel.textContent = ui.state;
  }
  document.querySelectorAll(".language-chip").forEach((chip) => {
    const labels = isSpanish()
      ? { Spanish: "Español", English: "English" }
      : { Spanish: "Spanish", English: "English" };
    chip.textContent = labels[chip.dataset.language] || chip.textContent;
    chip.setAttribute("aria-pressed", String(chip.dataset.language === languageSelect.value));
  });
  if (voiceAvailable()) populateVoices();
  renderHelp();
  addSectionListenButtons();
  document.querySelectorAll(".listen-section-btn").forEach((button) => {
    button.textContent = "🔉";
    button.title = say("Escuchar este bloque", "Listen to this block");
    button.setAttribute("aria-label", say("Escuchar este bloque", "Listen to this block"));
  });
  applyAudienceMode();
  syncCalculatorMode();
}

function applyAudienceMode() {
  const profile = profileSelect.value;
  document.body.classList.add("profile-transition");
  window.clearTimeout(applyAudienceMode.transitionTimer);
  applyAudienceMode.transitionTimer = window.setTimeout(() => {
    document.body.classList.remove("profile-transition");
  }, 520);
  levelSelect.value = levelForProfile(profile);
  const kid = profile.includes("Child");
  document.body.classList.remove("mode-home", "mode-casual", "mode-student", "mode-teacher", "mode-academic", "mode-technical", "mode-business", "mode-creative");
  document.body.classList.toggle("kid-mode", kid);
  if (kid) {
    modeLabel.textContent = say("Niño", "Child learner");
  } else {
    const level = levelSelect.value;
    modeLabel.textContent = translatedProfileLabel(profile);
    if (profile.includes("Technical")) document.body.classList.add("mode-technical");
    else if (profile.includes("Teacher")) document.body.classList.add("mode-teacher");
    else if (profile.includes("Academic") || profile.includes("University") || profile.includes("Postgraduate") || level === "Postgraduate") document.body.classList.add("mode-academic");
    else if (profile.includes("Business")) document.body.classList.add("mode-business");
    else if (profile.includes("Creative")) document.body.classList.add("mode-creative");
    else if (profile.includes("Home")) document.body.classList.add("mode-home");
    else if (profile.includes("Curious") || profile.includes("General") || level.includes("Adult")) document.body.classList.add("mode-casual");
    else document.body.classList.add("mode-student");
    const activeTab = document.querySelector(".tab.active");
    if (activeTab && ["kid", "play"].includes(activeTab.dataset.tab)) {
      document.querySelector('.tab[data-tab="understand"]').click();
    }
  }
  renderAudiencePanel();
}

function inferBestMode(prompt) {
  const q = prompt.toLowerCase();
  if (/child|kid|niño|nino|hijo|hija/.test(q)) return { level: "Child", profile: "Child learner", material: "Concept" };
  if (/book|novel|reading|libro|lectura|shakespeare|romeo/.test(q)) return { level: "High school", profile: "Student", material: "Book" };
  if (/teach|class|clase|profesor|teacher|enseñar|ensenar/.test(q)) return { level: "University", profile: "Teacher / instructor", material: "Concept" };
  if (/integral|derivative|formula|math|derivada|matem/.test(q)) return { level: "University", profile: "Student", material: "Concept" };
  if (/recipe|receta|cook|cocina|pie|cabrito/.test(q)) return { level: "Adult / casual learner", profile: "Home / everyday learner", material: "Concept" };
  if (/code|software|hardware|api|program/.test(q)) return { level: "University", profile: "Technical professional", material: "Concept" };
  return { level: "Adult / casual learner", profile: "Curious adult / general information", material: "Concept" };
}

function updateProgress() {
  let score = 0;
  if (topicInput.value.trim()) score += 20;
  if (document.querySelector("#plainExplanation").textContent.length > 120) score += 20;
  if (notesInput.value.trim()) score += 20;
  if (answerInput.value.trim()) score += 20;
  if (document.querySelector("#examOutput").textContent.trim()) score += 20;
  masteryLabel.textContent = `${score}%`;
  badgeLabel.textContent = String(Math.floor(score / 25));
}

function exportStudyPack() {
  const project = currentProject();
  const pack = [
    say("Paquete de estudio / clase LearnBridge", "LearnBridge Study / Class Pack"),
    `${say("Proyecto", "Project")}: ${projectTitleInput.value}`,
    `${say("Tema", "Topic")}: ${topicInput.value}`,
    `${say("Modo", "Mode")}: ${modeLabel.textContent}`,
    "",
    `${say("Sistema de aprendizaje", "Learning OS")}:`,
    document.querySelector("#learningOSPanel").textContent || say("(Sin sistema generado todavía)", "(No Learning OS generated yet)"),
    "",
    `${say("Explicación", "Explanation")}:`,
    document.querySelector("#plainExplanation").textContent,
    "",
    `${say("Fuentes y confianza", "Source and Trust Ledger")}:`,
    document.querySelector("#sourceLedger").textContent || say("(Sin fuentes todavía)", "(No source ledger generated yet)"),
    "",
    `${say("Chequeo de mitos / fake news", "Myth / Fake News Check")}:`,
    document.querySelector("#mythCheckOutput").textContent || say("(Sin chequeo todavía)", "(No myth check generated yet)"),
    "",
    `${say("Mapa mental editable", "Editable Mind Map")}:`,
    document.querySelector("#mindMapOutput").textContent || say("(Sin mapa todavía)", "(No mind map generated yet)"),
    "",
    `${say("Enlace para compartir", "Share URL")}:`,
    createShareUrl(),
    "",
    `${say("Notas", "Notes")}:`,
    notesInput.value || say("(Sin notas todavía)", "(No notes yet)"),
    "",
    `${say("Preguntas y práctica", "Questions and Practice")}:`,
    document.querySelector("#examOutput").textContent || say("(Sin práctica todavía)", "(No practice generated yet)"),
    "",
    `${say("Tarjetas de recuerdo activo", "Active-Recall Cards")}:`,
    document.querySelector("#flashcardDeck")?.textContent || say("(Sin tarjetas todavía)", "(No cards yet)"),
    "",
    `${say("Plan visual / multimedia", "Visual / Media Plan")}:`,
    document.querySelector("#mediaCards").textContent || say("(Sin multimedia todavía)", "(No media pack generated yet)"),
    "",
    `${say("Plan de clase", "Lesson Plan")}:`,
    document.querySelector("#lessonOutput").textContent || say("(Sin clase todavía)", "(No lesson generated yet)"),
    "",
    `${say("Historial", "History")}:`,
    (project.history || []).join("\n")
  ].join("\n");
  const blob = new Blob([pack], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${(projectTitleInput.value || "learnbridge-study-pack").replace(/[^a-z0-9]+/gi, "-").toLowerCase()}.txt`;
  link.click();
  URL.revokeObjectURL(url);
}

function summarizeUploadedFile(file, extractedText) {
  const sizeMb = (file.size / (1024 * 1024)).toFixed(2);
  const ext = file.name.split(".").pop().toLowerCase();
  const readable = ["txt", "md"].includes(ext);
  const note = readable
    ? say(`Se cargaron ${extractedText.length.toLocaleString()} caracteres del archivo local.`, `Loaded ${extractedText.length.toLocaleString()} characters from the local file.`)
    : say(`Archivo indexado para el prototipo. La versión final analizará el contenido ${ext.toUpperCase()} localmente antes de procesarlo.`, `File indexed for the prototype. Production extraction will parse ${ext.toUpperCase()} content locally before analysis.`);

  uploadStatus.textContent = `${file.name} · ${sizeMb} MB · ${note}`;
  materialSelect.value = "Book";
  if (!topicInput.value.trim()) {
    topicInput.value = file.name.replace(/\.[^.]+$/, "");
  }
  const existing = sourceInput.value.trim();
  const sourceNote = say(`Archivo local cargado: ${file.name} (${ext.toUpperCase()}, ${sizeMb} MB). ${note}`, `Local upload: ${file.name} (${ext.toUpperCase()}, ${sizeMb} MB). ${note}`);
  sourceInput.value = existing ? `${existing}\n${sourceNote}` : sourceNote;
  if (readable && extractedText.trim()) {
    const preview = extractedText.trim().slice(0, 1200);
    sourceInput.value += say(`\n\nVista previa de texto legible:\n${preview}`, `\n\nReadable excerpt preview:\n${preview}`);
  }
}

bookUpload.addEventListener("change", async () => {
  const file = bookUpload.files && bookUpload.files[0];
  if (!file) {
    uploadStatus.textContent = currentUi().noFile;
    return;
  }
  const ext = file.name.split(".").pop().toLowerCase();
  if (["txt", "md"].includes(ext)) {
    const extractedText = await file.text();
    summarizeUploadedFile(file, extractedText);
  } else {
    summarizeUploadedFile(file, "");
  }
  buildPath();
});

function cleanTopic() {
  return topicInput.value.trim() || "a complex topic";
}

function keywordScore(answer, topic) {
  const topicWords = topic.toLowerCase().split(/[^a-záéíóúñü0-9]+/i).filter((w) => w.length > 3);
  const answerLower = answer.toLowerCase();
  const hits = topicWords.filter((w) => answerLower.includes(w)).length;
  const lengthScore = Math.min(45, Math.floor(answer.trim().length / 4));
  return Math.min(100, 30 + lengthScore + hits * 10);
}

function renderStack(target, items) {
  target.innerHTML = items.map((item) => `
    <article class="stack-item">
      <strong>${item.title}</strong>
      <p>${item.body}</p>
      ${item.tags ? `<div class="tag-row">${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>` : ""}
    </article>
  `).join("");
}

function renderFlashcards(cards) {
  if (!flashcardDeck) return;
  flashcardDeck.innerHTML = `
    <div class="flashcard-head">
      <div>
        <span class="eyebrow">${say("Práctica rápida", "Quick practice")}</span>
        <h4>${say("Tarjetas de recuerdo activo", "Active-recall cards")}</h4>
      </div>
      <span>${say("gira mentalmente: pregunta → respuesta → prueba", "mental flip: prompt → answer → proof")}</span>
    </div>
    <div class="flashcard-grid">
      ${cards.slice(0, 4).map(([front, back], index) => `
        <article class="flashcard" tabindex="0">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <strong>${front}</strong>
          <p>${back}</p>
        </article>
      `).join("")}
    </div>
  `;
}

function activeDemoScenario() {
  return demoScenarios[activeProjectId?.replace("demo-", "")] || null;
}

function refreshActiveDemoLanguage() {
  const rawScenario = activeDemoScenario();
  if (!rawScenario) return;
  const scenario = localizedScenario(rawScenario);
  projectTitleInput.value = scenario.title;
  activeProjectName.textContent = scenario.title;
  quickStartInput.value = scenario.title;
  topicInput.value = scenario.title;
  materialSelect.value = scenario.material;
  profileSelect.value = scenario.profile;
  sourceInput.value = scenario.source;
  answerInput.value = scenario.answer;
  renderScenarioPath(rawScenario);
  renderDemoSketch(scenario);
  saveSketch();
  persistProject(say("demo traducido", "demo translated"));
  renderProjects();
}

function scenarioVisualSvg(scenario) {
  const palette = {
    energy: ["#1f9f7a", "#245bff", "#f4b942", "#ef6a4d"],
    misinformation: ["#245bff", "#ef6a4d", "#7b61ff", "#1f9f7a"],
    "healthcare-ai": ["#1f9f7a", "#7b61ff", "#ef6a4d", "#245bff"]
  }[scenario.id] || ["#1f9f7a", "#245bff", "#f4b942", "#ef6a4d"];
  if (scenario.id === "energy") {
    return `<svg viewBox="0 0 980 420" role="img" aria-label="${say("Tablero multimedia de transición energética", "Energy transition multimedia board")}">
      <defs><linearGradient id="skyEnergy" x1="0" x2="1"><stop stop-color="#e9fbff"/><stop offset="1" stop-color="#fff7d8"/></linearGradient></defs>
      <rect width="980" height="420" fill="url(#skyEnergy)"/>
      <circle cx="118" cy="82" r="42" fill="#f4b942"/>
      <g stroke="#176d8f" stroke-width="7" fill="none"><path d="M120 285 L190 158 L260 285"/><path d="M190 158 V305"/><path d="M142 245 H238"/><path d="M160 212 H220"/></g>
      <g transform="translate(344 95)"><rect x="0" y="0" width="94" height="180" rx="13" fill="#1f9f7a"/><rect x="18" y="18" width="58" height="30" rx="6" fill="#dff7ec"/><rect x="18" y="66" width="58" height="30" rx="6" fill="#dff7ec"/><rect x="18" y="114" width="58" height="30" rx="6" fill="#dff7ec"/></g>
      <g transform="translate(560 95)"><circle cx="70" cy="70" r="64" fill="#eef5ff" stroke="#245bff" stroke-width="8"/><path d="M70 18 L90 82 H52 Z" fill="#245bff"/><text x="70" y="166" text-anchor="middle" fill="#142531" font-size="22" font-weight="800">${say("energía firme", "firm power")}</text></g>
      <g transform="translate(770 112)" stroke="#ef6a4d" stroke-width="8" fill="none"><path d="M0 96 C70 20 130 172 196 64"/><path d="M140 64 h56 v56"/><text x="80" y="184" text-anchor="middle" fill="#142531" stroke="none" font-size="22" font-weight="800">${say("demanda", "demand")}</text></g>
      <path d="M270 255 C340 210 410 220 482 256 S630 298 716 238" stroke="#142531" stroke-width="9" fill="none" opacity=".72"/>
      <text x="42" y="380" fill="#142531" font-size="28" font-weight="900">${say("Solar + almacenamiento + nuclear + red como sistema", "Solar + storage + nuclear + grid flexibility as one system")}</text>
    </svg>`;
  }
  if (scenario.id === "misinformation") {
    return `<svg viewBox="0 0 980 420" role="img" aria-label="${say("Tablero multimedia de desinformación electoral", "Election misinformation multimedia board")}">
      <rect width="980" height="420" fill="#f6f9ff"/>
      <g fill="none" stroke="#9fb0c8" stroke-width="4">
        <path d="M172 192 C292 80 398 74 512 168"/>
        <path d="M172 192 C330 260 456 290 620 218"/>
        <path d="M512 168 C640 90 782 112 862 212"/>
        <path d="M620 218 C706 286 790 282 862 212"/>
      </g>
      <circle cx="172" cy="192" r="74" fill="#ef6a4d"/><text x="172" y="186" text-anchor="middle" fill="white" font-size="22" font-weight="900">${say("afirmación", "claim")}</text><text x="172" y="214" text-anchor="middle" fill="white" font-size="16">${say("origen", "origin")}</text>
      <circle cx="512" cy="168" r="64" fill="#245bff"/><text x="512" y="164" text-anchor="middle" fill="white" font-size="20" font-weight="900">${say("amplifican", "amplifiers")}</text>
      <circle cx="620" cy="218" r="58" fill="#7b61ff"/><text x="620" y="214" text-anchor="middle" fill="white" font-size="19" font-weight="900">chats</text>
      <circle cx="862" cy="212" r="70" fill="#1f9f7a"/><text x="862" y="204" text-anchor="middle" fill="white" font-size="20" font-weight="900">${say("revisión", "official")}</text><text x="862" y="230" text-anchor="middle" fill="white" font-size="16">${say("oficial", "check")}</text>
      <rect x="334" y="316" width="314" height="56" rx="18" fill="#fff" stroke="#245bff" stroke-width="4"/>
      <text x="491" y="352" text-anchor="middle" fill="#142531" font-size="22" font-weight="800">${say("prevenir → verificar → corregir", "prebunk → verify → correct")}</text>
    </svg>`;
  }
  return `<svg viewBox="0 0 980 420" role="img" aria-label="${say("Tablero multimedia de IA en salud", "Healthcare AI multimedia board")}">
    <rect width="980" height="420" fill="#f5fbfa"/>
    <g transform="translate(76 96)">
      <rect width="190" height="220" rx="28" fill="#ffffff" stroke="#1f9f7a" stroke-width="7"/>
      <path d="M95 56 v86 M52 99 h86" stroke="#ef6a4d" stroke-width="18" stroke-linecap="round"/>
      <text x="95" y="184" text-anchor="middle" fill="#142531" font-size="22" font-weight="900">${say("paciente", "patient")}</text>
    </g>
    <g transform="translate(370 82)">
      <rect width="250" height="250" rx="34" fill="#eef4ff" stroke="#245bff" stroke-width="7"/>
      <circle cx="125" cy="96" r="44" fill="#245bff"/><path d="M78 168 h94 M78 198 h68" stroke="#245bff" stroke-width="12" stroke-linecap="round"/>
      <text x="125" y="232" text-anchor="middle" fill="#142531" font-size="24" font-weight="900">${say("modelo IA", "AI model")}</text>
    </g>
    <g transform="translate(724 96)">
      <rect width="190" height="220" rx="28" fill="#fff8ee" stroke="#f4b942" stroke-width="7"/>
      <path d="M42 118 l40 40 76-96" stroke="#1f9f7a" stroke-width="16" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="95" y="184" text-anchor="middle" fill="#142531" font-size="22" font-weight="900">${say("clínica", "clinician")}</text>
    </g>
    <path d="M278 205 H356 M634 205 H712" stroke="#142531" stroke-width="10" stroke-linecap="round"/>
    <text x="490" y="382" text-anchor="middle" fill="#142531" font-size="28" font-weight="900">${say("apoyo a decisiones con validación, sesgo y supervisión", "decision support with validation, bias checks, and oversight")}</text>
  </svg>`;
}

function scenarioMediaCards(scenario) {
  const links = {
    energy: "https://video.example/learnbridge-energy-transition-grid-explainer",
    misinformation: "https://video.example/learnbridge-election-misinformation-verification-lab",
    "healthcare-ai": "https://video.example/learnbridge-healthcare-ai-risk-governance"
  };
  return `
    <article class="video-teaser">
      <div class="play-mark">▶</div>
      <div>
        <strong>${say("Marcador de video demo", "Demo video placeholder")}</strong>
        <p>${links[scenario.id]}</p>
      </div>
    </article>
    ${scenario.media.map(([title, body], index) => `
      <article class="media-card media-rich theme-${scenario.id}">
        <figure class="media-figure">
          ${scenarioMediaVisual(scenario, index)}
          <figcaption>${say("Imagen demo generada para el prototipo", "Prototype-generated demo image")}</figcaption>
        </figure>
        <strong>${title}</strong>
        <p>${body}</p>
      </article>
    `).join("")}
  `;
}

function scenarioMediaVisual(scenario, index) {
  const label = (es, en) => say(es, en);
  if (scenario.id === "energy") {
    const visuals = [
      `<svg viewBox="0 0 360 210" role="img" aria-label="${label("Diagrama de flujo de red", "Grid flow diagram")}">
        <rect width="360" height="210" rx="18" fill="#eef8f5"/>
        <circle cx="52" cy="48" r="24" fill="#f4b942"/><text x="52" y="104" text-anchor="middle" font-size="13" font-weight="800" fill="#142531">${label("solar", "solar")}</text>
        <path d="M48 142 l28 -50 28 50 M76 92 v68 M62 122 h28" stroke="#176d8f" stroke-width="7" fill="none" stroke-linecap="round"/>
        <rect x="145" y="58" width="58" height="94" rx="12" fill="#1f9f7a"/><path d="M158 82 h32 M158 106 h32 M158 130 h32" stroke="#dff7ec" stroke-width="10" stroke-linecap="round"/>
        <circle cx="276" cy="105" r="42" fill="#eef4ff" stroke="#245bff" stroke-width="8"/><path d="M276 70 l14 48 h-30z" fill="#245bff"/>
        <path d="M104 112 C132 96 145 98 158 106 M203 106 C228 124 246 123 259 111" stroke="#142531" stroke-width="7" fill="none" stroke-linecap="round"/>
        <text x="180" y="188" text-anchor="middle" fill="#142531" font-size="15" font-weight="900">${label("generación → almacenamiento → energía firme", "generation → storage → firm power")}</text>
      </svg>`,
      `<svg viewBox="0 0 360 210" role="img" aria-label="${label("Comparación de portafolios", "Portfolio comparison")}">
        <rect width="360" height="210" rx="18" fill="#f7fbff"/>
        ${[0,1,2,3].map((i) => `<g transform="translate(${54 + i * 70} 38)">
          <rect x="0" y="${74 - i * 10}" width="34" height="${70 + i * 10}" rx="8" fill="#245bff"/>
          <rect x="0" y="${44 - i * 4}" width="34" height="${30 - i * 2}" rx="8" fill="#1f9f7a"/>
          <rect x="0" y="${24 + i * 3}" width="34" height="${20 - i}" rx="8" fill="#f4b942"/>
          <text x="17" y="168" text-anchor="middle" fill="#142531" font-size="11" font-weight="800">P${i + 1}</text>
        </g>`).join("")}
        <text x="180" y="28" text-anchor="middle" fill="#142531" font-size="15" font-weight="900">${label("solar / eólica / nuclear / respaldo", "solar / wind / nuclear / backup")}</text>
      </svg>`,
      `<svg viewBox="0 0 360 210" role="img" aria-label="${label("Matriz costo-riesgo", "Cost-risk matrix")}">
        <rect width="360" height="210" rx="18" fill="#fff8ec"/>
        <path d="M54 160 H308 M54 160 V36" stroke="#142531" stroke-width="5" stroke-linecap="round"/>
        <text x="310" y="184" fill="#142531" font-size="12" font-weight="800">${label("costo", "cost")}</text>
        <text x="16" y="42" fill="#142531" font-size="12" font-weight="800" transform="rotate(-90 16 42)">${label("riesgo", "risk")}</text>
        <circle cx="112" cy="126" r="25" fill="#1f9f7a"/><text x="112" y="130" text-anchor="middle" fill="white" font-size="11" font-weight="900">${label("red", "grid")}</text>
        <circle cx="186" cy="86" r="29" fill="#245bff"/><text x="186" y="90" text-anchor="middle" fill="white" font-size="11" font-weight="900">${label("nuclear", "nuclear")}</text>
        <circle cx="256" cy="119" r="24" fill="#f4b942"/><text x="256" y="123" text-anchor="middle" fill="#142531" font-size="11" font-weight="900">${label("batería", "battery")}</text>
      </svg>`
    ];
    return visuals[index] || visuals[0];
  }
  if (scenario.id === "misinformation") {
    const visuals = [
      `<svg viewBox="0 0 360 210" role="img" aria-label="${label("Mapa de cascada de rumor", "Rumor cascade map")}">
        <rect width="360" height="210" rx="18" fill="#f6f9ff"/>
        <path d="M72 106 C132 46 190 55 235 90 M72 106 C138 152 220 160 288 116 M235 90 C270 70 300 76 322 100" stroke="#9fb0c8" stroke-width="5" fill="none"/>
        <circle cx="72" cy="106" r="30" fill="#ef6a4d"/><text x="72" y="111" text-anchor="middle" fill="white" font-size="11" font-weight="900">${label("origen", "origin")}</text>
        <circle cx="235" cy="90" r="28" fill="#245bff"/><text x="235" y="95" text-anchor="middle" fill="white" font-size="10" font-weight="900">${label("redes", "feeds")}</text>
        <circle cx="288" cy="116" r="28" fill="#7b61ff"/><text x="288" y="121" text-anchor="middle" fill="white" font-size="10" font-weight="900">chats</text>
        <circle cx="322" cy="100" r="24" fill="#1f9f7a"/><text x="322" y="104" text-anchor="middle" fill="white" font-size="9" font-weight="900">${label("oficial", "official")}</text>
        <text x="180" y="184" text-anchor="middle" fill="#142531" font-size="15" font-weight="900">${label("rumor → amplificación → corrección", "rumor → amplification → correction")}</text>
      </svg>`,
      `<svg viewBox="0 0 360 210" role="img" aria-label="${label("Embudo de verificación", "Verification funnel")}">
        <rect width="360" height="210" rx="18" fill="#fbfefd"/>
        <path d="M70 38 H290 L234 102 V162 H126 V102 Z" fill="#e8f3ef" stroke="#1f9f7a" stroke-width="5"/>
        ${[label("fuente","source"),label("fecha","date"),label("evidencia","evidence"),label("oficial","official")].map((t,i)=>`<text x="180" y="${66+i*28}" text-anchor="middle" fill="#142531" font-size="14" font-weight="900">${t}</text>`).join("")}
        <path d="M126 164 h108" stroke="#245bff" stroke-width="8" stroke-linecap="round"/>
        <text x="180" y="190" text-anchor="middle" fill="#142531" font-size="13" font-weight="800">${label("decidir si compartir", "share / no-share decision")}</text>
      </svg>`,
      `<svg viewBox="0 0 360 210" role="img" aria-label="${label("Cartel de prevención", "Prebunk poster")}">
        <rect width="360" height="210" rx="18" fill="#fff8ec"/>
        ${[label("pausa","pause"),label("fuente","source"),label("contexto","context"),label("oficial","official")].map((t,i)=>`<g transform="translate(${34+i*80} 54)"><circle cx="28" cy="28" r="28" fill="${["#245bff","#1f9f7a","#f4b942","#ef6a4d"][i]}"/><text x="28" y="34" text-anchor="middle" fill="${i===2?"#142531":"white"}" font-size="18" font-weight="900">${i+1}</text><text x="28" y="78" text-anchor="middle" fill="#142531" font-size="12" font-weight="900">${t}</text></g>`).join("")}
        <path d="M62 88 H302" stroke="#142531" stroke-width="4" stroke-dasharray="8 8" opacity=".35"/>
        <text x="180" y="176" text-anchor="middle" fill="#142531" font-size="15" font-weight="900">${label("antes de compartir, verifica", "verify before sharing")}</text>
      </svg>`
    ];
    return visuals[index] || visuals[0];
  }
  const visuals = [
    `<svg viewBox="0 0 360 210" role="img" aria-label="${label("Flujo clínico con IA", "Clinical AI workflow")}">
      <rect width="360" height="210" rx="18" fill="#f5fbfa"/>
      <rect x="32" y="62" width="70" height="80" rx="18" fill="#ffffff" stroke="#1f9f7a" stroke-width="5"/><text x="67" y="108" text-anchor="middle" fill="#142531" font-size="12" font-weight="900">${label("paciente", "patient")}</text>
      <rect x="146" y="46" width="72" height="112" rx="20" fill="#eef4ff" stroke="#245bff" stroke-width="5"/><text x="182" y="106" text-anchor="middle" fill="#245bff" font-size="18" font-weight="900">AI</text>
      <rect x="260" y="62" width="70" height="80" rx="18" fill="#fff8ee" stroke="#f4b942" stroke-width="5"/><text x="295" y="108" text-anchor="middle" fill="#142531" font-size="12" font-weight="900">${label("clínica", "clinician")}</text>
      <path d="M108 102 H138 M224 102 H254" stroke="#142531" stroke-width="7" stroke-linecap="round"/>
      <text x="180" y="184" text-anchor="middle" fill="#142531" font-size="15" font-weight="900">${label("alerta → verificación → decisión", "alert → verification → decision")}</text>
    </svg>`,
    `<svg viewBox="0 0 360 210" role="img" aria-label="${label("Mapa de calor de riesgos", "Risk heat map")}">
      <rect width="360" height="210" rx="18" fill="#f7fbff"/>
      ${[0,1,2].map(r=>[0,1,2].map(c=>`<rect x="${72+c*74}" y="${38+r*48}" width="58" height="36" rx="9" fill="${["#1f9f7a","#f4b942","#ef6a4d","#245bff","#7b61ff"][r+c]}"/>`).join("")).join("")}
      <text x="101" y="61" text-anchor="middle" fill="white" font-size="10" font-weight="900">${label("sesgo", "bias")}</text>
      <text x="175" y="109" text-anchor="middle" fill="#142531" font-size="10" font-weight="900">${label("privacidad", "privacy")}</text>
      <text x="249" y="157" text-anchor="middle" fill="white" font-size="10" font-weight="900">${label("validación", "validation")}</text>
      <text x="180" y="190" text-anchor="middle" fill="#142531" font-size="15" font-weight="900">${label("riesgo por uso clínico", "risk by clinical use")}</text>
    </svg>`,
    `<svg viewBox="0 0 360 210" role="img" aria-label="${label("Escalera de evidencia", "Evidence ladder")}">
      <rect width="360" height="210" rx="18" fill="#fff8ec"/>
      ${[label("prototipo","prototype"),label("validación","validation"),label("estudio","study"),label("monitoreo","monitoring")].map((t,i)=>`<g transform="translate(${48+i*72} ${138-i*28})"><rect width="58" height="${34+i*22}" rx="10" fill="${["#ef6a4d","#f4b942","#1f9f7a","#245bff"][i]}"/><text x="29" y="-8" text-anchor="middle" fill="#142531" font-size="10" font-weight="900">${t}</text></g>`).join("")}
      <path d="M50 172 H318" stroke="#142531" stroke-width="5" stroke-linecap="round"/>
      <text x="180" y="28" text-anchor="middle" fill="#142531" font-size="15" font-weight="900">${label("más evidencia antes de desplegar", "more evidence before deployment")}</text>
    </svg>`
  ];
  return visuals[index] || visuals[0];
}

function scenarioMindLayout(scenario) {
  const base = {
    energy: {
      className: "mind-energy",
      center: { x: 480, y: 310, w: 270, h: 154 },
      icon: "GRID",
      branches: [
        { x: 64, y: 54, w: 310, h: 168, path: "M382 280 C268 142 214 132 184 140", color: "#1f9f7a", label: "clean electrons", subs: ["solar", "wind", "nuclear"] },
        { x: 612, y: 54, w: 318, h: 168, path: "M600 280 C704 142 766 132 804 140", color: "#245bff", label: "firm capacity", subs: ["nuclear", "hydro", "backup"] },
        { x: 58, y: 396, w: 326, h: 168, path: "M382 348 C266 476 198 478 176 468", color: "#f4b942", label: "storage + demand", subs: ["batteries", "hours", "peaks"] },
        { x: 610, y: 396, w: 326, h: 168, path: "M604 348 C724 478 786 478 814 468", color: "#ef6a4d", label: "public decision", subs: ["cost", "equity", "permits"] }
      ],
      mini: [
        { x: 408, y: 72, text: "transmission", color: "#176d8f" },
        { x: 416, y: 528, text: "reliability", color: "#287c68" }
      ]
    },
    misinformation: {
      className: "mind-misinformation",
      center: { x: 480, y: 310, w: 270, h: 154 },
      icon: "CLAIM",
      branches: [
        { x: 58, y: 54, w: 326, h: 168, path: "M380 280 C272 142 210 132 184 140", color: "#ef6a4d", label: "origin", subs: ["post", "screenshot", "impersonation"] },
        { x: 612, y: 54, w: 326, h: 168, path: "M600 280 C710 142 778 132 812 140", color: "#245bff", label: "amplifiers", subs: ["influencers", "groups", "algorithms"] },
        { x: 58, y: 396, w: 326, h: 168, path: "M378 348 C258 476 192 478 170 468", color: "#7b61ff", label: "audience effect", subs: ["emotion", "identity", "distrust"] },
        { x: 612, y: 396, w: 326, h: 168, path: "M600 348 C724 476 790 478 816 468", color: "#1f9f7a", label: "verification", subs: ["official", "timestamp", "source"] }
      ],
      mini: [
        { x: 404, y: 72, text: "prebunk", color: "#f4b942" },
        { x: 406, y: 528, text: "correction", color: "#176d8f" }
      ]
    },
    "healthcare-ai": {
      className: "mind-healthcare",
      center: { x: 480, y: 310, w: 270, h: 154 },
      icon: "AI + CARE",
      branches: [
        { x: 58, y: 54, w: 326, h: 168, path: "M380 280 C272 142 210 132 184 140", color: "#1f9f7a", label: "promise", subs: ["triage", "imaging", "access"] },
        { x: 612, y: 54, w: 326, h: 168, path: "M600 280 C708 142 778 132 812 140", color: "#7b61ff", label: "validation", subs: ["task", "population", "monitoring"] },
        { x: 58, y: 396, w: 326, h: 168, path: "M378 348 C262 476 196 478 174 468", color: "#ef6a4d", label: "risk", subs: ["bias", "privacy", "automation"] },
        { x: 612, y: 396, w: 326, h: 168, path: "M600 348 C722 476 794 478 816 468", color: "#245bff", label: "governance", subs: ["oversight", "consent", "liability"] }
      ],
      mini: [
        { x: 402, y: 72, text: "clinician", color: "#f4b942" },
        { x: 396, y: 528, text: "patient safety", color: "#287c68" }
      ]
    }
  };
  const layout = base[scenario.id] || base.energy;
  if (isSpanish()) {
    const spanishLayout = {
      energy: {
        icon: "RED",
        branches: [
          {label: "electricidad limpia", subs: ["solar", "eólica", "nuclear"]},
          {label: "capacidad firme", subs: ["nuclear", "hidro", "respaldo"]},
          {label: "almacenamiento + demanda", subs: ["baterías", "horas", "picos"]},
          {label: "decisión pública", subs: ["costo", "equidad", "permisos"]}
        ],
        mini: ["transmisión", "confiabilidad"]
      },
      misinformation: {
        icon: "AFIRMA",
        branches: [
          {label: "origen", subs: ["publicación", "captura", "suplantación"]},
          {label: "amplificadores", subs: ["influencers", "grupos", "algoritmos"]},
          {label: "efecto en audiencia", subs: ["emoción", "identidad", "desconfianza"]},
          {label: "verificación", subs: ["oficial", "hora", "fuente"]}
        ],
        mini: ["prevenir", "corregir"]
      },
      "healthcare-ai": {
        icon: "IA + SALUD",
        branches: [
          {label: "promesa", subs: ["triaje", "imagen", "acceso"]},
          {label: "validación", subs: ["tarea", "población", "monitoreo"]},
          {label: "riesgo", subs: ["sesgo", "privacidad", "automatización"]},
          {label: "gobernanza", subs: ["supervisión", "consentimiento", "responsabilidad"]}
        ],
        mini: ["clínica", "seguridad del paciente"]
      }
    }[scenario.id];
    if (spanishLayout) {
      layout.icon = spanishLayout.icon;
      layout.branches.forEach((branch, index) => {
        branch.label = spanishLayout.branches[index].label;
        branch.subs = spanishLayout.branches[index].subs;
      });
      layout.mini.forEach((mini, index) => {
        mini.text = spanishLayout.mini[index];
      });
    }
  }
  return layout;
}

function renderScenarioMindMap(scenario) {
  const layout = scenarioMindLayout(scenario);
  const nodes = scenario.mind;
  const root = nodes[0];
  const branchNodes = nodes.slice(1);
  const rootLinks = root[2].map(([jump, label]) => normalizedNodeLink(jump, label)).map(([jump, label]) => `<button xmlns="http://www.w3.org/1999/xhtml" class="node-link" type="button" data-jump="${jump}">${label}</button>`).join("");
  mindMapOutput.innerHTML = `
    <div class="mind-poster ${layout.className}">
      <svg class="scenario-mind-svg" viewBox="0 0 980 620" role="img" aria-label="${scenario.title} mind map">
        <defs>
          <filter id="nodeShadow${scenario.id.replace(/[^a-z]/g, "")}" x="-20%" y="-20%" width="140%" height="160%">
            <feDropShadow dx="0" dy="12" stdDeviation="10" flood-color="#142531" flood-opacity=".18"/>
          </filter>
          <radialGradient id="centerGlow${scenario.id.replace(/[^a-z]/g, "")}" cx="50%" cy="50%" r="65%">
            <stop offset="0" stop-color="#ffffff"/>
            <stop offset="1" stop-color="#e8f4f1"/>
          </radialGradient>
        </defs>
        <rect width="980" height="620" rx="26" fill="#fbfefd"/>
        <g opacity=".45">
          ${Array.from({ length: 15 }, (_, i) => `<path d="M${40 + i * 64} 24 V476" stroke="#dfe8ec" stroke-width="1"/>`).join("")}
          ${Array.from({ length: 10 }, (_, i) => `<path d="M24 ${52 + i * 56} H956" stroke="#dfe8ec" stroke-width="1"/>`).join("")}
        </g>
        ${layout.branches.map((branch) => `<path class="branch-stroke" d="${branch.path}" stroke="${branch.color}" stroke-width="16" fill="none" stroke-linecap="round"/>`).join("")}
        ${layout.mini.map((mini) => `
          <g class="mini-node">
            <rect x="${mini.x}" y="${mini.y}" width="168" height="42" rx="21" fill="${mini.color}" opacity=".92"/>
            <text x="${mini.x + 84}" y="${mini.y + 27}" text-anchor="middle" fill="white" font-size="17" font-weight="800">${mini.text}</text>
          </g>
        `).join("")}
        <foreignObject x="${layout.center.x - layout.center.w / 2}" y="${layout.center.y - layout.center.h / 2}" width="${layout.center.w}" height="${layout.center.h}">
          <div xmlns="http://www.w3.org/1999/xhtml" class="mind-fo-card mind-root-card" contenteditable="true">
            <span class="mind-icon">${layout.icon}</span>
            <strong>${root[0]}</strong>
            <p>${root[1]}</p>
            <div class="node-links">${rootLinks}</div>
          </div>
        </foreignObject>
        ${layout.branches.map((branch, index) => {
          const node = branchNodes[index];
          const links = node[2].map(([jump, label]) => normalizedNodeLink(jump, label)).map(([jump, label]) => `<button xmlns="http://www.w3.org/1999/xhtml" class="node-link" type="button" data-jump="${jump}">${label}</button>`).join("");
          return `
            <foreignObject x="${branch.x}" y="${branch.y}" width="${branch.w}" height="${branch.h}">
              <div xmlns="http://www.w3.org/1999/xhtml" class="mind-fo-card" style="--branch:${branch.color};" contenteditable="true">
                <small>${branch.label}</small>
                <strong>${node[0]}</strong>
                <p>${node[1]}</p>
                <div class="mind-subnodes">${branch.subs.map((sub) => `<span>${sub}</span>`).join("")}</div>
                <div class="node-links">${links}</div>
              </div>
            </foreignObject>
          `;
        }).join("")}
      </svg>
    </div>
  `;
}

function renderScenarioPath(scenario) {
  scenario = localizedScenario(scenario);
  const audience = audienceDetails(levelSelect.value, profileSelect.value);
  document.body.classList.add("workspace-started");
  document.querySelector("#explainTitle").textContent = `${say("Ruta de aprendizaje para", "Learning path for")}: ${scenario.title}`;
  document.querySelector("#readingLevel").textContent = translatedProfileLabel(profileSelect.value);
  document.querySelector("#plainExplanation").textContent = scenario.explain;
  renderAudiencePanel();
  document.querySelector("#learningOSPanel").innerHTML = scenario.os.map(([tag, body]) => `
    <article>
      <span>${tag}</span>
      <strong>${body.split(".")[0]}</strong>
      <p>${body}</p>
    </article>
  `).join("");
  sourceLedger.innerHTML = `
    <article>
      <strong>${say("Registro de fuentes y confianza", "Source and Trust Ledger")}</strong>
      <p>${scenario.sources}</p>
      <div class="tag-row">
        <span>${say("fuentes oficiales", "official sources")}</span><span>${say("reportes expertos", "expert reports")}</span><span>${say("datos locales requeridos", "local data required")}</span>
      </div>
    </article>
    <article>
      <strong>${say("Política de evidencia", "Evidence policy")}</strong>
      <p>${say("El demo separa conocimiento de sistema de afirmaciones que requieren citas actuales regionales, clínicas o electorales.", "The demo separates system-level knowledge from claims that require current regional, clinical, or election-specific citations.")}</p>
      <div class="tag-row">
        <span>${say("hecho", "fact")}</span><span>${say("inferencia", "inference")}</span><span>${say("incertidumbre", "uncertainty")}</span>
      </div>
    </article>
  `;
  document.querySelector("#simpleAnalogy").textContent = scenario.core;
  document.querySelector("#localAnalogy").textContent = scenario.example;
  document.querySelector("#readingMap").innerHTML = scenario.os.map(([tag, body]) => `
    <div><strong>${tag}</strong><p>${body}</p></div>
  `).join("");
  document.querySelector("#understandingScore").textContent = say("100% señal", "100% signal");
  renderStack(document.querySelector("#clinicOutput"), scenario.clinic.map(([title, body]) => ({
    title,
    body,
    tags: [say("diagnóstico", "diagnosis"), say("comprensión", "comprehension"), scenario.id]
  })));
  renderStack(document.querySelector("#proofOutput"), scenario.proof.map(([title, body]) => ({
    title,
    body,
    tags: [say("evidencia", "evidence"), say("con fuentes", "source-aware"), say("riesgo", "risk")]
  })));
  document.querySelector("#memoryLabel").textContent = say("Punto débil: precisión", "Weak point: precision");
  document.querySelector("#examOutput").innerHTML = scenario.exam.map((q, index) => `
    <article class="question">
      <strong>${say("Pregunta de examen", "Exam question")} ${index + 1}</strong>
      <p>${q}</p>
    </article>
  `).join("");
  renderFlashcards([
    [say("Idea central", "Core idea"), scenario.core],
    [say("Fuente clave", "Key source"), scenario.sources.split(";")[0] || scenario.sources],
    [say("Mito a corregir", "Myth to correct"), scenario.myths[0]?.[1] || scenario.example],
    [say("Cómo enseñarlo", "How to teach it"), scenario.lesson]
  ]);
  document.querySelector("#lessonOutput").innerHTML = `
    <article class="lesson-block">
      <strong>${say("Plan de clase", "Lesson plan")}: ${scenario.title}</strong>
      <p><b>${say("Audiencia", "Audience")}:</b> ${say("Demo para jurado", "Jury demo")} · ${say("Español", "English")} · ${translatedProfileLabel(profileSelect.value)}</p>
      <ol>
        <li><b>${say("Gancho", "Hook")}:</b> ${say("presenta una decisión de alto impacto donde una respuesta genérica no basta.", "present a high-stakes decision where a generic answer is not enough.")}</li>
        <li><b>${say("Mapa", "Map")}:</b> ${say("muestra el mapa mental editable y el registro de evidencia.", "show the editable mind map and the evidence ledger.")}</li>
        <li><b>${say("Clínica", "Clinic")}:</b> ${say("pide a la persona que explique de regreso y revele un malentendido.", "ask the learner to explain back and expose one misconception.")}</li>
        <li><b>${say("Práctica", "Practice")}:</b> ${say("responde preguntas de examen y defiende afirmaciones con fuentes.", "answer exam questions and defend claims with sources.")}</li>
        <li><b>${say("Enseñar", "Teach")}:</b> ${say("exporta una clase, informe o taller reutilizable.", "export a reusable class, briefing, or workshop activity.")}</li>
      </ol>
      <p><b>${say("Actividad distintiva", "Signature activity")}:</b> ${scenario.lesson}</p>
    </article>
  `;
  document.querySelector("#demoScriptOutput").innerHTML = `
    <article class="demo-script-card">
      <strong>${say("Guion de demo de 3 minutos", "3-minute demo script")}</strong>
      <ol>
        <li><b>${say("Problema", "Problem")}:</b> ${say(`${scenario.title} es complejo, controvertido y demasiado importante para una respuesta superficial.`, `${scenario.title} is complex, controversial, and too important for a shallow answer.`)}</li>
        <li><b>${say("Entrada", "Input")}:</b> ${say("elige un tema demo precargado y abre un espacio persistente de aprendizaje.", "choose the preloaded demo topic and open a persistent learning workspace.")}</li>
        <li><b>${say("Diferenciador", "Differentiator")}:</b> ${say("muestra fuentes, radar de mitos, mapa mental, memoria de examen, plan visual y salida para enseñar.", "show source ledger, myth radar, mind map, exam memory, visual plan, and teach-back output.")}</li>
        <li><b>${say("Prueba", "Proof")}:</b> ${say("cambia entre los tres temas para probar que la app cambia estructura, no solo etiquetas.", "switch between the three topics to prove the app changes structure, not just labels.")}</li>
        <li><b>${say("Cierre", "Close")}:</b> ${say("exporta un paquete de estudio o enseñanza que se puede compartir.", "export a study or teaching pack that can be shared.")}</li>
      </ol>
    </article>
  `;
  document.querySelector("#mediaModeLabel").textContent = `${say("Visuales de aprendizaje", "Learning visuals")}: ${scenario.title}`;
  document.querySelector("#mediaCards").innerHTML = scenarioMediaCards(scenario);
  document.querySelector("#storyboardOutput").innerHTML = scenario.storyboard.map(([title, body]) => `
    <article class="story-step"><strong>${title}</strong><p>${body}</p></article>
  `).join("");
  document.querySelector("#visualBoard").innerHTML = scenarioVisualSvg(scenario);
  mythCheckOutput.innerHTML = `
    <article>
      <strong>${say("Radar de mitos, noticias falsas y verdades a medias", "Myths, fake news, and half-truths radar")}</strong>
      <p>${say("Este tema merece contraste. LearnBridge separa evidencia fuerte, evidencia limitada, opinión, publicidad, anécdota y afirmaciones virales.", "This topic deserves contrast. LearnBridge separates strong evidence, limited evidence, opinion, advertising, anecdote, and viral claims.")}</p>
    </article>
    <div class="myth-grid">
      ${scenario.myths.map(([title, body]) => `<div><strong>${title}</strong><p>${body}</p></div>`).join("")}
    </div>
  `;
  renderScenarioMindMap(scenario);
  renderKidGames(scenario.title);
  renderStudySchedule(scenario.title);
  document.querySelector("#kidIdea").textContent = say(`Imagina ${scenario.title} como una misión: encuentra la afirmación, prueba la evidencia, dibuja el sistema y explica la decisión.`, `Imagine ${scenario.title} as a mission: find the claim, test the evidence, draw the system, and explain the decision.`);
  document.querySelector("#kidMission").textContent = say("Misión: dibuja una imagen que muestre la cadena de causa y efecto más importante del tema.", "Mission: draw one picture that shows the most important cause-and-effect chain in this topic.");
  stateLabel.textContent = say("Ruta creada", "Path built");
  localizeGeneratedOutput();
  addSectionListenButtons();
  persistProject(say("demo cargado", "demo scenario loaded"));
  updateProgress();
}

function topicMediaKind(topic, material) {
  const t = `${topic} ${material}`.toLowerCase();
  if (/derivative|integral|formula|math|calculus|ecuaci|formula|derivada|integral/.test(t)) return "math";
  if (/recipe|cook|pie|cake|lime|receta|cocina|pastel|pay|limon|lima/.test(t)) return "recipe";
  if (/universe|solar|galaxy|planet|star|space|universo|galaxia|planeta|sistema solar/.test(t)) return "space";
  if (/book|reading|novel|shakespeare|romeo|juliet|libro|lectura|novela/.test(t)) return "book";
  return "general";
}

function visualSvg(kind, topic) {
  if (kind === "math") {
    return `<svg viewBox="0 0 900 320" role="img" aria-label="Math visual board">
      <rect width="900" height="320" fill="#101412"/>
      <path d="M40 250 C160 250 180 80 300 80 S450 250 570 250 S720 80 860 80" fill="none" stroke="#d4a93f" stroke-width="5"/>
      <line x1="40" y1="250" x2="860" y2="250" stroke="#fbf7ef" stroke-width="2" opacity=".55"/>
      <line x1="90" y1="285" x2="90" y2="35" stroke="#fbf7ef" stroke-width="2" opacity=".55"/>
      <line x1="455" y1="92" x2="560" y2="168" stroke="#b94f39" stroke-width="5"/>
      <circle cx="455" cy="92" r="8" fill="#b94f39"/>
      <text x="128" y="58" fill="#fbf7ef" font-size="28" font-weight="700">Derivative = slope at this instant</text>
      <text x="128" y="292" fill="#fbf7ef" font-size="20">Integral = area accumulated under the curve</text>
    </svg>`;
  }
  if (kind === "recipe") {
    return `<svg viewBox="0 0 900 320" role="img" aria-label="Recipe visual board">
      <rect width="900" height="320" fill="#fffaf0"/>
      <circle cx="190" cy="160" r="82" fill="#e9d18d" stroke="#b94f39" stroke-width="6"/>
      <circle cx="190" cy="160" r="52" fill="#f7f0c5"/>
      <path d="M420 95 h210 l-28 145 H448 Z" fill="#dceee5" stroke="#315e8a" stroke-width="5"/>
      <path d="M680 80 c40 20 52 60 18 92" fill="none" stroke="#2f7d5f" stroke-width="9"/>
      <text x="80" y="292" fill="#16201d" font-size="22" font-weight="700">Step-by-step visual cooking mode</text>
      <text x="430" y="65" fill="#16201d" font-size="24">ingredients → mix → bake → serve</text>
    </svg>`;
  }
  if (kind === "space") {
    return `<svg viewBox="0 0 900 320" role="img" aria-label="Space visual board">
      <rect width="900" height="320" fill="#07111f"/>
      <circle cx="450" cy="160" r="38" fill="#d4a93f"/>
      <ellipse cx="450" cy="160" rx="120" ry="62" fill="none" stroke="#fbf7ef" opacity=".45"/>
      <ellipse cx="450" cy="160" rx="230" ry="110" fill="none" stroke="#fbf7ef" opacity=".35"/>
      <ellipse cx="450" cy="160" rx="340" ry="150" fill="none" stroke="#fbf7ef" opacity=".25"/>
      <circle cx="570" cy="160" r="14" fill="#315e8a"/>
      <circle cx="680" cy="102" r="20" fill="#b94f39"/>
      <circle cx="255" cy="218" r="18" fill="#2f7d5f"/>
      <text x="46" y="58" fill="#fbf7ef" font-size="28" font-weight="700">Visual scale + motion + relationship</text>
      <text x="46" y="286" fill="#fbf7ef" font-size="20">A topic about space should move, orbit, compare, and zoom.</text>
    </svg>`;
  }
  if (kind === "book") {
    return `<svg viewBox="0 0 900 320" role="img" aria-label="Book visual board">
      <rect width="900" height="320" fill="#f7efe2"/>
      <path d="M160 70 h240 c38 0 58 20 58 54 v145 c0-28-22-44-58-44H160Z" fill="#fffaf0" stroke="#315e8a" stroke-width="5"/>
      <path d="M458 124 c0-34 20-54 58-54h224v155H516c-36 0-58 16-58 44Z" fill="#fffaf0" stroke="#315e8a" stroke-width="5"/>
      <line x1="215" y1="125" x2="360" y2="125" stroke="#b94f39" stroke-width="5"/>
      <line x1="215" y1="158" x2="382" y2="158" stroke="#b94f39" stroke-width="5"/>
      <line x1="535" y1="125" x2="680" y2="125" stroke="#2f7d5f" stroke-width="5"/>
      <line x1="535" y1="158" x2="700" y2="158" stroke="#2f7d5f" stroke-width="5"/>
      <text x="130" y="292" fill="#16201d" font-size="22" font-weight="700">Plot → conflict → theme → teachable interpretation</text>
    </svg>`;
  }
  return `<svg viewBox="0 0 900 320" role="img" aria-label="General visual board">
    <rect width="900" height="320" fill="#f7efe2"/>
    <circle cx="180" cy="160" r="75" fill="#dceee5" stroke="#2f7d5f" stroke-width="6"/>
    <rect x="370" y="82" width="170" height="150" rx="8" fill="#fffaf0" stroke="#315e8a" stroke-width="6"/>
    <path d="M650 230 L730 85 L810 230 Z" fill="#f3dc95" stroke="#b94f39" stroke-width="6"/>
    <text x="70" y="292" fill="#16201d" font-size="22" font-weight="700">Every explanation gets a visual model, examples, and actions.</text>
  </svg>`;
}

function renderMedia(topic, material) {
  const kind = topicMediaKind(topic, material);
  const kindLabels = isSpanish()
    ? { math: "matemáticas", recipe: "receta", space: "espacio", book: "lectura", general: "general" }
    : { math: "math", recipe: "recipe", space: "space", book: "book", general: "general" };
  document.querySelector("#mediaModeLabel").textContent = isSpanish() ? `Visuales de aprendizaje: ${kindLabels[kind]}` : `Learning visuals: ${kindLabels[kind]}`;
  document.querySelector("#visualBoard").innerHTML = visualSvg(kind, topic);
  const packs = isSpanish() ? {
    math: [
      ["Gráfica", "Muestra curva, pendiente, tangente y área para que la fórmula se vea."],
      ["Ejemplo resuelto", "Divide un ejercicio en pasos numerados con verificación."],
      ["Mini video", "Anima el punto en la curva mientras cambia la derivada."]
    ],
    recipe: [
      ["Ingredientes", "Tarjetas visuales de cantidades, sustituciones y orden de preparación."],
      ["Fotos por paso", "Muestra cada fase: preparar, mezclar, calentar, reposar y servir."],
      ["Clip de técnica", "Escena breve sobre textura, tiempos y errores comunes."]
    ],
    space: [
      ["Modelo a escala", "Compara planetas, distancias o galaxias con niveles de zoom."],
      ["Movimiento", "Órbitas animadas y flechas de causa-efecto."],
      ["Observación", "Conecta imágenes con lo que miden telescopios o satélites."]
    ],
    book: [
      ["Mapa de personajes", "Red visual de personajes, motivos, conflictos y cambios."],
      ["Tablero temático", "Símbolos, imágenes recurrentes y escenas clave agrupadas por significado."],
      ["Diapositivas de clase", "Paquete visual para explicar el libro sin quedarse en resumen plano."]
    ],
    general: [
      ["Diagrama", "Modelo visual de la idea y sus partes."],
      ["Galería de ejemplos", "Fotos, bocetos o íconos con casos reales."],
      ["Secuencia de acción", "Guía interactiva o guion de video paso a paso."]
    ]
  } : {
    math: [
      ["Graph", "Show the curve, slope, tangent line, and area so the formula becomes visible."],
      ["Worked example", "Break one exercise into numbered steps with checks after each step."],
      ["Mini video", "Animate the point moving on the curve while the derivative changes."]
    ],
    recipe: [
      ["Ingredients", "Visual cards for quantities, substitutions, and preparation order."],
      ["Step photos", "Show each cooking phase: prep, mix, heat, rest, serve."],
      ["Technique clip", "Short video scene for texture, timing, and common mistakes."]
    ],
    space: [
      ["Scale model", "Compare planets, distances, or galaxies with zoom levels."],
      ["Motion", "Animated orbits and cause-effect arrows."],
      ["Observation", "Connect images to what telescopes or satellites actually measure."]
    ],
    book: [
      ["Character map", "Visual network of characters, motives, conflicts, and changes."],
      ["Theme board", "Symbols, recurring images, and key scenes grouped by meaning."],
      ["Teaching slides", "A visual class pack for explaining the book without a flat summary."]
    ],
    general: [
      ["Diagram", "A visual model of the idea and its parts."],
      ["Example gallery", "Photos, sketches, or icons showing real-world cases."],
      ["Action sequence", "A step-by-step interactive guide or video outline."]
    ]
  };
  document.querySelector("#mediaCards").innerHTML = packs[kind].map((item, index) => `
    <article class="media-card">
      <span class="media-icon">${index + 1}</span>
      <strong>${item[0]}</strong>
      <p>${item[1]}</p>
    </article>
  `).join("");
  const story = isSpanish() ? [
    ["Escena 1", `Abre con la pregunta del usuario: ${topic}. Muestra el problema como visual real, no como párrafo.`],
    ["Escena 2", "Acerca el mecanismo: partes, movimiento, secuencia o conflicto."],
    ["Escena 3", "Pausa interactiva: resolver un paso, predecir el resultado o explicar la imagen."],
    ["Escena 4", "Cierra con enseñanza: el usuario ya puede explicarlo a alguien más."]
  ] : [
    ["Scene 1", `Open with the learner's question: ${topic}. Show the problem as a real-life visual, not a paragraph.`],
    ["Scene 2", "Zoom into the mechanism: highlight the parts, movement, sequence, or conflict."],
    ["Scene 3", "Pause for an interaction: solve a step, predict the next result, or explain the image."],
    ["Scene 4", "End with teach-back: the learner can now explain it to someone else."]
  ];
  document.querySelector("#storyboardOutput").innerHTML = story.map((item) => `
    <article class="story-step">
      <strong>${item[0]}</strong>
      <p>${item[1]}</p>
    </article>
  `).join("");
}

function switchToTab(tabName) {
  const tab = document.querySelector(`.tab[data-tab="${tabName}"]`);
  if (tab) tab.click();
}

function renderGuidedDemoStep(index = guidedDemoIndex, shouldSwitch = true) {
  const ui = currentUi();
  const steps = ui.demoSteps || [];
  if (!steps.length) return;
  guidedDemoIndex = Math.max(0, Math.min(index, steps.length - 1));
  const [title, body] = steps[guidedDemoIndex];
  const copyNode = document.querySelector("#demoStageCopy");
  if (copyNode) copyNode.innerHTML = `<strong>${title}:</strong> ${body}`;
  document.querySelectorAll(".demo-step").forEach((button, buttonIndex) => {
    button.classList.toggle("active", buttonIndex === guidedDemoIndex);
    button.setAttribute("aria-current", buttonIndex === guidedDemoIndex ? "step" : "false");
  });
  if (shouldSwitch) {
    switchToTab(demoTabSequence[guidedDemoIndex] || "understand");
    document.querySelector(".workspace")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function startGuidedDemo() {
  loadWinningDemo();
  guidedDemoIndex = 0;
  renderGuidedDemoStep(0, true);
}

function nextGuidedDemoStep() {
  if (!document.body.classList.contains("workspace-started")) {
    startGuidedDemo();
    return;
  }
  renderGuidedDemoStep((guidedDemoIndex + 1) % demoTabSequence.length, true);
}

function renderMindMap(topic, material, audience) {
  const nodes = isSpanish() ? [
    { title: topic, body: "Tema central. Edita este bloque para nombrar el enfoque exacto del proyecto.", links: [["understand", "explicación"], ["proof", "fuentes"]] },
    { title: material === "Book" ? "Obra completa" : "Fundamentos", body: material === "Book" ? "Argumento, voces, conflicto, tema, símbolos y contexto." : "Definiciones, causas, efectos, ejemplos y límites de la idea.", links: [["clinic", "malentendidos"], ["exam", "práctica"]] },
    { title: "Cuadro sinóptico", body: "Vista jerárquica: idea principal, subtemas, relaciones y conclusiones.", links: [["media", "visual"], ["teach", "clase"]] },
    { title: "Fuentes y evidencia", body: "Cada afirmación importante debe guardar fuente, tipo de evidencia y nivel de confianza.", links: [["proof", "fuentes"], ["tools", "notas"]] },
    { title: "Mitos y falsas creencias", body: "Cuando el tema lo amerite, contrasta creencias populares contra evidencia verificable.", links: [["proof", "mitos"], ["media", "comparar"]] },
    { title: audience.output, body: say(`Salida adaptada para ${audience.title.toLowerCase()}: ${audience.focus}`, `Output adapted for ${audience.title.toLowerCase()}: ${audience.focus}`), links: [["teach", say("enseñar", "teach")], ["planner", say("agenda", "planner")]] }
  ] : [
    { title: topic, body: "Central topic. Edit this block to name the exact project focus.", links: [["understand", "explanation"], ["proof", "sources"]] },
    { title: material === "Book" ? "Whole work" : "Foundations", body: material === "Book" ? "Plot or argument, voices, conflict, themes, symbols, and context." : "Definitions, causes, effects, examples, and limits of the idea.", links: [["clinic", "misconceptions"], ["exam", "practice"]] },
    { title: "Synoptic chart", body: "Hierarchical view: main idea, subtopics, relationships, and conclusions.", links: [["media", "visual"], ["teach", "lesson"]] },
    { title: "Sources and evidence", body: "Each important claim should keep source, evidence type, and confidence level.", links: [["proof", "sources"], ["tools", "notes"]] },
    { title: "Myths and false beliefs", body: "When relevant, contrast popular beliefs with verifiable evidence.", links: [["proof", "myths"], ["media", "compare"]] },
    { title: audience.output, body: `Output adapted for ${audience.title.toLowerCase()}: ${audience.focus}`, links: [["teach", "teach"], ["planner", "agenda"]] }
  ];

  mindMapOutput.innerHTML = nodes.map((node, index) => `
    <article class="mind-node ${index === 0 ? "root" : ""}" contenteditable="true" data-node="${index}">
      <strong>${node.title}</strong>
      <p>${node.body}</p>
      <div class="node-links" contenteditable="false">
        ${node.links.map(([tab, label]) => normalizedNodeLink(tab, label)).map(([tab, label]) => `<button type="button" class="node-link" data-jump="${tab}">${label}</button>`).join("")}
      </div>
    </article>
  `).join("");
}

function topicNeedsMythCheck(topic, material) {
  const normalized = `${topic} ${material}`.toLowerCase();
  if (/pitagoras|pythagorean|teorema|ecuacion exacta|derivada basica|integral basica/.test(normalized)) return false;
  return /aceite|coco|salud|dieta|nutricion|politic|politica|sociedad|econom|finanz|crypto|vacuna|clima|historia|religion|superacion|motivacion|psicolog|suplement|receta|medicina|cura|energia|conspir/.test(normalized);
}

function renderMythCheck(topic, material) {
  if (!topicNeedsMythCheck(topic, material)) {
    mythCheckOutput.innerHTML = `
      <article>
        <strong>${say("Chequeo de mitos no prioritario", "Myth check not prioritized")}</strong>
        <p>${say("Para este tema no se detecta alto riesgo de fake news o creencias populares engañosas. Aun así, el paquete conserva fuentes y límites de confianza.", "This topic does not show high risk of fake news or misleading popular beliefs. Even so, the pack keeps sources and confidence limits.")}</p>
      </article>
    `;
    return;
  }

  const normalized = topic.toLowerCase();
  const exampleClaim = isSpanish() ? (/coco|aceite/.test(normalized)
    ? "El aceite de coco cura casi todo o siempre es más saludable que cualquier otra grasa."
    : /superacion|motivacion/.test(normalized)
      ? "Una técnica popular garantiza éxito personal para cualquiera si se aplica igual."
      : /politic|politica|sociedad|econom/.test(normalized)
        ? "Una explicación viral reduce un problema complejo a un solo culpable o una sola causa."
        : "Una creencia popular sobre el tema circula sin separar evidencia, opinión y anécdota.")
    : (/coco|aceite/.test(normalized)
      ? "Coconut oil cures almost everything or is always healthier than any other fat."
      : /superacion|motivacion/.test(normalized)
        ? "A popular technique guarantees personal success for anyone if applied the same way."
        : /politic|politica|sociedad|econom/.test(normalized)
          ? "A viral explanation reduces a complex problem to one culprit or one cause."
          : "A popular belief about the topic circulates without separating evidence, opinion, and anecdote.");

  mythCheckOutput.innerHTML = `
    <article>
      <strong>${say("Radar de mitos, fake news y medias verdades", "Myths, fake news, and half-truths radar")}</strong>
      <p>${say("Este tema amerita contraste. LearnBridge debe separar evidencia fuerte, evidencia limitada, opinión, publicidad, anécdota y afirmaciones virales.", "This topic deserves contrast. LearnBridge should separate strong evidence, limited evidence, opinion, advertising, anecdote, and viral claims.")}</p>
      <div class="tag-row"><span class="tag">${say("aplica", "applies")}</span><span class="tag">${say("contrastar", "contrast")}</span><span class="tag">${say("guardar fuentes", "save sources")}</span></div>
    </article>
    <article>
      <strong>${say("Creencia popular a revisar", "Popular belief to review")}</strong>
      <p>${exampleClaim}</p>
      <div class="tag-row"><span class="tag">${say("posible exageración", "possible exaggeration")}</span><span class="tag">${say("requiere fuente", "needs source")}</span></div>
    </article>
    <article>
      <strong>${say("Cómo lo decidiría la app", "How the app would decide")}</strong>
      <p>${say("Debe pedir o buscar fuentes primarias, revisiones, datos oficiales o autores reconocidos; luego mostrar qué está probado, qué es plausible, qué es controvertido y qué no tiene fundamento suficiente.", "It should ask for or search primary sources, reviews, official data, or recognized authors; then show what is proven, plausible, controversial, or insufficiently supported.")}</p>
      <div class="tag-row"><span class="tag">${say("probado", "proven")}</span><span class="tag">${say("controvertido", "controversial")}</span><span class="tag">${say("sin soporte", "unsupported")}</span></div>
    </article>
  `;
}

function buildSharePayload() {
  return {
    app: "LearnBridge",
    title: projectTitleInput.value,
    topic: topicInput.value,
    material: materialSelect.value,
    language: languageSelect.value,
    level: levelSelect.value,
    profile: profileSelect.value,
    explanation: document.querySelector("#plainExplanation").textContent,
    notes: notesInput.value,
    sources: sourceLedger.textContent,
    mythCheck: mythCheckOutput.textContent,
    mindMap: mindMapOutput.textContent,
    createdAt: new Date().toISOString()
  };
}

function createShareUrl() {
  const json = JSON.stringify(buildSharePayload());
  const encoded = btoa(unescape(encodeURIComponent(json)));
  return `${location.origin}${location.pathname}#share=${encoded}`;
}

async function shareProject() {
  const url = createShareUrl();
  const title = projectTitleInput.value || "LearnBridge project";
  if (navigator.share) {
    try {
      await navigator.share({ title, text: "LearnBridge study pack", url });
      persistProject("share link opened");
      return;
    } catch {
      // Continue with clipboard fallback.
    }
  }
  try {
    await navigator.clipboard.writeText(url);
    accountStatus.textContent = "Share link copied to clipboard.";
  } catch {
    accountStatus.textContent = url;
  }
  addChatMessage(say("Enlace para compartir generado y guardado en el historial del proyecto.", "Share link generated and saved in the project history."));
  persistProject("share link generated");
}

function loadSharedProjectFromHash() {
  if (!location.hash.startsWith("#share=")) return false;
  try {
    const payload = JSON.parse(decodeURIComponent(escape(atob(location.hash.replace("#share=", "")))));
    projectTitleInput.value = payload.title || "Shared LearnBridge project";
    topicInput.value = payload.topic || "";
    materialSelect.value = payload.material || "Concept";
    languageSelect.value = payload.language || "Spanish";
    levelSelect.value = payload.level || "Adult / casual learner";
    profileSelect.value = payload.profile || "General learner";
    notesInput.value = payload.notes || "";
    sourceInput.value = payload.sources ? `Shared source ledger:\n${payload.sources}` : sourceInput.value;
    applyAudienceMode();
    applyUiLanguage();
    if (topicInput.value.trim()) buildPath();
    addChatMessage("Shared LearnBridge project loaded from link.");
    return true;
  } catch {
    accountStatus.textContent = "Shared link could not be opened.";
    return false;
  }
}

function renderKidGames(topic) {
  document.querySelector("#kidQuiz").textContent = say(`Lucas pregunta: ¿cuál es la idea más importante de "${topic}"?`, `Professor Lucas asks: what is the most important idea in "${topic}"?`);
  document.querySelector("#kidPuzzle").textContent = say(`Ella quiere ordenar estas piezas para que ${topic} sea fácil de explicar.`, `Ella wants these pieces in order so ${topic} becomes easy to explain.`);
  document.querySelector("#kidMaze").textContent = say(`Milo debe llevar notas sobre ${topic} desde Inicio hasta Meta.`, `Milo must carry notes about ${topic} from Start to Goal.`);
  document.querySelector("#kidMatch").textContent = say(`Dina une palabras de ${topic} con ejemplos simples.`, `Dina matches words from ${topic} with simple examples.`);
  document.querySelector("#puzzleTiles").innerHTML = (isSpanish() ? ["Mira", "Encuentra", "Prueba", "Explica"] : ["Look", "Find", "Try", "Explain"]).map((word) => `<span>${word}</span>`).join("");
  document.querySelector("#matchGame").innerHTML = (isSpanish() ? ["Idea", "Ejemplo", "Pregunta", "Respuesta"] : ["Idea", "Example", "Question", "Answer"]).map((word) => `<span>${word}</span>`).join("");
  const maze = ["S", "", "wall", "", "", "", "wall", "", "wall", "", "wall", "", "", "", "", "", "wall", "", "wall", "wall", "", "wall", "", "", "", "", "", "wall", "", "G"];
  document.querySelector("#mazeBoard").innerHTML = maze.map((cell) => `<span class="${cell === "wall" ? "wall" : ""}">${cell === "wall" ? "" : cell}</span>`).join("");
}

function renderStudySchedule(topic) {
  const minutes = Math.max(1, Number(studyMinutesInput.value) || 25);
  const blocks = isSpanish() ? [
    ["0-20%", "Entender la idea central y el tablero visual."],
    ["20-45%", "Practicar con un ejemplo, gráfica, receta, escena o diagrama."],
    ["45-70%", "Preguntar dudas en el chat en vivo y escribir notas personales."],
    ["70-90%", "Simulación de examen: responder sin mirar."],
    ["90-100%", "Enseñanza final: explicarlo a alguien más."]
  ] : [
    ["0-20%", "Understand the core idea and visual board."],
    ["20-45%", "Practice with one example, graph, recipe step, scene, or diagram."],
    ["45-70%", "Ask doubts in live chat and write personal notes."],
    ["70-90%", "Exam simulation: answer without looking."],
    ["90-100%", "Teach-back: explain it to someone else."]
  ];
  studySchedule.innerHTML = blocks.map((item) => `<div><b>${item[0]} ${say("de", "of")} ${minutes} min:</b> ${item[1]}</div>`).join("");
}

function addChatMessage(body, type = "assistant") {
  const item = document.createElement("div");
  item.className = `chat-message ${type}`;
  item.textContent = body;
  chatLog.appendChild(item);
  chatLog.scrollTop = chatLog.scrollHeight;
  if (type === "assistant" && autoSpeakToggle.checked) {
    speakText(body);
  }
}

function answerLiveQuestion() {
  const question = chatInput.value.trim();
  if (!question) return;
  const topic = cleanTopic();
  const details = audienceDetails();
  addChatMessage(question, "user");
  const activeTab = document.querySelector(".tab.active")?.dataset.tab || "understand";
  const response = say(`Sobre "${topic}" en la sección "${activeTab}", modo ${details.title}: respondería con ${details.output}. En esta demo el chat toma en cuenta el perfil, tus notas, el archivo cargado y el módulo exacto donde interrumpiste.`, `About "${topic}" in the "${activeTab}" section, ${details.title}: I would respond with ${details.output}. In this demo the chat already considers the profile, notes, uploaded file, and exact module where you interrupted.`);
  addChatMessage(response);
  notesInput.value += say(`\nPregunta en vivo: ${question}\nRespuesta: ${response}\n`, `\nLive question: ${question}\nAnswer: ${response}\n`);
  persistProject(say("chat en vivo guardado", "live chat saved"));
  updateProgress();
  chatInput.value = "";
}

function buildPath() {
  const topic = cleanTopic();
  if (!topic) return;
  const scenario = activeDemoScenario();
  if (scenario) {
    renderScenarioPath(scenario);
    return;
  }
  document.body.classList.add("workspace-started");
  const material = materialSelect.value;
  const source = sourceInput.value.trim();
  const lang = languageSelect.value;
  const place = inferContext(topic);
  const level = levelSelect.value;
  const profile = profileSelect.value;
  const levelLabel = translatedLevelLabel(level);
  const profileLabel = translatedProfileLabel(profile);
  const audience = audienceDetails(level, profile);
  const c = copy();
  const answer = answerInput.value.trim();
  const score = answer ? keywordScore(answer, topic) : 42;
  const weakPoint = score > 68 ? "precision" : "core idea";

  document.querySelector("#explainTitle").textContent = `${c.titlePrefix}: ${topic}`;
  document.querySelector("#readingLevel").textContent = profileLabel;
  document.querySelector("#plainExplanation").textContent = material === "Book"
    ? say(`Modo comprensión lectora: LearnBridge trata ${topic} como una obra completa, no como una cita para resumir. Construye mapa de argumento, personajes o voces, conflictos centrales, temas, símbolos, contexto y lo que el usuario debe poder explicar después de leer.`, `Reading comprehension mode: LearnBridge treats ${topic} as a complete work, not a quote to summarize. It builds a map of plot or argument, characters or voices, central conflicts, themes, symbols, context, and what a learner should be able to explain after reading.`)
    : c.explain(topic, levelLabel, profileLabel);
  renderAudiencePanel();
  renderLearningOS(topic, material, source, audience, score, weakPoint);
  document.querySelector("#simpleAnalogy").textContent = `${audience.title}: ${c.pears(topic)} ${say("La primera salida debe ser:", "The first output should be:")} ${audience.output}.`;
  document.querySelector("#localAnalogy").textContent = `${c.local(topic, place, profileLabel)} ${say("Herramientas útiles para este perfil:", "Useful tools for this profile:")} ${audience.tools.join(", ")}.`;
  document.querySelector("#readingMap").innerHTML = material === "Book" ? [
    ["Whole-work map", `What happens, why it matters, and how each major part changes the reader's understanding of ${topic}.`],
    ["People and conflict", `Main characters, motivations, relationships, power dynamics, and the central tension that drives the work.`],
    ["Themes and symbols", `Recurring ideas, images, moral questions, and phrases that a learner can use to defend an interpretation.`],
    ["Context", source ? `Source notes: ${source}` : "Author, period, genre, audience, and why the work still matters today."],
    ["Teach-back goal", `The learner should be able to explain the book to another person without memorizing a canned summary.`],
    ["Copyright-safe mode", "For public-domain works, full study guides are possible; for modern books, use user-provided excerpts or notes and avoid reproducing the full text."]
  ].map(([title, body]) => `<div><strong>${title}</strong><p>${body}</p></div>`).join("") : "";

  document.querySelector("#understandingScore").textContent = answer ? `${score}% signal` : "Needs answer";
  renderStack(document.querySelector("#clinicOutput"), [
    {
      title: c.understood,
      body: answer
        ? `Your explanation shows a starting model of ${topic}. It contains enough language to begin diagnosis, so LearnBridge can respond to your thinking instead of repeating generic content.`
        : material === "Book"
          ? `Write what you think the book is about. The clinic will check whether you understood plot, conflict, theme, and meaning instead of only remembering events.`
          : `Write a short explanation in your own words. The clinic is designed to diagnose the learner, not just the topic.`,
      tags: [lang, level, profile, material]
    },
    {
      title: c.gap,
      body: answer
        ? material === "Book"
          ? `The likely weak point is ${weakPoint}. In reading, common gaps are confusing plot with theme, naming characters without explaining motivation, or missing how the ending changes the meaning.`
          : `The likely weak point is ${weakPoint}. A learner may remember vocabulary without connecting cause, consequence, and example.`
        : `No learner answer yet. The most common risk is passive reading: the learner feels the explanation is clear but cannot reproduce it.`,
      tags: ["diagnosis", "misconception", "reading comprehension"]
    },
    {
      title: c.correction,
      body: `Try this rule: if you cannot explain ${topic} through one concrete example from ${place}, the idea is still abstract. Rebuild it as "cause -> visible effect -> practical decision", then shape it as ${audience.output}.`,
      tags: ["cause", "effect", audience.key]
    }
  ]);

  renderStack(document.querySelector("#proofOutput"), [
    {
      title: "Claim",
      body: `${topic} should be explained with a clear boundary between what is directly known, what is inferred, and what remains uncertain.`,
      tags: ["fact", "inference", "uncertainty"]
    },
    {
      title: "Defense note",
      body: material === "Book"
        ? `If challenged, defend the interpretation by pointing to scenes, character choices, repeated symbols, structure, and historical context. Do not only say what happened; explain what the work makes the reader understand.`
        : `If challenged, defend the explanation by naming the source type you would need: measurement, historical record, textbook definition, peer-reviewed study, or direct observation. Then show how it supports the ${audience.title.toLowerCase()} output without pretending the analogy is perfect.`,
      tags: ["source-aware", audience.key]
    },
    {
      title: "Confidence",
      body: `High for the teaching structure; variable for topic-specific details until connected to live citations or a course/source pack. The production version should attach references and distinguish trusted curriculum from general web material.`,
      tags: ["prototype", "next API step"]
    }
  ]);

  document.querySelector("#memoryLabel").textContent = `Weak point: ${weakPoint}`;
  document.querySelector("#examOutput").innerHTML = [
    material === "Book" ? `Explain what ${topic} is really about in one sentence, beyond the plot.` : `Explain ${topic} in one sentence without using technical jargon.`,
    material === "Book" ? `Name the central conflict and why it matters.` : `Give one example from ${place} that shows the idea in real life.`,
    material === "Book" ? `Choose one character or voice and explain their motivation.` : `What is one common misconception about ${topic}, and how would you correct it?`,
    material === "Book" ? `What theme, symbol, or scene would you use to defend your interpretation?` : `How would your explanation change for a ${profile.toLowerCase()} versus a university professor?`,
    material === "Book" ? `How would you teach this work to someone who has never read it?` : `What evidence would you ask for before making a strong public claim about ${topic}?`,
    `Create one ${audience.output} for ${topic} and name the tool you would use first: ${audience.tools[0]}.`
  ].map((q, index) => `
    <article class="question">
      <strong>${c.exam} ${index + 1}</strong>
      <p>${q}</p>
    </article>
  `).join("");
  renderFlashcards([
    [say("Definición útil", "Useful definition"), say(`Explica ${topic} en una frase que alguien pueda repetir sin memorizar.`, `Explain ${topic} in one sentence someone can repeat without memorizing.`)],
    [say("Ejemplo real", "Real example"), say(`Conecta el tema con ${place} o con una escena concreta.`, `Connect the topic to ${place} or a concrete scene.`)],
    [say("Prueba necesaria", "Needed proof"), say("Nombra la fuente, dato o evidencia que haría confiable la respuesta.", "Name the source, data, or evidence that would make the answer trustworthy.")],
    [say("Enseñanza final", "Teach-back"), say(`Crea ${audience.output} y úsalo para enseñarlo a otra persona.`, `Create ${audience.output} and use it to teach someone else.`)]
  ]);

  document.querySelector("#lessonOutput").innerHTML = `
    <article class="lesson-block">
      <strong>${c.lesson}: ${topic}</strong>
      <p><b>Audience:</b> ${level} · ${profile} · ${place} · ${lang}</p>
      <p><b>Mode strategy:</b> ${audience.focus}</p>
      <ol>
        <li><b>Hook, 3 minutes:</b> ${material === "Book" ? `ask what learners think ${topic} is about before giving the standard summary.` : `ask learners where they have seen ${topic} without naming it.`}</li>
        <li><b>Core explanation, 7 minutes:</b> ${material === "Book" ? "map plot or argument, conflict, characters, and the big question of the work." : "teach the cause -> visible effect -> practical decision chain."}</li>
        <li><b>Practical example, 5 minutes:</b> use a relevant case, scene, problem, or step and ask learners to improve it.</li>
        <li><b>Clinic, 8 minutes:</b> each learner explains the idea back; diagnose one misconception.</li>
        <li><b>Proof round, 5 minutes:</b> ${material === "Book" ? "support interpretations with scenes, symbols, structure, and context." : "separate fact, inference, opinion, and evidence needed."}</li>
        <li><b>Exit quiz, 5 minutes:</b> answer three exam questions and create one ${audience.output}.</li>
      </ol>
    </article>
  `;
  document.querySelector("#demoScriptOutput").innerHTML = `
    <article class="demo-script-card">
      <strong>3-minute demo script</strong>
      <ol>
        <li><b>Problem:</b> People do not just need answers; they need to understand, remember, prove, and reuse what they learn.</li>
        <li><b>Input:</b> One topic, book, file, or goal becomes a persistent workspace for ${topic}.</li>
        <li><b>Differentiator:</b> The workspace adapts to ${audience.title.toLowerCase()} and produces ${audience.output} instead of a generic response.</li>
        <li><b>Proof:</b> Show the Source Map, Comprehension Loop, Misconception Clinic, ProofTutor, Exam Simulator, Visual Encyclopedia, and Teacher in a Box.</li>
        <li><b>Close:</b> Export the study/class pack so the learner can keep studying or teach someone else.</li>
      </ol>
    </article>
  `;

  renderMedia(topic, material);
  renderMindMap(topic, material, audience);
  renderMythCheck(topic, material);
  renderKidGames(topic);
  renderStudySchedule(topic);
  document.querySelector("#kidIdea").textContent = say(`Imagina ${topic} como una historia pequeña: primero miramos, luego probamos, después dibujamos y al final lo explicamos con nuestras palabras.`, `Imagine ${topic} like a small story: first we look, then we try, then we draw, then we explain it in our own words.`);
  document.querySelector("#kidMission").textContent = say(`Misión: dibuja una imagen sobre ${topic} y responde: ¿qué cambió, qué lo causó o qué pasó después?`, `Mission: draw one picture about ${topic}, then answer: what changed, what caused it, or what happened next?`);

  stateLabel.textContent = say("Ruta creada", "Path built");
  localizeGeneratedOutput();
  addSectionListenButtons();
  if (autoSpeakToggle.checked) {
    speakText(`${document.querySelector("#explainTitle").textContent}. ${document.querySelector("#plainExplanation").textContent}`);
  }
  persistProject("learning path built");
  updateProgress();
}

function safeCalcExpression(raw) {
  let expression = raw
    .replace(/\bpi\b/gi, "Math.PI")
    .replace(/\be\b/g, "Math.E")
    .replace(/\^/g, "**")
    .replace(/\bsin\(/g, "Math.sin(Math.PI/180*")
    .replace(/\bcos\(/g, "Math.cos(Math.PI/180*")
    .replace(/\btan\(/g, "Math.tan(Math.PI/180*")
    .replace(/\basin\(/g, "(180/Math.PI)*Math.asin(")
    .replace(/\bacos\(/g, "(180/Math.PI)*Math.acos(")
    .replace(/\batan\(/g, "(180/Math.PI)*Math.atan(")
    .replace(/\bsqrt\(/g, "Math.sqrt(")
    .replace(/\blog\(/g, "Math.log10(")
    .replace(/\bln\(/g, "Math.log(")
    .replace(/\bexp\(/g, "Math.exp(")
    .replace(/\babs\(/g, "Math.abs(")
    .replace(/\bfloor\(/g, "Math.floor(")
    .replace(/\bceil\(/g, "Math.ceil(")
    .replace(/\bround\(/g, "Math.round(")
    .replace(/\brand\(\)/g, "Math.random()");
  expression = expression.replace(/(\d+(?:\.\d+)?|\([^()]+\))!/g, "factorial($1)");
  return expression;
}

function financialCalculation(raw) {
  const match = raw.match(/^(payment|future|present)\(([^)]+)\)$/i);
  if (!match) {
    throw new Error("financial-format");
  }
  const args = match[2].split(",").map((value) => Number(value.trim()));
  if (args.some((value) => !Number.isFinite(value))) {
    throw new Error("financial-number");
  }
  const type = match[1].toLowerCase();
  if (type === "payment") {
    const [annualRate, periods, presentValue] = args;
    const rate = annualRate / 100 / 12;
    if (!periods || !presentValue) throw new Error("financial-number");
    return rate ? (rate * presentValue) / (1 - Math.pow(1 + rate, -periods)) : presentValue / periods;
  }
  if (type === "future") {
    const [presentValue, annualRate, periods] = args;
    return presentValue * Math.pow(1 + annualRate / 100, periods);
  }
  const [futureValue, annualRate, periods] = args;
  return futureValue / Math.pow(1 + annualRate / 100, periods);
}

function solveCalculation() {
  const raw = calcInput.value.trim();
  const mode = calculatorMode.value;
  if (!raw) {
    calcOutput.textContent = say("Escribe una operación segura.", "Enter a safe math expression.");
    return;
  }
  if (mode === "basic" && /[^0-9+\-*/().,\s%]/.test(raw)) {
    calcOutput.textContent = say("La calculadora básica solo acepta números y operaciones simples.", "The basic calculator only accepts numbers and simple operations.");
    return;
  }
  if (mode !== "financial" && /[^0-9+\-*/().,\s^a-zA-Z!%]/.test(raw)) {
    calcOutput.textContent = say("Escribe una operación segura.", "Enter a safe math expression.");
    return;
  }
  try {
    const result = mode === "financial"
      ? financialCalculation(raw)
      : Function(`"use strict"; const factorial = (n) => { n = Number(n); if (!Number.isInteger(n) || n < 0 || n > 170) throw new Error("bad factorial"); let out = 1; for (let i = 2; i <= n; i += 1) out *= i; return out; }; return (${safeCalcExpression(raw)})`)();
    calcOutput.textContent = `= ${Number(result.toFixed ? result.toFixed(8) : result)}`;
    notesInput.value += `\n${say("Cálculo", "Calculation")}: ${raw} = ${result}`;
    persistProject(say("cálculo guardado", "calculation saved"));
  } catch {
    calcOutput.textContent = mode === "financial"
      ? say("Usa formato financiero: payment(12, 36, 10000), future(1000, 8, 5) o present(1500, 8, 5).", "Use financial format: payment(12, 36, 10000), future(1000, 8, 5), or present(1500, 8, 5).")
      : say("No pude resolver esa operación.", "Could not solve that expression.");
  }
}

function syncCalculatorMode() {
  const mode = calculatorMode.value;
  financeHelpers.classList.toggle("active", mode === "financial");
  scientificHelpers.classList.toggle("active", mode === "scientific");
  if (mode === "basic") calcInput.placeholder = say("Ejemplo: 24 / 3 + 8", "Example: 24 / 3 + 8");
  if (mode === "scientific") calcInput.placeholder = say("Ejemplo: sin(30) + log(100) + 5! + pi", "Example: sin(30) + log(100) + 5! + pi");
  if (mode === "financial") calcInput.placeholder = say("Ejemplo: payment(12, 36, 10000)", "Example: payment(12, 36, 10000)");
}

function formatTime(ms) {
  const total = Math.floor(ms / 1000);
  const minutes = String(Math.floor(total / 60)).padStart(2, "0");
  const seconds = String(total % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function updateTimer() {
  const nowElapsed = timerElapsed + (timerStartedAt ? Date.now() - timerStartedAt : 0);
  timerDisplay.textContent = formatTime(nowElapsed);
  const target = Math.max(1, Number(studyMinutesInput.value) || 25) * 60 * 1000;
  if (nowElapsed >= target && timerStartedAt) {
    timerElapsed = nowElapsed;
    timerStartedAt = null;
    clearInterval(timerHandle);
    document.querySelector("#timerStartButton").textContent = say("Iniciar", "Start");
    addChatMessage(say(`Alarma de estudio: tu bloque de ${studyMinutesInput.value} minutos terminó. Toca explicar lo aprendido o descansar.`, `Study alarm: your ${studyMinutesInput.value}-minute block is complete. Time for teach-back or a break.`));
  }
}

function restoreSketch(dataUrl) {
  sketchContext.clearRect(0, 0, sketchCanvas.width, sketchCanvas.height);
  sketchContext.lineWidth = 3;
  sketchContext.lineCap = "round";
  sketchContext.strokeStyle = "#16201d";
  if (!dataUrl) return;
  const img = new Image();
  img.onload = () => sketchContext.drawImage(img, 0, 0);
  img.src = dataUrl;
}

function renderDemoSketch(scenario) {
  sketchContext.clearRect(0, 0, sketchCanvas.width, sketchCanvas.height);
  sketchContext.fillStyle = "#fbfefd";
  sketchContext.fillRect(0, 0, sketchCanvas.width, sketchCanvas.height);
  sketchContext.strokeStyle = "#d4dde3";
  sketchContext.lineWidth = 2;
  for (let x = 80; x < sketchCanvas.width; x += 120) {
    sketchContext.beginPath();
    sketchContext.moveTo(x, 40);
    sketchContext.lineTo(x, sketchCanvas.height - 40);
    sketchContext.stroke();
  }
  for (let y = 80; y < sketchCanvas.height; y += 90) {
    sketchContext.beginPath();
    sketchContext.moveTo(40, y);
    sketchContext.lineTo(sketchCanvas.width - 40, y);
    sketchContext.stroke();
  }
  const colors = {
    energy: ["#1f9f7a", "#245bff", "#f4b942"],
    misinformation: ["#ef6a4d", "#245bff", "#7b61ff"],
    "healthcare-ai": ["#1f9f7a", "#7b61ff", "#ef6a4d"]
  }[scenario.id] || ["#1f9f7a", "#245bff", "#f4b942"];
  sketchContext.fillStyle = "#142531";
  sketchContext.font = "700 42px Segoe UI, Arial";
  sketchContext.fillText(`User notes: ${scenario.title}`, 64, 78);
  sketchContext.font = "24px Segoe UI, Arial";
  sketchContext.fillStyle = "#465968";
  sketchContext.fillText("Drafted while studying the demo: key system, risks, evidence, and teaching angle.", 66, 122);
  const nodes = scenario.mind.slice(0, 4);
  const positions = [[220, 330], [620, 220], [980, 330], [620, 510]];
  sketchContext.lineWidth = 8;
  positions.slice(1).forEach(([x, y], index) => {
    sketchContext.strokeStyle = colors[index % colors.length];
    sketchContext.beginPath();
    sketchContext.moveTo(positions[0][0], positions[0][1]);
    sketchContext.quadraticCurveTo(600, 350, x, y);
    sketchContext.stroke();
  });
  nodes.forEach(([title], index) => {
    const [x, y] = positions[index];
    sketchContext.fillStyle = colors[index % colors.length];
    sketchContext.beginPath();
    sketchContext.roundRect(x - 150, y - 54, 300, 108, 24);
    sketchContext.fill();
    sketchContext.fillStyle = "#ffffff";
    sketchContext.font = "800 24px Segoe UI, Arial";
    const label = title.length > 22 ? `${title.slice(0, 21)}…` : title;
    sketchContext.fillText(label, x - 124, y + 8);
  });
  sketchContext.fillStyle = "#142531";
  sketchContext.font = "700 26px Segoe UI, Arial";
  sketchContext.fillText("Next action:", 70, 650);
  sketchContext.font = "23px Segoe UI, Arial";
  sketchContext.fillText("Use Proof + Teach to turn this into a defensible learning pack with inline visuals.", 230, 650);
}

function saveSketch() {
  const store = loadStore();
  const project = store.projects[activeProjectId] || currentProject();
  project.sketch = sketchCanvas.toDataURL("image/png");
  project.history = project.history || [];
  project.history.unshift(`${new Date().toLocaleTimeString()} · ${say("dibujo guardado", "sketch saved")}`);
  store.projects[activeProjectId] = project;
  saveStore(store);
}

function pointerPos(event) {
  const rect = sketchCanvas.getBoundingClientRect();
  const point = event.touches ? event.touches[0] : event;
  return {
    x: (point.clientX - rect.left) * (sketchCanvas.width / rect.width),
    y: (point.clientY - rect.top) * (sketchCanvas.height / rect.height)
  };
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    if (tab.dataset.tab === "tools") {
      notesInput.focus();
      return;
    }
    document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".panel:not(#toolsPanel)").forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    document.querySelector(`#${tab.dataset.tab}Panel`).classList.add("active");
    document.querySelectorAll(".session-step").forEach((step) => {
      step.classList.toggle("active", step.dataset.guide === tab.dataset.tab);
    });
  });
});

document.querySelectorAll(".session-step").forEach((step) => {
  step.addEventListener("click", () => {
    if (step.dataset.guide === "tools") {
      notesInput.focus();
      return;
    }
    document.querySelector(`.tab[data-tab="${step.dataset.guide}"]`)?.click();
  });
});

document.querySelectorAll(".language-chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    languageSelect.value = chip.dataset.language;
    applyUiLanguage();
    if (topicInput.value.trim()) {
      buildPath();
    }
    refreshActiveDemoLanguage();
  });
});

languageSelect.addEventListener("change", () => {
  applyUiLanguage();
  refreshActiveDemoLanguage();
});
voiceAccentSelect.addEventListener("change", () => {
  populateVoices();
  applyUiLanguage();
});
voiceToneSelect.addEventListener("change", applyUiLanguage);
speakPageButton.addEventListener("click", () => speakText(currentNarrationText()));
stopSpeechButton.addEventListener("click", () => {
  if (voiceAvailable()) window.speechSynthesis.cancel();
  clearSpeechState();
});
voiceInputButton.addEventListener("click", startVoiceInput);
audioToggle.addEventListener("click", () => {
  document.body.classList.toggle("voice-open");
  applyUiLanguage();
});
chatVoiceButton.addEventListener("click", () => {
  chatPanel.classList.add("open");
  startVoiceInput();
});
if (voiceAvailable()) {
  window.speechSynthesis.onvoiceschanged = populateVoices;
  populateVoices();
} else {
  populateVoices();
}
helpButton.addEventListener("click", () => {
  renderHelp();
  helpModal.classList.add("open");
  helpModal.setAttribute("aria-hidden", "false");
});
closeHelpButton.addEventListener("click", () => {
  helpModal.classList.remove("open");
  helpModal.setAttribute("aria-hidden", "true");
});
helpModal.addEventListener("click", (event) => {
  if (event.target === helpModal) closeHelpButton.click();
});
helpContent.addEventListener("click", (event) => {
  const button = event.target.closest("[data-help-jump]");
  if (!button) return;
  closeHelpButton.click();
  switchToTab(button.dataset.helpJump);
});

document.querySelector("#sampleButton").addEventListener("click", () => {
  topicInput.value = "¿Por qué importa el aumento del nivel del mar para las comunidades insulares?";
  materialSelect.value = "Concept";
  sourceInput.value = "";
  languageSelect.value = "Spanish";
  answerInput.value = "Significa que el océano sube y puede afectar viviendas, caminos, agua dulce y decisiones sobre dónde puede vivir la gente con seguridad.";
  levelSelect.value = "Beginner adult";
  profileSelect.value = "Creative / communicator";
  buildPath();
});

function loadWinningDemo() {
  const rawScenario = demoScenarios[demoScenarioSelect.value] || demoScenarios.energy;
  const scenario = localizedScenario(rawScenario);
  const existingStore = loadStore();
  removeLegacyRomeoDemoProjects(existingStore);
  saveStore(existingStore);
  activeProjectId = `demo-${scenario.id}`;
  projectTitleInput.value = scenario.title;
  activeProjectName.textContent = projectTitleInput.value;
  quickStartInput.value = scenario.title;
  topicInput.value = scenario.title;
  materialSelect.value = scenario.material;
  levelSelect.value = "Postgraduate";
  profileSelect.value = scenario.profile;
  sourceInput.value = scenario.source;
  answerInput.value = scenario.answer;
  notesInput.value = [
    say(`Objetivo demo: mostrar LearnBridge manejando "${scenario.title}" como un espacio completo de aprendizaje.`, `Demo objective: show LearnBridge handling "${scenario.title}" as a complete learning workspace.`),
    say("Enfoque del jurado: idioma consistente, fuentes, radar de mitos, mapa mental editable, plan multimedia, memoria de examen y paquete para enseñar.", "Jury focus: consistent language, source awareness, myth radar, editable mind map, multimedia plan, exam memory, and teach-back pack."),
    say("Punto de prueba: cambiar entre los tres demos para mostrar estructuras diferentes, no una plantilla renombrada.", "Proof point: switch between the three demos to show different structures, not a renamed template."),
    say("Nota de producción: conectar citas web vivas, archivos cargados, cuentas seguras y almacenamiento persistente en la nube.", "Production note: connect live web citations, uploaded files, secure user accounts, and persistent cloud storage.")
  ].join("\n");
  reminderTitleInput.value = say("Revisión demo OpenAI Build Week", "OpenAI Build Week demo review");
  const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000);
  reminderDateInput.value = tomorrow.toISOString().slice(0, 10);
  reminderTimeInput.value = "19:30";
  reminderNoteInput.value = say("Revisar fuentes, radar de mitos, tablero visual, recorrido guiado, paquete exportable y grabar video de Devpost.", "Review source ledger, myth radar, visual board, guided jury demo, export pack, and record Devpost video.");
  addChatMessage(say(`Demo cargado: ${scenario.title}. El espacio respeta el idioma elegido.`, `Demo loaded: ${scenario.title}. The workspace follows the selected language.`));
  applyUiLanguage();
  buildPath();
  renderDemoSketch(scenario);
  saveSketch();
  persistProject(say("demo cargado", "demo scenario loaded"));
  renderProjects();
  document.querySelector('.tab[data-tab="understand"]').click();
}

document.querySelector("#winningDemoButton").addEventListener("click", loadWinningDemo);
document.querySelector("#guidedDemoButton").addEventListener("click", startGuidedDemo);
document.querySelector("#nextDemoStepButton").addEventListener("click", nextGuidedDemoStep);
document.querySelectorAll(".demo-step").forEach((button) => {
  button.addEventListener("click", () => {
    if (!document.body.classList.contains("workspace-started")) loadWinningDemo();
    renderGuidedDemoStep(Number(button.dataset.demoStep) || 0, true);
  });
});

document.querySelector("#quickStartButton").addEventListener("click", () => {
  const prompt = quickStartInput.value.trim();
  if (!prompt) return;
  const inferred = inferBestMode(prompt);
  topicInput.value = prompt;
  materialSelect.value = inferred.material;
  levelSelect.value = inferred.level;
  profileSelect.value = inferred.profile;
  applyAudienceMode();
  buildPath();
});

document.querySelectorAll(".prompt-suggestions button").forEach((button) => {
  button.addEventListener("click", () => {
    quickStartInput.value = button.dataset.prompt || button.textContent.trim();
    quickStartInput.focus();
  });
});

document.querySelector("#exportButton").addEventListener("click", exportStudyPack);
document.querySelector("#shareButton").addEventListener("click", shareProject);
mindMapOutput.addEventListener("click", (event) => {
  const button = event.target.closest(".node-link");
  if (!button) return;
  event.preventDefault();
  switchToTab(button.dataset.jump);
});
mindMapOutput.addEventListener("input", () => persistProject("mind map edited"));

document.querySelector("#runButton").addEventListener("click", buildPath);
document.querySelector("#loginButton").addEventListener("click", () => {
  activeUser = usernameInput.value.trim() || "Guest";
  accountStatus.textContent = `Workspace opened for ${activeUser}. Password is demo-only in this prototype.`;
  activeProjectId = "default";
  renderProjects();
  loadProject(activeProjectId);
});
document.querySelector("#chatToggle").addEventListener("click", () => {
  chatPanel.classList.toggle("open");
});
toolsToggle.addEventListener("click", () => {
  document.body.classList.toggle("tools-open");
  if (document.body.classList.contains("tools-open")) {
    notesInput.focus();
  }
  applyUiLanguage();
});
document.querySelector("#chatSendButton").addEventListener("click", answerLiveQuestion);
chatInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") answerLiveQuestion();
});
document.querySelector("#kidQuizButton").addEventListener("click", () => {
  addChatMessage(say("Lucas dice: ¡muy bien! Intenta responder con una frase y un dibujo.", "Professor Lucas says: great! Try answering with one sentence and one drawing."));
  chatPanel.classList.add("open");
});
studyMinutesInput.addEventListener("change", () => renderStudySchedule(cleanTopic()));
levelSelect.addEventListener("change", applyAudienceMode);
profileSelect.addEventListener("change", applyAudienceMode);
document.querySelector("#addReminderButton").addEventListener("click", addReminder);
document.querySelector("#saveAssessmentButton").addEventListener("click", () => {
  const understanding = document.querySelector("#scoreUnderstanding").value;
  const confidence = document.querySelector("#scoreConfidence").value;
  const teach = document.querySelector("#scoreTeach").value;
  notesInput.value += say(`\nAutoevaluación: comprensión ${understanding}/100, confianza ${confidence}/100, listo para enseñar ${teach}/100.`, `\nSelf-assessment: understanding ${understanding}/100, confidence ${confidence}/100, ready to teach ${teach}/100.`);
  persistProject(say("autoevaluación guardada", "self-assessment saved"));
});
document.querySelector("#newProjectButton").addEventListener("click", newProject);
projectTitleInput.addEventListener("change", () => persistProject("renamed"));
notesInput.addEventListener("input", () => persistProject(say("notas autoguardadas", "notes autosaved")));
notesInput.addEventListener("input", updateProgress);
answerInput.addEventListener("input", updateProgress);
document.querySelectorAll("[data-calc]").forEach((button) => {
  button.addEventListener("click", () => {
    calcInput.value += button.dataset.calc;
    calcInput.focus();
  });
});
document.querySelector("#calcSolveButton").addEventListener("click", solveCalculation);
document.querySelector("#calcClearButton").addEventListener("click", () => {
  calcInput.value = "";
  calcOutput.textContent = say("El resultado aparecerá aquí.", "Result appears here.");
});
calculatorMode.addEventListener("change", syncCalculatorMode);
document.querySelectorAll("[data-finance]").forEach((button) => {
  button.addEventListener("click", () => {
    calculatorMode.value = "financial";
    const examples = {
      payment: "payment(12, 36, 10000)",
      future: "future(1000, 8, 5)",
      present: "present(1500, 8, 5)"
    };
    calcInput.value = examples[button.dataset.finance] || examples.payment;
    syncCalculatorMode();
    calcInput.focus();
  });
});
floatToolsButton.addEventListener("click", () => {
  document.body.classList.toggle("tools-open");
  applyUiLanguage();
});
document.querySelector("#timerStartButton").addEventListener("click", () => {
  if (timerStartedAt) {
    timerElapsed += Date.now() - timerStartedAt;
    timerStartedAt = null;
    clearInterval(timerHandle);
    document.querySelector("#timerStartButton").textContent = say("Iniciar", "Start");
  } else {
    timerStartedAt = Date.now();
    timerHandle = setInterval(updateTimer, 250);
    document.querySelector("#timerStartButton").textContent = say("Pausar", "Pause");
  }
  updateTimer();
});
document.querySelector("#timerLapButton").addEventListener("click", () => {
  const nowElapsed = timerElapsed + (timerStartedAt ? Date.now() - timerStartedAt : 0);
  const line = document.createElement("div");
  line.textContent = say(`Ejercicio ${lapList.children.length + 1}: ${formatTime(nowElapsed)}`, `Exercise ${lapList.children.length + 1}: ${formatTime(nowElapsed)}`);
  lapList.prepend(line);
  notesInput.value += say(`\nEjercicio cronometrado ${lapList.children.length}: ${formatTime(nowElapsed)}`, `\nTimed exercise ${lapList.children.length}: ${formatTime(nowElapsed)}`);
  persistProject(say("vuelta del temporizador guardada", "timer lap saved"));
});
document.querySelector("#timerResetButton").addEventListener("click", () => {
  timerElapsed = 0;
  timerStartedAt = null;
  clearInterval(timerHandle);
  document.querySelector("#timerStartButton").textContent = say("Iniciar", "Start");
  updateTimer();
  lapList.innerHTML = "";
});
sketchCanvas.addEventListener("pointerdown", (event) => {
  isDrawing = true;
  const pos = pointerPos(event);
  sketchContext.beginPath();
  sketchContext.moveTo(pos.x, pos.y);
});
sketchCanvas.addEventListener("pointermove", (event) => {
  if (!isDrawing) return;
  event.preventDefault();
  const pos = pointerPos(event);
  sketchContext.lineTo(pos.x, pos.y);
  sketchContext.stroke();
});
["pointerup", "pointerleave", "pointercancel"].forEach((name) => {
  sketchCanvas.addEventListener(name, () => {
    if (isDrawing) saveSketch();
    isDrawing = false;
  });
});
document.querySelector("#saveSketchButton").addEventListener("click", saveSketch);
document.querySelector("#clearSketchButton").addEventListener("click", () => {
  sketchContext.clearRect(0, 0, sketchCanvas.width, sketchCanvas.height);
  saveSketch();
});
document.querySelector("#resetButton").addEventListener("click", () => {
  topicInput.value = "";
  sourceInput.value = "";
  bookUpload.value = "";
  uploadStatus.textContent = currentUi().noFile;
  answerInput.value = "";
  stateLabel.textContent = say("Listo", "Ready");
  document.querySelector("#explainTitle").textContent = say("Haz una pregunta para empezar.", "Ask a question to begin.");
  document.querySelector("#plainExplanation").textContent = say("LearnBridge producirá una explicación directa ajustada a la pregunta, perfil, fuentes y meta de aprendizaje.", "LearnBridge will produce a direct explanation matched to the question, profile, source pack, and learning goal.");
  document.querySelector("#simpleAnalogy").textContent = say("La idea central aparecerá aquí.", "The central idea will appear here.");
  document.querySelector("#localAnalogy").textContent = say("Un ejemplo práctico o caso de uso aparecerá aquí.", "A practical example or use case will appear here.");
  renderAudiencePanel();
  document.querySelector("#clinicOutput").innerHTML = "";
  document.querySelector("#proofOutput").innerHTML = "";
  document.querySelector("#examOutput").innerHTML = "";
  if (flashcardDeck) flashcardDeck.innerHTML = "";
  document.querySelector("#lessonOutput").innerHTML = "";
  document.querySelector("#learningOSPanel").innerHTML = "";
  sourceLedger.innerHTML = "";
  mythCheckOutput.innerHTML = "";
  mindMapOutput.innerHTML = "";
  applyUiLanguage();
  persistProject(say("limpieza", "reset"));
});

applyUiLanguage();
renderProjects();
loadProject(activeProjectId);
applyAudienceMode();
syncCalculatorMode();
loadSharedProjectFromHash();
updateProgress();



