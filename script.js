let webhook = "https://gilvanealves.app.n8n.cloud/webhook-test/animacao-css";

async function CliqueiNoBotao() {
    let textImput = document.querySelector(".input-animation").value;

    let codigo = document.querySelector(".code-area");
    let result = document.querySelector(".code-result"); // <- corrigido

    let resposta = await fetch(webhook, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ pergunta: textImput })
    });

    let resultado = await resposta.json();
    let info = JSON.parse(resultado.resposta);

    if (codigo && result) {
        codigo.innerHTML = info.code;
        result.innerHTML = info.preview;
    }

    document.head.insertAdjacentHTML("beforeend", "<style>" + info.style + "</style>");

    console.log(info);
}
