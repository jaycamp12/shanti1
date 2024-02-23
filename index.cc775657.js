const e = document.querySelector(".btn")
  , t = document.querySelector(".darkroom")
  , o = document.querySelector(".giftroom")
  , l = document.querySelector(".hallway")
  , s = document.querySelector(".empty-room")
  , c = document.querySelector(".flash")
  , n = document.querySelectorAll(".bb-text")
  , r = document.querySelectorAll(".gift-text")
  , i = document.querySelectorAll(".hall-text")
  , a = document.querySelectorAll(".room-text")
  , d = document.querySelector(".btn-ref")
  , u = document.querySelectorAll(".frame")
  , y = (document.querySelector(".scroll"),
    document.querySelector(".text"),
    document.querySelector(".switch-aud"))
  , m = document.querySelector(".blast-aud")
  , p = document.querySelector(".door-aud")
  , f = document.querySelector(".haunt-aud")
  , q = document.querySelector(".hbd-aud")
  , S = t => {
    for (let o = 0; o < t.length; o++)
      setTimeout(() => {
        t[o].classList.add("read"),
          o === t.length - 1 && (e.style.display = "inline-block",
            d.style.display = "block")
      }, 5e3 * o)
  }
  , L = t => {
    t.classList.add("fade-in"),
      t.style.opacity = "0",
      e.style.display = "none",
      d.style.display = "none"
  }
  ;
d.innerHTML = "Click the Light Bulb.",
  S(n),
  e.addEventListener("click", () => {
    if (e.classList.contains("switch")) {
      y.play();
      L(t);
      d.innerHTML = "Click the Door";
      setTimeout(() => {
        e.classList.add("door-out"),
          e.classList.remove("switch"),
          // Remove the display property to make the door visible
          t.style.display = "";
        S(a)
      }, 4000);
    } else if (e.classList.contains("door-out")) {
      p.play();
      L(s);
      setTimeout(() => {
        f.play(),
          f.loop = true;
        e.classList.add("door-in");
        e.classList.remove("door-out");
        // Remove the display property to make the door visible
        s.style.display = "";
        S(i);
      }, 4000);
    } else if (e.classList.contains("door-in")) {
      p.play();
      L(l);
      d.innerHTML = "Click the Gift";
      setTimeout(() => {
        e.classList.add("gift");
        e.classList.remove("door-in");
        // Remove the display property to make the door visible
        l.style.display = "";
        S(r);
      }, 4000);
    } else if (e.classList.contains("gift")) {
      
      f.pause();
       m.play();
      o.style.display = "none";
      L(c);
      u[0].style.display = "flex";
      setTimeout(() => {
        u[0].classList.add("appear");
        u[0].style.opacity = "1";
      }, 8000);
      

      
       setTimeout(() => {
       window.location.href = "https://jaycamp12.github.io/shanti1/final.html";
      }, 350);
      q.loop = true;
      q.play();
      
    }
  });
