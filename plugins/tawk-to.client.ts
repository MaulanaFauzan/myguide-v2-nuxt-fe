// plugins/tawk-to.client.ts
export default defineNuxtPlugin((nuxtApp) => {
  const script = document.createElement("script");
  script.src = "https://embed.tawk.to/6660cd329a809f19fb397c1f/1hvl234c6";
  script.async = true;
  script.charset = "UTF-8";
  script.setAttribute("crossorigin", "*");
  document.head.appendChild(script);
});
