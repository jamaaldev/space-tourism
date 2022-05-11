// content dot navigation

document.getElementById("dotnav").insertAdjacentHTML(
  "afterend",
  `

      <nav  class="planet__nav dot">
        <ul class="planet__ul flex" id="planet__ul">
          <li >
            <a href="./crew-commander.html"><span></span></a>
          </li>
          <li >
            <a href="./crew-engineer.html"><span></span></a>
          </li>
          <li>
            <a href="./crew-pilot.html"></a>
          </li>
          <li>
            <a href="./crew-specialist.html"></a>
          </li>
        </ul>
      </nav>


`,
);
