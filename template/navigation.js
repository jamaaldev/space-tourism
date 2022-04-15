// header navigation

document.getElementById("nav").insertAdjacentHTML(
  "afterend",
  `

      <img src="./assets/shared/logo.svg" alt="logo brand" class="logo" />
      <button class="mobile__nav__toggle" aria-controls="prem__ul" aria-expanded="false"><span class="sr__only">Menu</span></button>
      <span class="line"></span>
      <nav data-visible="false" class="prem__nav">
        <ul class="prem__ul flex" id="prem__ul">
          <li>
            <a href="./index.html"><span aria-hidden="true">00</span>Home</a>
          </li>
          <li>
            <a href="./destination-moon.html"><span aria-hidden="true">01</span>Destination</a>
          </li>
          <li>
            <a href=""><span aria-hidden="true">02</span>Crew</a>
          </li>
          <li>
            <a href=""><span aria-hidden="true">03</span>Technology</a>
          </li>
        </ul>
      </nav>


`,
);
