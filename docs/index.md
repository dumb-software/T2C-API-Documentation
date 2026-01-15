---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "T2C API Documentation"
  tagline: "Documentation non-officielle de l'API T2C"
  image:
    src: /apilogo2.png
    alt: "Logo de l'API T2C"
  actions:
    - theme: brand
      text: Introduction
      link: /introduction
    - theme: alt
      text: GitHub
      link: https://github.com/dumb-software/T2C-API-Documentation

features:
  - title: API Server
    details: Arrêts, Lignes, C.Vélo, Itinéraires, News, Events
    link : '/Yoozly/API_Server/readme'
    icon: |
        <svg xmlns="http://www.w3.org/2000/svg"
            width="24" height="24"
            viewBox="0 -960 960 960"
            fill="#258d28ff"
            role="img" aria-label="Icone API Server">
        <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q20-22 36-47.5t26.5-53q10.5-27.5 16-56.5t5.5-59q0-98-54.5-179T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h240q17 0 28.5 11.5T600-440v120h40q26 0 47 15.5t29 40.5Z"/></svg>
  - title: Analytics
    details: Tracking Utilisateur (Non Prévu)
    link : '/Yoozly/analytics/readme'
    icon: |
        <svg xmlns="http://www.w3.org/2000/svg" 
            height="24" width="24"
            viewBox="0 -960 960 960"
            fill="#8c3497ff"
            role="img" aria-label="Icone Analytics">
        <path d="M280-280h80v-200h-80v200Zm320 0h80v-400h-80v400Zm-160 0h80v-120h-80v120Zm0-200h80v-80h-80v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>
  - title: OpenIT
    details: Table des Horaires, Prochains passages et Itinéraires
    link : '/WinDev/OpenIT/readme'
    icon: |
        <svg xmlns="http://www.w3.org/2000/svg"
            width="24" height="24"
            viewBox="0 -960 960 960"
            fill="#78baa4ff"
            role="img" aria-label="Icone OpenIT">
        <path d="m746-584 30-30-76-74v-112h-40v128l86 88ZM178-720h225-225Zm62 280h-80 376-296ZM160-80q-17 0-28.5-11.5T120-120v-82q-20-21-30-46.5T80-300v-380q0-89 82.5-124.5T451-840q-13 18-22.5 38T412-761q-102 2-157.5 12T178-720h225q-3 20-3 40t3 40H160v120h291q17 24 38 44.5t47 35.5H160v120q0 33 23.5 56.5T240-240h320q33 0 56.5-23.5T640-320v-83q20 3 40 3t40-3v103q0 26-10 51.5T680-202v82q0 17-11.5 28.5T640-80h-40q-17 0-28.5-11.5T560-120v-40H240v40q0 17-11.5 28.5T200-80h-40Zm520-400q-83 0-141.5-58.5T480-680q0-82 58-141t142-59q83 0 141.5 58.5T880-680q0 83-58.5 141.5T680-480ZM260-280q25 0 42.5-17.5T320-340q0-25-17.5-42.5T260-400q-25 0-42.5 17.5T200-340q0 25 17.5 42.5T260-280Zm280 0q25 0 42.5-17.5T600-340q0-25-17.5-42.5T540-400q-25 0-42.5 17.5T480-340q0 25 17.5 42.5T540-280Z"/></svg>
  - title: T2C XML
    details: Alertes, Brèves, Évenements et Infos Trafic
    link : '/WinDev/T2C_XML/readme'
    icon: |
        <svg xmlns="http://www.w3.org/2000/svg"
          width="24" height="24"
          viewBox="0 -960 960 960"
          fill="#e0a54cff"
          role="img" aria-label="Icone T2C XML">
        <path d="M200-120q-33 0-56.5-23.5T120-200q0-33 23.5-56.5T200-280q33 0 56.5 23.5T280-200q0 33-23.5 56.5T200-120Zm480 0q0-117-44-218.5T516-516q-76-76-177.5-120T120-680v-120q142 0 265 53t216 146q93 93 146 216t53 265H680Zm-240 0q0-67-25-124.5T346-346q-44-44-101.5-69T120-440v-120q92 0 171.5 34.5T431-431q60 60 94.5 139.5T560-120H440Z"/></svg>
  - title: WinDev Push Server
    details: Informations du Réseau et Actions Push
    link : '/WinDev/WD_Push/readme'
    icon: |
        <svg xmlns="http://www.w3.org/2000/svg"
          width="24" height="24"
          viewBox="0 -960 960 960"
          fill="#4d85d4ff"
          role="img" aria-label="Icone WinDev Push Server">
        <path d="M300-720q-25 0-42.5 17.5T240-660q0 25 17.5 42.5T300-600q25 0 42.5-17.5T360-660q0-25-17.5-42.5T300-720Zm0 400q-25 0-42.5 17.5T240-260q0 25 17.5 42.5T300-200q25 0 42.5-17.5T360-260q0-25-17.5-42.5T300-320ZM160-840h640q17 0 28.5 11.5T840-800v280q0 17-11.5 28.5T800-480H160q-17 0-28.5-11.5T120-520v-280q0-17 11.5-28.5T160-840Zm40 80v200h560v-200H200Zm-40 320h640q17 0 28.5 11.5T840-400v280q0 17-11.5 28.5T800-80H160q-17 0-28.5-11.5T120-120v-280q0-17 11.5-28.5T160-440Zm40 80v200h560v-200H200Zm0-400v200-200Zm0 400v200-200Z"/></svg>
  - title: Pegase
    details: Notifications
    link : '/WinDev/pegase/readme'
    icon: |
        <svg xmlns="http://www.w3.org/2000/svg"
          width="24" height="24"
          viewBox="0 -960 960 960"
          fill="#ba67b3ff"
          role="img" aria-label="Icone Pegase">
        <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>
---