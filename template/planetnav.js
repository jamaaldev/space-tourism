// content navigation
// 1 2 3

document.getElementById("planetnav").insertAdjacentHTML(
  "afterend",
  `

      <nav  class="planet__nav">
        <ul class="planet__ul flex" id="planet__ul">
          <li>
            <a href="./destination-moon.html">Moon</a>
          </li>
          <li>
            <a href="./destination-mars.html">Mars</a>
          </li>
          <li>
            <a href="./destination-europa.html">Europa</a>
          </li>
          <li>
            <a href="./destination-titan.html">Titan</a>
          </li>
        </ul>
      </nav>


`,
);
