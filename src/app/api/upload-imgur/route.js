import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    console.log("Token do Imgur:", process.env.IMGUR_ACCESS_TOKEN);
    const formData = await req.formData();
    const image = formData.get("image");
    const title = formData.get("title");

    if (!image || typeof image === "string") {
      return NextResponse.json({ error: "Imagem inválida" }, { status: 400 });
    }

    const imgurForm = new FormData();
    imgurForm.append("image", image);
    imgurForm.append("type", "file");
    imgurForm.append("title", title || "Sem título");
    
    

    const response = await fetch("https://api.imgur.com/3/image", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.IMGUR_ACCESS_TOKEN}`,
      },
      body: imgurForm,
    });

    const data = await response.json();

    if (!data.success) {
      return NextResponse.json({ error: "Falha ao fazer upload", detalhes: data }, { status: 500 });
    }

    return NextResponse.json({ link: data.data.link });

  } catch (err) {
    console.error("Erro no upload para o Imgur:", err);
    return NextResponse.json({ error: "Erro interno", detalhes: err.message }, { status: 500 });
  }
}
