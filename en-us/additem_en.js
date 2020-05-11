jQuery.ajax({
    success: function(response) {
    document.getElementById('navbar').insertAdjacentHTML("afterbegin", `<a class="navbar-brand" href="/en-us/home.html"><img src="/image/home/logo.png" alt="" id="logo"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Game
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="/en-us/game/roles.html">Roles</a>
                    <a class="dropdown-item" href="/en-us/game/game-modes.html">Modes</a>
                    <a class="dropdown-item" href="/en-us/game/brawl.html">Brawl</a>
                    <a class="dropdown-item" href="/en-us/game/battlefield.html">Battlegrounds</a>
                    <a class="dropdown-item" href="/en-us/game/rating_matches.html">Ranked: Storm League</a>
                </div>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="/en-us/heroes/heroes.html">Heroes<span
                        class="sr-only">(current)</span></a>
            </li>
        </ul>
    </div>`);
    }
    });

jQuery.ajax({
    url: "/en-us/footer.html",
    dataType: "html",
    success: function(response) {
    document.getElementById('footer').innerHTML = response;
    }
    });