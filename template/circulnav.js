// content navigation
// 1 2 3

document.getElementById("circulnav").insertAdjacentHTML(
  "afterend",
  `

      <nav  class="planet__nav circul">
        <ul class="planet__ul flex" id="planet__ul">
          <li>
            <a href="./technology-capsule.html"><button>1</button></a>
          </li>
          <li>
            <a href="./technology-spaceport.html"><button>2</button></a>
          </li>
          <li>
            <a href="./technology-vehicle.html"><button>3</button></a>
          </li>
         
        </ul>
      </nav>


`,
);
