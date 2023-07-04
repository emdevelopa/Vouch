function handleLoadPerks() {
  const perksContainer = document.querySelector(".header-perks-container");

  const descriptionContent = [
    {
      image: "/assets/perks-1.png",
      label:
        navigator.language == "es"
          ? "Tarifas de transacción cero"
          : "Zero Transaction Fees",
    },
    {
      image: "/assets/perks-2.png",
      label:
        navigator.language == "es"
          ? "Recompensas en Bitcoin"
          : "Bitcoin Rewards",
    },
    {
      image: "/assets/perks-3.png",
      label:
        navigator.language == "es"
          ? "Pagos por VISA y Mastercard"
          : "VISA and Mastercard Payments",
    },
    {
      image: "/assets/perks-4.png",
      label: navigator.language == "es" ? "Pagos Globales" : "Global Payments",
    },
    {
      image: "/assets/perks-5.png",
      label:
        navigator.language == "es"
          ? "Pague con Stablecoins"
          : "Pay with Stablecoins",
    },
  ];

  descriptionContent.forEach((item, index) => {
    const container = document.createElement("div");
    container.className = "header-perks-item";

    if (index === 0) {
      container.classList.add("header-hide-small");
    }

    const image = document.createElement("img");
    image.src = item.image;
    image.className = "header-perks-image";

    const description = document.createElement("p");
    description.innerText = item.label;
    description.className = "header-perks-label";

    container.appendChild(image);
    container.appendChild(description);

    perksContainer.appendChild(container);
  });
}

window.onload = handleLoadPerks;
