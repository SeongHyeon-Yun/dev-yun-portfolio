document.addEventListener("mousemove", (e) => {
  document.body.style.setProperty("--x", e.clientX + "px");
  document.body.style.setProperty("--y", e.clientY + "px");
});

const get_audio = document.getElementById("get-audio");

get_audio.addEventListener("click", () => {
  const div = document.createElement("div");
  const close_btn = document.createElement("div");
  const audio_con = document.createElement("div");

  div.id = "audio-area";
  audio_con.id = "audio-con";
  close_btn.classList.add("close_btn");
  close_btn.innerText = "닫기";

  const audio = document.createElement("video");

  audio.src = "/img/odd_ing.mp4"; // 경로 or URL
  audio.controls = true; // 재생 버튼 보이게
  audio_con.appendChild(audio);
  document.body.appendChild(div);
  div.appendChild(close_btn);
  div.appendChild(audio_con);

  close_btn.addEventListener("click", () => {
    div.remove();
  });
});
