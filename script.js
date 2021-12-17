var collapsed = true;
function toggle() {
  var fs = top.document.getElementsByTagName("frameset")[0];
  var f = fs.getElementsByTagName("frame");
  if (collapsed) {
    fs.rows = "250px,*";
    // enable resizing of frames in firefox/opera
    fs.noResize = false;
    f[0].noResize = false;
    f[1].noResize = false;
  } else {
    fs.rows = "30px,*";
    // disable resizing of frames in firefox/opera
    fs.noResize = true;
    f[0].noResize = true;
    f[1].noResize = true;
  }
  collapsed = !collapsed;
}

var b = document.body;
var c = document.getElementById("c");
var a = c.getContext("2d");
document.body.clientWidth; // fix bug in chrome.
var mGradient = a.createLinearGradient(0, 0, c.width, 0);
mGradient.addColorStop("0", "#ff8b9e");
mGradient.addColorStop("0.25", "#ff7698");
mGradient.addColorStop("0.5", "#ff5d94");
mGradient.addColorStop("0.75", "#ff3f93");
mGradient.addColorStop("1", "#fe0094");

// start of submission //
M = Math;
Q = M.random;
J = [];
U = 16;
T = M.sin;
E = M.sqrt;
for (O = k = 0; (x = z = j = i = k < 200); )
  with ((M[k] = k ? c.cloneNode(0) : c)) {
    width = height = k ? 32 : (W = 446);
    with (getContext("2d"))
      if ((k > 10) | !k)
        for (
          font = "34px Impact", V = "rgba(";
          (I = i * U),
            (fillStyle = k
              ? k == 13
                ? V + "205,205,215,.15)"
                : V + (147 + I) + "," + (k % 2 ? 128 + I : 0) + "," + I + ",.5)"
              : "#ff8099"),
            i < 7;

        )
          beginPath(
            fill(
              arc(
                U - i / 3,
                24 - i / 2,
                k == 13 ? 4 - i++ / 2 : 8 - i++,
                0,
                M.PI * 2,
                1
              )
            )
          );
      else
        for (
          ;
          (x = T(i)),
            (y = Q() * 2 - 1),
            (D = x * x + y * y),
            (B = E(D - x / 0.9 - 1.5 * y + 1)),
            (R = (67 * (B + 1) * (L = k / 9 + 0.8)) >> 1),
            i++ < W;

        )
          if (D < 1)
            beginPath(
              (strokeStyle = V + R + "," + ((R + B * L) >> 0) + ",40,.1)")
            ),
              moveTo(U + x * 8, U + y * 8),
              lineTo(U + x * U, U + y * U),
              stroke();
    for (y = H = k + E(k++) * 25, R = Q() * W; (P = 3), j < H; )
      J[O++] = [
        (x += T(R) * P + Q() * 6 - 3),
        (y += Q() * U - 8),
        (z += T(R - 11) * P + Q() * 6 - 3),
        ((j / H) * 20 + (((j += U) > H) & (Q() > 0.8) ? Q((P = 9)) * 4 : 0)) >>
          1
      ];
  }
setInterval(function G(m, l) {
  A = T(D - 11);
  if (l) return (m[2] - l[2]) * A + (l[0] - m[0]) * T(D);
  a.clearRect(0, 0, W, W);
  J.sort(G);
  for (
    i = 0;
    (L = J[i++]);
    a.drawImage(M[L[3] + 1], (207 + L[0] * A + L[2] * T(D)) >> 0, L[1] >> 1)
  ) {
    if (i == 2e3) {
      // Fill with gradient
      a.fillStyle = mGradient;
      a.fillText("Merry Christmas & Love u!", 40, 360);
      // a.font = "20px Verdana";
      a.fillText("AssLv ❤ Mijazz", 122, 400);
    }
    if (!(i % 7))
      a.drawImage(
        M[13],
        (157 * (i * i) + T(D * 5 + i * i) * 5) % W >> 0,
        (113 * i + (D * i) / 60) % (290 + i / 99) >> 0
      );
  }
  D += 0.02;
}, 1);